// time on site logged in seconds
var timeOnSite = document.getElementById('timeOnSite');
var form = document.personOnsite
var count2 = window.localStorage.count2 || 0;
var count = window.localStorage.count || 0;

setInterval(function loggedTime(){
    // console.log(count2)
    count2++;
    document.getElementById("timeOnSite").textContent = count2;
    window.localStorage.setItem("count", count)
    window.localStorage.setItem("count2", count2)
}, 1000);

console.log(window.localStorage)



// right click to increase counter
var counterDisplayElem = document.getElementById('clicker'); 

counterDisplayElem.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(e)
    count++;
    document.querySelector(".count").textContent = count;
});

//saving the person
form.addEventListener('submit', (e) => {
    e.preventDefault()
    var fName = form.firstName.value;
    var age = form.age.value;
    window.localStorage.setItem("name", fName)
    window.localStorage.setItem('age', age)
})


//copy of an object 
    // [...objectData]
    // let storage = {
    //     ...window.localStorage, // copies all entries in an object or array
    //     count,
    //     count2: count2,
    // }