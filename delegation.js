const counter = function* () {
  yield 1;
  yield* [2, 3, 3];
  yield 5;
};

const generatorObject = counter();

for (const value of generatorObject) {
  console.log(value);
}
