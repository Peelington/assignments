//Brone
var newHead = document.createElement("header")
newHead.innerHTML = "JavaScript Made This! <span id='alton'> Alton Peel</span> wrote this JavaScript"
document.body.prepend(newHead)

var alton = document.getElementById('alton')
alton.style.color= "green"

newHead.style.fontSize =("50px")
newHead.style.textAlign=("center")

//Silver
var result = document.querySelectorAll(".message")
console.log(Array.from(result))
    result[0].textContent = "Hey wanna buy some fireworks"
    result[1].textContent = "It's not the 4th or new year, what you getting fireworks for?"
    result[2].textContent = "I just wanna reason to be happy"
    result[3].textContent = "I'll bring some beer!"

//Gold
var theme = document.getElementById=("theme-drop-down")
.onchange = function () {
    result.backgroundColor = "red".this.value="theme-two"
    console.log("test")
}
//var drop1 = document.getElementById("theme-drop-down").value="theme-one"
//var drop2 = document.getElementById("theme-drop-down").value="theme-two"
//document.getElementById("list").addEventListener("change",drop1);
//console.log(test)

//test1
//var drop1 = document.getElementById("theme-drop-down").value="theme-one"
//var drop2 = document.getElementById("theme-drop-down").value="theme-two"
//
//drop1.addEventListener ("click", () => {
//    right.style.backgroundColor=("blue");
//    left.style.backgroundColor=("brown");
//    console.log("test")
//})
//drop2.addEventListener ("click", () => {
//    right.style.backgroundColor=("red");
//    left.style.backgroundColor=("black");
//    left.style.color= "white";
//    console.log("test")
//})
//test2
//var left = document.querySelectorAll(".left")
//var right = document.querySelectorAll(".right")
//const theme = document.getElementById("theme-drop-down")
//
//theme.document.addEventListener ("click", () => {
//    console.log ("test")
//        if (value === "1") {
//            right.style.backgroundColor=("red");
//            left.style.backgroundColor=("black");
//            left.style.color= "white"
//        };
//        if (value === "2") {
//            right.style.backgroundColor=("blue");
//            left.style.backgroundColor=("brown")
//        };
//    })
    
    
