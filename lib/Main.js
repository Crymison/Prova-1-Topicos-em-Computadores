function Filtrarfraturas(numero ,faturas){

    if(numero === 1){
        const filtra = (faturas => faturas.valor > 2000);
        return faturas.filter(filtra);
    }else if(numero === 2){
        var aux = {};
        var aux2 = {};
        var junta = {}

        const filtra = (faturas => faturas.valor < 2000);
        aux = faturas.filter(filtra);

        const filtra2 = (faturas => faturas.valor > 2500);
        aux2 = faturas.filter(filtra2);
        junta = aux.concat(aux2);

        const filtra3 = (junta => junta.data > 1);
        return junta.filter(filtra3);
    }else{
        return numero;
    }
    
};
module.exports = Filtrarfraturas;