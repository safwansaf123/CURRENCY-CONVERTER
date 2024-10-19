import inquirer from "inquirer";
const currency = {
    USD: 1, //BASE CURRENCY
    PKR: 285,
    INR: 200,
    EUR: 50,
    GBP: 10,
    YEN: 2000,
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "select currency",
        type: "list",
        choices: ['USD', 'PKR', 'INR', 'EUR', 'YEN', 'GBP',]
    },
    {
        name: "to",
        message: "select to convert currency",
        type: "list",
        choices: ['USD', 'PKR', 'INR', 'EUR', 'YEN', 'GBP',]
    },
    {
        name: "amount",
        message: "Please enter the amount",
        type: "number",
    },
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
console.log(fromAmount);
console.log(toAmount);
console.log(amount);
let baseamount = amount / fromAmount;
console.log(baseamount);
let convertedAmount = baseamount * toAmount;
console.log(convertedAmount);
