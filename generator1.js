// Generators in JavaScript;

function *getAdditionIterable(start=0, end=10, step=1){
    let currentPosition = start;
    while(currentPosition < end){
        yield currentPosition;
        currentPosition += step
    }
}

let generator = getAdditionIterable(1, 5, 1);
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

for (let number of generator){
    console.log(number);
}