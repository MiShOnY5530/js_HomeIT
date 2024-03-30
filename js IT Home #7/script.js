function modifyArray(arr) {
  let hasNumber = false;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      hasNumber = true;
      break;
    }
  }

  if (hasNumber) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== 'number') {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  } else {
    arr.push(0);
    return arr;
  }
}

console.log(modifyArray([1, 2, 3, "43", "Miau"]));
console.log(modifyArray([1, 2, 3, 4, 5, 6, 'boolean']));
