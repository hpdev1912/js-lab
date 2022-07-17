//Count word in string
export function statisticsWords(str) {
    if (str.length === 0) return {};
    let statistics = {};
    const wordList = str
        .split(' ') //create an array contain word inside input string
        .filter((elm) => elm !== '') //handle redundant string
        .forEach((word) => {
            if (statistics[word]) {
                statistics[word] += 1;
            } else {
                statistics[word] = 1;
            }
        });
    return statistics;
}

//using reduce
export function statisticsWordsV2(str) {
    if (str.length === 0) return {};
    return str
        .split(' ')
        .filter((elm) => elm !== '')
        .reduce((statistics, word) => {
            // if (statistics[word]) {
            //     statistics[word] += 1;
            // } else {
            //     statistics[word] = 1;
            // }
            statistics[word] = statistics[word] !== undefined ? statistics[word] + 1 : 1;
            return statistics;
        }, {});
}
