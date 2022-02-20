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

const displayer = document.querySelector(".display");
const allBtn = document.querySelectorAll(".button");
allBtn.forEach((btn) => btn.addEventListener("click", storeChar));

let sum = 0;
let chars = "";
let nanCount = 0;
let op1 = "";
let op2 = "";

function storeChar() {
  if (this.textContent == "=") {
    operate(arrOftwo[0], this.textContent, arrOftwo[1]);
  }
  if (this.textContent == "C") {
    displayer.textContent = "";
    chars = "";
    nanCount = 0;
    return;
  }
  if (this.textContent == "⌫") {
    displayer.textContent = displayer.textContent.slice(0, -1);
    chars = chars.slice(0, -1);
    nanCount = 0;
    return;
  }
  if (!isNaN(this.textContent)) {
    chars += this.textContent;
    displayer.textContent = chars;
  } else {
    nanCount++; // BAD idea!!
    if (nanCount < 2) {
      chars += this.textContent;
      displayer.textContent = chars;
      op1 = this.textContent;
      //   console.log(this);
    } else {
      //   console.log(chars);
      //   console.log(this.textContent);
      console.log(op1);
      let arrOftwo = chars.split(op1);
      op2 = this.textContent;
      console.log(op2);
      //   console.log(chars);
      operate(arrOftwo[0], op1, arrOftwo[1]);

      //   console.log(arrOftwo[0], sp, arrOftwo[1]);
    }
  }
}

function operate(num1, op, num2) {
  const n1 = Number(num1);
  const n2 = Number(num2);
  let ans = 0;

  switch (true) {
    case op == "+":
      ans = add(n1, n2);
      displayer.textContent = ans + op2;
      chars = ans + op2;
      sum = ans;
      nanCount = 1;
      break;

    case op == "−":
      ans = subtract(n1, n2);
      displayer.textContent = ans + op2;
      chars = ans + op2;
      sum = ans;
      nanCount = 1;
      break;

    case op == "×":
      //   console.log(multiply(n1, n2));
      displayer.textContent = multiply(n1, n2);

      break;

    case op == "÷":
      const temp = Math.round(divide(n1, n2) * 100) / 100;
      displayer.textContent = temp;
      break;

    case op == "%":
      //   console.log(remainder(n1, n2));
      displayer.textContent = remainder(n1, n2);
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
