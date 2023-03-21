const asyncGenerator = async function* (ms) {
  let count = 1;
  while (count <= 4) {
    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(count++);
      }, ms);
    });
  }
};

const asyncGeneratorObject = asyncGenerator(1000);
const asyncGeneratorExecutor = async () => {
  for await (const promise of asyncGeneratorObject) {
    console.log(promise);
  }
};

asyncGeneratorExecutor();
