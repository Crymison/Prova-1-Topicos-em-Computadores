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
            estado: 'Centro'
            },
            {
            id: 2,
            codigo: 54655,
            valor: 3900,
            data: 2,
            nome: 'Jose',
            dataCliente: 2,
            estado: 'Norte'
            },
            {
            id: 3,
            codigo: 54656,
            valor: 2500,
            data: 2,
            nome: 'Abigail',
            dataCliente: 6, 
            estado: 'Nordeste'
            },
            {
            id: 4,
            codigo: 54657,
            valor: 1600,
            data: 2,
            nome: 'Guilherme', 
            dataCliente: 11, 
            estado: 'Sul'
            },
            {
            id: 5,
            codigo: 54658,
            valor: 2680,
            data: 2,
            nome: 'Loriane', 
            dataCliente: 1, 
            estado: 'Suldoeste'
            },
            {
            id: 6,
            codigo: 54659,
            valor: 2260,
            data: 2,
            nome: 'Lucas', 
            dataCliente: 4, 
            estado: 'Sul'
            }
        ];
        let num = 1;
        const res = Filtrarfraturas(num,faturas);
        
        const comparador = [
        {"codigo": 54655, "data": 2, "dataCliente": 2, "estado": "Norte", "id": 2, "nome": "Jose", "valor": 3900},
        {"codigo": 54656, "data": 2, "dataCliente": 6, "estado": "Nordeste", "id": 3, "nome": "Abigail", "valor": 2500},
        {"codigo": 54658, "data": 2, "dataCliente": 1, "estado": "Suldoeste", "id": 5, "nome": "Loriane", "valor": 2680},
        {"codigo": 54659, "data": 2, "dataCliente": 4, "estado": "Sul", "id": 6, "nome": "Lucas", "valor": 2260}];
        expect(res).toEqual(comparador);
    });

    test('Se o valor da fatura estiver entre 2000 e 2500 e a data for menor ou igual a de um mês atrás', () => {

        var faturas = [
            {
            id: 1,
            codigo: 54654,
            valor: 500,
            data: 2,
            nome: 'Jorel',
            dataCliente: 5,
            estado: 'Centro'
            },
            {
            id: 2,
            codigo: 54655,
            valor: 3900,
            data: 2,
            nome: 'Jose',
            dataCliente: 2,
            estado: 'Norte'
            },
            {
            id: 3,
            codigo: 54656,
            valor: 2500,
            data: 2,
            nome: 'Abigail',
            dataCliente: 6, 
            estado: 'Nordeste'
            },
            {
            id: 4,
            codigo: 54657,
            valor: 1600,
            data: 1,
            nome: 'Guilherme', 
            dataCliente: 11, 
            estado: 'Sul'
            },
            {
            id: 5,
            codigo: 54658,
            valor: 2680,
            data: 5,
            nome: 'Loriane', 
            dataCliente: 1, 
            estado: 'Suldeste'
            },
            {
            id: 6,
            codigo: 54659,
            valor: 2260,
            data: 1,
            nome: 'Lucas', 
            dataCliente: 4, 
            estado: 'Sul'
            }
        ];
        
        let num = 2;
        var res = Filtrarfraturas(num, faturas);

        var comparador = [
        {"codigo": 54654, "data": 2, "dataCliente": 5, "estado": "Centro", "id": 1, "nome": "Jorel", "valor": 500}, 
        {"codigo": 54655, "data": 2, "dataCliente": 2, "estado": "Norte", "id": 2, "nome": "Jose", "valor": 3900}, 
        {"codigo": 54658, "data": 5, "dataCliente": 1, "estado": "Suldeste", "id": 5, "nome": "Loriane", "valor": 2680}];
        expect(res).toEqual(comparador);
    });

    test('Se o valor da fatura estiver entre 2500 e 3000 e a data de inclusão do cliente for menor ou igual a 2 meses atrás', () => {

        var faturas = [
            {
            id: 1,
            codigo: 54654,
            valor: 500,
            data: 2,
            nome: 'Jorel',
            dataCliente: 5,
            estado: 'Centro'
            },
            {
            id: 2,
            codigo: 54655,
            valor: 3900,
            data: 2,
            nome: 'Jose',
            dataCliente: 2,
            estado: 'Norte'
            },
            {
            id: 3,
            codigo: 54656,
            valor: 2500,
            data: 2,
            nome: 'Abigail',
            dataCliente: 6, 
            estado: 'Nordeste'
            },
            {
            id: 4,
            codigo: 54657,
            valor: 1600,
            data: 1,
            nome: 'Guilherme', 
            dataCliente: 11, 
            estado: 'Sul'
            },
            {
            id: 5,
            codigo: 54658,
            valor: 2680,
            data: 5,
            nome: 'Loriane', 
            dataCliente: 1, 
            estado: 'Suldeste'
            },
            {
            id: 6,
            codigo: 54659,
            valor: 2260,
            data: 1,
            nome: 'Lucas', 
            dataCliente: 4, 
            estado: 'Sul'
            }
        ];
        
        let num = 3;
        var res = Filtrarfraturas(num, faturas);

        var comparador = [
        {"codigo": 54654, "data": 2, "dataCliente": 5, "estado": "Centro", "id": 1, "nome": "Jorel", "valor": 500}, 
        {"codigo": 54657, "data": 1, "dataCliente": 11, "estado": "Sul", "id": 4, "nome": "Guilherme", "valor": 1600}, 
        {"codigo": 54659, "data": 1, "dataCliente": 4, "estado": "Sul", "id": 6, "nome": "Lucas", "valor": 2260}];
        expect(res).toEqual(comparador);
    });

    test('Se o valor da fatura for maior que 4000 e pertencer a algum estado da região Sul do Brasil', () => {

        var faturas = [
            {
            id: 1,
            codigo: 54654,
            valor: 500,
            data: 2,
            nome: 'Jorel',
            dataCliente: 5,
            estado: 'Centro'
            },
            {
            id: 2,
            codigo: 54655,
            valor: 3900,
            data: 2,
            nome: 'Jose',
            dataCliente: 2,
            estado: 'Norte'
            },
            {
            id: 3,
            codigo: 54656,
            valor: 2500,
            data: 2,
            nome: 'Abigail',
            dataCliente: 6, 
            estado: 'Nordeste'
            },
            {
            id: 4,
            codigo: 54657,
            valor: 1600,
            data: 1,
            nome: 'Guilherme', 
            dataCliente: 11, 
            estado: 'Sul'
            },
            {
            id: 5,
            codigo: 54658,
            valor: 2680,
            data: 5,
            nome: 'Loriane', 
            dataCliente: 1, 
            estado: 'Suldoeste'
            },
            {
            id: 6,
            codigo: 54659,
            valor: 2260,
            data: 1,
            nome: 'Lucas', 
            dataCliente: 4, 
            estado: 'Sul'
            }
        ];
        
        let num = 4;
        var res = Filtrarfraturas(num, faturas);

        var comparador = [
        {"codigo": 54657, "data": 1, "dataCliente": 11, "estado": "Sul", "id": 4, "nome": "Guilherme", "valor": 6600}, 
        {"codigo": 54659, "data": 1, "dataCliente": 4, "estado": "Sul", "id": 6, "nome": "Lucas", "valor": 2260}];
        expect(res).toEqual(comparador);
    });
});