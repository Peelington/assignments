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
 //console.log(sortedOfAge(peopleArray));
 
 function noY(arr){
}
    console.log(noY(peopleArray))

function reverse(arr){
    let final = arr.reverse();
    return final
}
    //console.log(reverse(peopleArray))
 

function removeSecond(arr){
    arr.splice(1, 1 );
    return arr
}                 
//console.log(removeSecond(peopleArray))     
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