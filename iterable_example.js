// Write a function that will split the words passed into the parameters in a separate line and when using a for .. or loop on it.

const myIterable = (words) => {
  let myWords = words.split(" ");
  return {
    [Symbol.iterator]() {
      let myIndex = 0;

      return {
        next: () => {
          if (myIndex < myWords.length) {
            return {
              value: myWords[myIndex++],
              done: false,
            };
          } else {
            return {
              value: myWords[myIndex],
              done: true,
            };
          }
        },
      };
    },
  };
};


// for ( let word of myIterable("Here is some food")){
//     console.log(word);
// }