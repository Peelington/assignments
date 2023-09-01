//1

// const collectAnimals = (...animals) => animals


// console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"))
// ["dog", "cat", "mouse", "jackolope", "platypus"]


//2

// const combineFruit = (fruit, sweets, vegetables) =>`fruit: ${fruit}\nsweets: ${sweets}\nvegetables: ${vegetables}`

// console.log(combineFruit(["apple", "pear"],
//              ["cake", "pie"],
//              ["carrot"]))
// //=> {
//     //     fruit: ["apple", "pear"],
//     //     sweets: ["cake", "pie"],
//     //     vegetables: ["carrot"]
//     //  }


//3
// const parseSentence =  ticket => `We're going to have a good time in ${ticket.location} for ${ticket.duration}`
  
// console.log(parseSentence({
//   location: "Burly Idaho",
//   duration: "2 weeks"
// }))



//4
// const returnFirst = (...items) => items[0] 

// console.log(returnFirst('apple', 'pie', 'cake', 'tea'))





//5
// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// const returnFavorites = (arr) => `My top three favorite activities are, ${arr[1]}, ${arr[2]}, and ${arr[3]}`

// console.log(returnFavorites(favoriteActivities))


//6

// const combineAnimals = arr => arr = [...realAnimals, ... magicalAnimals, ...mysteriousAnimals] 

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals))

// ["dog", "cat", "mouse", "jackolope", "platypus"]



//7
// let product = (a, b, c, d, e) => numbers.reduce((acc, number) => acc * number, 1)
//     var numbers = [a,b,c,d,e];
  
    


//    console.log(product)



//8

// const unshift = (array, a, b, c, d, e) => [a, b, c, d, e].concat(array);
  

//9
const populatePeople = (names) => {return names.map((name) => {name = name.split(" ");
        return `firstName: ${name[0]}, lastName: ${name[1]} `})};
        

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]