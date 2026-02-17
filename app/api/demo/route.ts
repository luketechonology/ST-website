import { NextResponse } from 'next/server';
import { saveDemoData } from '@/lib/db';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const newEntry = {
            id: uuidv4(),
            ...body,
            createdAt: new Date().toISOString()
        };

        saveDemoData(newEntry);

        return NextResponse.json(
            { message: 'Demo request received successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error processing demo request:', error);
        return NextResponse.json(
            { message: 'Failed to process request' },
            { status: 500 }
        );
    }
}
