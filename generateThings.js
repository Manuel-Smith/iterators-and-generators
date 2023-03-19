function* generateThings() {
  yield "Hello World";
  yield "Hi";
  yield "test";
  yield "return";
}

const g = generateThings();

let result = g.next();

while(!result.done){
    console.log(result);
    result = g.next();
}
