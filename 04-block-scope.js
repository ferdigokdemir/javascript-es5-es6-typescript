// Javascript es6 versiyonu ile block scope kavramı geldi. {} süslü parantez gördüğüz yerler block scope anlamına gelir.

function test1(message) {
  const message2 = "merhaba2";

  if (!message) {
    // block scope
    let message1 = "merhaba";
    console.log("message1:", message1);
  }

  console.log("message1:", message1);
  console.log("message2:", message2);
}

test1();
