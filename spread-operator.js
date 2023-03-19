// const arr = [1, 2, 3];
// console.log(...arr);
// console.log([...arr])


// function fun(...args){
//     console.log(args);
// }

// fun(1, 2, 3);

function *generator(){
    yield 1;
    yield 2;
    yield 3;
}


console.log(...generator());