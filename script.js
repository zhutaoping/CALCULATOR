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
const operators = ["+", "−", "×", "÷", "%", "="];

function fdIndex() {
  const firstOp = (el) =>
    el == "+" || el == "−" || el == "×" || el == "÷" || el == "%";
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
    case charsArr[index] == "%":
      op1 = remainder;
      break;
  }
  const front = charsArr.slice(0, index);
  const back = charsArr.slice(index + 1);
  str1 = front.join("");
  str2 = back.join("");
  console.log(str1, str2, op1);
}

// For dots
function countDot() {
  const dots = charsArr.filter((el) => el == ".");
  const countDot = dots.length;
  return countDot;
}

function checkOp() {
  return charsArr.some((el) => operators.includes(el));
}

function cntDotB4Op() {
  index = fdIndex();
  const front = charsArr.slice(0, index);
  const dots = front.filter((el) => el == ".");
  const cb4 = dots.length;
  return cb4;
}

// For operators l.131
function countOp() {
  const ops = charsArr.filter(
    (el) => el == "+" || el == "−" || el == "×" || el == "÷" || el == "%"
  );
  const countOp = ops.length;
  return countOp;
}

// Input validation and operators processing
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
      // console.log(op1);
      op2 = this.textContent;
      calc(str1, str2, op1);
    }
    return;
  }

  if (this.textContent == "+") {
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

  if (this.textContent == "−") {
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

  if (this.textContent == "×") {
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

  if (this.textContent == "÷") {
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

  if (this.textContent == "%") {
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

  charsArr.push(this.textContent);
  displayer.textContent = charsArr.join("");
  // End of input validstions
}

let calc = function (num1, num2, cb) {
  const n1 = Number(num1);
  const n2 = Number(num2);
  let ans = cb(n1, n2);
  charsArr = ans;
  if (op2 == "=") {
    charsArr = [...ans.toString()];
    displayer.textContent = ans;
    return;
  }
  charsArr = [...ans.toString(), op2];
  displayer.textContent = ans + op2;
};

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

function remainder(n1, n2) {
  return roundNum(n1 % n2);
}

function roundNum(n) {
  return Math.round(n * 100) / 100;
}
