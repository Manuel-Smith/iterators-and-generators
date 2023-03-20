/**
 *       1. Create a generator function called "randomNumber"
 *            that will generate a new random number infinitely
 *
 *       2. Use a loop to generate 10 random numbers using the
 *           generator Object you get from calling "randomNumber"
 */

const randomNumber = function* (numParams) {
  let count = 0;

  while (true) {
    if (count === numParams) {
      break;
    }

    yield Math.random();
    count++;
  }
  console.log("Break and Done...");
};


let generatorObject = randomNumber(10);
let result = generatorObject.next();
// for (const value of randomNumber(10)) {
//   console.log(value);
// }

while(result.done === false){
    console.log(result);
    result = generatorObject.next();
}