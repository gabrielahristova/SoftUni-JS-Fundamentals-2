function solve(text) {
    let result = [];

    for (let element of text.split(' ')) {
        if (element[0] === '#' && element.length !== 1) {
            result.push(element.substring(1));
        }

    }
    let finalResult = [];

    for (let el of result) {
        let array = el.split('');
        let flag = true;

        for (let i = 0; i < array.length; i++) {
            let currentCode = array[i].charCodeAt(0);
            if ((currentCode < 97 || currentCode > 122) && 
            (currentCode < 65 || currentCode > 90)) {
                flag = false;
            }
        }
        if (flag) {
            finalResult.push(el);
        }
    }
    finalResult.forEach(el => console.log(el));
}
solve('The symbol # is known #variously in English-speaking #regions as the #number sign')