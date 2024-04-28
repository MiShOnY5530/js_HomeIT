const toggleButton = document.getElementById('toggleButton');
const targetBlock = document.getElementById('targetBlock');

toggleButton.addEventListener('click', () => {
    targetBlock.classList.toggle('highlight');
});




const changeTextButton = document.getElementById("changeTextButton");
const textBlock = document.getElementById("textBlock");

changeTextButton.addEventListener("click", () => {
    textBlock.textContent = "2.1. Новий текст";
});




const addButton = document.getElementById('addButton');
const listContainer = document.getElementById('listContainer');

addButton.addEventListener('click', () => {
    const newListItem = document.createElement('li');
    newListItem.textContent = 'Новий елемент';
    listContainer.appendChild(newListItem);
});




const removeButton = document.getElementById('removeButton');
const listContainerRemove = document.getElementById('listContainer');

removeButton.addEventListener('click', () => {
    const firstListItem = listContainer.firstElementChild;
    if (firstListItem) {
        listContainer.removeChild(firstListItem);
    }
});




const checkButton = document.getElementById('checkButton');
const checkBlock = document.getElementById('checkBlock');

checkButton.addEventListener('click', () => {
    if (checkBlock.classList.contains('active')) {
        alert('Блок "checkBlock" має клас "active".');
    } else {
        alert('Блок "checkBlock" не має класу "active".');
    }
});




const styleButton = document.getElementById("styleButton");
const styleBlock = document.getElementById("styleBlock");

styleButton.addEventListener("click", () => {
    styleBlock.style.color = "red";
    styleBlock.style.height = "200px";
});




const linkButton = document.getElementById("linkButton");
const targetLink = document.getElementById("targetLink");

linkButton.addEventListener("click", () => {
    targetLink.href = "https://example.com/";
    targetLink.textContent = "Example";
});