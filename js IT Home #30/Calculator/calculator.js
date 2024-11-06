class CalculatorModel {
    constructor() {
        this.currentValue = '0';
        this.previousValue = null;
        this.operator = null;
    }

    appendNumber(number) {
        if (this.currentValue === '0' && number !== '.') {
            this.currentValue = number;
        } else {
            this.currentValue += number;
        }
    }

    chooseOperator(operator) {
        if (this.operator && this.previousValue !== null) {
            this.calculate();
        }
        this.operator = operator;
        this.previousValue = this.currentValue;
        this.currentValue = '0';
    }

    calculate() {
        const prev = parseFloat(this.previousValue);
        const current = parseFloat(this.currentValue);
        if (isNaN(prev) || isNaN(current)) return;

        switch (this.operator) {
            case '+':
                this.currentValue = (prev + current).toString();
                break;
            case '-':
                this.currentValue = (prev - current).toString();
                break;
            case '*':
                this.currentValue = (prev * current).toString();
                break;
            case '/':
                this.currentValue = (current !== 0 ? (prev / current).toString() : "Помилка");
                break;
            default:
                return;
        }
        this.operator = null;
        this.previousValue = null;
    }

    clear() {
        this.currentValue = '0';
        this.previousValue = null;
        this.operator = null;
    }
}

class CalculatorView {
    constructor() {
        this.displayElement = document.getElementById('display');
    }

    updateDisplay(value) {
        this.displayElement.textContent = value;
    }

    bindButtonClicks(handler) {
        document.querySelectorAll('.btn').forEach(button => {
            button.addEventListener('click', () => {
                handler(button.dataset.value);
            });
        });
    }
}

class CalculatorController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.bindButtonClicks(this.handleButtonClick);
        this.updateDisplay();
    }

    updateDisplay() {
        this.view.updateDisplay(this.model.currentValue);
    }

    handleButtonClick = (value) => {
        if (!isNaN(value) || value === '.') {
            this.model.appendNumber(value);
        } else if (value === 'C') {
            this.model.clear();
        } else if (value === '=') {
            this.model.calculate();
        } else {
            this.model.chooseOperator(value);
        }
        this.updateDisplay();
    };
}

const app = new CalculatorController(new CalculatorModel(), new CalculatorView());