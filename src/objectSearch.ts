import { finnish, english } from './words';

let englishObject = Object.fromEntries(english.map(w => [w, true]));

let count = 0;

console.time('🔍');

for (let fi of finnish) {
    if (fi in englishObject) {
        count++;
    }
}

console.timeLog('🔍', `Done finding ${count} words.`); // 67.96ms Done finding 738 words.
