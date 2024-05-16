function nrVocale(sir){
    let nrVocale=0;
    const vocale="aeiou";

    for(let i=0; i < sir.length; i++){
        if(vocale.includes(sir[i].toLowerCase())){
            nrVocale++;
        }
    }

    return nrVocale;
}

console.log(nrVocale("string de test"));
console.log(nrVocale("Buna Ziuaa"));
console.log(nrVocale("Astazi Este O Zi Insorita"));