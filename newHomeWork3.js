


const a = prompt('Какое количество операций хотите произвести на калькуляторе?',"")
for (let i=0; i<a;i++) {
    const b = +prompt('Пожалуйста введите первое число', ""),
        c = +prompt('Пожалуйста введите второе число', ""),
        d = prompt('какое действие с числами нужно совершить?', "");



        let result=console.log;
        switch (d){
            case "-":
                result(b-c);
            break;
            case "+":
                result(b+c);
                break;
            case "*":
                result(b*c);
                break;
            case "/":
                result(b/c);
                break;
                default : (`${d}==null || ${d}===''`) ? alert(`Мы не можем выполнить действие с оператором: ${d}`) : null;

        }

    }










