import { finnish, english } from './words';

function containsWord(word: string, sortedWords: readonly string[]): boolean {
    if (sortedWords.length === 0) {
        return false;
    }

    let min = 0;
    let max = sortedWords.length;

    while (min <= max) {
        let middleIndex = Math.trunc((min + max) / 2);
        let middle = sortedWords.at(middleIndex)!;

        if (middle === word) {
            return true;
        }
        if (word.localeCompare(middle) > 0) {
            // word comes after the middle point
            min = middleIndex + 1;
        } else {
            max = middleIndex - 1;
        }
    }
    return false;
}

console.time('🔍');

let count = 0;

for (let fi of finnish) {
    if (containsWord(fi, english)) {
        count++;
    }
}

console.timeLog('🔍', `Done finding ${count} words.`); // 129.222ms Done finding 738 words.