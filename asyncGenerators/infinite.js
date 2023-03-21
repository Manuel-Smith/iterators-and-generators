const asyncGenerator = async function* (ms) {
    let count = 0;
    while (true) {
      yield new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(count++);
        }, ms);
      });
    }
  };
  
  const asyncGeneratorObject = asyncGenerator(1000);

  const asyncObjectFunction = async ()=>{
    for await (const number of asyncGeneratorObject){
        console.log(number);
    }
  }

  asyncObjectFunction();
  console.log("Hello???")