function Filtrarfraturas(faturas){//Ex 1 - Se o valor da fatura for menor que 2000
    const filtro = (faturas => faturas.valor > 2000);
    return faturas.filter(filtro); 
};
function Filtrarfraturas2(faturas){//Ex 2 - Se o valor da fatura estiver entre 2000 e 2500 e a data for menor ou igual a de um mês atrás
    const filtro = (faturas => faturas.valor >= 2000 && faturas.valor <= 2500 && faturas.data > 1 || faturas.valor < 2000 || faturas.valor > 2500);
    return faturas.filter(filtro);
};
function Filtrarfraturas3(faturas, cliente){//Ex 3 - Se o valor da fatura estiver entre 2500 e 3000 e a data de inclusão do cliente for menor ou igual a 2 meses atrás
    const filtro = (faturas => faturas.valor >= 2500 && faturas.valor <= 3000);
    var cont = 0;
    var aux2 = {};
    var aux3 = {};
    const aux = faturas.filter(filtro);

    for(let i = 0; i < aux.length; i ++){
        for(let j = 0; j < faturas.length; j++){
            if(aux[i].id === cliente[j].id && cliente[j].data > 2){
                aux3[cont] = aux[i];
                cont ++;
            }
        }
    }
    const filtro2 = (faturas => faturas.valor < 2500 || faturas.valor > 3000);
    aux2 = faturas.filter(filtro2);
    aux3 = aux2.concat(aux3);
    return aux3;
};
function Filtrarfraturas4(faturas, cliente){//Ex 4 - Se o valor da fatura for maior que 4000 e pertencer a algum estado da região Sul do Brasil
    const filtro = (faturas => faturas.valor >= 4000);
    var cont = 0;
    var aux2 = {};
    var aux3 = {};
    const aux = faturas.filter(filtro);
    for(let i = 0; i < aux.length; i ++){
        for(let j = 0; j < faturas.length; j++){
            if(aux[i].id === cliente[j].id && cliente[j].estado !== "Parana" && cliente[j].estado !== "Rio Grande do Sul" && cliente[j].estado !== "Santa Catarina"){
                aux3[cont] = aux[i];
                cont ++;
            }
        }
    }
    console.log(aux3);

    const filtro2 = (faturas => faturas.valor < 4000);
    aux2 = faturas.filter(filtro2);
    aux3 = aux2.concat(aux3);
    return aux3;
};
module.exports = {Filtrarfraturas, Filtrarfraturas2, Filtrarfraturas3, Filtrarfraturas4}