import {Todolist} from './module/Todolist.js';
import {TodoITtem} from './module/TodoItem.js';


let inp = document.querySelector('.addToDo__inp');

let getBtn = document.querySelector('.btn');

let postBtn = document.querySelector('.addToDo__btn');





let todoList = new Todolist();



function todolist() {
    let newDiv = document.createElement('div');
    let newDescr = document.createElement('div');
    let checkBox = document.createElement('div');
    let delItem = document.createElement('div');
    let inpCheckBox = document.createElement('input:checkbox');
    let inpChecked = document.createElement('label')
    let todo = inp.value;

    if (todo) {

        newDiv.classList.add('item');
        document.querySelector('.addToDo').after(newDiv);

        newDescr.classList.add('item__descr');
        newDiv.append(newDescr);
        newDescr.innerText = todo;

        checkBox.classList.add('checkbox__block');
        newDiv.append(checkBox);

        inpCheckBox.classList.add('box_checkbox');
        inpChecked.append(inpCheckBox);

        delItem.classList.add('delete_box');
        newDiv.append(delItem);


        inpChecked.classList.add('checked_box');
        checkBox.append(inpChecked);


        newDescr.innerText ? todoList.add(todo) : null;
        console.log(todoList.todos);

        inp.value = '';

    }


    newDiv.addEventListener('click', (event) => {

        if (event.target.matches('.delete_box')) {
            newDiv.style.display = 'none';
            todoList.todos =  todoList.todos.filter(item => {
                return item.todo !== newDescr.textContent
            })
        }


        if (event.target.matches('.checkbox__block')) {
            newDescr.style.textDecoration = 'line-through';
            inpChecked.style.display = 'block';



        } else if (event.target.matches('.checked_box')) {
            checkBox.append(inpChecked);
            inpChecked.style.display = 'none';
            newDescr.style.textDecoration = 'none';

        }

    })
}



// document.querySelector('.addToDo__btn').addEventListener('click', () => {

//     todolist();
// })

document.querySelector('.addToDo__inp').addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {

        todolist();
    }
})







postBtn.addEventListener('click',()=>{
    let todo = inp.value;
    let url = 'http://localhost:3001/todos';

    fetch(url,{
        method:'POST',
        mode:'no-cors',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(new TodoITtem(todo))
    })
    inp.value ='';
})


getBtn.addEventListener('click',()=>{

    let url = 'http://localhost:3001/todos';

    fetch(url,{ mode:'no-cors'})
    .then(response =>(response.json()))
    .then(data=>console.log(data))
   
})









