// List of iterables
// Strings
// Arrays
// Arguments
// Node lists
// TypedArrays
// Maps
// Sets
// User defined iterables

const person = {
  name: "Erik",
  phone: "555-555-1212",
};

// This is a lot of code when using iterators

// person[Symbol.iterator] = () => {
//   let calls = 0;
//   return {
//     next: () => {
//       const stop = calls > Object.keys(person).length;
//       if (!stop) {
//         return {
//           value: person[Object.keys(person)[calls++]],
//           done: false,
//         };
//       }

//       return { done: true };
//     },
//   };
// };

// let iterator = person[Symbol.iterator]();

// for (let item of person) {
//   console.log(item);
// }

// Implementing same code using generators.

// person[Symbol.iterator] = function* () {
//   yield Object.keys(this);
// };

// console.log(...person);

for( const [key, value] of Object.entries(person)){
    console.log(key, ': ', value);
}