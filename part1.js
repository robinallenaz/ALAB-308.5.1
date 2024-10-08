console.log('ALAB_308.5.1');
const arr = [1, 2, 3, 4, 5];
let sum = 0;
let average = 0;
function sumArray (arr) {
    for (i = 0; i<arr.length; i++) {
        sum += arr[i];
        average = sum / arr.length;
    }
    return sum;
}
console.log(sumArray(arr));

//Taking array of strings and return longest string

const stringArr = ['apple', 'banana', 'cherry'];

let longestString = '';
function findLongestString(stringArr) {
for (let i = 0; i < stringArr.length; i++) {
    if (stringArr[i].length > longestString.length) {
       longestString = stringArr[i];
    }
}
return longestString;
}
console.log(findLongestString(stringArr));

//Take an array of  strings, and a number and return an array of  the strings that are longer than the given number.
// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"]

function stringsLongerThan(arr, num) {
    let result = []; // Array to store strings longer than 'num'
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > num) {
            result.push(arr[i]); // Add the string to the result array if it meets the condition
        }
    }
    return result;
}

console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3));

//Take a number, n, and print every number between 1 and n without using loops. Use recursion.

function printNumbers(n) {
    if (n === 0) { // Base case: stop when n reaches 0
        return;
    }

    printNumbers(n - 1); // Recursively call the function with n-1
    console.log(n);
}

printNumbers(5);
