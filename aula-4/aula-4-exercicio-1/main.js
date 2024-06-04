let nome = function () {
    return "Bruno Alves"
};
console.log(nome());

let ad = function (a, b) {
    return a + b;
};
console.log(ad(4, 3));


// (function(){
//     console.log("Bruno Alves");
// }());

console.log(
(function(){
    return "Vitor Marques"
}())
);

// (function(a, b){
//     console.log(a + b);
// }(2, 3));

console.log(
    (function(a, b){
        return a + b;
    }(2, 3))
);