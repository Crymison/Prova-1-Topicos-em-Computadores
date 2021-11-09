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
    }else if(numero === 3){
        var aux = {};
        var aux2 = {};
        var junta = {}

        const filtra = (faturas => faturas.valor < 2500);
        aux = faturas.filter(filtra);

        const filtra2 = (faturas => faturas.valor > 3000);
        aux2 = faturas.filter(filtra2);
        junta = aux.concat(aux2);

        const filtra3 = (junta => junta.dataCliente > 2);
        console.log(junta.filter(filtra3));
        return junta.filter(filtra3);
    }else{
        return faturas;
    }
    
};
module.exports = Filtrarfraturas;