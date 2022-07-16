function truncate(text, maxLength) {
    if (text.length <= maxLength) return text;
    if (text.length > maxLength) {
        const newText = text.slice(0, maxLength - 1);
        return `${newText}\u2026`;
    }
}

function getFullName(firstName, lastName) {
    // your code here
    // your code here
    let fullName = '';
    if (firstName && firstName.length >= 0) {
        firstName.toLowerCase();
        const first = firstName[0].toUpperCase();
        console.log(first);
        fullName = fullName.concat(firstName);
    }
    if (lastName && lastName.length >= 0) {
        lastName.toLowerCase();
        lastName[0].toUpperCase();
        fullName = fullName.concat(' ', lastName);
    }
    return fullName.trim();
}

console.log(getFullName('john', 'pHAm'));
