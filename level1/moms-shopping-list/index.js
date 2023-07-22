const form = document["shoppingList"]
var food = document.getElementById("food")
var newText = document.getElementById("newText")



form.addEventListener("submit", (e) => {
    e.preventDefault()
    const cart = form.cart.value
    
    const newItem = document.createElement("li")
    newItem.textContent = cart
    newItem.setAttribute("id" , "listItem")
    food.append(newItem)
    newItem.style.textAlign = "center"

    shoppingList.cart.value = ""
    console.log(cart)
    
    const delBtn = document.createElement("button")
    delBtn.innerText = "delete"
    delBtn.setAttribute("id", "delBtn")
    newItem.append(delBtn)
    
    delBtn.addEventListener("click", (e) => {  
        document.getElementById("listItem").remove(newItem)
    })    
    
    
    const editBtn = document.createElement("button")
    editBtn.innerText = "edit"
    editBtn.setAttribute("id", "editBtn")
    newItem.append(editBtn)
    
    
    editBtn.addEventListener("click", (e) => {
        document.getElementById("listItem").textContent = newText
    })
    
    const edit = document.createElement("input")
    edit.setAttribute("id", "newText")
    edit.setAttribute("type", "text")
    edit.textContent = newText
    document.getElementById("listItem").append("inupt")
    
})    

//const endBtn = document.createElement("button")
//endBtn.innerText = "change"
//endBtn.setAttribute("id", "endBtn")
//newItem.append(endBtn)



