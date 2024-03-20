function calculate(numbers, callback) {
  return callback(numbers);
}

function square(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i] * numbers[i];
  }

  return sum;
}

function isEven(numbers) {
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      count++;
    }
  }

  return count;
}

function findMax(numbers) {
  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
}

function customOperation(ar, op) {
  const res = [];
  for (let i = 0; i < ar.length; i++) {
    res.push(op(ar[i]));
  }
  return res;
}

const numbers = [1, 2, 3, 4, 5];

console.log("Sum of Squares:", calculate(numbers, square));
console.log("Count Even Numbers:", calculate(numbers, isEven));
console.log("Find Maximum:", calculate(numbers, findMax));
console.log(
  "Custom Operation (Doubled):",
  customOperation(numbers, (num) => num * 2)
);
