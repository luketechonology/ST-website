import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');

export function ensureDataDir() {
    if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
    }
}

export function getDemoData() {
    ensureDataDir();
    const filePath = path.join(DATA_DIR, 'demo.json');
    if (!fs.existsSync(filePath)) {
        return [];
    }
    const fileData = fs.readFileSync(filePath, 'utf-8');
    try {
        return JSON.parse(fileData);
    } catch {
        return [];
    }
}

export function saveDemoData(data: unknown) {
    ensureDataDir();
    const filePath = path.join(DATA_DIR, 'demo.json');
    const currentData = getDemoData();
    currentData.push(data);
    fs.writeFileSync(filePath, JSON.stringify(currentData, null, 2));
}

export function getSolutionData() {
    ensureDataDir();
    const filePath = path.join(DATA_DIR, 'solution.json');
    if (!fs.existsSync(filePath)) {
        return [];
    }
    const fileData = fs.readFileSync(filePath, 'utf-8');
    try {
        return JSON.parse(fileData);
    } catch {
        return [];
    }
}

export function saveSolutionData(data: unknown) {
    ensureDataDir();
    const filePath = path.join(DATA_DIR, 'solution.json');
    const currentData = getSolutionData();
    currentData.push(data);
    fs.writeFileSync(filePath, JSON.stringify(currentData, null, 2));
}

export function getPrivacyContent() {
    ensureDataDir();
    const filePath = path.join(DATA_DIR, 'privacy.json');
    if (!fs.existsSync(filePath)) {
        // Return default content if file doesn't exist
        return null;
    }
    const fileData = fs.readFileSync(filePath, 'utf-8');
    try {
        const json = JSON.parse(fileData);
        return json.content;
    } catch {
        return null;
    }
}

export function savePrivacyContent(content: string) {
    ensureDataDir();
    const filePath = path.join(DATA_DIR, 'privacy.json');
    fs.writeFileSync(filePath, JSON.stringify({ content }, null, 2));
}

export function getAiToolsData() {
    ensureDataDir();
    const filePath = path.join(DATA_DIR, 'ai-tools.json');
    if (!fs.existsSync(filePath)) {
        return [];
    }
    const fileData = fs.readFileSync(filePath, 'utf-8');
    try {
        return JSON.parse(fileData);
    } catch {
        return [];
    }
}

export function saveAiToolsData(data: unknown) {
    ensureDataDir();
    const filePath = path.join(DATA_DIR, 'ai-tools.json');
    const currentData = getAiToolsData();
    currentData.push(data);
    fs.writeFileSync(filePath, JSON.stringify(currentData, null, 2));
}

// Honors Data Management
export interface HonorItem {
    id: string;
    title: string;
    imageUrl: string;
    createdAt: string;
}

export function getHonorsData(): HonorItem[] {
    ensureDataDir();
    const filePath = path.join(DATA_DIR, 'honors.json');
    if (!fs.existsSync(filePath)) {
        return [];
    }
    const fileData = fs.readFileSync(filePath, 'utf-8');
    try {
        return JSON.parse(fileData);
    } catch {
        return [];
    }
}

export function saveHonorData(data: HonorItem) {
    ensureDataDir();
    const filePath = path.join(DATA_DIR, 'honors.json');
    const currentData = getHonorsData();
    // Add to the beginning of the list to show newest first
    currentData.unshift(data);
    fs.writeFileSync(filePath, JSON.stringify(currentData, null, 2));
}

export function updateHonorData(id: string, updatedData: Partial<HonorItem>) {
    ensureDataDir();
    const filePath = path.join(DATA_DIR, 'honors.json');
    let currentData = getHonorsData();
    currentData = currentData.map(item => item.id === id ? { ...item, ...updatedData } : item);
    fs.writeFileSync(filePath, JSON.stringify(currentData, null, 2));
}

export function deleteHonorData(id: string) {
    ensureDataDir();
    const filePath = path.join(DATA_DIR, 'honors.json');
    let currentData = getHonorsData();
    const honorToDelete = currentData.find(item => item.id === id);
    if (honorToDelete) {
        // Optionally, we could attempt to delete the image file from public/uploads/honors here
        // But for safety and simplicity, we'll just remove the data entry for now.
    }
    currentData = currentData.filter(item => item.id !== id);
    fs.writeFileSync(filePath, JSON.stringify(currentData, null, 2));
}
