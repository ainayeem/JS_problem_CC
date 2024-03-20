function avrg(teamScr) {
  let s = 0;
  n = teamScr.length;
  for (let i = 0; i < n; i++) {
    s += teamScr[i];
  }
  return s / n;
}

const johnTeam = [89, 120, 103];
const mikeTeam = [116, 94, 123];

// const mikeTeam = [10, 10, 10];
// const johnTeam = [10, 10, 10];

const johnAvrg = avrg(johnTeam);
const mikeAvrg = avrg(mikeTeam);

if (johnAvrg > mikeAvrg) {
  console.log(`Winner johnTeam, score: ${johnAvrg}`);
} else if (johnAvrg < mikeAvrg) {
  console.log(`Winner mikeTeam, score: ${mikeAvrg}`);
} else {
  console.log(`Match Draw!`);
}

// Extra-----------------------------------------
const maryTeam = [97, 134, 105];

const maryAvrg = avrg(maryTeam);

if (johnAvrg > mikeAvrg && johnAvrg > maryAvrg) {
  console.log(`Winner johnTeam, score:  ${johnAvrg}`);
} else if (mikeAvrg > johnAvrg && mikeAvrg > maryAvrg) {
  console.log(`Winner mikeTeam, score:  ${mikeAvrg}`);
} else if (maryAvrg > johnAvrg && maryAvrg > mikeAvrg) {
  console.log(`Winner maryTeam, score: ${maryAvrg}`);
} else {
  console.log(`Match Draw!`);
}
