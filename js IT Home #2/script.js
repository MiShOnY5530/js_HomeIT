function sendRequest() {
  return fetch('https://jsonplaceholder.typicode.com/todos/10')
    .then(response => response.json())
    .then(json => console.log(json));
}


// 1 
function checkNumber() {
  const userInput = parseFloat(prompt("Введіть число:"));
  if (userInput > 0) {
      alert("Число позитивне");
      console.log("число позитивне");
  } else if (userInput < 0) {
      alert("Число від'ємне");
      console.log("число від'ємне");
  } else {
      alert("Число дорівнює нулю");
      console.log("число дорівнює нулю");
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















