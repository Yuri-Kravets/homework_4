const actionAdd = prompt("+");
const actionSub = prompt("-");
const actionMult = prompt("*");
const actionDiv = prompt("/");


let num1 = prompt("введите первое число");
let num2 = prompt("введите второе число");

let result = +num1 + +num2;
console.log(num1,`+`,num2,`=`,result)
alert(`Результат сложения ${+num1 + +num2}`);

let result2 = num1 - num2;
console.log(num1,`-`,num2,`=`,result2)
alert(`Результат отнимания ${num1 - num2}`);

let result3 = num1 * num2;
console.log(num1,`*`,num2,`=`,result3)
alert(`Результат умножения ${num1 * num2}`);


let result4 = num1 / num2;
console.log(num1,`/`,num2,`=`,result4)
alert(`Результат деления ${num1 / num2}`);