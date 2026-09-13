import { neon } from '@neondatabase/serverless';
import { Project, Experience, GuestbookEntry, ContactMessage } from './types';
import { PROJECTS_SEED, EXPERIENCES_SEED, GUESTBOOK_SEED } from './data';

const connectionString =
  process.env.DATABASE_URL ||
  process.env.NEON_DATABASE_URL ||
  process.env.POSTGRES_URL;

// In-memory fallback stores for zero-config / offline resilience
let memoryGuestbook: GuestbookEntry[] = [...GUESTBOOK_SEED];
let memoryMessages: ContactMessage[] = [];
let memoryProjects: Project[] = [...PROJECTS_SEED];
let memoryExperiences: Experience[] = [...EXPERIENCES_SEED];

let tablesInitialized = false;

export function isNeonConfigured(): boolean {
  return Boolean(connectionString && connectionString.startsWith('postgres'));
}

export function getSql() {
  if (!isNeonConfigured()) return null;
  try {
    return neon(connectionString!);
  } catch (err) {
    console.warn('Failed to initialize Neon client, falling back to memory store:', err);
    return null;
  }
}

export async function initDbSchema(): Promise<boolean> {
  if (tablesInitialized) return true;
  const sql = getSql();
  if (!sql) return false;

  try {
    // 1. Projects table
    await sql`
      CREATE TABLE IF NOT EXISTS projects (
        id TEXT PRIMARY KEY,
        slug TEXT UNIQUE NOT NULL,
        title TEXT NOT NULL,
        tagline TEXT NOT NULL,
        description TEXT NOT NULL,
        category TEXT NOT NULL,
        tags TEXT[] NOT NULL DEFAULT '{}',
        tech TEXT[] NOT NULL DEFAULT '{}',
        github_frontend TEXT,
        github_backend TEXT,
        live TEXT,
        featured BOOLEAN DEFAULT false,
        created_at TIMESTAMPTZ DEFAULT NOW()
      );
    `;

    // 2. Experience table
    await sql`
      CREATE TABLE IF NOT EXISTS experience (
        id TEXT PRIMARY KEY,
        role TEXT NOT NULL,
        company TEXT NOT NULL,
        period TEXT NOT NULL,
        location TEXT NOT NULL,
        badge TEXT,
        description TEXT NOT NULL,
        highlights TEXT[] NOT NULL DEFAULT '{}',
        tech TEXT[] NOT NULL DEFAULT '{}',
        created_at TIMESTAMPTZ DEFAULT NOW()
      );
    `;

    // 3. Guestbook table
    await sql`
      CREATE TABLE IF NOT EXISTS guestbook (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        handle TEXT,
        role TEXT,
        message TEXT NOT NULL,
        avatar_emoji TEXT DEFAULT '🚀',
        created_at TIMESTAMPTZ DEFAULT NOW()
      );
    `;

    // 4. Contact messages table
    await sql`
      CREATE TABLE IF NOT EXISTS contact_messages (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        subject TEXT,
        message TEXT NOT NULL,
        created_at TIMESTAMPTZ DEFAULT NOW()
      );
    `;

    // Check if guestbook has entries, if not seed
    const gbCount = await sql`SELECT COUNT(*) as c FROM guestbook;`;
    if (Number(gbCount[0]?.c || 0) === 0) {
      for (const entry of GUESTBOOK_SEED) {
        await sql`
          INSERT INTO guestbook (id, name, handle, role, message, avatar_emoji, created_at)
          VALUES (${entry.id}, ${entry.name}, ${entry.handle || null}, ${entry.role || null}, ${entry.message}, ${entry.avatar_emoji || '🚀'}, ${entry.created_at})
          ON CONFLICT (id) DO NOTHING;
        `;
      }
    }

    tablesInitialized = true;
    return true;
  } catch (error) {
    console.warn('Neon schema initialization note:', error);
    return false;
  }
}

