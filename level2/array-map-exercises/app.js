//1
// function doubleNumbers(arr){
// const result = arr.map(num => num * 2)
// console.log(result)
// }

// console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

//2
// function stringItUp(arr){
//     // const result = arr.map(()=>{}).join();
//     let result = []
//         arr.map((num)=>{result.push(String(num))});
//         return result
//     };
    
  
//   console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]


//3
// function capitalizeNames(arr){
//     let result = [];
//     arr.map((string)=>{result.push(string.charAt(0).toUpperCase() + string.substr(1))});
//     return result
//   }
  
//   console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
  
  // Output:
  // ["John", "Jacob", "Jingleheimer", "Schmidt"]


  //4
//   function namesOnly(arr){
//     let result = [];
//     arr.map((obj) => {result.push(obj.name)}); 
//     console.log(result)
//   }
  
//   console.log(namesOnly([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ]));
  // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]



  //5
//   function makeStrings(arr){
//     let result = []
//         arr.map((obj)=>{
//             if (obj.age >= 18){
//                 console.log(`${obj.name} can go to the Matrix`)
//             }if (obj.age < 18){
//                 console.log(`${obj.name} is under age!!!!`)
//             }
//         });
        
//     };
    
  
  
//   console.log(makeStrings([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ]));
  // ["Angelina Jolie can go to The Matrix",
  // "Eric Jones is under age!!",
  // "Paris Hilton is under age!!",
  // "Kayne West is under age!!",
  // "Bob Ziroll can go to The Matrix"]


  //6
//   function readyToPutInTheDOM(arr){
//     let result = []
//         arr.map((obj)=>{
//             console.log(`<h1>${obj.name}</h1><h2>${obj.age}</h2>`)
//         });
        
//     };
  
//   console.log(readyToPutInTheDOM([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ]));
  // ["<h1>Angelina Jolie</h1><h2>80</h2>",
  // "<h1>Eric Jones</h1><h2>2</h2>",
  // "<h1>Paris Hilton</h1><h2>5</h2>",
  // "<h1>Kayne West</h1><h2>16</h2>",
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]