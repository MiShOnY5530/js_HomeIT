function sendRequest() {
  return fetch('https://jsonplaceholder.typicode.com/todos/10')
    .then(response => response.json())
    .then(json => console.log(json));
}


// 1 
function checkNumber() {
  let isCompleted = false;

  const userInput = parseFloat(prompt("Введіть число:"));

  switch (true) {
    case userInput > 0:
      alert("Число позитивне");
      console.log("число позитивне");
      isCompleted = true;
      break;
    case userInput < 0:
      alert("Число від'ємне");
      console.log("число від'ємне");
      isCompleted = true;
      break;
    default:
      alert("Число дорівнює нулю");
      console.log("число дорівнює нулю");
      isCompleted = true;
  }

  if (!isCompleted) {
    // Додаткова перевірка, якщо користувач ввів не число
    alert("Введіть дійсне число!");
  }
}



// 2
function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

const button = document.querySelector('.btn-outline-primary');
button.addEventListener('click', () => {

  const isLeap = isLeapYear(2024);

  if (isLeap) {
    console.log(`Рік 2024 є високосним`);
  } else {
    console.log(`Рік 2024 не є високосним`);
  }
});


//5
function calculateOperations() {
  const firstNumber = parseFloat(prompt("Введите первое число:"));
  const secondNumber = parseFloat(prompt("Введите второе число:"));

  if (isNaN(firstNumber) || isNaN(secondNumber)) {
      alert("Пожалуйста, введите корректные числа.");
      return;
  }

  const sum = firstNumber + secondNumber;
  const difference = firstNumber - secondNumber;
  const product = firstNumber * secondNumber;
  const division = firstNumber / secondNumber;

  console.log(`Сумма чисел: ${sum}`);
  console.log(`Разница между числами: ${difference}`);
  console.log(`Произведение чисел: ${product}`);
  console.log(`Результат деления: ${division}`);
}

// Для отображения результатов только при нажатии на кнопку
document.querySelector(".btn").addEventListener("click", calculateOperations);


//4
function checkDivisibility() {
  const number = parseFloat(prompt("Введіть число:"));
  if (number % 3 === 0 || number % 5 === 0) {
    console.log("Число кратне 3 або 5");
  } else {
    console.log("Число не є кратним 3 або 5");
  }
}














