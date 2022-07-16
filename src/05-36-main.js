function checkingErrorMessage(errorCode) {
    let message;

    switch (errorCode) {
        case 'E01': {
            message = 'Invalid username or password';
            break;
        }

        case 'E02': {
            message = 'Too many attempts';
            break;
        }

        case 'E03': {
            message = 'missing data';
            break;
        }

        default: {
            message = 'Something went wrong';
        }
    }

    return message;
}

//refactor

function getErrorMeessage(errorCode) {
    const errorMap = {
        E01: 'Invalid username or password',
        E02: 'Too many attempts',
        E03: 'missing data',
    };

    return errorMap[errorCode] || 'Something went wrong';
}

console.log(getErrorMeessage('E01'));
console.log(getErrorMeessage('E02'));
console.log(getErrorMeessage('E03'));
console.log(getErrorMeessage('E04'));
