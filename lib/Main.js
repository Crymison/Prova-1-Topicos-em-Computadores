function Filtrarfraturas(numero ,faturas){
    //Ex 1
    if(numero === 1){
        //Filtra valor maior que 2000
        const filtra = (faturas => faturas.valor > 2000);
        return faturas.filter(filtra);
    //Ex 2
    }else if(numero === 2){
        var menor = {};
        var maior = {};
        var junta = {}

        //Filtra o valor menor que 2000
        const filtra = (faturas => faturas.valor < 2000);
        menor = faturas.filter(filtra);

        //Filtra o valor maior que 2500
        const filtra2 = (faturas => faturas.valor > 2500);
        maior = faturas.filter(filtra2);
        junta = menor.concat(maior);

        //Filtra o mês maior que 1
        const filtra3 = (junta => junta.data > 1);
        return junta.filter(filtra3);
    //Ex 3
    }else{
        return null;
    }
    
};
module.exports = Filtrarfraturas;