"use strict";

//   if (op == "+") {
//     console.log(add(num1, num2));
//   } else if (op == "-") {
//     console.log(subtract(num1, num2));
//   } else if (op == "*") {
//     console.log(multiply(num1, num2));
//   } else if (op == "/") {
//     console.log(Math.round((divide(num1, num2) + Number.EPSILON) * 100) / 100);
//   } else if (op == "%") {
//     console.log(remainder(num1, num2));
//   }
// }

// const num1 = prompt("num1");
// const op = prompt("operators");
// const num2 = prompt("num2");

function operate(num1, op, num2) {
  //   num1 = Number(num1);
  //   num2 = Number(num2);
  //   console.log(num1, num2);

  switch (true) {
    case op == "+":
      console.log(add(num1, num2));
      break;

    case op == "-":
      console.log(subtract(num1, num2));
      break;

    case op == "*":
      console.log(multiply(num1, num2));
      break;

    case op == "/":
      console.log(
        Math.round((divide(num1, num2) + Number.EPSILON) * 100) / 100
      );
      break;

    case op == "%":
      console.log(remainder(num1, num2));
      break;
  }
}

function add(n1, n2) {
  return n1 + n2;
}

function subtract(n1, n2) {
  return n1 - n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

function divide(n1, n2) {
  return n1 / n2;
}

function remainder(n1, n2) {
  return n1 % n2;
}

operate(5, "%", 3);
