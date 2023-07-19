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
var left = document.querySelectorAll(".left")
var right = document.querySelectorAll(".right")
const theme = document.getElementById("theme-drop-down")
console.log(left)

theme.addEventListener ("change", (e) => {
    console.log (e)
        if (e.target.value === "theme-two") {
            for (i = 0; i < left.length; i++){
            right[i].style.backgroundColor=("red");
            left[i].style.backgroundColor=("black");
            left[i].style.color= "white"}
        };
        if (e.target.value === "theme-one") {
            for (i = 0; i < right.length; i++){
                right[i].style.backgroundColor=("lightblue");
                left[i].style.backgroundColor=("burlywood")
            }
        };
    })  
    
