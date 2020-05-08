function combination(n, r) {
  //nCr
  var arrs, i, j, newArrayLength, kumis;
  arrs = [];
  newArrayLength = n.length;
  if (newArrayLength < r) {
    return false;
  } else if (r == 1) {
    for (i = 0; i < newArrayLength; i++) {
      arrs[i] = [n[i]];
    }
  } else {
    for (i = 0; i < newArrayLength - r + 1; i++) {
      kumis = combination(n.slice(i + 1), r - 1);
      for (j = 0; j < kumis.length; j++) {
        arrs.push([n[i]].concat(kumis[j]));
      }
    }
  }
  console.log(combination(arrs, r));
}

function answer() {
  arrs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var chosen = [];
  chosen = combination(arrs);
  console.log(chosen);
}
