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
        //Junta o resultado dos 2 filtros
        junta = menor.concat(maior);

        //Filtra o mês maior que 1
        const filtra3 = (junta => junta.data > 1);
        return junta.filter(filtra3);
    //Ex 3
    }else if(numero === 3){
        var maior = {};
        var menor = {};
        var junta = {}

        //Filtra o valor menor que 2500
        const filtra = (faturas => faturas.valor < 2500);
        menor = faturas.filter(filtra);

        //Filtra o valor maior que 3000
        const filtra2 = (faturas => faturas.valor > 3000);
        maior = faturas.filter(filtra2);
        //Junta o resultado dos 2 filtros
        junta = menor.concat(maior);

        //Filtra o mês do Cliente maior que 2
        const filtra3 = (junta => junta.dataCliente > 2);
        return junta.filter(filtra3);
    }else{
        var aux = {};

        //Filtra o valor menor que 4000
        const filtra = (faturas => faturas.valor < 4000);
        aux = faturas.filter(filtra);

        //Filtra o estado sul
        const filtra2 = (aux => aux.estado === "Sul");

        return aux.filter(filtra2);
    }
};
module.exports = Filtrarfraturas;