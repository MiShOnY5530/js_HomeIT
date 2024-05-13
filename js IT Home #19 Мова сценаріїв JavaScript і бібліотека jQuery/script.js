//1 if
const age = prompt("Введите ваш возраст", "");

if (age >= 0 && age <= 2) {
    alert("Вы ребенок");
} else if (age >= 12 && age <= 18) {
    alert("Вы подросток");
} else if (age >= 18 && age <= 60) {
    alert("Вы взрослый");
} else if (age > 60) {
    alert("Вы пенсионер");
} else {
    alert("Возраст введен некорректно");
}

//2 switch
const numberOne = prompt("Введите число от 0 до 9", "");

switch (numberOne) {
    case '1':
        alert("!");
        break;
    case '2':
        alert("@");
        break;
    case '3':
        alert("#");
        break;
    case '4':
        alert("$");
        break;
    case '5':
        alert("%");
        break;
    case '6':
        alert("^");
        break;
    case '7':
        alert("&");
        break;
    case '8':
        alert("*");
        break;
    case '9':
        alert("(");
        break;
    default:
        alert("Число введено некорректно");
}

//3 if
const number = prompt("Введите трехзначное число", "");

const firstDigit = Math.floor(number / 100);
const secondDigit = Math.floor((number % 100) / 10);
const thirdDigit = number % 10;

if (firstDigit === secondDigit || firstDigit === thirdDigit || secondDigit === thirdDigit) {
    alert("В числе есть одинаковые цифры");
} else {
    alert("В числе нет одинаковых цифр");
}

//4 if
const year = prompt("Введите год", "");

if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    alert("Год високосный");
} else {
    alert("Год не високосный");
}

//5 if
// const number = prompt("Введите пятиразрядное число", "");
//
// const firstDigit = Math.floor(number / 10000);
// const secondDigit = Math.floor((number % 10000) / 1000);
// const fourthDigit = Math.floor((number % 100) / 10);
// const fifthDigit = number % 10;
//
// if (firstDigit == fifthDigit && secondDigit == fourthDigit) {
//     alert("Число является палиндромом");
// } else {
//     alert("Число не является палиндромом");
// }



//7 if
const sum = prompt("Введите сумму покупки", "");

let discount;
if (sum >= 200 && sum < 300) {
    discount = 3;
} else if (sum >= 300 && sum < 500) {
    discount = 5;
} else if (sum >= 500) {
    discount = 7;
} else {
    alert("Скидка не предусмотрена");
}

const total = sum - (sum * discount / 100);
alert(`Сумма к оплате со скидкой: ${total}`);



//8 if
const circumference = prompt("Введите длину окружности", "");
const squarePerimeter = prompt("Введите периметр квадрата", "");

const radius = circumference / (2 * Math.PI);

const side = squarePerimeter / 4;

if (radius <= side / 2) {
    alert("Окружность может поместиться в указанный квадрат");
} else {
    alert("Окружность не может поместиться в указанный квадрат");
}


