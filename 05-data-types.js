// Javascript dinamik tipli bir dilir. Yani bir değişkenin tipi hep aynı kalmaz, içine atanan değere göre değişir.

var test; // undefined
console.log(typeof test);
test = 100; // number
console.log(typeof test);
test = true; // boolean
console.log(typeof test);
test = "merhaba"; // string
console.log(typeof test);

console.log("test" / 2); // NaN;

console.log(NaN == NaN); // ?? NaN kendide dahil olmak üzere hiç bir değere eşit olamaz.
