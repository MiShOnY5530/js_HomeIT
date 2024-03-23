//Цикл for:

//1 Перший цикл ітертує від 1 до 100 і виводе кожне число.
function printNumbersFrom1To100() {
  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
}

printNumbersFrom1To100(); 


//2 Другий цикл ітертує від 11 до 33 і виводе кожне число.
function printNumbersFrom11To33() {
  for (let i = 11; i <= 33; i++) {
    console.log(i);
  }
}

//3 Третій цикл ітертує від 0 до 100 і виводе лише парні число.
function printNumbersFrom2To4() {
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
   }
  }
}

printNumbersFrom2To4();

//4 Четвертий цикл знаходить суму всіх чисел від 1 до 100.
function calculateSum() {
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    sum += i;
  }
  console.log(`Сума чисел від 1 до 100: ${sum}`);
}

calculateSum();


// Цей цикл ітератує від 1 до 100 і друкує кожне число.
function printNumbersUsingWhile() {
  let i = 1;
  while (i <= 100) {
    console.log(i);
    i++;
  }
}

printNumbersUsingWhile();


// Цикл do-while, який ітератує від 1 до 10 і друкує кожне число
function printNumbersDoWhile() {
  let i = 1;
  do {
    console.log(i);
    i++;
  } while (i <= 10);
}

printNumbersDoWhile(); 