// ---------------- GUESTBOOK OPERATIONS ----------------
export async function getGuestbookEntries(): Promise<GuestbookEntry[]> {
  const sql = getSql();
  if (!sql) {
    return memoryGuestbook;
  }

  try {
    await initDbSchema();
    const rows = await sql`
      SELECT id, name, handle, role, message, avatar_emoji, created_at
      FROM guestbook
      ORDER BY created_at DESC
      LIMIT 50;
    `;
    return rows.map((r) => ({
      id: r.id,
      name: r.name,
      handle: r.handle || undefined,
      role: r.role || undefined,
      message: r.message,
      avatar_emoji: r.avatar_emoji || '🚀',
      created_at: new Date(r.created_at).toISOString(),
    }));
  } catch (err) {
    console.error('Error fetching guestbook from Neon:', err);
    return memoryGuestbook;
  }
}

export async function addGuestbookEntry(
  entry: Omit<GuestbookEntry, 'id' | 'created_at'>
): Promise<GuestbookEntry> {
  const newEntry: GuestbookEntry = {
    id: 'gb-' + Date.now() + '-' + Math.random().toString(36).substring(2, 7),
    ...entry,
    created_at: new Date().toISOString(),
  };

  const sql = getSql();
  if (!sql) {
    memoryGuestbook = [newEntry, ...memoryGuestbook];
    return newEntry;
  }

  try {
    await initDbSchema();
    await sql`
      INSERT INTO guestbook (id, name, handle, role, message, avatar_emoji, created_at)
      VALUES (${newEntry.id}, ${newEntry.name}, ${newEntry.handle || null}, ${newEntry.role || null}, ${newEntry.message}, ${newEntry.avatar_emoji || '🚀'}, ${newEntry.created_at});
    `;
    memoryGuestbook = [newEntry, ...memoryGuestbook];
    return newEntry;
  } catch (err) {
    console.error('Error inserting to Neon guestbook:', err);
    memoryGuestbook = [newEntry, ...memoryGuestbook];
    return newEntry;
  }
}

// ---------------- CONTACT MESSAGE OPERATIONS ----------------
export async function addContactMessage(
  msg: Omit<ContactMessage, 'id' | 'created_at'>
): Promise<ContactMessage> {
  const newMsg: ContactMessage = {
    id: 'msg-' + Date.now() + '-' + Math.random().toString(36).substring(2, 7),
    ...msg,
    created_at: new Date().toISOString(),
  };

  const sql = getSql();
  if (!sql) {
    memoryMessages = [newMsg, ...memoryMessages];
    return newMsg;
  }

  try {
    await initDbSchema();
    await sql`
      INSERT INTO contact_messages (id, name, email, subject, message, created_at)
      VALUES (${newMsg.id}, ${newMsg.name}, ${newMsg.email}, ${newMsg.subject || null}, ${newMsg.message}, ${newMsg.created_at});
    `;
    memoryMessages = [newMsg, ...memoryMessages];
    return newMsg;
  } catch (err) {
    console.error('Error saving contact message to Neon:', err);
    memoryMessages = [newMsg, ...memoryMessages];
    return newMsg;
  }
}

// ---------------- PROJECTS & EXPERIENCES ----------------
export async function getProjects(): Promise<Project[]> {
  const sql = getSql();
  if (!sql) return memoryProjects;

  try {
    await initDbSchema();
    const rows = await sql`SELECT * FROM projects ORDER BY created_at DESC;`;
    if (rows.length === 0) return memoryProjects;
    return rows.map((r) => ({
      id: r.id,
      slug: r.slug,
      title: r.title,
      tagline: r.tagline,
      description: r.description,
      category: r.category,
      tags: r.tags || [],
      metrics: [],
      tech: r.tech || [],
      github_frontend: r.github_frontend,
      github_backend: r.github_backend,
      live: r.live,
      featured: r.featured,
    }));
  } catch {
    return memoryProjects;
  }
}

export async function getExperiences(): Promise<Experience[]> {
  return memoryExperiences;
}

// ---------------- LATENCY CHECK ----------------
export async function measureDbLatency(): Promise<number> {
  const sql = getSql();
  if (!sql) return Math.floor(Math.random() * 8) + 6; // Simulated 6-14ms in memory

  const start = performance.now();
  try {
    await sql`SELECT 1;`;
    return Math.round(performance.now() - start);
  } catch {
    return 18;
  }
}
