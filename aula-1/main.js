

let test = 41;
const subtest = test > 40 || "muito caro"



const subTotal = 100;
let total = 0;

// forma 1

if (subTotal >= 100 ) {
    total = subTotal / 1.2;
} else if ( subTotal >= 50 ) {
    total = subTotal / 1.1 ;
} else {
    total = subTotal;
}


// forma-2

switch (subTotal) {
    case 100:
        total = subTotal / 1.2;
    break;
    case 50:
        total = subTotal / 1.1;
}


// Exemplo diferente 

const categoriaCompras = "cosmetica"

switch (categoriaCompras) {
    case "laticinios":
        total = subTotal / 1.2;
        break;
    case "padaria":
        total = subTotal / 1.1;
        break;
    case "bebidas":
        total = subTotal / 1.1;
        break;
    default:
        total = subTotal * 2;
        break;
}
