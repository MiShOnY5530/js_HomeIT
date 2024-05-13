const numbers = [3, 1, 4, 2];

const sortedNumbers = numbers.toSorted();
console.log(sortedNumbers);

const reversedNumbers = numbers.toSorted((a, b) => b - a);
console.log(reversedNumbers);