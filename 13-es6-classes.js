// ES6'dan önce javascript dilinde class yoktu. Funksiyonlar class gibi kullanılmaya çalışılıyordu.

// ES5 fonksiyon class

function Test(message) {
  this.message = message;
}

Test.prototype.mesajYazdir = function () {
  console.log(this.message);
};

var x = new Test("Merhaba es5");
x.mesajYazdir();

// ES6 class
class Test2 {
  constructor(message) {
    this.message = message;
  }

  mesajYazdir() {
    console.log(this.message);
  }
}

const y = new Test2("Merhaba es6");
y.mesajYazdir();
