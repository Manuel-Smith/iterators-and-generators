function getAdditionIterable(start = 0, end = Infinity, step = 1) {
  let currentPosition = start;

  return {
    next() {
      let result = {};

      if (currentPosition < end) {
        result.value = currentPosition;
        result.done = false;
        currentPosition += step;
      } else {
        result.done = true;
      }
      return result;
    },
  };
}

let iterator = getAdditionIterable(1, 5, 1);
let result = iterator.next();

while (!result.done) {
  console.log(result.value);
  result = iterator.next();
}
console.log("I am done");
