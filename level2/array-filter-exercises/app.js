//1

// function fiveAndGreaterOnly(arr) {
//   let result = arr.filter(num => num >= 5)
//     console.log(result)
// }
// // test
// console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]



//2

// function evensOnly(arr) {
//     let result = arr.filter(num => num % 2 === 0)
//     console.log(result)
// }
//   // test
//   console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]


//3

// function fiveCharactersOrFewerOnly(arr) {
//     let result = [];
//     result.push(arr.filter(letter => letter.length <= 5))
//     console.log(result)
//   }
//   // test
//   console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]
  

4//

// function peopleWhoBelongToTheIlluminati(arr){
//     let result = [];
//     result.push(arr.filter(obj => obj.member === true))
//     console.log(result)
//   }
//   // test
//   console.log(peopleWhoBelongToTheIlluminati([
//       { name: "Angelina Jolie", member: true },
//       { name: "Eric Jones", member: false },
//       { name: "Paris Hilton", member: true },
//       { name: "Kayne West", member: false },
//       { name: "Bob Ziroll", member: true }
//   ]));
//   // =>
//   //[ { name: 'Angelina Jolie', member: true },
//   //  { name: 'Paris Hilton', member: true },
//   //  { name: 'Bob Ziroll', member: true } ]
  

//5

function ofAge(arr){
    results = [];
    results.push(arr.filter(obj => obj.age >= 18))
    console.log(results)
  }
  // test
  console.log(ofAge([
      { name: "Angelina Jolie", age: 80 },
      { name: "Eric Jones", age: 2 },
      { name: "Paris Hilton", age: 5 },
      { name: "Kayne West", age: 16 },
      { name: "Bob Ziroll", age: 100 }
  ]));
  // =>
  //[ { name: 'Angelina Jolie', age: 80 },
  //  { name: 'Bob Ziroll', age: 100 } ]