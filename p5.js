function doubleChar(str) {
  if (typeof str != "string") {
    return null;
  }
  let res = "";
  for (let c of str) {
    res += c + c;
  }
  return res;
}

console.log(doubleChar("exercise"));
console.log(doubleChar());
