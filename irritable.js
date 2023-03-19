function iterator() {
  let step = 0;

  return {
    [Symbol.iterator]() {
      return {
        next() {
          step++;

          let result = { value: undefined, done: true };

          if (step === 1) {
            result.value = "😢";
            result.done = false;
          }

          if (step === 2) {
            result.value = "😨";
            result.done = false;
          }

          if (step === 3) {
            result.value = "😱";
            result.done = false;
          }
          return result;
        },
      };
    },
  };
}

// let myIterator = iterator();
// console.log(myIterator[Symbol.iterator]().next())
// console.log(myIterator[Symbol.iterator]().next())
// console.log(myIterator[Symbol.iterator]().next())
// console.log(myIterator[Symbol.iterator]().next())


// let result = myIterator[Symbol.iterator]().next();

// while (!result.done) {
//   console.log(result);
//   result = myIterator[Symbol.iterator]().next();
// }

// const [first, ...otherValues] = iterator();
// console.log(otherValues);
// console.log(first);


for(let item of iterator()){
    console.log(item);
}