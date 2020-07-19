ok = 0; //座れた場合
notOk = 0; //座れなかった場合

var ticketNumber = []; //1-100までの配列
function range() {
  var i = 1;
  while (i <= 100) {
    ticketNumber.push(i);
    i++;
  }
}
(100).times(function flightSeat() {
  seats = [];
  count = 0;
  i = Math.floor(Math.random() * 100);
  seats[i] = true;
  count = count + 1; //一人目

  while (0 < count && count < 100) {
    if ((seats[a[i]] = false)) {
      //自分の席が空いてたら
      seats[a[i]] = true; //普通に座る
    } else {
      //既に座られていたら
      while (true) {
        //空いている席を探す
        i = Math.floor(Math.random() * 100);
        if (!seats[i]); //空いている席が見つかったので
        seats[i] = true; //そこに座る
        break;
      }
    }
  }

  //100人目の席は空いているか？
  if (seats[a[99]]) {
    notOk += 1;
  } else {
    ok += 1;
  }
});

console.log("自分の席に座れた" + "=" + ok);
console.log("自分の席に座れなかった" + "=" + notOk);
