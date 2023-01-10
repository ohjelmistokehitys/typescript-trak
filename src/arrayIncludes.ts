import { finnish, english } from './words';

console.time('🔍');

let count = 0;

for (let fi of finnish) {
    if (english.includes(fi)) {
        count++;
    }
}

console.timeLog('🔍', `Done finding ${count} words.`); // 25.349s Done finding 738 words.
