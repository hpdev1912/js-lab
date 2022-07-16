//check if a string contains an email address with @gmail.com or not
function checkEmailStringValid(email) {
    if (email.length === 0) return '';
    return email.includes('@gmail.com');
}
