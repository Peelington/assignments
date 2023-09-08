
const tasks = document.tasksform
const listTasks = document.getElementById('listedTasks')
const button = document.getElementById('delete')

//get
function getData(){
    axios.get("https://api.vschool.io/alton/todo/")
    .then(res => listData(res.data))
    .catch(err => console.log(err))
}
// Adding list items to page
function createTodo (){
    for(let i = 0; i < data.length; i++){
        const h1 = document.createElement('h1')
        h1.textContent = data[i].title
        document.getElementById("listedTasks").appendChild(h1)
    }
}


//adding the list items to HTML
axios.get("https://api.vschool.io/alton/todo/")
.then(response => {
    
    for(let i = 0; i < response.data.length; i++){


        const div = document.createElement('div');
        div.style.border = "solid black 2px"  

        const h1 = document.createElement('h1');
        h1.textContent = response.data[i].title;

        const h2 = document.createElement('h2')
        h2.textContent = response.data[i].description;

        const img = document.createElement('img')
        //img.src = datd[i].imageUrl

        const h3 = document.createElement('h3')
        h3.textContent = response.data[i].price

        const delBtn = document.createElement('button')
        delBtn.setAttribute('id', 'delete')
        delBtn.textContent = "delete"

        const checkbox = document.createElement('input')
        checkbox.setAttribute("type", "checkbox")
        
        listTasks.append(div)
        div.append(h1, h2, h3, checkbox, delBtn)
    }    
})
.catch(error => console.log(error))


//post adding new ToDo's to the list
tasks.addEventListener("submit", (e) => {
    e.preventDefault()
    
    const newTodo = {
        title: tasks.title.value,
        description: tasks.description.value,
        price: tasks.price.value,
        imgUrl: tasks.imgUrl.value
    }
    
    console.log("test")
    axios.post("https://api.vschool.io/alton/todo/", newTodo)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
    createTodo()
    
}) 
        
//Delete button
// button.addEventListener('click', function(){
    
//     let deletedTodo = {
//         
//     }
//     axios.delete("https://api.vschool.io/alton/todo/")
//         .then(response => console.log(response.data))
//         .catch(error => console.log(error))
// })







