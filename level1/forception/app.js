//Write a function that takes two arrays as parameters. The first array will be an array of people's names, and the second array will be the
//alphabet. Using a for loop within a for loop, create and return array that looks like this:

//function forception(people, alphabet){
//    // your code here
//}
//// Output:
//["Jon:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
//"Jacob:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
//"Jingle:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
//"Heimer:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
//"Schmidt:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"
function forception(names , bet){//names and bet are place holders since forception calles for the variables later in the code
    let newArr = []

            for (var i = 0; i < names.length; i++){
                newArr.push(names[i])
                for (var j = 0; j < bet.length; j++){
                    newArr.push(bet[j].toUpperCase())

                }
            }
            return console.log(newArr)
        }
    forception(people, alphabet)

    





