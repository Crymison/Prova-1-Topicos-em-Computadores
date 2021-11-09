const Filtrarfraturas = require ('../lib/Main');

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
        let num = 1;
        const res = Filtrarfraturas(num,faturas);
        
        const comparador = [
        {"codigo": 54655, "data": 2, "dataCliente": 2, "estado": "Amazonas", "id": 2, "nome": "Jose", "valor": 3900},
        {"codigo": 54656, "data": 2, "dataCliente": 6, "estado": "Pernambuco", "id": 3, "nome": "Abigail", "valor": 2500},
        {"codigo": 54658, "data": 2, "dataCliente": 1, "estado": "Sao Paulo", "id": 5, "nome": "Loriane", "valor": 2680},
        {"codigo": 54659, "data": 2, "dataCliente": 4, "estado": "Parana", "id": 6, "nome": "Lucas", "valor": 2260}];
        expect(res).toEqual(comparador);
    });

    test('Se o valor da fatura estiver entre 2000 e 2500 e a data for menor ou igual a de um mês atrás', () => {

        var faturas2 = [
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
            data: 1,
            nome: 'Guilherme', 
            dataCliente: 11, 
            estado: 'Santa Catarina'
            },
            {
            id: 5,
            codigo: 54658,
            valor: 2680,
            data: 5,
            nome: 'Loriane', 
            dataCliente: 1, 
            estado: 'Sao Paulo'
            },
            {
            id: 6,
            codigo: 54659,
            valor: 2260,
            data: 1,
            nome: 'Lucas', 
            dataCliente: 4, 
            estado: 'Parana'
            }
        ];
        
        let num = 2;
        var res = Filtrarfraturas(num, faturas2);

        var comparador2 = [
        {"codigo": 54654, "data": 2, "dataCliente": 5, "estado": "Para", "id": 1, "nome": "Jorel", "valor": 500}, 
        {"codigo": 54655, "data": 2, "dataCliente": 2, "estado": "Amazonas", "id": 2, "nome": "Jose", "valor": 3900}, 
        {"codigo": 54658, "data": 5, "dataCliente": 1, "estado": "Sao Paulo", "id": 5, "nome": "Loriane", "valor": 2680}];
        expect(res).toEqual(comparador2);
    });

    test('Se o valor da fatura estiver entre 2500 e 3000 e a data de inclusão do cliente for menor ou igual a 2 meses atrás;', () => {

        var faturas2 = [
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
            data: 1,
            nome: 'Guilherme', 
            dataCliente: 11, 
            estado: 'Santa Catarina'
            },
            {
            id: 5,
            codigo: 54658,
            valor: 2680,
            data: 5,
            nome: 'Loriane', 
            dataCliente: 1, 
            estado: 'Sao Paulo'
            },
            {
            id: 6,
            codigo: 54659,
            valor: 2260,
            data: 1,
            nome: 'Lucas', 
            dataCliente: 4, 
            estado: 'Parana'
            }
        ];
        
        let num = 3;
        var res = Filtrarfraturas(num, faturas2);

        var comparador2 = [
        {"codigo": 54654, "data": 2, "dataCliente": 5, "estado": "Para", "id": 1, "nome": "Jorel", "valor": 500}, 
        {"codigo": 54657, "data": 1, "dataCliente": 10, "estado": "Santa Catarina", "id": 4, "nome": "Guilherme", "valor": 1600}, 
        {"codigo": 54659, "data": 1, "dataCliente": 4, "estado": "Parana", "id": 6, "nome": "Lucas", "valor": 2260}];
        expect(res).toEqual(comparador2);
    });
});