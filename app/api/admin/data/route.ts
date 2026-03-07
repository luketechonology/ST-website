import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getDemoData, getSolutionData, getAiToolsData } from '@/lib/db';

export async function GET() {
    const cookieStore = await cookies();
    const session = cookieStore.get('admin_session');

    if (!session || session.value !== 'true') {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    try {
        const demoData = getDemoData();
        const solutionData = getSolutionData();
        const aiToolsData = getAiToolsData();

        // Sort by createdAt descending
        demoData.sort((a: Record<string, unknown>, b: Record<string, unknown>) => new Date(b.createdAt as string).getTime() - new Date(a.createdAt as string).getTime());
        solutionData.sort((a: Record<string, unknown>, b: Record<string, unknown>) => new Date(b.createdAt as string).getTime() - new Date(a.createdAt as string).getTime());
        aiToolsData.sort((a: Record<string, unknown>, b: Record<string, unknown>) => new Date(b.createdAt as string).getTime() - new Date(a.createdAt as string).getTime());

        return NextResponse.json({
            demo: demoData,
            solution: solutionData,
            aiTools: aiToolsData
        });
    } catch {
        return NextResponse.json({ message: 'Error fetching data' }, { status: 500 });
    }
}
