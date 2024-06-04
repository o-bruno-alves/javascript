/* function telemovel(marcaTelemovel, modeloTelemovel, anoTelemovel){
    this.marca = marcaTelemovel;
    this.modelo = modeloTelemovel;
    this.ano = anoTelemovel;
}
const pixel = new telemovel("Google Pixel", "8a", 2023);
 */

function Livros(titulo, autor){
    this.titulo = titulo;
    this.autor = autor;
}

const livroDumas = new Livros("Os três mosqueteiros", "Alexandre Dumas");
const livroEca = new Livros("Os Maias", "Eça de Queiroz");

console.log(livroDumas.titulo);
console.log(livroDumas.autor);
console.log(livroEca.titulo);
console.log(livroEca.autor);

livroDumas.titulo = "O Conde de Monte Cristo"

console.log(livroDumas.titulo);

