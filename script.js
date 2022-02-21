"use strict";

//  charsArr.some(
//         (el) => el == "+" || el == "−" || el == "×" || el == "÷" || el == "%"
//       ) &&
//       charsArr.length == 2

const displayer = document.querySelector(".display");
const allBtn = document.querySelectorAll(".button");
allBtn.forEach((btn) => btn.addEventListener("click", operation));

let charsArr = [];
let op1 = "";
let op2 = "";
let str1 = "";
let str2 = "";
let ans = 0;
let index = 0;
const operators = ["+", "−", "×", "÷", "%", "="];

function charsToStr(c) {
  // index = charsArr.findIndex(isNaN);

  const firstOp = (el) =>
    el == "+" || el == "−" || el == "×" || el == "÷" || el == "%";

  index = charsArr.findIndex(firstOp);

  switch (true) {
    case charsArr[index] == "+":
      op1 = add;
      // console.log(op1);
      break;
    case charsArr[index] == "−":
      op1 = subtract;
      break;
    case charsArr[index] == "×":
      op1 = multiply;
      break;
    case charsArr[index] == "÷":
      op1 = divide;
      break;
    case charsArr[index] == "%":
      op1 = remainder;
      break;
  }

  const front = charsArr.slice(0, index);
  const back = charsArr.slice(index + 1);
  str1 = front.join("");
  str2 = back.join("");
  // console.log(str1, str2, op1);
}

function operation() {
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

  if (
    charsArr == "" &&
    (this.textContent == "−" ||
      this.textContent == "×" ||
      this.textContent == "÷" ||
      this.textContent == "%" ||
      this.textContent == "+" ||
      this.textContent == "=")
  )
    return;

  if (
    charsArr[charsArr.length - 1] == "." &&
    operators.includes(this.textContent || "=")
  )
    return;

  if (
    charsArr != "" &&
    charsArr.every((el) => el == ".") &&
    this.textContent == "."
  )
    return;

  if (this.textContent == "=") {
    // console.log(charsArr);
    charsToStr(charsArr);
    if (str2 == "") {
      return;
    } else {
      // console.log(op1);
      op2 = this.textContent;
      calc(str1, str2, op1);
    }
    return;
  }

  if (charsArr == "0" && !isNaN(this.textContent)) return;

  if (
    operators.includes(charsArr[charsArr.length - 1]) &&
    operators.includes(this.textContent)
  ) {
    console.log(charsArr[charsArr.length - 1]);
    return;
  }

  if (
    operators.includes(charsArr[charsArr.length - 1]) &&
    this.textContent == "."
  ) {
    charsArr.push("0");
  }

  if (charsArr == "" && this.textContent == ".") {
    charsArr.unshift("0");
  }

  charsArr.push(this.textContent);
  displayer.textContent = charsArr.join("");
}

let calc = function (num1, num2, cb) {
  const n1 = Number(num1);
  const n2 = Number(num2);
  let ans = cb(n1, n2);
  charsArr = ans;
  charsArr = [...ans.toString()];
  displayer.textContent = ans;
  console.log(charsArr);
};

function add(n1, n2) {
  const rounded = Math.round((n1 + n2) * 100) / 100;
  return rounded;
}

function subtract(n1, n2) {
  const rounded = Math.round((n1 - n2) * 100) / 100;
  return rounded;
}

function multiply(n1, n2) {
  const rounded = Math.round(n1 * n2 * 100) / 100;
  return rounded;
}

function divide(n1, n2) {
  const rounded = Math.round((n1 / n2) * 100) / 100;
  return rounded;
}

function remainder(n1, n2) {
  const rounded = Math.round((n1 % n2) * 100) / 100;
  return rounded;
}

//switch (true) {
//   case op == "+":
//     ans = add(n1, n2);
//     // console.log(n1, n2);
//     if (op2 == "=") {
//       // displayer.textContent = ans + op2;
//       // console.log(ans);
//       charsArr = ans.toString().split("");
//       // console.log(charsArr);
//     } else {
//       displayer.textContent = ans;
//       // charsArr = ans;
//     }

//     break;

//   case op == "−":
//     ans = subtract(n1, n2);
//     displayer.textContent = ans;
//     charsArr = ans.toString().split("");
//     break;

//   case op == "×":
//     displayer.textContent = multiply(n1, n2);

//     break;

//   case op == "÷":
//     const temp = Math.round(divide(n1, n2) * 100) / 100;
//     displayer.textContent = temp;
//     break;

//   case op == "%":
//     displayer.textContent = remainder(n1, n2);
//     break;
// }
//////////////////////////////////////////////////

// console.log(charsArr);
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
// calc(arrOftwo[0], op1, arrOftwo[1]);

//   console.log(arrOftwo[0], sp, arrOftwo[1]);
// }
