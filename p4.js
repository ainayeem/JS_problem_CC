function checkEnding(str1, str2) {
  let n1 = str1.length;
  let n2 = str2.length;
  if (n2 > n1) {
    return false;
  }

  for (let i = 0; i <= n2; i++) {
    if (str1[n1 - i] !== str2[n2 - i]) {
      return false;
    }
  }
  return true;
}

console.log(checkEnding("samurai", "zi"));
