/* const soma = (a, b) => {
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
}; */



const soma = (a, b) => {
    const total = a + b;

    return new Promise((resolve, reject) => {
        if (total % 2 == 0) {
            resolve("é par");
        } else {
            reject("é impar");
        }
    });
};

const somaFinal = async (a, b) => {
    try {
        const resultado = await soma(a, b);
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
};





