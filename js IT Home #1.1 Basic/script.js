function sendRequest() {
  return fetch('https://jsonplaceholder.typicode.com/todos/10')
    .then(response => response.json())
    .then(json => console.log(json));
}


// 1 
let myNumber = 42;
console.log(myNumber);

// 2
let myString = "Hello, World!";
myString = "Goodbye, World!";
console.log(myString);

// 3
let userName = prompt("Введіть ваше ім'я:");

if (userName === "" || userName === null) {
  alert("Ім'я не може бути порожнім!");
  userName = prompt("Введіть ваше ім'я:");
}

alert("Доброго дня., " + userName + "!");

// 4
const a = 10;
const b = 5;

const sum = a + b;

const difference = a - b;

const product = a * b;

const quotient = a / b;

console.log('Результат при додаванні', sum);
console.log('Результат при відніманні:', difference);
console.log('Результат при множенні:', product);
console.log('Результат при діленні:', quotient);


// 5
const isRaining = true;

const isSunny = false;

console.log(`isRaining: ${isRaining}`);
console.log(`isSunny: ${isSunny}`);
