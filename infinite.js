const counter = function* () {
  let i = 0;

  while (true) {
    yield i;
    i++;
  }
};

const counterGenerator = counter();

// for (const value of counterGenerator) {
//   console.log(value);
// }

let count = 0;

while(count < 35){
    console.log(count, counterGenerator.next());
    count++;
}
