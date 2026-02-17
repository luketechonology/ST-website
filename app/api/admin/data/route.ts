import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getDemoData, getSolutionData } from '@/lib/db';

export async function GET() {
    const cookieStore = await cookies();
    const session = cookieStore.get('admin_session');

    if (!session || session.value !== 'true') {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    try {
        const demoData = getDemoData();
        const solutionData = getSolutionData();

        // Sort by createdAt descending
        demoData.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        solutionData.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

        return NextResponse.json({
            demo: demoData,
            solution: solutionData
        });
    } catch (error) {
        return NextResponse.json({ message: 'Error fetching data' }, { status: 500 });
    }
}
