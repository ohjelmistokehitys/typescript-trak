import { finnish, english } from './words';


let englishSet = new Set(english);

console.time('🔍');

let count = 0;
for (let word of finnish) {
    if (englishSet.has(word)) {
        count++;
    }
}

console.timeLog('🔍', `Done finding ${count} words.`); // 15.362ms Done finding 738 words.
