const calc = prompt('Какое количество операций хотите произвести на калькуляторе?', "");

for (let i = 0; i < calc; i++) {
    const firstNumber = +prompt('Пожалуйста введите первое число', ""),
        secondNumber = +prompt('Пожалуйста введите второе число', ""),
        operator = prompt('какое действие с числами нужно совершить?', "");

    switch (operator) {
        case "-":
            console.log(firstNumber - secondNumber);
            break;
        case "+":
            console.log(firstNumber + secondNumber);
            break;
        case "*":
            console.log(firstNumber * secondNumber);
            break;
        case "/":
            console.log(firstNumber / secondNumber);
            break;
        default:
            alert(`Мы не можем выполнить действие с оператором: ${operator}`);
    }
}










