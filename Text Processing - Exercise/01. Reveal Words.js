function solve(words, str) {
    let wordsArr = words.split(', ');

    for (let word of wordsArr) {
        let template = '*'.repeat(word.length);
        str = str.replace(template, word);
    }
    console.log(str);
}
solve('great, learning',
    'softuni is ***** place for ******** new programming languages'
)