var readlineSync = require('readline-sync');


//function getAverage(arr) {
//    var sum = 0
//    for (i = 0; i < arr.length; i++) {
//        sum += arr[i] +1;
//    }
//    return sum / arr.length
//}

var n1 = readlineSync.question('pick a number. ')
var n2 = readlineSync.question('pick another number. ')
var math = readlineSync.question('would you like to add, sub, mul, or div? ')

const sum = () => {
    console.log (Number(n1) + Number(n2))
}

const sub = () => {
    console.log (n1 - n2)
}

const mul = () => {
    console.log (n1 * n2)
}

const div = () => {
    console.log (n1 / n2)
}

if (math === "add") {
    sum()
}

else if (math === "sub") {
    sub()
}
else if (math === "mul") {
    mul()
}
else if (math === "div") {
    div()
}