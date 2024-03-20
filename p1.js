function minMaxLengthAverage(ar) {
  let mn = ar[0];
  let mx = ar[0];
  let ln = 0;
  let sum = 0;
  for (let i = 0; ar[i] != undefined; i++) {
    ln++;
    sum += ar[i];

    if (mn > ar[i]) {
      mn = ar[i];
    }

    if (mx < ar[i]) {
      mx = ar[i];
    }
  }
  const avrg = sum / ln;
  const res = [mn, mx, ln, avrg];

  return res;
}

console.log(minMaxLengthAverage([7, 13, 3, 77, 100]));
