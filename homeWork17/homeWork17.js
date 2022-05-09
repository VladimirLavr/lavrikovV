// Первая задача!
function unique(array) {
    const res = [];

    array.filter((value) => {
        if (!res.includes(value)) {
            res.push(value);
        }
    });
    return res;

}

console.log(unique([1, 1, 2, 2, 4, 2, 7, 1, 8, 8, 10, 20]))




//Вторая задача

const numeric =new Number(2);
let nums =[]; 
Number.prototype.plus = function(num) {
    let result = numeric+num;
      nums.push(result);
       return  result;
  }
  
  Number.prototype.minus =function(num2){
       
      return  nums[0] - num2;
  }
console.log((2).plus(3).minus(1));







///// АНАГРАММЫ
function anagram(firstWord, secondWord) {
    firstWord = firstWord.toLowerCase().split('').sort().join('');
    secondWord = secondWord.toLowerCase().split('').sort().join('');

    if (firstWord === secondWord) {

        console.log('Слова  Анаграммамы!');

    } else console.log('Слова не Анаграммы');

}


anagram('Владимир', 'Владимир');


//Четвертая задача


function solution(words) {
    const newWords = {};

    words.forEach((word) => {
        if (!Object.keys(newWords).includes(word)) {
            newWords[word] = words.filter((wordFilter) => wordFilter === word).length;
             
        }
    });
    const sorted = Object.entries(newWords).sort((a, b) => b[1] - a[1]);
    return sorted.map((newSort) => newSort[0])


}


const words = ['orange', 'banana', 'banana', 'grapefruit', 'banana', 'grapefruit', 'banana'];
console.log(solution(words))