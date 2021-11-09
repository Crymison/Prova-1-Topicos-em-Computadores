const Filtrarfraturasmenor2000 = require ('../lib/Main');

describe('Prova', () =>{
    test('Se o valor da fatura for menor que 2000', () => {
        
        const faturas = [
            {
            id: 1,
            codigo: 54654,
            valor: 500,
            data: 2,
            nome: 'Jorel',
            dataCliente: 5,
            estado: 'Para'
            },
            {
            id: 2,
            codigo: 54655,
            valor: 3900,
            data: 2,
            nome: 'Jose',
            dataCliente: 2,
            estado: 'Amazonas'
            },
            {
            id: 3,
            codigo: 54656,
            valor: 2500,
            data: 2,
            nome: 'Abigail',
            dataCliente: 6, 
            estado: 'Pernambuco'
            },
            {
            id: 4,
            codigo: 54657,
            valor: 1600,
            data: 2,
            nome: 'Guilherme', 
            dataCliente: 11, 
            estado: 'Santa Catarina'
            },
            {
            id: 5,
            codigo: 54658,
            valor: 2680,
            data: 2,
            nome: 'Loriane', 
            dataCliente: 1, 
            estado: 'Sao Paulo'
            },
            {
            id: 6,
            codigo: 54659,
            valor: 2260,
            data: 2,
            nome: 'Lucas', 
            dataCliente: 4, 
            estado: 'Parana'
            }
        ];

        const res = Filtrarfraturasmenor2000(faturas);
        
        const comparador = [
        {"codigo": 54655, "data": 2, "dataCliente": 2, "estado": "Amazonas", "id": 2, "nome": "Jose", "valor": 3900},
        {"codigo": 54656, "data": 2, "dataCliente": 6, "estado": "Pernambuco", "id": 3, "nome": "Abigail", "valor": 2500},
        {"codigo": 54658, "data": 2, "dataCliente": 1, "estado": "Sao Paulo", "id": 5, "nome": "Loriane", "valor": 2680},
        {"codigo": 54659, "data": 2, "dataCliente": 4, "estado": "Parana", "id": 6, "nome": "Lucas", "valor": 2260}];

        expect(res).toEqual(comparador);

    });
});