// Generator Function Declaration

const generator = function* () {
  yield new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });

  yield new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 2000);
  });

  yield new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3);
    }, 3000);
  });
};

const generatorObject = generator();
console.log(generator);
console.log(generatorObject);
// console.log(generatorObject.next());

// result = generatorObject.next().value.then((result)=>console.log(result))

for (const promise of generatorObject) {
  console.log(promise.then((val) => console.log(val)));
}
