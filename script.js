
let money = +prompt ('Ваш бюджет на месяц?', 1000);

let time = prompt ("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses:{},
    optionalEspenses:{},
    income:[],
    savings: false,
};

for (let i=0; i< 2; i++) {

    let qExpFirst = prompt ("Введите обязательную статью расходов в этом месяце");

    let qoExpFirst = +prompt ("Во сколько обойдется?");

    if( (typeof(qExpFirst)) === 'string' && (typeof(qExpFirst)) != null && (typeof(qoExpFirst)) != null
    && qExpFirst != '' && qoExpFirst != '' && qExpFirst.length < 50) {
        console.log('done');
        appData.expenses[qExpFirst] = qoExpFirst;
    } else{
        alert("ВВедите корректные данные");
    }
    
}

/*let i = 0;

while (i<2){
    i++
    let qExpFirst = prompt ("Введите обязательную статью расходов в этом месяце");
    let qoExpFirst = +prompt ("Во сколько обойдется?");
    appData.expenses[qExpFirst] = qoExpFirst;
}*/

/*let i = 0;
do {
    i++;
    let qExpFirst = prompt ("Введите обязательную статью расходов в этом месяце");
    let qoExpFirst = +prompt ("Во сколько обойдется?");
    appData.expenses[qExpFirst] = qoExpFirst;
} while(i<2);*/

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
}else if(appData.moneyPerDay < 2000){
    console.log("Средний уровень достатка");
}else if(appData.moneyPerDay > 2000){
    console.log("classno");
}else{
    console.log('Херня какая-то');
}