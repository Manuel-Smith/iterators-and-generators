let myIterator = (iterableWords) => {
  let words = iterableWords.split(" ");
  let nextIndex = 0;
  let wordsLength = words.length;

  return {
    next: () => {
      let result = {};
      if (nextIndex < wordsLength) {
        result.value = words[nextIndex++]
        result.done = false;
      } else {
        result.done = true;
      }
      return result;
    },
  };
};

let counter = myIterator("Here I am now");

let result = counter.next();
console.log(result.value);

result = counter.next();
console.count(result.value);

result = counter.next();
console.count(result.value);

result = counter.next();
console.count(result.value);

result = counter.next();
console.count(result.value);

// while(!result.done){
//     console.log(result.value);
//     result = counter.next();
// }