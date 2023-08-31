//1

// var name = "John"
// var age = 101

// function runForLoop(pets) {
//     var petObjects = []
//     for (var i = 0; i < pets.length; i++) {
//         let pet = { type: pets[i] }
//         let name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }

// runForLoop(["cat", "dog"])


//2

// const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     return arr.map(carrot => { return { type: "carrot", name: carrot }
//     })
// }
// console.log(mapVegetables(carrots))


//3

// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// function filterForFriendly(arr) {
//     return arr.filter(person => person.friendly ? 1 : 0)
// }

// console.log(filterForFriendly(people))


//4

// let doMathSum = (a, b) => a + b

// var produceProduct = (a, b) => a * b

// console.log(doMathSum(55, 40))
// console.log(produceProduct(55, 40))


//5

// const person = {
//     firstName: "jane",
//     lastName: "doe",
//     age: 100,
// }

// function printString(obj) {
//     console.log(`Hi ${obj.firstName} ${obj.lastName}, how does it feel to be ${obj.age}`)
// }

// printString(person)


//6

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
 function filterForDogs(arr) {
     return arr.filter(animals => animals.type == "dog" ? 1 : 0 )
 }
 
 console.log(filterForDogs(animals))
