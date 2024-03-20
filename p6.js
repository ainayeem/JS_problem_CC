function findSmallest(ar) {
  let mn = ar[0];

  for (let i = 0; i < ar.length; i++) {
    if (ar[i] < mn) {
      mn = ar[i];
    }
  }
  return mn;
}

console.log(findSmallest([30, 45, 60, 7]));
