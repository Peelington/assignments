const form = document["shoppingList"]
var food = document.getElementById("food")

form.addEventListener("submit", function (e){
    e.preventDefault()
    const cart = form.cart.value
    
    var newItem = document.createElement("li")
    newItem.innerHTML = "<input type='checkbox'  value='cart[i]'/>"+ " " + cart + " " + "<button> x </button>" 
    form.append(newItem)
    newItem.style.textAlign = "center"

    shoppingList.cart.value = ""
    console.log(cart)
})

console.log()

