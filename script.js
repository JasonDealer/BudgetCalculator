let money, time;

function start() {
    money = +prompt ('Ваш бюджет на месяц?', 1000);
    time = prompt ("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt ('Ваш бюджет на месяц?', 1000);
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses:{},
    optionalExpenses:{},
    income:[],
    savings: true,
    chooseExpenses: function(){
        for (let i=0; i< 2; i++) {

            let qExpFirst = prompt ("Введите обязательную статью расходов в этом месяце");
        
            let qoExpFirst = +prompt ("Во сколько обойдется?");
        
            if( (typeof(qExpFirst)) === 'string' && (typeof(qExpFirst)) != null && (typeof(qoExpFirst)) != null
            && qExpFirst != '' && qoExpFirst != '' && qExpFirst.length < 50) {
                console.log('done');
                appData.expenses[qExpFirst] = qoExpFirst;
            } else{
                alert("ВВедите корректные данные");
                i--;
            } 
        }
    },
    detectDayBudget: function(){
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if(appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        }else if(appData.moneyPerDay < 2000){
            console.log("Средний уровень достатка");
        }else if(appData.moneyPerDay > 2000){
            console.log("classno");
        }else{
            console.log('Херня какая-то');
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt('Какова суммма накоплений?');
            let percent = +prompt('Под какой процент?');
    
            appData.monthIncome = save/100/12*percent;
            alert('Доход в месяц по депозиту:' +appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i=1; i< 4; i++) {
    
            let qOptExpFirst = prompt ("Введите НЕобязательную статью расходов в этом месяце");
    
            if( (typeof(qOptExpFirst)) === 'string' && qOptExpFirst != '' && qOptExpFirst.length < 50) {
                console.log('done');
                appData.optionalExpenses[i] = qOptExpFirst;
            } else{
                alert("ВВедите корректные данные");
                i--;
            }
        }
    },
    chooseIncome: function() {
        let items = prompt("Что принесет доп доход? (Перечислите через запятую");
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что-то еще?'));
            appData.income.sort();

            while((typeof(items)) != 'string' || items == "" || items == null) {
                items = prompt("Что принесет доп доход? (Перечислите через запятую");
            }
        appData.income.forEach(function(item, i){
            alert("Доп способы зарботка: " + (i++) + " - " + item);
        });
    }
};
for(let i in appData){
    console.log("Метод: " +i+ "В объекте - " +appData[i]);
}

console.log(appData);



/*let i = 0;

while (i<2){
    
    let qExpFirst = prompt ("Введите обязательную статью расходов в этом месяце");
    let qoExpFirst = +prompt ("Во сколько обойдется?");
    if( (typeof(qExpFirst)) === 'string' && (typeof(qExpFirst)) != null && (typeof(qoExpFirst)) != null
    && qExpFirst != '' && qoExpFirst != '' && qExpFirst.length < 50) {
        console.log('done');
        appData.expenses[qExpFirst] = qoExpFirst;
    } else{
        alert("ВВедите корректные данные");
        i--;
    }
    i++
}*/

/*let i = 0;
do {
    
    let qExpFirst = prompt ("Введите обязательную статью расходов в этом месяце");
    let qoExpFirst = +prompt ("Во сколько обойдется?");
    if( (typeof(qExpFirst)) === 'string' && (typeof(qExpFirst)) != null && (typeof(qoExpFirst)) != null
    && qExpFirst != '' && qoExpFirst != '' && qExpFirst.length < 50) {
        console.log('done');
        appData.expenses[qExpFirst] = qoExpFirst;
    } else{
        alert("ВВедите корректные данные");
        i--;
    }
    i++;
} while(i<2);*/