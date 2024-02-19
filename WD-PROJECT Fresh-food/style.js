counts = setInterval(card);
upto = 0;

function card() {
  let count = (document.getElementById("demo1").innerHTML = ++upto);
  if (upto == 1500) {
    clearInterval(counts);
  }
}


counts1 = setInterval(card1);
upt = 0;

function card1() {
  let count = (document.getElementById("demo2").innerHTML = ++upt);
  if (upt == 1500) {
    clearInterval(counts1);
  }
}

counts2 = setInterval(card2);
up = 0;

function card2() {
  let count = (document.getElementById("demo3").innerHTML = ++up);
  if (up == 1500) {
    clearInterval(counts2);
  }
}

counts3 = setInterval(card3);
uto = 0;

function card3() {
  let count = (document.getElementById("demo4").innerHTML = ++uto);
  if (uto == 1500) {
    clearInterval(counts3);
  }
}





setInterval(time)

  function time(){

    let a = new Date()
    let b = a.toLocaleString()

    document.getElementById("demoo1").innerHTML = b;
  }

























