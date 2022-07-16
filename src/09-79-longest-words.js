//
function longestWordFor(arr) {
    if (!Array.isArray(arr)) return undefined;
    let longestLength = 0;
    let longestWord = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestLength) {
            longestWord = arr[i];
        }
    }
    return longestWord;
}

function longestWordForEach(arr) {
    if (!Array.isArray(arr)) return undefined;
    let longestLength = 0;
    let longestWord = '';
    arr.forEach((word) => {
        if (word.length > longestLength) {
            longestWord = word;
        }
    });
    return longestWord;
}

function longestWordReduce(arr) {
    if (!Array.isArray(arr)) return undefined;
    return arr.reduce((longestWord, word) => {
        console.log(longestWord);
        console.log(word);

        if (word.length > longestWord.length) {
            return word;
        }
        return longestWord;
    });
}

const test = ['Hao', 'Pham'];

console.log(longestWordReduce(test));
