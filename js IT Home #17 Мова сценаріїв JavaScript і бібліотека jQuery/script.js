// 1. Функція піднесення числа до степеня
function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}

// 2. Функція пошуку найбільшого спільного дільника
function divisor(a, b) {
    if (b === 0) {
        return a;
    } else {
        return divisor(b, a % b);
    }
}

// 3. Функція для пошуку максимальної цифри в числі
function maxNumber(num) {
    if (num === 0) {
        return 0;
    } else {
        return Math.max(num % 10, maxNumber(Math.floor(num / 10)));
    }
}


// 5. Функція для виведення всіх множників переданого числа в зростаючому порядку
function  multipliers(num, i = 2, factors = []) {
    if (i > num) return factors;
    if (num % i === 0) {
        return  multipliers(num / i, i, [...factors, i]);
    }
    return  multipliers(num, i + 1, factors);
}

// 6. Функція, яка повертає число Фібоначчі за переданим порядковим номером
function fibonacci(n) {
    if (n <= 2) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
