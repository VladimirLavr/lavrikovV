
let inp = document.querySelector('.addToDo__inp');

let getBtn = document.querySelector('.btn');

let postBtn = document.querySelector('.addToDo__btn');

const container = document.querySelector('.container')





function todolist(item) {
    let newDiv = document.createElement('div');
    let newDescr = document.createElement('div');
    let checkBox = document.createElement('div');
    let delItem = document.createElement('div');
    let inpCheckBox = document.createElement('input:checkbox');
    let inpChecked = document.createElement('label');



    if (item) {

        newDiv.classList.add('item');
        document.querySelector('.addToDo').after(newDiv);

        newDescr.classList.add('item__descr');
        newDiv.append(newDescr);
        newDescr.innerText = item.id;

        checkBox.classList.add('checkbox__block');
        newDiv.append(checkBox);

        inpCheckBox.classList.add('box_checkbox');
        inpChecked.append(inpCheckBox);

        delItem.classList.add('delete_box');
        newDiv.append(delItem);


        inpChecked.classList.add('checked_box');
        checkBox.append(inpChecked);


        inp.value = '';

    }


    newDiv.addEventListener('click', (event) => {

        if (event.target.matches('.delete_box')) {
            newDiv.style.display = 'none';
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








let url = 'http://localhost:8080/todos';

async function postTodo() {
    const response = await fetch(url,{
        method:'POST',
        body: JSON.stringify(inp.value)
    });
    const data = await response.json();
    console.log(data);
    inp.value='';
}


async function getResponse() {
    const response = await fetch(url);
    const data = await response.json();
    data.forEach(item=>{
        todolist(item);
    })
}

async function delItem(){
  let id = event.path[1].innerText;
    if(event.target.matches('.delete_box')){
        const response = await fetch(url+ "/" + id,{
            method:'DELETE',
        })
        const data = await response.json();
        console.log(data.id);
    }}





container.addEventListener('click',(event)=>{

 delItem();
})


postBtn.addEventListener('click',()=>{

    postTodo();
})

getBtn.addEventListener('click',()=>{

    getResponse();

})








