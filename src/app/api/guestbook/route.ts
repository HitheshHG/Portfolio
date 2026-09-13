import { NextResponse } from 'next/server';
import { getGuestbookEntries, addGuestbookEntry } from '@/lib/db';

export async function GET() {
  try {
    const entries = await getGuestbookEntries();
    return NextResponse.json({ success: true, entries });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, handle, role, message, avatar_emoji } = body;

    if (!name || typeof name !== 'string' || !name.trim()) {
      return NextResponse.json(
        { success: false, error: 'Name is required.' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || !message.trim()) {
      return NextResponse.json(
        { success: false, error: 'Message cannot be blank.' },
        { status: 400 }
      );
    }

    if (message.length > 500) {
      return NextResponse.json(
        { success: false, error: 'Message exceeds 500 characters limit.' },
        { status: 400 }
      );
    }

    const entry = await addGuestbookEntry({
      name: name.trim().slice(0, 50),
      handle: handle?.trim()?.slice(0, 50) || undefined,
      role: role?.trim()?.slice(0, 50) || undefined,
      message: message.trim(),
      avatar_emoji: avatar_emoji || '🚀',
    });

    return NextResponse.json({ success: true, entry }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
