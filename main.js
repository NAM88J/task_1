var money,
    time;
money = prompt('Ваш бюджет на месяц?', '');
time = prompt('Введите дату в формате YYYY-MM-DD', '');
var appData = {
  moneyData: money,
  timeData: time,
  expenses: {

  },
  income: [],
  savings: false
};
var expensesFirst,
    expensesSecond;
    expensesFirst = prompt('Введите обязательную статью расходов в этом месяце', '');
    expensesSecond = prompt('Во сколько обойдется?', '');
appData.expenses[expensesFirst] = expensesSecond;
var ansver = 'Бюджет на 1 день ' + appData.moneyData/30;
alert(ansver);
console.log(appData, expensesFirst);