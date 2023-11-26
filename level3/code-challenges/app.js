/*
Challenge 1:
Given an array of numbers, return an array of each number, squared
*/
// const nums = [1, 2, 3, 4, 5]
// // -->       [1, 4, 9, 16, 25]
// function squared (arr){
//     let square = arr.map(arr => arr * arr)
//     return square
// }
// console.log(squared(nums))

/*
Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/

//const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here
// function capital (name){
//     let first = name.map(name => name.charAt(0).toUpperCase() + name.substr(1))
//     return first
// }
// console.log(capital(names))

/*
Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>, <p>Charmander</p>, <p>Squirtle</p>"]
*/

// const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>, <p>Charmander</p>, <p>Squirtle</p>"]
// Your code here

// function html (pokemon){
//     let wrapped = pokemon.map(pokemon => `<p>${pokemon}</p>`)
//     return wrapped
// }

// console.log(html(pokemon))

/*Challenge 1: Sort Array with Preserved Index for -1 Values

You are given an array a containing integers. Your task is to implement the solution function to sort the array in ascending order, while preserving the original index positions of -1 values.

Write a function solution(a) that takes in an array a and returns a new array with the following conditions:

All non -1 values in the array should be sorted in ascending order.
The -1 values should retain their original index positions in the sorted array.*/

// function solution(arr){
//     function low2hi(a, b){
//         return a - b
//     }
//     function indexCheck(a, b){
//         if (a !== -1 || b !==-1){
//             return a - b
//         }
//     }
//     let sortedArr = arr.sort(low2hi)
//     return sortedArr

// }

// function solution(arr) {
  
//     if(arr.includes(-1)){
//         const filtered = arr.filter(item => item !== -1)
//         filtered.sort((a, b) => a - b)
//         console.log(filtered)
//         console.log('after')
//         for(let i = 0; i < arr.length; i++){
//             if (arr[i] !== -1){
//                 arr[i] = filtered[0]
//                 filtered.splice(0, 1)
//             }
//         }
//     } else arr.sort((a, b) => a - b)
    
  
//     return arr
    
//   }

// console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]))
// console.log(solution([5, 3, 1]))
// console.log(solution([-1, -1, -1, -1]))
// console.log(solution([100, -1, 50, -1, 75]))

//Challenge 2: **Count Vowels**
//Write a JavaScript function called **`countVowels`** that takes a string as input and counts the number of vowels (a, e, i, o, u) in the string. The function should return the count.
//Implement the **`countVowels`** function using either the provided example solutions or your own solution.

// const input = 'Hello, World!';
// var vowels =['a', 'e', 'i', 'o', 'u']

// function countVowels (str){
//     let count = 0
//     for(i=0; i < str.length; i++){
//         if(str = vowels) {
//             count++
//         }
// }
//     return count
// }
// console.log(countVowels('hello world'))

// function findVowels(word){
//     let count = 0
//     const vowels = ['a', 'e', 'i', 'o', 'u']

//     for (let i = 0; i < word.length; i++) {
//       if (vowels.includes(word[i].toLowerCase())) {
//         count++;
//       }
//     }
//     return count
//     }
    
//     console.log(findVowels("Hello"))
//     console.log(findVowels("Death"))
//     console.log(findVowels("seven"))
//     console.log(findVowels("why"))

// ## Filter Anagrams

// Write a function called **`filterAnagrams`** that filters an array of words to find 
// and return an array containing only the words that are anagrams of a given target word.

// **Understand the Problem:**
// Before you start coding, make sure you understand what the challenge is asking. You need
//  to filter a given array of words to find the anagrams of a target word. Anagrams are 
//  words that have the same letters but in a different order.





function filterAnagrams(arr, target) {
    
}

const words = ['listen', 'silent', 'dog', 'god', 'hello', 'world'];
const target = 'enlist';

const anagrams = filterAnagrams(words, target);
console.log(anagrams); // Output: ['listen', 'silent']


// Write a function called sortByMultipleCriteria that takes an array of objects 
// representing people, each with a name (string) and age (number) property. 
// The function should return a new array with the people sorted first by age in 
// ascending order, and then by name in alphabetical order.

function sortByMultipleCriteria(people) {
  people.sort((a, b) => {
    if (a.age === b.age) {
      return a.name < b.name;
    }
      return a.age - b.age;
    });   
    return people;
}

const people = [
{ name: 'Alice', age: 30 },
{ name: 'Bob', age: 25 },
{ name: 'Charlie', age: 35 },
{ name: 'David', age: 25 },
];

const sortedPeople = sortByMultipleCriteria(people);
console.log(sortedPeople);

// Expected outcome: [
//  { name: 'Bob', age: 25 },
//  { name: 'David', age: 25 },
//  { name: 'Alice', age: 30 },
//  { name: 'Charlie', age: 35 }
// ]