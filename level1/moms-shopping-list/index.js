const form = document["shoppingList"]
var food = document.getElementById("food")
var newText = document.getElementById("newText")
//for Edit button

// const end_button = document.getElementById("end-editing");



form.addEventListener("submit", (e) => {
    e.preventDefault()
    const cart = form.cart.value
    
    newItem.textContent = cart
    const newItem = document.createElement("li")
    newItem.setAttribute("id" , "listItem")
    food.append(newItem)
    newItem.style.textAlign = "center"

    shoppingList.cart.value = ""
    console.log(cart)
    
    //delete button
    const delBtn = document.createElement("button")
    delBtn.innerText = "delete"
    delBtn.setAttribute("id", "delBtn")
    newItem.append(delBtn)
    
    delBtn.addEventListener("click", (e) => {  
        document.getElementById("listItem").remove(newItem)
    })    
    
    // edit button
    var editBtn = document.createElement("button")
    editBtn.innerText = "edit"
    editBtn.setAttribute("id", "editBtn")
    newItem.append(editBtn)

    
    editBtn.addEventListener("click", (e) => {
    listItem.contentEditable = true;
    listItem.style.backgroundColor = "#dddbdb";
    const endEdit = document.createElement("button")
    endEdit.innerText = "Finish"
    endEdit.setAttribute("id", "endEdit")
    newItem.append(endEdit)
     });



     // finish edit button
     endEdit.addEventListener("click", (e) => {
     listItem.contentEditable = false;
     listItem.style.backgroundColor = ("#FF0000");
     document.getElementById("endEdit").remove(endEdit)
      })

    
   

    })