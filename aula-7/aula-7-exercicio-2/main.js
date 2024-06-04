const name = (nome) => {
    return new Promise((resolve, reject) => {
        if (nome === "javascript") {
            reject ("não é um nome");
          } else {
            resolve(nome);
          }
    });
};

const nomeFinal = async (nome) => {
    try {
        const resultado = await name(nome);
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}; 

/* const name = (nome) => {
    const finalName = new Promise((resolve, reject) => {
      if (nome === "javascript") {
        reject ("não é um nome");
      } else {
        resolve(nome);
      }
    });
  
    finalName
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  }; */

// OU (2ª resolução)

/* const getNome = (nome) => {
    const promiseNomes = new Promise((resolve, reject) => {
      if (nome === "javascript") {
        reject("Javascript é top");
      } else {
        resolve(`Nome: ${nome}`);
      }
    });
  
    return promiseNomes;
  };
  
  const asyncNome = async (nome) => {
    const result = await getNome(nome);
    console.log(result);
  };
  
  asyncNome("Vitor");
  asyncNome("javascript"); */
