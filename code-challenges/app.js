// ## Filter Anagrams

// Write a function called **`filterAnagrams`** that filters an array of words to find 
// and return an array containing only the words that are anagrams of a given target word.

// **Understand the Problem:**
// Before you start coding, make sure you understand what the challenge is asking. You need
//  to filter a given array of words to find the anagrams of a target word. Anagrams are 
//  words that have the same letters but in a different order.

// function filterAnagrams(arr, target) {
//     let sorted = target.split('').sort().join('');
//     // console.log(sorted)
//     return arr.filter(word =>{
//         const sortedWord= word.split('').sort().join('')
//         // console.log(sortedWord)
//         return sortedWord === sorted
//     })
   
// }

// const words = ['listen', 'silent', 'dog', 'god', 'hello', 'world'];
// const target = 'enlist';

// const anagrams = filterAnagrams(words, target);
// console.log(anagrams); // Output: ['listen', 'silent']


// Write a function called sortByMultipleCriteria that takes an array of objects 
// representing people, each with a name (string) and age (number) property. 
// The function should return a new array with the people sorted first by age in 
// ascending order, and then by name in alphabetical order.

// function sortByMultipleCriteria(people) {
//     people.sort(people.age)

// }

// const people = [
// { name: 'Alice', age: 30 },
// { name: 'Bob', age: 25 },
// { name: 'Charlie', age: 35 },
// { name: 'David', age: 25 },
// ];

// const sortedPeople = sortByMultipleCriteria(people);
// console.log(sortedPeople);

// Expected outcome: [
//  { name: 'Bob', age: 25 },
//  { name: 'David', age: 25 },
//  { name: 'Alice', age: 30 },
//  { name: 'Charlie', age: 35 }
// ]


// function calculateTotalPrice(arr){
//     //map
//     let totalPrice = 0
//     arr.map(product =>{
//        const total = product.price * product.quantity
//        totalPrice += total
//        totalPrice = totalPrice + total
//     })
//     return totalPrice

// }
// const products = [
//     { name: 'Apple', price: 1.5, quantity: 3 },
//     { name: 'Banana', price: 0.75, quantity: 5 },
//     { name: 'Orange', price: 1.25, quantity: 2 },
//   ];
// console.log(calculateTotalPrice(products))





// function extractUniqueCharacters(strings) {

//   let uniqueLetters = new Set();
//   strings.forEach((word) => {
//     word.split('').forEach((char) => {
//       uniqueLetters.add(char);
//     });
//   });
//   return Array(...uniqueLetters);
// }

// const words = ['apple', 'banana', 'cherry'];
// const uniqueChars = extractUniqueCharacters(words);
// console.log(uniqueChars); // Output: ['a', 'p', 'l', 'e', 'b', 'n', 'c', 'h', 'r', 'y']



// function sortByProperty(objects, propertyName) {
  
//     return objects.slice().sort((a, b) => a[propertyName] - b[propertyName]);
// }

// const people = [
//   { name: 'Alice', age: 30 },
//   { name: 'Bob', age: 25 },
//   { name: 'Charlie', age: 35 },
//   { name: 'David', age: 28 },
// ];

// const sortedByAge = sortByProperty(people, 'name');
// console.log(sortedByAge);


function extractInitials(names) {
  return names.map(name => {
    const parts = name.split(' ');
    return parts.map(part => part[0]).join('');
  });
};


const fullNames = ['John Doe', 'Alice Johnson', 'Bob Smith'];
const initialsArray = extractInitials(fullNames);
console.log(initialsArray); // Output: ['JD', 'AJ', 'BS']


function filterByProperty(objects, propertyName, propertyValue) {
  return objects.filter(obj => obj[propertyName] === propertyValue)
}

const people = [
  { name: 'Alice', age: 30, country: 'USA' },
  { name: 'Bob', age: 25, country: 'Canada' },
  { name: 'Charlie', age: 35, country: 'USA' },
  { name: 'David', age: 28, country: 'Australia' },
];

const filteredByCountry = filterByProperty(people, 'country', 'USA');
console.log(filteredByCountry);
  
  

  