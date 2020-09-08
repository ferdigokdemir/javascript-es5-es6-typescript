// Herhangi bir fonksiyon içinde oluşturulan değişken local scope'da bulunur.

function test() {
  var message = "Hello";
}

test();

console.log(message);
