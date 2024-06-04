const meses = ["A","B"];
meses.length;
console.log (meses.length)

const arraySimples = ["A","B","C"];
const arrayString = arraySimples.toString();
console.log (arrayString)

const arrayNumeros = [1,2,3];
arrayNumeros.shift();
arrayNumeros.pop();
console.log (arrayNumeros)


const array = [1,2,3];
array.push("fruta");
console.log(array.push);

const juntar = ["ab","cd","ef"];
const juntarBarra = juntar.join("/");
console.log(juntar);


array.concat(juntar);



const aluno = {
    nome: "Bruno",
    profissao: "Designer",
};


aluno.nome = "João";
aluno.idade = 20;

console.log("Object.keys", Object.keys(aluno));