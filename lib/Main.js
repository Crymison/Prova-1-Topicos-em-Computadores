function Filtrarfraturas (faturas){

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