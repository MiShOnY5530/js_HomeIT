//1
const user = {
  name: 'Олександр',
  age: 29
};

console.log('Імя:', user.name);
console.log('Вік:', user.age);

//2
let number = [1, 2, 3, 4, 5, 6];

  number.forEach(number => {
    console.log(number);
  });


//3
function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

let numbers = [1, 3, 5, 7, 9];
console.log(sumArray(numbers));


//5
let obj = {
  pro1: 10,
  pro2: 30,
  pro3: 50,
  pro4: 70
};

let sum = 0;

for (let key in obj) {
  sum += obj[key];
}

console.log(`Сума всіх чисел: ${sum}`);


//7
function isPalindrome(word) {
  return word === word.split('').reverse().join('');
}

console.log(isPalindrome('радар'));
console.log(isPalindrome('комп’ютер'));


//7.1 через цикли без методів
function isPalindrome(word) {
    let reversedWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }
    return word === reversedWord;
  }
  
  console.log(isPalindrome("мам мам"));


// 8
function getEvenNumbers(array) {
  let evenNumbers = array.filter(number => number % 2 === 0);
  return evenNumbers;
}


// 9
const person = {
  height: 172,
  age: 29,

  calculateWeight: function() {
    // за формулою Лоренца
    const idealWeight = (this.height - 100) - (this.height - 150) / 4 + (this.age - 20) / 5;
    return idealWeight.toFixed(1);
  },
};

const weight = person.calculateWeight();
console.log(`Ідеальна вага: ${weight} кг`);


// 11
function factorial(n) {
  if (n === 0 || n === 1) {
      return 1;
  } else {
      return n * factorial(n - 1);
  }
}
console.log(factorial(5));
console.log(factorial(10));


// 12
function incrementArray(obj) {
  if (!Array.isArray(obj.array)) {
    throw new TypeError("Властивість 'array' має бути масивом");
  }

  const newArray = obj.array.map(number => number + 1);
  return { ...obj, array: newArray };
}

const myObject = {
  name: "AleX",
  array: [1, 2, 3],
};

const updatedObject = incrementArray(myObject);

console.log(myObject);
console.log(updatedObject);


// 13
function createCounter() {
  let count = 0;
  return function() {
    count += 1;
    return count;
  };
}

const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());

//14
function addNumbersWithDelay(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
}

addNumbersWithDelay(5, 10).then(console.log);

//15
async function asyncAddNumbersWithDelay(a, b) {
  const result = await addNumbersWithDelay(a, b);
  console.log(result);
}

asyncAddNumbersWithDelay(5, 10);
