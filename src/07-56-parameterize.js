//parameterize ('Code JS Is Fun') -> 'code-js-is-fun'
function parameterize(input) {
    if (input.length === 0) return '';
    const lowerString = input.toLowerCase();
    return lowerString.replaceAll(' ', '-');
}

//using split and join
function parameterizeSplitAndJoin(input) {
    if (input.length === 0) return '';
    const arr = input.split(' ');
    const output = arr.join('-');
    return output.toLowerCase();
}
console.log(parameterizeSplitAndJoin('Code JS Is Fun'));
