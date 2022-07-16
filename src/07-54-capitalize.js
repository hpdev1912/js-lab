// -trasnform a String
// -the first letter in UPPERCASE
// -the rest in lowercase ('easy FRontend' -> 'Easy Frontend')
function transformString(inputString) {
    if (inputString.length === 0) return '';

    const firstLetter = inputString[0].toUpperCase();
    const rest = inputString.slice(1).toLowerCase();
    return `${firstLetter}${rest}`;
}

console.log(transformString(''));
function capitalize(str) {
    if (str === '') return '';

    const trimmedStr = str.trim().toUpperCase();
    return `${trimmedStr[0]}${trimmedStr.slice(1).toLowerCase()}`;
}
function getFullName(firstName, lastName) {
    // your code heret
    const fn = capitalize(firstName || '');
    const ln = capitalize(lastName || '');

    const name = `${fn} ${ln}`;
    return name.trim();
}
