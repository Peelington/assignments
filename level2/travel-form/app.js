const form = document.travel

form.addEventListener("submit", (e) => {
    e.preventDefault()
    
    //first name
    console.log(`First name: ${form.firstName.value}`)
    console.log(`Last Name: ${form.lastName.value}`)
    console.log(`Age: ${form.age.value}`)
    console.log(`Location: ${form.destination.value}`)
    console.log(`Meal Type: ${form.diet.value}`)
})