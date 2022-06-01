// GET
const getResult = new XMLHttpRequest();
getResult.open("GET", "https://jsonplaceholder.typicode.com/posts");


getResult.onload = () => {
    console.log(getResult.response);
}
getResult.send();

//Post

const postResult = new XMLHttpRequest();
postResult.open("POST", "https://jsonplaceholder.typicode.com/posts");
let json = {
    title: 'foo',
    body: 'bar',
    userId: 1,
}
postResult.setRequestHeader('Content-type', 'application/json;charset=UTF-8')
postResult.onload = () => {
    if (postResult.status === 201) {
        console.log(postResult.response);

    } else console.error('Что-то пошло не так');

}
postResult.send(JSON.stringify(json));


