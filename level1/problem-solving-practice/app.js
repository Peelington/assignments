//Write a function that takes an array of numbers and returns the largest (without using `Math.max()`)

// test data

function largest(numbersArr) {
  for ( i = 0; i < numbersArr.length; i++){ 
  numbersArr.sort((a, b) => { return b - a } );
}
  console.log(numbersArr[0])
}
console.log(largest([6, 13, 250, 3]))

//Write a function that takes an array of words and a character and returns each word that has that character present.
// test data


function lettersWithStrings(strArr, string) {
    for (var i = 0; i < strArr.length; i++) {
      if( strArr[i].indexOf(string) > -1 ) {
        console.log(strArr[i])
      }     
    }
  }
    console.log(lettersWithStrings(["$hello!", "%%^%%", "test!"], "!"))
    console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!")) 
    console.log(lettersWithStrings(["yellow", "green", "^up^", "down", "dog"], "h")) 



 //Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.

function isDivisible(num1, num2) {
    if (num1 % num2 === 0){
    console.log(true)
        }else if (num1 % num2 !== 0){
          console.log(false)
        }
    }
 console.log(isDivisible(4, 2)) // => true
 console.log(isDivisible(9, 3)) // => true
 console.log(isDivisible(15, 4)) // => false