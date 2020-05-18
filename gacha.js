var prize = [];
var get = [];

function gachaSystem() {
  for (var count = 1; count <= 100; count++) {
    if (count % 10 == 0) {
      var prize0;
      prize0[count] = "A";
    } else if (count % 10 == 1 || count == 1) {
      var prize1;
      prize1[count] = "B";
    } else if (count % 10 == 2) {
      var prize2;
      prize2[count] = "C";
    } else if (count % 10 == 3) {
      var prize3;
      prize3[count] = "D";
    } else if (count % 10 == 4) {
      var prize4;
      prize4[count] = "E";
    } else if (count % 10 == 5) {
      var prize5;
      prize5[count] = "F";
    } else if (count % 10 == 6) {
      var prize6;
      prize6[count] = "G";
    } else if (count % 10 == 7) {
      var prize7;
      prize7[count] = "H";
    } else if (count % 10 == 8) {
      var prize8;
      prize8[count] = "I";
    } else {
      var prize9;
      prize9[count] = "J";
    }
    prize = [
      prize0,
      prize1,
      prize2,
      prize3,
      prize4,
      prize5,
      prize6,
      prize7,
      prize8,
      prize9
    ];
  }
  console.log(prize);
}

function draw() {
  var x = Math.floor(Math.random()) * 10;
  var y = Math.floor(Math.random()) * 10;
  if (document.getElementById("money").value == 0) {
    alert(お金が足りません);
  } else {
    document.getElementById("money").value =
      document.getElementById("money").value - 100;
    get.push(prize[x][y]);
  }
}
