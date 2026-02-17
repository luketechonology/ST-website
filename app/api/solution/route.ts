import { NextResponse } from 'next/server';
import { saveSolutionData } from '@/lib/db';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Simple logic to determine "lead grade" (Mock)
        let grade = 'C';
        if (body.size === '>8000' || body.size === '3000-8000') grade = 'B';
        if (body.has_server_room === 'yes' && (body.size === '>8000' || body.type === 'university')) grade = 'A';

        const newEntry = {
            id: uuidv4(),
            grade,
            ...body,
            createdAt: new Date().toISOString()
        };

        saveSolutionData(newEntry);

        return NextResponse.json(
            { message: 'Solution request received successfully', grade },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error processing solution request:', error);
        return NextResponse.json(
            { message: 'Failed to process request' },
            { status: 500 }
        );
    }
}
