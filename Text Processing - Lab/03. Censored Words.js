function solve(sentence, word) {
    let censored = '*'.repeat(word.length);

    let newSentence = sentence.replace(word, censored);

    while (newSentence.includes(word)) {
        newSentence = newSentence.replace(word, censored);
    }
    console.log(newSentence);
}
solve('A small sentence with some words', 'small')