const Filtrarfraturas = require ('../lib/Main');

describe('Prova', () =>{
    test('Se o valor da fatura for menor que 2000', () => {
        
        // var fatura = {};
        // fatura.codigo = 6519641;
        // fatura.valor = 1000;
        // fatura.data =  2; //mes
        
        const faturas =
        [
            {codigo: 54654, valor: 2600, data: 2, id: 1},
            {codigo: 54655, valor: 1600, data: 5, id: 2},
            {codigo: 54656, valor: 1990, data: 6, id: 3},
            {codigo: 54657, valor: 2000, data: 1, id: 4},
            {codigo: 54658, valor: 1400, data: 10, id: 5},
            {codigo: 54659, valor: 1800, data: 8, id: 6}
        ]

        // const clientes = 
        // [
        //     {nome: 'Jorel', data: 5, estado: 'Para', fatura: 1},
        //     {nome: 'Jose', data: 2, estado: 'Amazonas', fatura: 2},
        //     {nome: 'Abigail', data: 6, estado: 'Pernambuco', fatura: 3},
        //     {nome: 'Guilherme', data: 11, estado: 'Santa Catarina', fatura: 4},
        //     {nome: 'Loriane', data: 1, estado: 'Sao Paulo', fatura: 5},
        //     {nome: 'Lucas', data: 4, estado: 'Parana', fatura: 6}
        // ]

        const res = Filtrarfraturas(faturas);
        
        expect(res).toBe(true);
    });
});