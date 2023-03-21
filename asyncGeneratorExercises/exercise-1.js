/**
 *      1. Create an async Generator function that has a 50%
 *          change of yielding either of the following Promises:
 *          - Resolve after 500ms with the value 'Fast!"
 *          -resolve after 3000ms with the value "Slow!"
 *
 *
 *      2. Create the generator object by calling the function ^
 *
 *      3. Use a for-await...of loop to loop through the generator
 *          indefinitely (ctrl-c to force exit the program);
 *
 *      * HINT: Math.random() is your friend;
 */

const asyncGeneratorFunction = async function* () {
  while (true) {
    yield new Promise((resolve, reject) => {
      let probability = Math.floor(Math.random() * 2);

      if(probability === 0){
        setTimeout(() => {
            resolve('Fast!')
        }, 500);
      } else {
        setTimeout(() => {
            resolve('Slow!')
        }, 3000);
      }
    });
  }
};

const asyncFunctionInitializer = async () => {

    const asyncGeneratorObject = asyncGeneratorFunction();
    
    for await( const value of asyncGeneratorObject){
        console.log(value);
    }
}

asyncFunctionInitializer();