const button =document.getElementById("button")
const btn = document.querySelector(".btn")
const awesomeDiv =document.getElementsByClassName("awesomeDiv")

btn.style.height = "200px";
btn.style.width = "200px";
btn.style.margin = "200px";
btn.style.boarder = "5px";

awesomeDiv[0].style.height = "100px";
awesomeDiv[0].style.width = "1000px";


/*
Mouse event listner list
mousedown for holding the mouse button down
mouseup for when the button it relesed
dblclick for double click
click for single click
scroll for wheel on mouse
mouseover for when the mouse is hovering over
*/
btn.addEventListener ("dblclick", () => {
    btn.style.backgroundColor=("green")
})

btn.addEventListener ("mousedown", () =>{
    btn.style.backgroundColor=("red")
})

btn.addEventListener ("mouseup", () => {
    btn.style.backgroundColor=("yellow")
})

btn.addEventListener ("mouseover", () => {
    btn.style.backgroundColor=("blue")
})

btn.addEventListener("mouseleave", () => {
    btn.style.backgroundColor=("white")
})

document.addEventListener ("scroll", () => {
    btn.style.backgroundColor=("orange")
})


//Keyboard Events
document.addEventListener("keydown", e => {

    if (e.key.toLowerCase() === "r") {
        btn.style.backgroundColor=("red")
    }
    if (e.key.toLowerCase() === "g") {
       btn.style.backgroundColor=("green")
    }
    if (e.key.toLowerCase() === "y") {
        btn.style.backgroundColor=("yellow")
    }
    if (e.key.toLowerCase() === "b") {
        btn.style.backgroundColor=("blue")
    }
    if (e.key.toLowerCase() === "o") {
        btn.style.backgroundColor=("orange")
    }
})

