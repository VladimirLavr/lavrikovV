const mainFunction = () => {
    let result = prompt('Введите число:', '');

   if (result==null || result==='') {
       return;   
   }
       
    isParity(result)  ? console.log('число четное') : console.log('число не четное');
    isSimple(result) ? console.log('число простое') : console.log('число не простое');   
}


const isParity = (result) => {
    return !(result % 2);
}

const isSimple = (result) => {
    let flag = true;
    for (let i = 2; i < result; i++) {
        if (result % i === 0) {
            flag = false;
            break;
        }
    }
    return flag;
}






