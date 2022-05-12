class Todolist {
    constructor() {
        this.todos = [];
    }
    add(todo) {
        this.todos.push(new TodoITtem(todo));
    }
}

class TodoITtem {
    constructor(todo) {
        this.todo = todo;
    }
}

let todoList = new Todolist();

let inp = document.querySelector('.addToDo__inp');


function todolist() {
    let newDiv = document.createElement('div');
    let newDescr = document.createElement('div');
    let checkBox = document.createElement('div');
    let inpRadioBox = document.createElement('input:radio');
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

        inpRadioBox.classList.add('box_radio');
        checkBox.append(inpRadioBox);


        inpChecked.classList.add('checked_box');
        checkBox.append(inpChecked);


        newDescr.innerText ? todoList.add(todo) : null;
        console.log(todoList.todos);

        inp.value = '';

    }


    newDiv.addEventListener('click', (event) => {
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

document.querySelector('.addToDo__btn').addEventListener('click', () => {

    todolist();
})

document.querySelector('.addToDo__inp').addEventListener('keydown', (event) => {
    if (event.keyCode == 13) {

        todolist();
    }
})










