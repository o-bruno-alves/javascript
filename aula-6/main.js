/* const promise = new Promise ((resolve, reject) => {
    if(true) {
        resolve("Tudo certo");
    }
    else {
        reject("erro)")
    }
}); */


const promise = new Promise ((resolve, reject) => {
    try{
        resolve("Tudo certo");
    }
    catch (e) {
        reject("erro" (e));
    }
});

promise.then(
    () => {
        console.log("correu tudo bem");
    },
    () => {
        console.log("correu tudo mal");
    }
);
