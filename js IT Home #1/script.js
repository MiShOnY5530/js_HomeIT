function sendRequest() {
  return fetch('https://jsonplaceholder.typicode.com/todos/10')
    .then(response => response.json())
    .then(json => console.log(json));
}


// 1 
let name = prompt("Будь ласка, введіть ваше ім'я");
alert(`Привіт, ${name}!`);

// 2
const birthYear = prompt("Введіть рік вашого народження:");
const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;
alert(`Вам ${age} лет!`);

// 3
let sideLength = prompt("Введіть довжину сторони квадрата:");
let perimeter = 4 * sideLength;
alert(`Периметр квадрата дорівнює ${perimeter}`);

// 4
const radius = prompt("Введіть радіус кола:");
if (!isNaN(radius)) {
  const area = Math.PI * radius ** 2;
  alert(`Площа кола з радіусом ${radius} складає ${area.toFixed(2)}`);
} else {
  alert("Введено невірне значення радіуса!");
}

// 5
let distance = prompt("Введіть відстань в км між двома містами:");
let time = prompt("Введіть за скільки годин ви хочете дістатися:");

let speed = distance / time;

alert(`Вам необхідно рухатись зі швидкістю ${speed} км/год, щоб встигнути вчасно.`);


// 7
let flashDriveSizeGb = prompt("Введіть обсяг флешки в Гб:");
let fileSizeMb = 820;
let flashDriveSizeMb = flashDriveSizeGb * 1024;
let filesAmount = Math.floor(flashDriveSizeMb / fileSizeMb);

alert(`На флешку обсягом ${flashDriveSizeGb} Гб вміщується ${filesAmount} файлів розміром 820 Мб.`);


// 8
let money = prompt("Введіть суму грошей у гаманці:");
let price = prompt("Введіть ціну однієї шоколадки:");

let chocolates = Math.floor(money / price);
let change = money % price;

alert(`Ви можете придбати ${chocolates} шоколадок. У вас залишиться ${change} здачі.`);

// 9
let number = prompt("Введіть тризначне число:");

let reversedNumber = 0;
while (number > 0) {
    reversedNumber = reversedNumber * 10 + number % 10;
    number = Math.floor(number / 10);
}

alert(`Ваше число задом наперед: ${reversedNumber}`);