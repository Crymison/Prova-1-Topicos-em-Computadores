function Filtrarfraturas(numero ,faturas){
    if(numero === 1){
        const filtra = (faturas => faturas.valor > 2000);
        return faturas.filter(filtra);
    }else if(numero === 2){
        const filtra = (faturas => faturas.valor < 2500 && faturas.valor > 2500 && faturas.data <= 1);
        return faturas.filter(filtra);
    }else{
        return null;
    }
    
};
module.exports = Filtrarfraturas;