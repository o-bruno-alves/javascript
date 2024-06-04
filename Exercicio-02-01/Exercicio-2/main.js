function multi (d, p) {
    
if (d < 0.1 ) {
    return p + d;
} else if ( d > 0.1 && d < 0.3) {
    return p - d;
} else if ( d === 0) {
    return p * 2;
}  else {
    console.log("Desconto inválido.");
}
}
