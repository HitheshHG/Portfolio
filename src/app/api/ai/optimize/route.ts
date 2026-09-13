import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, description, category, currentTech } = body;

    if (!title || !description) {
      return NextResponse.json(
        { success: false, error: 'Project title and description are required.' },
        { status: 400 }
      );
    }

    // Heuristic technical analysis
    const hasMetrics = /\d+%|\d+ms|\d+k|\d+x/i.test(description);
    const hasArchitecture = /distributed|pipeline|consensus|cache|queue|asynchronous|latency|throughput/i.test(description);
    const lengthScore = Math.min(25, Math.floor(description.length / 8));
    
    let baseScore = 55 + lengthScore;
    if (hasMetrics) baseScore += 15;
    if (hasArchitecture) baseScore += 10;
    const initialScore = Math.min(88, baseScore);
    const optimizedScore = Math.min(98, initialScore + 18);

    // Generate polished engineering bullets
    const polishedBullets = [
      `Architected high-throughput ${category || 'distributed'} pipeline, reducing P99 latency by 38% through optimized caching and concurrency primitives.`,
      `Engineered fault-tolerant event processing handling 25k+ operations/sec with automated failover and backpressure handling.`,
      `Integrated real-time telemetry and database connection pooling on PostgreSQL, achieving 99.98% operational uptime under synthetic load.`,
    ];

    const suggestedMetrics = [
      { label: 'Latency Drop', value: '-38% P99' },
      { label: 'Throughput', value: '25k ops/sec' },
      { label: 'SLA Uptime', value: '99.98%' },
    ];

    const recommendations = [
      'Lead with action verbs and quantifiable numbers (e.g., "Reduced latency by 38%" instead of "Worked on performance").',
      'Detail the distributed failure scenarios and how the system self-heals.',
      'Highlight specific architectural trade-offs made between consistency and availability.',
    ];

    return NextResponse.json({
      success: true,
      initialScore,
      optimizedScore,
      polishedBullets,
      suggestedMetrics,
      recommendations,
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: (err as Error).message },
      { status: 500 }
    );
  }
}
