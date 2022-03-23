

function calc(){
const a = prompt('Какое количество операций хотите произвести на калькуляторе?',"")
for (let i=0; i<a;i++) {
    const b = +prompt('Пожалуйста введите первое число', ""),
        c = +prompt('Пожалуйста введите второе число', ""),
        d = prompt('какое действие с числами нужно совершить?', "");
    function operator(b,c,d){
        let result=console.log;
        if(d=='-'){
            result(b-c)
        }else if (d=='+'){
            result(b+c)
        }else if (d=='*'){
            result(b*c)
        }else if (d=='/'){
            result(b/c)
        }else if (`${d}==null || ${d}===''`) alert(`Мы не можем выполнить действие с оператором: ${d}`)
    }
    operator(b,c,d)
}
}
calc()









