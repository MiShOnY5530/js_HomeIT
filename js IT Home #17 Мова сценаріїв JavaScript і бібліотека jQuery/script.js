// 1. Функція піднесення числа до степеня
function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}

function myPower() {
    const base = prompt("Введіть базу:");
    const exponent = prompt("Введіть експоненту:");
    const result = power(base, exponent);
    alert("Результат: " + result);
}


// 2. Функція пошуку найбільшого спільного дільника
function divisor(a, b) {
    if (b === 0) {
        return a;
    } else {
        return divisor(b, a % b);
    }
}

function myDivisor() {
    const a = prompt("Введіть перше число:");
    const b = prompt("Введіть друге число:");
    const result = divisor(a, b);
    alert("Найбільший спільний дільник: " + result);
}

// 3. Функція для пошуку максимальної цифри в числі
function maxNumber(num) {
    if (num === 0) {
        return 0;
    } else {
        return Math.max(num % 10, maxNumber(Math.floor(num / 10)));
    }
}

function myMaxNumber() {
    const num = prompt("Введіть число:");
    const result = maxNumber(num);
    alert("Максимальна цифра в числі: " + result);
}

// 5. Функція для виведення всіх множників переданого числа в зростаючому порядку
function  multipliers(num, i = 2, factors = []) {
    if (i > num) return factors;
    if (num % i === 0) {
        return  multipliers(num / i, i, [...factors, i]);
    }
    return  multipliers(num, i + 1, factors);
}

function myMultipliers() {
    const num = prompt("Введіть число:");
    const result = multipliers(num);
    alert("Множники числа: " + result);
}