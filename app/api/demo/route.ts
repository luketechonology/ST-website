import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Log the data (Mocking database save / email sending)
        console.log('--- New Demo Request ---');
        console.log(body);
        console.log('------------------------');

        // Simulate processing delay
        await new Promise(resolve => setTimeout(resolve, 1000));

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
