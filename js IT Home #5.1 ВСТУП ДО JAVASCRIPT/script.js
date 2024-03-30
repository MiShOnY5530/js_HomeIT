//1
function sumNumbers(start, end) {
  let sum = 0;

  for (let i = start; i <= end; i++) {
    sum += i;
  }

  return sum;
}

function triggerSumNumbers() {

  const startNum = parseInt(prompt('Введіть початкове число:'));
  const endNum = parseInt(prompt('Введіть кінцеве число:'));

  const result = sumNumbers(startNum, endNum);

  alert(`Сума чисел від ${startNum} до ${endNum}: ${result}`);
}


//2 
function gcd(a, b) {
  for (; b > 0; ) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function triggerQcd() {

const num1 = parseInt(prompt("Введіть перше число:"));
const num2 = parseInt(prompt("Введіть друге число:"));

const nod = gcd(num1, num2);

console.log(`Найбільший спільний дільник ${num1} і ${num2} дорівнює ${nod}`);
alert(`Найбільший спільний дільник ${num1} і ${num2} дорівнює ${nod}`);
}

//3
function findDivisors(number) {
  let divisors = [];

  if (number <= 0) {
    console.log("Введіть позитивне число!");
    return;
  }

  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      divisors.push(i);
    }
  }

  console.log("Дільники числа " + number + ": " + divisors.join(", "));
  alert("Дільники числа " + number + ": " + divisors.join(", ")); 
}


//5
function displayStats() {
  let positiveCount = 0, negativeCount = 0, zeroCount = 0, evenCount = 0, oddCount = 0;

  for (let i = 0; i < 10; i++) {
      let number = prompt("Введіть число (" + (i + 1) + " з 10):", "0");
      number = Number(number);

      if (number > 0) positiveCount++;
      if (number < 0) negativeCount++;
      if (number === 0) zeroCount++;
      if (number % 2 === 0) evenCount++;
      if (number % 2 !== 0) oddCount++;
  }
  console.log("Позитивних чисел: " + positiveCount + "\n" +
  "Негативних чисел: " + negativeCount + "\n" +
  "Нулів: " + zeroCount + "\n" +
  "Парних чисел: " + evenCount + "\n" +
  "Непарних чисел: " + oddCount);

  alert("Позитивних чисел: " + positiveCount + "\n" +
        "Негативних чисел: " + negativeCount + "\n" +
        "Нулів: " + zeroCount + "\n" +
        "Парних чисел: " + evenCount + "\n" +
        "Непарних чисел: " + oddCount);
}


//7
function shiftDigits(number, shift) {
  let result = "";
  let i = 0;

  while (i < number.length) {
    let shiftedIndex = (i + shift) % number.length;
    result += number[shiftedIndex];
    i++;
  }

  return result;
}

const number = 123456;
const shift = 2;

const shiftedNumber = shiftDigits(number, shift);
console.log(`Вихідне число: ${number}`);
console.log(`Зрушення на ${shift} цифр: ${shiftedNumber}`);


//8
function showDayOfWeek() {
  let dayOfWeek = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];
  let currentDay = dayOfWeek[new Date().getDay()];
  console.log (`День тижня: ${currentDay}`);
}

showDayOfWeek();



//9
for (let i = 2; i <= 9; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}