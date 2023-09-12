
const tasks = document.tasksform
const listTasks = document.getElementById('listedTasks')
const button = document.getElementById('delete')
const button2 = document.getElementById('editBtn')


//get
function getData(){
    axios.get("https://api.vschool.io/alton/todo/")
    .then(res => listData(res.data))
    .catch(err => console.log(err))
}

function listData(data){
   
    clearList()
    
    for(let i = 0; i < data.length; i++){
        var id = data[i]._id
        // console.log(id)

//div container
        const div = document.createElement('div');
        div.setAttribute('id', 'divTaskBox');
        div.style.border = 'solid black 2px';
        div.style.borderRadius = '10px';
        div.style.background = 'white';

// button div
        const btnDiv = document.createElement('div');
        btnDiv.setAttribute('id', 'btnDiv')
        
         
//title
        const h1 = document.createElement('h1');
        h1.setAttribute('id', 'taskTitle')
        h1.textContent = data[i].title;
//Description
        const h2 = document.createElement('h2')
        h2.textContent = data[i].description;
        h2.setAttribute('id', 'taskDescription')
//Price
        const h3 = document.createElement('h3')
        h3.textContent = data[i].price
        h3.setAttribute('id', 'taskPrice')
// Image
        let img = document.createElement('img')
        img.setAttribute('id', 'taskImg')
        img.src = data[i].imgUrl
        console.dir({...img})

//Delete button
        const delBtn = document.createElement('button')
        delBtn.textContent = "delete"
        delBtn.setAttribute('id', 'delBtn')
        delBtn.addEventListener('click', function(){
            axios.delete(`https://api.vschool.io/alton/todo/${id}`)
                .then(response => getData())
                .catch(error => console.log(error))
        })
//edit Button
        const editBtn = document.createElement('button')
        editBtn.setAttribute('id', 'button2')
        editBtn.textContent = "Edit"
        editBtn.addEventListener('click', () => {
        // function toggleEditMode() {
            if (editBtn.innerText === 'Edit') {
                div.contentEditable = true;
                div.focus();
                editBtn.innerText = 'Save';
            } else {
                div.contentEditable = false;
                div.style.backgroundColor = "white"
                editBtn.innerText = 'Edit';
            }
        
            edit()
            function edit(data){
                 h1.style.backgroundColor = "#dddbdb"
                 h1.style.border = "solid black 2px"
                 h1.contentEditable = true;
                 h2.style.backgroundColor = "#dddbdb"
                 h2.style.border = "solid black 2px"
                 h2.contentEditable = true;
                 h3.style.backgroundColor = "#dddbdb"
                 h3.style.border = "solid black 2px"
                 h3.contentEditable = true;
                 img.style.backgroundColor = "#dddbdb"
                 img.style.border = "solid black 2px"

                //  tasks.getElementById("editBtn").remove(editBtn);
                //  const endEdit = document.createElement("button");
                //  endEdit.innerText = "Finish"
                //  endEdit.setAttribute("id", "endEdit");
                //  div.append(endEdit);

                 const editedToDo = {
                     title: tasks.title.value,
                     description: tasks.description.value,
                     price: tasks.price.value,
                     imgUrl: tasks.imgUrl.value
                 }
                }                   
        })
//label and check box
        const label = document.createElement("label");
        label.textContent = "Completed";
        label.setAttribute = ('id', 'label')
        div.appendChild(label);

        const checkbox = document.createElement('input')
        checkbox.setAttribute("type", "checkbox")
        checkbox.setAttribute('id', 'check')
        checkbox.addEventListener('change', function(){
            checkbox.checked ? lineOut() : noLine()
            
            const updatedToDo = {
                completed: boxCheck.checked
            }
            checkbox.checked = !checkbox.checked;

            axios.put(`https://api.vschool.io/alton/todo${id}`, updatedToDo)
            .then(response => getData() )
            .catch(error => console.log(error))
        })

        function noLine(){
            h1.style.textDecoration = "none";
            h2.style.textDecoration = "none";
            h3.style.textDecoration = "none";
            }

        function lineOut(){
            h1.style.textDecoration = "line-through";
            h2.style.textDecoration = "line-through";
            h3.style.textDecoration = "line-through";
            h1.style.textDecorationColor = "black";
            h2.style.textDecorationColor = "black";
            h3.style.textDecorationColor = "black";
            }
    

//appending everything to the HTML page        
        listTasks.append(div)
        div.append(h1, h2, h3, img, btnDiv)
        btnDiv.append(checkbox, label, delBtn, editBtn)
    }
    
}



function clearList(){
    const el = document.getElementById('listedTasks')
    while(el.firstChild){
        el.removeChild(el.firstChild)
    }  
}
getData()


//post adding new ToDo's to the list
tasks.addEventListener("submit", (e) => {
    e.preventDefault()
    
    const newTodo = {
        title: tasks.title.value,
        description: tasks.description.value,
        price: tasks.price.value,
        imgUrl: tasks.imgUrl.value,
        completed: tasks.checkbox
    }
    tasksform.title.value = ""
    tasksform.description.value = ""
    tasksform.price.value = ""
    tasksform.imgUrl.value = ""

    axios.post("https://api.vschool.io/alton/todo/", newTodo)
    .then(response => getData())
    .catch(error => console.log(error))
    //createTodo()
    
}) 


        












