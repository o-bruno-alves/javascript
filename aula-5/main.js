/* const soma = 10;
const total = soma > 10 ? "muito caro" : "barato";

const palavras = ["primeira", "a", "terco"];

const b = palavras.map((palavra) => console.log(palavra));

/* const a = palavras.map((palavra) => palavra.toUpperCase());
console.log(a) */
//
/* function transformMaiusculas(palavra) {
    return palavra.toUpperCase();
} */
//
/* const transformMaiusculas =(palavra) => palavra.toUpperCase;

const palavrasMaiusculas = palavras.map(transformMaiusculas);


const c = [];
for (let i = 0; i < palavras.length; i++) {
    c.push(palavras[i].toUpperCase());
}

palavras.forEach((palavra) => console.log(palavra))

const maiusculas = [];
palavras.forEach((palavra) => {
    if (palavra.length > 3) {
        maiusculas.push(palavra);
    }
}); */
/* 
const palavras = ["primeira", "a", "terco"];
const maiusculas = palavras.filter((palavra) => palavra.length > 3);
const maiusculas2 = palavras.find((palavra) => palavra.length > 3);
const maiusculas3 = palavras.reverse().find((palavra) => palavra.length > 3); */


/* const palavras = ["primeira", "a", "terco"];

const resultadoFinal = palavras.reduce(
  (resultado, palavra) => resultado + " " + palavra,
  "Começa assim:"
);

const carrinhoCompras = [
  {
    nome: "A",
    preco: 10.9,
  },
  {
    nome: "B",
    preco: 9.9,
  },
  {
    nome: "C",
    preco: 19.8,
  },
  {
    nome: "D",
    preco: 209.9,
  },
];

let totalCarrinhoCompras = 0;
carrinhoCompras.forEach((produto) => (totalCarrinhoCompras += produto.preco));

const totalCarrinhoCompras2 = carrinhoCompras.reduce(
  (total, produto) => total + produto.preco,
  0
);

console.log(totalCarrinhoCompras); 
console.log(totalCarrinhoCompras2);  */

// const palavras = ["primeira", "a", "terco"];

/* const a = palavras[0];
const b = palavras[1];
const c = palavras[2]; */


// const [a, b, c,] = palavras;

// const [a, ...palavras2] = palavras;
 
/* const carrinhoCompras = [
    {
      nome: "A",
      preco: 10.9,
    },
    {
      nome: "B",
      preco: 9.9,
    },
    {
      nome: "C",
      preco: 19.8,
    },
    {
      nome: "D",
      preco: 209.9,
    },
  ];
  
  let totalCarrinhoCompras = 0;

  const [utilizador, dataCompra, ...produtos] = carrinhoCompras;

    const conjuntoArray = [...carrinhoCompras, ...palavras]; */

    const aluno = {
        nome: "Antonio",
        idade: 10,
        escolaridade: 5,
    };

    // const { nome, idade } = aluno;

    const { nome, idade: idadeAluno } = aluno;