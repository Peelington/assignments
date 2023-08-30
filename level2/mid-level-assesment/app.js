function sortNumbers(numbers) {
    let result = numbers.sort((a, b) => {return a - b});
    return result
}

const numbers = [4, 2, 7, 1, 9, 5];
const sortedNumbers = sortNumbers(numbers);
console.log(sortedNumbers);  // Output: [1, 2, 4, 5, 7, 9]




function convertToUppercase(strings) {
    //let uppercaseStrings = strings.map(strings.toUpperCase());
    //return uppercaseStrings
    }
const strings = ['hello', 'world', 'javascript'];
const uppercaseStrings = convertToUppercase(strings);
console.log(uppercaseStrings);  // Output: ['HELLO', 'WORLD', 'JAVASCRIPT']