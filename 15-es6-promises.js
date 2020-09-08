// ES6 ile birlikte gelen promise ile callback-hell'den kurtulduk

// es5 callback hell

function test(done) {
  setTimeout(() => {
    done("İşlem1 tamamlandı");
  }, 5000);
}

function test2(done) {
  setTimeout(() => {
    done("İşlem2 tamamlandı");
  }, 5000);
}

function test3(done) {
  setTimeout(() => {
    done("İşlem3 tamamlandı");
  }, 5000);
}

test(function (message) {
  console.log(message);

  test2(function (message) {
    console.log(message);

    test3(function (message) {
      console.log(message);
    });
  });
});

// es6 promises

const test4 = () =>
  new Promise((resolve, reject) =>
    setTimeout(() => resolve("İşlem4 tamamlandı"), 5000)
  );

const test5 = () =>
  new Promise((resolve, reject) =>
    setTimeout(() => resolve("İşlem5 tamamlandı"), 5000)
  );

const test6 = () =>
  new Promise((resolve, reject) =>
    setTimeout(() => resolve("İşlem6 tamamlandı"), 5000)
  );

const run = async () => {
  try {
    const response4 = await test4();
    console.log(response4);
    const response5 = await test5();
    console.log(response5);
    const response6 = await test6();
    console.log(response6);
  } catch (error) {
    console.log(error);
  }
};

run();
