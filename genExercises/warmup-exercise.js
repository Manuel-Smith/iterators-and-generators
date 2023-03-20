/**
 *      1. Create a generator function called "countTop10" that will
 *           yield the numbers 0-10 (inclusive) then stop.
 *
 *      2. Create the generator object by calling the generator
 *           function and iterate through the generator using a
 *           for...of loop.
 */

const countTop10 = function* (numParams) {
  let num = 0;

  while (num <= numParams) {
    yield num;
    num++;
  }
};

const generatorObject = countTop10(10);

// let result = generatorObject.next();

// while(result.done === false){
//     console.log(result);
//     result = generatorObject.next();
// }

console.log(generatorObject.next());

for (const value of generatorObject) {
  console.log(value);
}
