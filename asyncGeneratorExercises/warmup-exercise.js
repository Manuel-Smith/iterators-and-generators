/**
 *      1. Create an async Generator function that will yield
 *          a promise that resolves after 1 second with a random number
 *          between 0-9 (integer and inclusive);
 *
 *      2. Create a generator object by calling he funcion ^
 *
 *      3. Use a for-wait...of loop to loop through the generator
 *          infinitely (ctr-c to force exit the program);
 */

const asyncGeneratorFunction = async function* () {
  while (true) {
    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Math.floor(Math.random() * 10));
      }, 1000);
    });
  }
};

const generatorInitializer = async () => {

  let asyncGeneratorObject = asyncGeneratorFunction();
  
  for await (const value of asyncGeneratorObject) {
    console.log(value);
  }
};

generatorInitializer();
