const soma = (a, b) => {
    const total = a + b;
  
    const promise = new Promise((resolve, reject) => {
      if (total % 2 == 0) {
        resolve("é par");
      } else {
        reject("é impar");
      }
    });
  
    promise
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };


/* ERRADO
const promise = new Promise((resolve, reject) => {
    const result = soma(3, 4);
    if(result % 2 === 0) {
        resolve("Tudo Certo");
    } else {
        reject("Tudo errado");
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
}); */



