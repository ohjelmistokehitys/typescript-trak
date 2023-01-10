# Asymptotic analysis example

## Setting up

```
$ sudo apt update
$ sudo apt install wamerican
$ curl https://raw.githubusercontent.com/hugovk/everyfinnishword/master/kaikkisanat.txt > finnish.txt
$ npm install
```

## Running

```
$ npx ts-node src/arrayIncludes.ts
🔍: 29.060s Done finding 738 words.

$ npx ts-node src/binarySearch.ts
🔍: 157.963ms Done finding 738 words.

$ npx ts-node src/objectSearch.ts
🔍: 59.899ms Done finding 738 words.

$ npx ts-node src/setSearch.ts
🔍: 23.486ms Done finding 738 words.
```
