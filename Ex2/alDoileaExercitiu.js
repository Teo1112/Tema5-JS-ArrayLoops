function sumaNr(listaNr){
    let suma = 0;
    for(let i = 0; i < listaNr.length; i++){
        suma += listaNr[i];
    }
    return suma;
}

console.log(sumaNr([1, -5, 20, -34, 16, 29, 36, -4]));
console.log(sumaNr([3.45, -2.68, 356, -75.96, 64, 19.28]));