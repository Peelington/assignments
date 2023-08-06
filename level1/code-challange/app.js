
//function getAverage(arr) {
//    var sum = 0
//    for (i = 0; i < arr.length; i++) {
//        sum += arr[i] +1;
//    }
//    return sum / arr.length
//}  console.log(getAverage([1, 2, 3, 4]))



//Create a constructor function called Book that takes in parameters for title, author, and year. The 
//constructor function should have a method called getDetails that returns a string with the book's title, author, and year. 
// Instantiate two new Books using the below code to test your solution. 

// class Book {
//     constructor (title, author, year) {
//         this.title = title;
//         this.author = author;
//         this.year = year;
//     }
//     getDetails = () => {
//         return [this.title, this.author, this.year]
//     }
// }


// const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
//     console.log(book1.getDetails()); 

// const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
//     console.log(book2.getDetails()); 

// const book3 = new Book ("The Energy Bus", "Jon Gordon", 2012)
//     console.log(book3.getDetails())



//Write a function called removeDuplicates that takes an array of numbers as input and returns a new array with duplicate values removed.  Use the below code to test your solution.

// function removeDuplicates(arr) {
//    return arr.filter((item, index) => arr.indexOf(item) === index);
// }

// function removeDuplicates(arr){
//     const result = []

//     for(let i = 0; i < arr.length; i++){
//         if(result.indexOf(arr[i]) === -1){
//             result.push(arr[i])
//         }
//     }

//     return result

//     // arr.filter(item => !result.includes(item) ? result.push(item) : null)
//     // return result

// }

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
// console.log(removeDuplicates([5, 5, 5, 5, 5]));


function findEvenNumbers(arr) {
    const evens = []
        for ( let i =0; i < arr.length; i++) {
            if (arr[i] % 2 === 1){                  // % 2 === (1 or 0 if you want to return evens or odds)
                evens.push(arr[i])
            }
        }
        return evens
    }
    console.log(findEvenNumbers([1,2,3,4,5,6,7,8,9,10])) // Expected Output:  [2,4,6,8,10]
    console.log(findEvenNumbers([11, 22, 33, 44, 55, 66, 77, 88, 99, 100])) // Expected Output:  [22, 44, 66, 88, 100]
