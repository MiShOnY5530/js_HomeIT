function modifyArray(arr) {
  // Перевіряю, чи є в масиві елемент типу 'number'
  const hasNumber = arr.some(element => typeof element === 'number');

  if (hasNumber) {
    // Якщо є, видаляю перший знайдений елемент типу 'number'
    return arr.filter(element => typeof element !== 'number');
  } else {
    // Якщо немає, додаю число до кінця масиву
    arr.push(0); // Додаю 0, але можна додати будь-яке число
    return arr;
  }
}

console.log(modifyArray([1, 2, 3, "43", "Miau"]));     // Видалить числа: ["43", "Miau"]
console.log(modifyArray([1, 2, 3, 4, 5, 6, 'boolean'])); // Видалить числа: ["boolean"]