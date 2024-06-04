var estudantes = [
    { id: 1, nome: 'João', idade: 20},
    { id: 2, nome: 'Maria', idade: 22},
    { id: 3, nome: 'Pedro', idade: 18},
    { id: 4, nome: 'Ana', idade: 21},
];


/* const = estudantesId = (id) =>
    estudantes.find((estudante) => estudante.id === id); */

var estudantesId = (id = 1) => {
    return estudantes.find(estudante => estudante.id === id);
};




/* const estudantesNome = () =>
    estudantes.map ((estudante) => `Nome do estudante: ${estudante.nome}`); */

var estudantesNome = (lista = estudantes) => {
    return lista.map(estudante => `: ${estudante.nome}`);
};



/* const estudantesIdade = (idadeMinima) =>
    estudantes.filter((estudante) => estudante.idade > idadeMinima);
 */
var estudantesIdade = (idadeMinima) => {
    return estudantes.filter(estudante => estudante.idade > idadeMinima);
};


console.log(estudantesId(2));
console.log(estudantesNome());
console.log(estudantesIdade(18));