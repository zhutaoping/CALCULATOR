"use strict";
const displayer = document.querySelector(".display");
const allBtn = document.querySelectorAll(".button");
allBtn.forEach((btn) => btn.addEventListener("click", operation));

let charsArr = [];
let op1 = "";
let op2 = "";
let str1 = "";
let str2 = "";
let index = 0;
const operators = ["+", "−", "×", "÷", "^", "="];

function fdIndex() {
  const firstOp = (el) =>
    el == "+" || el == "−" || el == "×" || el == "÷" || el == "^";
  return charsArr.findIndex(firstOp);
}

function charsToStr() {
  index = fdIndex();
  switch (true) {
    case charsArr[index] == "+":
      op1 = add;
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
    case charsArr[index] == "^":
      op1 = power;
      break;
  }
  const front = charsArr.slice(0, index);
  const back = charsArr.slice(index + 1);
  str1 = front.join("");
  str2 = back.join("");
}

// For dots
function countDot() {
  const dots = charsArr.filter((el) => el == ".");
  return dots.length;
}

function checkOp() {
  return charsArr.some((el) => operators.includes(el));
}

function cntDotB4Op() {
  index = fdIndex();
  const front = charsArr.slice(0, index);
  const dots = front.filter((el) => el == ".");
  return dots.length;
}

// For operators l.131
function countOp() {
  const ops = charsArr.filter(
    (el) => el == "+" || el == "−" || el == "×" || el == "÷" || el == "^"
  );
  return ops.length;
}

// Input validation and operators processing
function operation() {
  if (this.textContent == "+/−") {
    if (!isNaN(charsArr[charsArr.length - 1])) {
      return;
    }
    charsArr.push("-");
    displayer.textContent = charsArr.join("");
    return;
  }

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
    operators.includes(this.textContent)
    // (this.textContent == "−" ||
    //   this.textContent == "×" ||
    //   this.textContent == "÷" ||
    //   this.textContent == "^" ||
    //   this.textContent == "+" ||
    //   this.textContent == "=")
  )
    return;

  // Dots
  if (!checkOp() && countDot() >= 1 && this.textContent == ".") return;

  if (checkOp() && this.textContent == ".") {
    if (cntDotB4Op() > 0 && countDot() >= 2) {
      return;
    } else if (cntDotB4Op() < 1 && countDot() >= 1) {
      return;
    }
  }

  if (
    charsArr[charsArr.length - 1] == "." &&
    operators.includes(this.textContent)
  )
    return;

  if (charsArr[charsArr.length - 1] == "." && this.textContent == ".") return;

  // Operators
  if (this.textContent == "=") {
    charsToStr(charsArr);
    if (str2 == "") {
      return;
    } else {
      op2 = this.textContent;
      calc(str1, str2, op1);
    }
    return;
  }

  if (
    this.textContent == "+" ||
    this.textContent == "−" ||
    this.textContent == "×" ||
    this.textContent == "÷" ||
    this.textContent == "^"
  ) {
    while (countOp() > 0) {
      charsToStr(charsArr);
      if (str2 == "") {
        return;
      } else {
        op2 = this.textContent;
        calc(str1, str2, op1);
      }
      return;
    }
  }

  if (charsArr == "0" && !isNaN(this.textContent)) return;

  if (
    operators.includes(charsArr[charsArr.length - 1]) &&
    operators.includes(this.textContent)
  ) {
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
  // End of input validstions

  charsArr.push(this.textContent);
  displayer.textContent = charsArr.join("");
}

function calc(num1, num2, callback) {
  const ans = callback(Number(num1), Number(num2));
  charsArr = ans;
  if (op2 == "=") {
    charsArr = [...ans.toString()];
    displayer.textContent = ans;
    return;
  }
  charsArr = [...ans.toString(), op2];
  displayer.textContent = ans + op2;
}

function add(n1, n2) {
  return roundNum(n1 + n2);
}

function subtract(n1, n2) {
  return roundNum(n1 - n2);
}

function multiply(n1, n2) {
  return roundNum(n1 * n2);
}

function divide(n1, n2) {
  return roundNum(n1 / n2);
}

function power(n1, n2) {
  let ans = n1;
  if (n2 == 0) return 1;
  for (let i = 1; i < n2; i++) {
    ans *= n1;
  }
  return roundNum(ans);
}

function roundNum(n) {
  return Math.round(n * 100) / 100;
}
