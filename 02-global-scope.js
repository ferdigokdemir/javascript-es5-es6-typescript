// Global scope
// Bütün javascript değişkenleri bir scope(kapsam) içinde oluşturulur.
// Aşağıdaki değişken global scope'de bulunur ve bütün scope'ler bu değişkene erişebilir.
var message1 = 1;

console.log("message1:", message1);

function test1() {
  console.log("message1:", message1);

  function test2(params) {
    console.log("message1:", message1);
  }

  test2();
}

test1();
