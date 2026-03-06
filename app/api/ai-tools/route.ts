import { NextResponse } from 'next/server';
import { saveAiToolsData } from '@/lib/db';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Ensure required fields are present
        if (!body.name || !body.phone || !body.service) {
            return NextResponse.json(
                { message: '缺少必填字段' },
                { status: 400 }
            );
        }

        const newEntry = {
            id: uuidv4(),
            ...body,
            createdAt: new Date().toISOString()
        };

        // Save the lead to the database
        saveAiToolsData(newEntry);

        return NextResponse.json(
            { message: '预约提交成功' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error processing AI tools booking request:', error);
        return NextResponse.json(
            { message: '服务器处理失败，请稍后重试' },
            { status: 500 }
        );
    }
}
