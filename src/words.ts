import { readFileSync } from 'fs';
import path from 'path';

const FI_FILE = path.join(__dirname, '..', 'finnish.txt');
const EN_FILE = '/usr/share/dict/words';

function readWordsFromFile(filename: string): readonly string[] {
    return readFileSync(filename, 'utf-8')
        .trim()
        .toLowerCase()
        .split('\n')
        .sort((a, b) => a.localeCompare(b));
}

export const finnish = readWordsFromFile(FI_FILE);
export const english = readWordsFromFile(EN_FILE);
