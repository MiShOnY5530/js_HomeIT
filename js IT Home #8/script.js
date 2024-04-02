//1
const element = document.getElementById("myElement");

    element.textContent = "1. Hello, World!";
    element.style.backgroundColor = "red";

//2
const elements = document.getElementsByClassName("myClass");

for (const element of elements) {
  element.textContent = "2. New Text";
}

for (const element of elements) {
  element.classList.add("highlight");
}

//3
console.log(element.id);

//4
for (const element of elements) {
  console.log(element.id);
}

//5
const buttons = document.querySelectorAll('[data-type="button"]');

for (const button of buttons) {
  button.classList.add('active');
}


//9
const menuElement = document.getElementById("menu");
const items = menuElement.getElementsByClassName("item");

for (let item of items) {
  item.style.backgroundColor = "gray";
}

//7
document.querySelector('.special').style.color = 'green';

//10
const allElements = document.querySelectorAll("*");
allElements.forEach(element => element.classList.add("Universal-selector"));