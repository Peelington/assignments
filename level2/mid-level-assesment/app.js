// function sortNumbers(numbers) {
//     let result = numbers.sort((a, b) => {return a - b});
//     return result
// }

// const numbers = [4, 2, 7, 1, 9, 5];
// const sortedNumbers = sortNumbers(numbers);
// console.log(sortedNumbers);  // Output: [1, 2, 4, 5, 7, 9]




// function convertToUppercase(strings) {
//     let upperCaseStrings = strings.map(strings => strings.toUpperCase());
//     return upperCaseStrings
//     }
// const strings = ['hello', 'world', 'javascript'];
// const uppercaseStrings = convertToUppercase(strings);
// console.log(uppercaseStrings);  // Output: ['HELLO', 'WORLD', 'JAVASCRIPT']


function filterEvenNumbers(numbers) {
    let evens = numbers.filter((numbers) => numbers % 2 === 0);
    return evens
}

console.log(filterEvenNumbers([3, 7 ,5 ,9 ,0 ,5 ,12 ,5 ]))