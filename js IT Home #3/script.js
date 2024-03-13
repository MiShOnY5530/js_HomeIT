//1
function checkNumber(num) {
    if (num > 0) {
        return "Позитивне";
    } else if (num < 0) {
        return "Негативне";
    } else {
        return "Нуль";
    }
}

function checkNumberOne() {
    let num = prompt("1. Введіть число щоб вияснити чи воно позитивне, негативне чи нуль:");
    alert(checkNumber(num));
    console.log(checkNumber(num)); 
}


//2
function getDayName(num) {
  const days = ["Понеділок", "Вівторок", "Середа", "Четвер", "П’ятниця", "Субота", "Неділя"];
  if (num < 1 || num > 7) {
    return "Неправильний номер дня тижня";
  }
  return days[num - 1];
}

function getDayNameTwo() {
  let num = prompt("2. Введіть порядковий номер тижня: (1-7)");
  if (num >= 1 && num <= 7) {
    alert(getMonthName(num));
    console.log(getMonthName(num));
  } else {
    alert("Ви ввели некоректний номер тижня. Будь ласка, введіть число від 1 до 7.");
    console.log("Ви ввели некоректний номер тижня. Будь ласка, введіть число від 1 до 7.");
  }
}

//4
function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  }
  else if (year % 100 === 0) {
    return false;
  }
  else if (year % 4 === 0) {
    return true;
  }
  else {
    return false;
  }
}

function isLeapYearFour() {
let year = prompt("4. Введіть рік який являеться високосним:");
alert(isLeapYear(year));
console.log(isLeapYear(year)); 
}

//5
function convertToGrade(score) {
  if (score >= 90) {
      return 'A';
  } else if (score >= 80) {
      return 'B';
  } else if (score >= 70) {
      return 'C';
  } else if (score >= 60) {
      return 'D';
  } else {
      return 'F';
  }
}

function convertToGradeFive() {
  const testScore = prompt('Введіть кількість балів (0-100):');
  const grade = convertToGrade(Number(testScore));
  console.log(`Оцінка за тест: ${grade}`);
  alert(`Оцінка за тест: ${grade}`);
}


//6
function checkEvenOrOdd(number) {
  const result = number % 2 === 0 ? "парне" : "непарне";
  return result;
}

function checkEvenOrOddSix() {
  let number = prompt("6. Введіть число, щоб вияснити парне чи непарне:");
  alert(checkEvenOrOdd(number));
  console.log(checkEvenOrOdd(number)); 
  }


  //8
  function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function factorialEight() {
    let inputNumber = prompt("8. Введіть додатнє ціле число:");
    console.log(factorial(inputNumber));
} 


//9
function getMonthName(monthNumber) {
  const months = [
      'Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень',
      'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'
  ];
  return months[monthNumber - 1];
}


function getMonthNameNine() {
  let monthNumber = prompt("9. Введіть порядковий номер місяця: (1-12)");
  if (monthNumber >= 1 && monthNumber <= 12) {
    alert(getMonthName(monthNumber));
    console.log(getMonthName(monthNumber));
  } else {
    alert("Ви ввели некоректний номер місяця. Будь ласка, введіть число від 1 до 12.");
    console.log("Ви ввели некоректний номер місяця. Будь ласка, введіть число від 1 до 12.");
  }
}

//10
function isVowelOrConsonant(char) {
  const vowels = ['а', 'е', 'и', 'і', 'о', 'у', 'я', 'є', 'ю'];
  const normalizedChar = char.toLowerCase();

  if (vowels.includes(normalizedChar)) {
      return `Символ "${char}" є голосною буквою.`;
  } else {
      return `Символ "${char}" є приголосною буквою.`;
  }
}

function getMonthNameTen() {
  let inputChar = prompt("10. Введіть символ, щоб перевірити, чи є заданий символ голосною або приголосною буквою.");
  alert(isVowelOrConsonant(inputChar)); 
  console.log(isVowelOrConsonant(inputChar)); 
}

