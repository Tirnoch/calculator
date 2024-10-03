class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }
  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
  }
  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }
  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return;
    if (this.currentOperand.toString().length > 16) {
      this.currentOperand.substring(0, 16);
      return;
    }
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }
  chooseOperation(operation) {
    if (this.currentOperand === '') return;
    if (this.previousOperand !== '') {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }
  compute() {
    let result;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case 'x':
        result = prev * current;
        break;
      case '÷':
        if (current === 0) {
          result = 'dividedByZero';
        } else result = prev / current;
        break;
      default:
        return;
    }
    this.currentOperand = result;
    this.operation = undefined;
    this.previousOperand = '';
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString();
    if (stringNumber === 'dividedByZero') return "don't even try it dude.";
    const integerDigits = parseFloat(stringNumber.split('.')[0]);
    const decimalDigits = stringNumber.split('.')[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = '';
    } else {
      integerDisplay = integerDigits.toLocaleString('en', {
        maximumFractionDigits: 0,
      });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }
  updateDisplay() {
    this.currentOperandTextElement.innerText = this.getDisplayNumber(
      this.currentOperand
    );
    if (this.operation != null) {
      this.previousOperandTextElement.innerText = `${this.getDisplayNumber(
        this.previousOperand
      )} ${this.operation}`;
    } else this.previousOperandTextElement.innerText = '';
  }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operator]');
const clearButton = document.querySelector('[data-clear]');
const deleteButton = document.querySelector('[data-delete]');
const equalsButton = document.querySelector('[data-equals]');
const previousOperandTextElement = document.querySelector(
  '[data-previous-operand]'
);
const currentOperandTextElement = document.querySelector(
  '[data-current-operand]'
);

const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);
numberButtons.forEach((button) =>
  button.addEventListener('click', () => {
    const key = button.innerText;
    calculator.appendNumber(key);
    calculator.updateDisplay();
  })
);
operationButtons.forEach((button) =>
  button.addEventListener('click', () => {
    const key = button.innerText;
    console.log(`You have pressed ${key}`);
    calculator.chooseOperation(key);
    calculator.updateDisplay();
  })
);
equalsButton.addEventListener('click', () => {
  calculator.compute();
  calculator.updateDisplay();
});

clearButton.addEventListener('click', () => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener('click', () => {
  calculator.delete();
  calculator.updateDisplay();
});

// Keyboard Support
window.addEventListener('keydown', function (e) {
  key = e.key;
  if (
    key === '0' ||
    key === '1' ||
    key === '2' ||
    key === '3' ||
    key === '4' ||
    key === '5' ||
    key === '6' ||
    key === '7' ||
    key === '8' ||
    key === '9' ||
    key === '.'
  ) {
    calculator.appendNumber(key);
    calculator.updateDisplay();
  } else if (key === '+' || key === '-' || key === '*' || key === '/') {
    calculator.chooseOperation(key);
    calculator.updateDisplay();
  } else if (key === 'Enter' || key === '=') {
    calculator.compute();
    calculator.updateDisplay();
  } else if (key === 'Backspace') {
    calculator.delete();
    calculator.updateDisplay();
  } else if (key === 'Escape') {
    calculator.clear();
    calculator.updateDisplay();
  }
});
