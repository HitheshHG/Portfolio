import { NextResponse } from 'next/server';
import { measureDbLatency, isNeonConfigured, getProjects, getGuestbookEntries } from '@/lib/db';

export async function GET() {
  try {
    const latency = await measureDbLatency();
    const projects = await getProjects();
    const guestbook = await getGuestbookEntries();

    return NextResponse.json({
      status: 'OPTIMAL',
      uptime: '99.98%',
      dbLatencyMs: latency,
      neonConnected: isNeonConfigured(),
      projectCount: projects.length,
      guestbookCount: guestbook.length,
      timestamp: new Date().toISOString(),
      location: 'Bengaluru, IN (UTC+5:30)',
    });
  } catch (error) {
    return NextResponse.json(
      { status: 'DEGRADED', error: (error as Error).message },
      { status: 500 }
    );
  }
}
