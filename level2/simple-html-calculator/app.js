const form1 = document["math-add"]
const form2 = document["math-sub"]
const form3 = document["math-multi"]
const answer = document.getElementById("answer")

//addition
form1.addEventListener('submit', function(event) {
    event.preventDefault()

    let addNum1 = form1.addNum1.value
    let addNum2 = form1.addNum2.value
    form1.addNum1.value = ""
    form1.addNum2.value = ""
    answer.textContent = ( Number (addNum1) + Number (addNum2))
    
});

//subtraction
form2.addEventListener('submit', function(event) {
    event.preventDefault()

    let subNum1 = form2.subNum1.value
    let subNum2 = form2.subNum2.value
    form2.subNum1.value = ""
    form2.subNum2.value = ""

    answer.textContent = ( subNum1 - subNum2)
});

//Multiplcation
form3.addEventListener('submit', function(event) {
    event.preventDefault()

    let multiNum1 = form3.multiNum1.value
    let multiNum2 = form3.multiNum2.value
    form3.multiNum1.value = ""
    form3.multiNum2.value = ""
    answer.textContent = ( multiNum1 * multiNum2)
});