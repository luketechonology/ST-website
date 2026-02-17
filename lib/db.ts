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
    } catch (e) {
        return [];
    }
}

export function saveDemoData(data: any) {
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
    } catch (e) {
        return [];
    }
}

export function saveSolutionData(data: any) {
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
    } catch (e) {
        return null;
    }
}

export function savePrivacyContent(content: string) {
    ensureDataDir();
    const filePath = path.join(DATA_DIR, 'privacy.json');
    fs.writeFileSync(filePath, JSON.stringify({ content }, null, 2));
}
