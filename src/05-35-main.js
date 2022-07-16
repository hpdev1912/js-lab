function classifyStudent(mark) {
    if (mark < 0 || mark > 10) return 'Invalid mark!';
    let result;

    switch (true) {
        case mark > 8:
            result = 'Excellent';
            break;
        case mark >= 7:
            result = 'Good';
            break;
        case mark >= 4:
            result = 'Not Good';
            break;
        default:
            result = 'Bad';
    }

    return result;
}

function classifyStudent2(mark) {
    let result;
    switch (mark) {
        case 1:
        case 2:
        case 3: {
            result = 'Bad';
            break;
        }

        case 4:
        case 5:
        case 6: {
            result = 'Not Good';
            break;
        }

        case 7:
        case 8: {
            result = 'Good';
            break;
        }

        case 9:
        case 10: {
            result = 'Excellent';
            break;
        }

        default: {
            result = 'Invalid mark!';
        }
    }
    return result;
}

console.log(classifyStudent2(12));
console.log(classifyStudent2(10));
console.log(classifyStudent2(8));
console.log(classifyStudent2(5));
console.log(classifyStudent2(2));
