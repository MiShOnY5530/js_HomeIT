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

  console.log('#1 Сума чисел від ${startNum} до ${endNum}: ${result}');
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


//4
function countDigits(number) {
  let count = 0;
  do {
    number = Math.floor(number / 10);
    count++;
  } while (number > 0);
  return count;
}
  

const num = 12345;
const digitsCount = countDigits(num);
console.log(`Количество цифр в числе ${num}: ${digitsCount}`);


