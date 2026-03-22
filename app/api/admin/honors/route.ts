import { NextResponse } from 'next/server';
import { getHonorsData, saveHonorData, updateHonorData, deleteHonorData, HonorItem } from '@/lib/db';

export async function GET() {
    try {
        const data = getHonorsData();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Failed to get honors:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { title, imageUrl } = body;
        
        if (!title || !imageUrl) {
            return NextResponse.json({ error: 'Title and image are required' }, { status: 400 });
        }

        const newHonor: HonorItem = {
            id: Date.now().toString(),
            title,
            imageUrl,
            createdAt: new Date().toISOString()
        };

        saveHonorData(newHonor);
        return NextResponse.json(newHonor, { status: 201 });
    } catch (error) {
        console.error('Failed to create honor:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    try {
        const body = await request.json();
        const { id, ...updatedData } = body;
        
        if (!id) {
            return NextResponse.json({ error: 'ID is required' }, { status: 400 });
        }

        updateHonorData(id, updatedData);
        return NextResponse.json({ success: true, updatedData });
    } catch (error) {
        console.error('Failed to update honor:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        const url = new URL(request.url);
        const id = url.searchParams.get('id');
        
        if (!id) {
            return NextResponse.json({ error: 'ID is required' }, { status: 400 });
        }

        deleteHonorData(id);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Failed to delete honor:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
