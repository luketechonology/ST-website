import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { savePrivacyContent, getPrivacyContent } from '@/lib/db';

export async function POST(request: Request) {
    const cookieStore = await cookies();
    const session = cookieStore.get('admin_session');

    if (!session || session.value !== 'true') {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    try {
        const { content } = await request.json();
        savePrivacyContent(content);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error saving privacy content:', error);
        return NextResponse.json({ message: 'Failed to save content' }, { status: 500 });
    }
}

export async function GET() {
    const cookieStore = await cookies();
    const session = cookieStore.get('admin_session');

    if (!session || session.value !== 'true') {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    try {
        const content = getPrivacyContent();
        return NextResponse.json({ content: content || '' });
    } catch (error) {
        return NextResponse.json({ message: 'Error fetching content' }, { status: 500 });
    }
}
