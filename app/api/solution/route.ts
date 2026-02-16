import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Log the data (Mocking CRM integration / email sending)
        console.log('--- New Solution Plan Request ---');
        console.log(body);

        // Simple logic to determine "lead grade" (Mock)
        let grade = 'C';
        if (body.size === '>8000' || body.size === '3000-8000') grade = 'B';
        if (body.has_server_room === 'yes' && (body.size === '>8000' || body.type === 'university')) grade = 'A';

        console.log(`Lead Grade: ${grade}`);
        console.log('---------------------------------');

        // Simulate processing delay
        await new Promise(resolve => setTimeout(resolve, 1500));

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
