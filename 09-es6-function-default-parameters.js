// ES6 ile gelen yenilikler ön tanımlı fonksiyon parametreleri
function test(message = "Merhaba") {
  console.log(message);
}

test();
test("test");
test(undefined);
