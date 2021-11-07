function Filtrarfraturas (fatura){

    const faturas =
        [
            {codigo: 54654, valor: 2600, data: 2, id: 1},
            {codigo: 54655, valor: 1600, data: 5, id: 2},
            {codigo: 54656, valor: 1990, data: 6, id: 3},
            {codigo: 54657, valor: 3000, data: 1, id: 4},
            {codigo: 54658, valor: 1400, data: 10, id: 5},
            {codigo: 54659, valor: 1800, data: 8, id: 6}
        ]

    let i = 0;
    const arr = [faturas];

    for(i = 0; i < arr.length; i++){
        // if(arr[i].valor < 2000){
        const test = faturas.reduce((valor) => valor < 2000, 0);
        console.log(test);
        return test;
        // }else{
            // return false;
        // }
    }
    return false
};

module.exports = Filtrarfraturas;