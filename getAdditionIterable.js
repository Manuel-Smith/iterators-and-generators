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

  return next;
}

let iterator = getAdditionIterable(0, 5, 1);

let result = iterator.next()

while(!result.done){
    console.log(result.value);
    result = iterator.next();
}