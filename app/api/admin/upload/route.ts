import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json({ error: "No file received." }, { status: 400 });
        }

        const buffer = Buffer.from(await file.arrayBuffer());
        const filename = `${Date.now()}-${file.name.replace(/\s+/g, '_')}`;
        
        const uploadDir = path.join(process.cwd(), 'public/uploads/honors');
        
        // Ensure directory exists
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }

        const filePath = path.join(uploadDir, filename);

        // Write the file
        fs.writeFileSync(filePath, buffer);

        // Return the public URL
        const imageUrl = `/uploads/honors/${filename}`;
        return NextResponse.json({ success: true, imageUrl });

    } catch (error) {
        console.error("Error occurred while uploading:", error);
        return NextResponse.json({ error: "Failed to upload file." }, { status: 500 });
    }
}
