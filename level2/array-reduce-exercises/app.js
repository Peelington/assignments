//1

// function total(arr) {
//    return arr.reduce((final, num) => final += num)
   
// }

// console.log(total([1,2,3])); // 6



//2

// function stringConcat(arr) {
//     return arr.reduce((a, b) => `${a} ${b}`)
//  }
 
//  console.log(stringConcat([1,2,3])); // "123"


 //3


//  function totalVotes(arr) {
// //     return arr.reduce(final, voters => voters.voted ? 1 : 0)
// //  }
//     return arr.reduce(function(final, voters){
//         if(voters.voted){
//             final++
//         }
//         return final
//     }, 0)
// };

//  var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];
// console.log(totalVotes(voters)); // 7


//4

// function shoppingSpree(arr) {
//     return arr.reduce(function(final, cost) { 
//         final += cost.price;
//         return final
//     }, 0)
//  }
 
//  var wishlist = [
//      { title: "Tesla Model S", price: 90000 },
//      { title: "4 carat diamond ring", price: 45000 },
//      { title: "Fancy hacky Sack", price: 5 },
//      { title: "Gold fidgit spinner", price: 2000 },
//      { title: "A second Tesla Model S", price: 90000 }
//  ];
 
//  console.log(shoppingSpree(wishlist)); // 227005


//5

// function flatten(arr) {
    
//     return arr.reduce((final, current) => final += current + ",",0);
    
//  }
 
//  var arrays = [
//      ["1", "2", "3"],
//      [true],
//      [4, 5, 6]
//  ];
 
//  console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];


//6

// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];

// function voterResults(arr) {
//     let voterInfo = {
//     numYoungVotes: 0,
//     numYoungPeople: 0,
//     numMidVotesPeople: 0,
//     numMidsPeople: 0,
//     numOldVotesPeople: 0,
//     numOldsPeople: 0,
// }
    
//     console.log('test')
//     return arr.reduce(function(final, voter){
        
//         if(voter.age <= 25 && voter.age >= 18 ){
//             final.numYoungPeople++;
//             if(voter.voted){
//                 final.numYoungVotes++;
//             }
            

//         }if(voter.age <= 35 && voter.age >= 26 ){
//             final.numMidsPeople++;
//             if(voter.voted){
//                 final.numMidVotesPeople++;
//             }
            

//         }if(voter.age <= 55 && voter.age >= 36 ){
//             final.numOldsPeople++;
//             if(voter.voted){
//                 final.numOldVotesPeople++;
//             }
//         }
//         return final
        
//     }, voterInfo
// )}

// console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4
}
*/



//7

var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]
function sortedOfAge(arr){
    let alphabetical = []
    return arr.sort((a, b) => {return a.lastName === b.lastName ? 0 : a.lastName > b.lastName ? 1 : -1;}).reduce(function(final, person){

        if(person.age >= 18){
            final.push(`<li>${person.firstName} ${person.lastName} is ${person.age}</li>`)
        }return final
    }, alphabetical)

 }
 
 console.log(sortedOfAge(peopleArray));
 
 /*
 Output:
 [
     "<li>Kyle Mooney is 27</li>",
     "<li>Sarah Palin is 47</li>",
     "<li>Rick Sanchez is 78</li>",
     "<li>Morty Smith is 29</li>",
     "<li>Lev Tolstoy is 82</li>"
 ]
 */