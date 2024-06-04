
(function(){
    return console.log("isto foi demasiado rápido!");
        
}());


let campoNome = (function(){
    let nome = "Nome";
    return function (resultado){
        return nome + ": " + resultado;
    }
});

console.log (campoNome()("Vitor"));
