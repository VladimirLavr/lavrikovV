const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function chunk(arr, chunkSize) {

    let newArr = [];

    if (chunkSize > 1) {
        for (let i = 0; i < arr.length; i += chunkSize) {
            newArr.push(arr.slice(i, i + chunkSize));
        }
        return newArr;

    } if (chunkSize === 1) {
        return arr;

    } else return 'Пользователь, ты не прав!';
}


const result = chunk(arr, 1);
console.log(result);









