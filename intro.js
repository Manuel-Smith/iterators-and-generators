// Generator Function Declaration

const counter = function* () {
  // Pause here and return the generator
  yield 1;
  yield 2;
  yield 3;
};

// Create the Generator Object
const counterGenerator = counter();

// let generator = counterGenerator.next();
for (const count of counter()) {
  console.log(count);
}

// while(!generator.done){
//     console.log(generator);
//     generator = counterGenerator.next();
// }

// console.log('Done...');
