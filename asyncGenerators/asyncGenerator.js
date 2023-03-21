const asyncGenerator = async function* (){
    yield new Promise((resolve, reject)=>{
        setTimeout(() => {
           resolve(1); 
        }, timeout);
    })
}