// ------------------------ Hoisting -----------------------------------------
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase before execution.
// This means that regardless of where variables and functions are declared within a scope, they are moved to the top of the scope during runtime.

// ------------------------ Variable Hoisting Example -------------------------
console.log(message); // Output: undefined
var message = "Hello, world!"; // Variable declaration is hoisted to the top
console.log(message); // Output: "Hello, world!"

// --> Explanation:
// Even though the variable message is used before its declaration, JavaScript doesn't throw an error.
// During execution, the variable declaration is hoisted to the top of the scope, and its initial value is undefined until it's assigned the value "Hello, world!" later.

// -------------------------- Function Hoisting Example --------------------------
sayHello();
function sayHello() {
  console.log("Hello!");
}
// Output: "Hello!"

// --> Explanation:
// The function sayHello() is called before its declaration, but JavaScript doesn't throw an error.
// This is because function declarations are hoisted to the top of their scope during compilation, allowing them to be called anywhere within the scope.

// -------------------------- Function Expression Hoisting Example ------------------------
sayHi();
var sayHi = function () {
  console.log("Hi!");
};
// Output: TypeError: sayHi is not a function

// --> Explanation:
// Unlike function declarations, function expressions are not hoisted in the same way.
// Only the variable declaration (var sayHi) is hoisted to the top of its scope, but the assignment of the function expression to the variable remains in its original position.
// Therefore, when we try to call sayHi before its assignment, we get a TypeError because sayHi is not yet a function.

// ----------------------- Hoisting behavior with let and const ------------------------------
// Variables declared with let and const are hoisted to the top of their scope like var, but they are not initialized until their actual declaration is reached.
// This means that trying to access a let or const variable before its declaration results in a ReferenceError.

// ----------------- Example --------------------
console.log(x);
let x = 10;
// Output: ReferenceError: Cannot access 'x' before initialization
