
let money = +prompt ('Ваш бюджет на месяц?', 1000);

let time = prompt ("Введите дату в формате YYYY-MM-DD");

let qExpFirst = prompt ("Введите обязательную статью расходов в этом месяце");

let qoExpFirst = +prompt ("Во сколько обойдется?");

let qExpSecond = prompt ("Введите обязательную статью расходов в этом месяце");

let qoExpSecond = +prompt ("Во сколько обойдется?");


let appData = {
    budget: money,
    timeData: time,
    expenses:{},
    optionalEspenses:{},
    income:[],
    savings: false,
};

appData.expenses[qExpFirst] = qoExpFirst;
appData.expenses[qExpSecond] = qoExpSecond;

alert((money - qoExpFirst - qoExpSecond)/30);