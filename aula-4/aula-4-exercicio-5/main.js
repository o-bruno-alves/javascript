const soma = (a, b) => a + b;


const multiplicacao = (a, b) => {
    const total = a * b;
    return total;
};


const multiplicacao2 = ((a, b) => {
    const total2 = a * b;
    return total2;
})(3, 4);

console.log(multiplicacao2);

setTimeout(()=> console.log("hello"), 2000);

const nome = "Vitor";
const part1 = "qualquer coisa";
const part2 = 2;

const titulo = nome + "qualquer coisa"

const titulo2 = '${noem} ${part1} 2 outra coisa;' 
