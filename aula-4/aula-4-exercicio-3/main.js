// function teste (){
//     return function (){
//         return "Hello"
//     };
// }
//  const funcaoHello = teste();
//  console.log(funcaoHello());
//
// OU

//  function teste (){
//     return function (){
//         return "Hello"
//     };
// }

//  console.log(teste()());


//  function teste (a){
//     return function (b){
//         return a + b;
//     };
// }

//  console.log(teste(1)(2));

//  function calcularIVA(iva){
//     return function (produto){
//         return iva * produto;
//     };
// }

// const calcularIVA6 = calcularIVA(6);
// const calcularIVA13 = calcularIVA(13);
// const calcularIVA23 = calcularIVA(23);

// console.log(calcularIVA13(100));


 function divisaoDois (numero){
     return function (){
         return numero / 2;
     };
 }

console.log(divisaoDois(2)());



function divisao (a){
    return function (b){
        return a / b;
    };
}
console.log(divisao(10)(2));

const divisao30 = divisao(30);
console.log(divisao30(10));
console.log(divisao30(5));

