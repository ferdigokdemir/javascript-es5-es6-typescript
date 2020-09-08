// ES6 ile gelen yenilikler const, let
// İkiside block scope'da {} tanımlanır. const'un değeri değiştirilemez
let x = 10;

console.log(x);

x = 11;

console.log(x);

if (x == 10) {
  let y = 11;
}

console.log(y);

const z = 12;

z = 13;

console.log(z);
