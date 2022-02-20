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
let charsArr = [];
let op1 = "";
let op2 = "";
// let charsToArr = [];
let index = 0;
// let nanCount = 0;
const operators = ["+", "−", "×", "÷", "%", "="];

function charsToStr(c) {
  index = charsToArr.findIndex(isNaN);
  const back = charsToArr.splice(index + 1);
  // console.log(charsToArr);
  charsToArr.pop();
  const front = charsToArr;
  const str1 = front.join("");
  const str2 = back.join("");
  console.log(str1, str2);
}

// function checkDoubleOp() {
//   console.log(charsArr);
//   const l = charsArr.length;
//   if (l > 2 && isNaN(charsArr[l - 1])) {
//     console.log("error");
//     charsArr.pop();

//     displayer.textContent.slice(0, -1);
//     return false;
//   }
// }

function storeChar() {
  if (this.textContent == "C") {
    displayer.textContent = "";
    charsArr = [];
    return;
  }

  if (this.textContent == "⌫") {
    displayer.textContent = displayer.textContent.slice(0, -1);
    charsArr.pop();
    console.log(charsArr);
    return;
  }

  if (this.textContent == "=") {
    if (true) {
      return;
    } else if (
      charsArr.some(
        (el) => el == "+" || el == "−" || el == "×" || el == "÷" || el == "%"
      ) &&
      charsArr.length == 2
    ) {
      console.log("DDD");
    }
    // operate(num1, this.textContent, num2);
  }

  if (
    charsArr == "" &&
    (this.textContent == "−" ||
      this.textContent == "×" ||
      this.textContent == "÷" ||
      this.textContent == "%" ||
      this.textContent == "+")
  )
    return;

  if (charsArr == "0" && !isNaN(this.textContent)) return;

  if (
    operators.includes(charsArr[charsArr.length - 1]) &&
    operators.includes(this.textContent)
  ) {
    // console.log(charsArr[charsArr.length - 1]);
    return;
  }

  charsArr.push(this.textContent);
  displayer.textContent = charsArr.join("");

  console.log(charsArr);
  // charsArr.pop();
  // displayer.textContent.slice(0, -1);

  // if (this.textContent == "C") {
  //   displayer.textContent = "";
  //   charsArr = [];
  //   return;
  // }
  // if (this.textContent == "⌫") {
  //   console.log(charsArr);
  //   charsArr.pop();
  //   displayer.textContent = displayer.textContent.slice(0, -1);
  //   // return;
  // }
  // // if (!isNaN(this.textContent)) {
  //   // chars += this.textContent;
  //   // displayer.textContent = chars;
  //   // charsToArr = chars.split("");
  //   // console.log(charsToArr);
  // } else {
  //   if (true) {
  //     // chars += this.textContent;
  //     // displayer.textContent = chars;
  //     // // index = charsToArr.findIndex(Number.isNaN);
  //     // op1 = this.textContent;
  //   } else {
  //   console.log(chars);
  //   console.log(this.textContent);
  // console.log(op1);
  // arrOftwo = chars.split(op1);
  // op2 = this.textContent;
  // console.log(op2);
  //   console.log(chars);
  // operate(arrOftwo[0], op1, arrOftwo[1]);

  //   console.log(arrOftwo[0], sp, arrOftwo[1]);
  // }
  // }
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
      // nanCount = 1;
      break;

    case op == "−":
      ans = subtract(n1, n2);
      displayer.textContent = ans + op2;
      chars = ans + op2;
      sum = ans;
      // nanCount = 1;
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
