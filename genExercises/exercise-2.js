/**
 *       1. Create a generator function called "randomAmountFromRange"
 *           which has 3 parameters: amount, min, max.
 *
 *       2. ^ This function will generate the amount of random numbers
 *           provided as an argument, between the min and max (inclusive)
 *           Eg: randomAmountFromRange(3, 10, 20) => 13, 12, 19
 *
 *       3. create a for...of loop that will loop through the following
 *           generator objects to test it:
 *           - randomAmountRange(3, 10, 20)
 *           - randomAmountRange(5, 100, 200)
 *           - randomAmountRange(10, 1000, 2000)
 */

const randomAmountFromRange = function* (amount, min, max) {
  let counter = 0;
  while (counter < amount) {
    yield Math.round(Math.random() * (max - min)) + min;
    counter++;
  }

  console.log("Loop Done...");
};

let generator = randomAmountFromRange(3, 5, 10);
let result = generator.next();

while (result.done === false) {
  console.log(result);
  result = generator.next();
}

// for (let value of randomAmountFromRange(10, 1000, 2000)) {
//   console.log(value);
// }
