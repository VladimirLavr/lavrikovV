// GET
const getResult = new XMLHttpRequest();
getResult.open("GET", "https://jsonplaceholder.typicode.com/posts");


getResult.onload = () => {
    if (getResult.status === 200) {
        console.log(JSON.parse(getResult.response));

    } else alert(`Запрос не удался код ошибки ${getResult.status}`)
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
        console.log(JSON.parse(postResult.response));

    } else alert(`Запрос не удался код ошибки ${postResult.status}`)

}
postResult.send(JSON.stringify(json));





