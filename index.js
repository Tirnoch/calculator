const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
const numbers = document.querySelectorAll('number');
let buffer = '';
let displayValue = '0';

// KOPYA ÇEKME CODEIUMSUZ BURAYI TEKRAR YAZ

// let firstOperand = null;
// let secondOperand = null;
// let firstOperator = null;
// let secondOperator = null;

// function inputNumber(number) {
//   if (firstOperator === null) {
//     if (displayValue === '0' || displayValue === 0) {
//       displayValue = number;
//     } else if (displayValue === firstOperand) {
//       displayValue = number;
//     } else {
//       displayValue += number;
//     }
//   } else {
//     if (displayValue === firstOperand) {
//       displayValue = number;
//     } else {
//       displayValue += number;
//     }
//   }
// }

// function inputOperator(e) {
//   if (firstOperator === null) {
//     firstOperator = e;
//     firstOperand = displayValue;
//   } else if (secondOperator === null) {
//     secondOperator = e;
//     secondOperand = displayValue;
//   }
// }

// function inputDecimal() {
//   if (displayValue === firstOperand || displayValue === secondOperand) {
//     displayValue = '0.';
//   } else if (!displayValue.includes('.')) {
//     displayValue += '.';
//   }
// }
// function deleteLast() {
//   if (displayValue.length > 1) {
//     displayValue = displayValue.slice(0, -1);
//   } else {
//     displayValue = '0';
//   }
// }
window.addEventListener('keydown', function (e) {
  key = e.key;
  console.log(`You have pressed ${key}`);
  //   if (
  //     key === '0' ||
  //     key === '1' ||
  //     key === '2' ||
  //     key === '3' ||
  //     key === '4' ||
  //     key === '5' ||
  //     key === '6' ||
  //     key === '7' ||
  //     key === '8' ||
  //     key === '9'
  //   ) {
  //     inputNumber(key);
  //     updateDisplay();
  //   } else if (key === '+' || key === '-' || key === '/' || key === '*') {
  //     inputOperator(key);
  //     updateDisplay();
  //   } else if (key === '.') {
  //     inputDecimal();
  //     updateDisplay();
  //   } else if (key === 'Enter') {
  //     evaluate();
  //     updateDisplay();
  //   } else if (key === 'Backspace') {
  //     deleteLast();
  //     updateDisplay();
  //   } else if (key === 'Escape') {
  //     clearDisplay();
  //     updateDisplay();
  //   }
});

// function clearDisplay() {
//   displayValue = '0';
//   firstOperand = null;
//   secondOperand = null;
//   firstOperator = null;
//   secondOperator = null;
//   result = null;
// }

buttons.forEach((button) =>
  button.addEventListener('click', function () {
    const key = button.textContent.trim();
    console.log(`You have pressed ${key}`);
  })
);

function updateDisplay() {
  display.innerText = displayValue;
  if (displayValue.length > 13) {
    displayValue = displayValue.substring(0, 13);
    display.innerText = displayValue;
  }
  console.log(`Current display is ${displayValue} right?`);
}

// Your calculator should not evaluate more than a single pair of numbers at a time. Example: you press a number button (12), followed by an operator button (+), a second number button (7), and finally a second operator button (-). Your calculator should then do the following: first, evaluate the first pair of numbers (12 + 7), second, display the result of that calculation (19), and finally, use that result (19) as the first number in your new calculation, along with the next operator (-).
