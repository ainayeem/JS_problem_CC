// Function to calculate sum of squares
function sumOfSquares(arr) {
  return arr.reduce((acc, num) => acc + num ** 2, 0);
}

// Function to count even numbers
function countEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0).length;
}

// Function to implement custom operation
function customOperation(arr, callback) {
  return arr.map(callback);
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];

// Callback functions
function square(num) {
  return num ** 2;
}

function isEven(num) {
  return num % 2 === 0;
}

console.log("Sum of Squares:", calculate(numbers, square)); // Output: 55
console.log("Count Even Numbers:", calculate(numbers, isEven)); // Output: 2
console.log("Find Maximum:", calculate(numbers, Math.max)); // Output: 5
console.log(
  "Custom Operation (Doubled):",
  customOperation(numbers, (num) => num * 2)
); // Output: [2, 4, 6, 8, 10]

// ----------------------------------------------------
function calculate(ar, operation) {
  if (operation === "sumOfSquares") {
    let s = 0;
    for (let i = 0; i < ar.length; i++) {
      s += sqr(ar[i]);
    }
    return s;
  } else if (operation === "evenCount") {
    let c = 0;
    for (let i = 0; i < ar.length; i++) {
      if (evenChk(ar[i])) {
        c++;
      }
    }
    return c;
  } else {
    return "Invalid operation";
  }
}

function sqr(num) {
  return num * num;
}

function evenChk(num) {
  return num % 2 === 0;
}

const numbers = [1, 2, 3, 4, 5];
console.log("Sum of Squares:", calculate(numbers, "sumOfSquares"));
console.log("Even Count:", calculate(numbers, "evenCount"));
