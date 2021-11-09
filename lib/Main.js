function Filtrarfraturasmenor2000(faturas){

    const filtra = (faturas => faturas.valor > 2000);
    return faturas.filter(filtra);
    
};

module.exports = Filtrarfraturasmenor2000;