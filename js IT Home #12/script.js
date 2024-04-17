//1
function degree(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else {
    return base * degree(base, exponent - 1);
  }
}
console.log(degree(3, 5));



//2
function gcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}
console.log(gcd(68, 24));



//3
function maxDigit(num) {
  if (num === 0) {
    return 0;
  } else {
    return Math.max(num % 10, maxDigit(Math.floor(num / 10)));
  }
}
console.log(maxDigit(123956));


//5
function factors(num, i = 2, result = []) {
  if (i > num) {
    return result;
  } else if (num % i === 0) {
    result.push(i);
    return factors(num / i, i, result);
  } else {
    return factors(num, i + 1, result);
  }
}
console.log(factors(18));



//6
function fibonacci(n) {
  if (n <= 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
console.log(fibonacci(6));