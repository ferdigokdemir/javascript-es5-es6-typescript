// ES6 ile gelen yenilikler spread operator ...
// İki objeyi, array'i birleştirmeye yarar

const x = [1, 2, 3, 4, 5];
const y = [6, 7, 8, 9, 10];

const z = [...x, ...y];

console.log(z);

const a = { name: "Ferdi" };
const b = { ...a, surname: "Gökdemir" };

console.log(b);
