const userChoise = prompt("Выберите действие(add,sub,mult,div)");

const num1 = +prompt("выберите число");
const num2 = +prompt("выберите число");

let result;

if (!isNaN(num1) || !isNaN(num2)) {
  
  if (userChoise === "add") {
    result = num1 + num2;
    alert(`${num1} + ${num2} = ${result}`);
    console.log (`${num1} + ${num2} = ${result}`)
  } else if (userChoise === "sub") {
    result = num1 - num2;
    alert(`${num1} - ${num2} = ${result}`);
    console.log (`${num1} - ${num2} = ${result}`)
  } else if (userChoise === "mult") {
    result = num1 * num2;
    alert(`${num1} * ${num2} = ${result}`);
    console.log (`${num1} * ${num2} = ${result}`)
  } else if (userChoise === "div") {
    result = num1 / num2;
    alert(`${num1} / ${num2} = ${result}`);
    console.log (`${num1} / ${num2} = ${result}`)
  }
 
} else {
  alert('неверно указано значение');
}
