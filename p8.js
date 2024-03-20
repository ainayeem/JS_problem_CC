function counter() {
  let cnt = 0;
  function increase() {
    cnt++;
    return cnt;
  }
  return increase;
}
// --
function makePassword(pass) {
  function checkPass(passChk) {
    return passChk === pass;
  }
  return checkPass;
}
// --
function counterWithStep(n) {
  n = n || 1;
  let cnt = 0;
  function increment() {
    cnt += n;
    return cnt;
  }
  return increment;
}

const increment = counter();
console.log(increment()); // Output: 1
console.log(increment()); // Output: 2

const checkPassword = makePassword("mySecretPassword");
console.log(checkPassword("password123")); // Output: false
console.log(checkPassword("mySecretPassword")); // Output: true

const incrementByTwo = counterWithStep(2);
console.log(incrementByTwo()); // Output: 2
console.log(incrementByTwo()); // Output: 4
