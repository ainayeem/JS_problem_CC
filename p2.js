function sortNumsAscending(ar) {
  if (!Array.isArray(ar) || ar.length === 0) {
    return [];
  }

  let validNumber = true;
  for (let i = 0; i < ar.length; i++) {
    if (typeof ar[i] !== "number") {
      validNumber = false;
      break;
    }
  }
  if (!validNumber) {
    return [];
  }

  let n = ar.length;
  for (let i = 0; i < n - 1; i++) {
    let mnIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (ar[j] < ar[mnIdx]) {
        mnIdx = j;
      }
    }
    if (mnIdx !== i) {
      const tmp = ar[i];
      ar[i] = ar[mnIdx];
      ar[mnIdx] = tmp;
    }
  }

  return ar;
}

console.log(sortNumsAscending());
console.log(sortNumsAscending(["nayeem", "alu", "balu"]));
console.log(sortNumsAscending(["nayeem", "alu", "balu", 3]));
console.log(sortNumsAscending([45, 34, 23, 12, 7]));
