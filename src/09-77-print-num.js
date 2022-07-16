//print numbers: 1 -> 10
function printNumbers(start, end) {
    for (let i = start; i <= end; i++) {
        console.log(i);
    }
}

//print even numbers
function printEvenNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) console.log(arr[i]);
    }
}

//print even numbers but less than n
function printEvenNumbers(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0 && arr[i] <= n) console.log(arr[i]);
    }
}

printNumbers(1, 10);
