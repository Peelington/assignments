//1
// function addNumbers(...numbers) {
//     // numbers is now an array that we can use .reduce() on
//     return numbers.reduce((sum, number) => {
//       return sum + number;
//     }, 0);
//   }
//   console.log(addNumbers(1, 2, 3, 4, 5, 6, 7, 8))

//2
// const defaultColors = ['red', 'green'];
// const userFavoriteColors = ['orange', 'yellow'];

// defaultColors.concat(userFavoriteColors);

// let newColors = ["blue", "green", ...defaultColors, ...userFavoriteColors]
// console.log(newColors)

//3
function validateShoppingList(...items) {
  if (items.indexOf('milk') < 0) {
    return [ 'milk', ...items ];
  }

  return items;
}

console.log(validateShoppingList('oranges', 'bread', 'eggs'))



// //4
const MathLibrary = {
  calculateProduct(...rest) {
    console.log('Please use the multiply method instead');
    return this.multiply(...rest);
  },
  multiply(a, b) {
    return a * b;
   }
};
console.log(MathLibrary)

// //5

