class Todolist{
    constructor() {
        this.todos = [];
    }
    add(todo){
        this.todos.push(new TodoITtem(todo));
          }
}

class TodoITtem{
    constructor(todo){
        this.todo=todo;
    }
}

let todoList = new Todolist();

let inp = document.querySelector('.addToDo__inp');


function todolist() {
    let newDiv = document.createElement('div');
    let newDescr = document.createElement('div');
    let checkBox = document.createElement('div');
    let unChecked = document.createElement('div');

    let todo = inp.value;
    
    if (todo) {

        newDiv.classList.add('item');
        document.querySelector('.addToDo').after(newDiv);

        newDescr.classList.add('item__descr');
        newDiv.append(newDescr);
        newDescr.innerText = todo;

        checkBox.classList.add('item__checkbox');
        newDiv.append(checkBox);

        unChecked.classList.add('checkbox__checked');
        newDiv.append(unChecked);

        

        newDescr.innerText ? todoList.add(todo) : null;
        console.log(todoList.todos);

        inp.value = '';

    }


    newDiv.addEventListener('click', (event) => {
        if (event.target.matches('.item__checkbox')) {
            newDescr.style.textDecoration = 'line-through';
            unChecked.style.display = 'block';


        } else if (event.target.matches('.checkbox__checked')) {
            newDiv.append(unChecked);
            unChecked.style.display = 'none';
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










