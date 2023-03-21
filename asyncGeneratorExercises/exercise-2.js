/*
    1. Create an async Generator function that has a single
        parameter called "sentence". The function will loop through 
        "sentence" letter by letter, and for each letter it will 
        yield a Promise that resolves after 100ms that:
        - If the letter is a vowel (aeiou) then resolve with a "*"
        - Otherwise resolve with the letter, but uppercased


    2. Create the generator object by calling the function ^
        with a value of "Monkeys are the coolest animals!"

    3. Use a for-await of loop to loop through the generator

    * There are MANY ways to check if a string has any of several letters.

 */

const asyncGeneratorFunction = async function* (stringParams) {
  let myRegex = /a|e|i|o|u/;
  for (let i = 0; i < stringParams.length; i++) {
    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        if (myRegex.test(stringParams[i])) {
          resolve("*");
        } else {
          resolve(stringParams[i].toUpperCase());
        }
      }, 100);
    });
  }
};

const asyncFunctionInitializer = async () => {
  const asyncGeneratorObject = asyncGeneratorFunction(
    "Monkeys are the coolest animals!");

  for await (const value of asyncGeneratorObject) {
    console.log(value);
  }
};

asyncFunctionInitializer();
