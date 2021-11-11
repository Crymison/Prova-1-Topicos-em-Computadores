const {Filtrarfraturas, Filtrarfraturas2, Filtrarfraturas3, Filtrarfraturas4} = require ('../lib/Main');

describe('Prova', () =>{
    test('Se o valor da fatura for menor que 2000', () => {
        const faturas = [
            {id: 1, codigo: 54654, valor: 500, data: 2},
            {id: 2, codigo: 54655, valor: 3900, data: 2},
            {id: 3, codigo: 54656, valor: 2500, data: 2},
            {id: 4, codigo: 54657, valor: 1600, data: 2},
            {id: 5, codigo: 54658, valor: 2680, data: 2},
            {id: 6, codigo: 54659, valor: 2260, data: 2}
        ];

        const cliente = [
            {id: 1, nome: 'Lucas', data: 4, estado: 'Santa Catarina'},
            {id: 2, nome: 'Jorel', data: 5, estado: 'Amazonas'},
            {id: 3, nome: 'Jose', data: 3, estado: 'Rio Grande do Sul'},
            {id: 4, nome: 'Abigail', data: 6,  estado: 'São Paulo'},
            {id: 5, nome: 'Guilherme', data: 1, estado: 'Parana'},
            {id: 6, nome: 'Loriane',  data: 1,  estado: 'Rio de Janeiro'}
        ];
    
        var res = Filtrarfraturas(faturas, cliente);
        
        var comparador = [
            {"codigo": 54655, "data": 2, "id": 2, "valor": 3900}, 
            {"codigo": 54656, "data": 2, "id": 3, "valor": 2500}, 
            {"codigo": 54658, "data": 2, "id": 5, "valor": 2680}, 
            {"codigo": 54659, "data": 2, "id": 6, "valor": 2260}];
        expect(res).toEqual(true);
    });
    test('Se o valor da fatura estiver entre 2000 e 2500 e a data for menor ou igual a de um mês atrás', () => {
        var faturas = [
            {idfatura: 1, codigo: 54654, valor: 500, data: 2},
            {idfatura: 2, codigo: 54655, valor: 3900, data: 2},
            {idfatura: 3, codigo: 54656, valor: 2500, data: 2},
            {idfatura: 4, codigo: 54657, valor: 1600, data: 2},
            {idfatura: 5, codigo: 54658, valor: 2680, data: 2},
            {idfatura: 6, codigo: 54659, valor: 2260, data: 2}
        ];

        var cliente = [
            {idcliente: 1, nome: 'Lucas', dataCliente: 4, estado: 'Santa Catarina'},
            {idcliente: 2, nome: 'Jorel', dataCliente: 5, estado: 'Amazonas'},
            {idcliente: 3, nome: 'Jose', dataCliente: 2, estado: 'Rio Grande do Sul'},
            {idcliente: 4, nome: 'Abigail', dataCliente: 6,  estado: 'São Paulo'},
            {idcliente: 5, nome: 'Guilherme', dataCliente: 11, estado: 'Parana'},
            {idcliente: 6, nome: 'Loriane',  dataCliente: 1,  estado: 'Rio de Janeiro'}
        ]

        const res = Filtrarfraturas2(faturas,cliente);
        
        const comparador = [
            {"codigo": 54654, "data": 2, "idfatura": 1, "valor": 500}, 
            {"codigo": 54655, "data": 2, "idfatura": 2, "valor": 3900}, 
            {"codigo": 54656, "data": 2, "idfatura": 3, "valor": 2500}, 
            {"codigo": 54657, "data": 2, "idfatura": 4, "valor": 1600}, 
            {"codigo": 54658, "data": 2, "idfatura": 5, "valor": 2680}, 
            {"codigo": 54659, "data": 2, "idfatura": 6, "valor": 2260}];
        expect(res).toEqual(true);
    });
    test('Se o valor da fatura estiver entre 2500 e 3000 e a data de inclusão do cliente for menor ou igual a 2 meses atrás', () => {
        const faturas = [
            {id: 1, codigo: 54654, valor: 500, data: 2},
            {id: 2, codigo: 54655, valor: 3900, data: 2},
            {id: 3, codigo: 54656, valor: 2500, data: 2},
            {id: 4, codigo: 54657, valor: 1600, data: 2},
            {id: 5, codigo: 54658, valor: 2680, data: 2},
            {id: 6, codigo: 54659, valor: 2260, data: 2}
        ];

        const cliente = [
            {id: 1, nome: 'Lucas', data: 4, estado: 'Santa Catarina'},
            {id: 2, nome: 'Jorel', data: 5, estado: 'Amazonas'},
            {id: 3, nome: 'Jose', data: 3, estado: 'Rio Grande do Sul'},
            {id: 4, nome: 'Abigail', data: 6,  estado: 'São Paulo'},
            {id: 5, nome: 'Guilherme', data: 1, estado: 'Parana'},
            {id: 6, nome: 'Loriane',  data: 1,  estado: 'Rio de Janeiro'}
        ];
    
        var res = Filtrarfraturas3(faturas, cliente);
        
        var comparador = [
            {"codigo": 54654, "data": 2, "id": 1, "valor": 500}, 
            {"codigo": 54655, "data": 2, "id": 2, "valor": 3900}, 
            {"codigo": 54657, "data": 2, "id": 4, "valor": 1600}, 
            {"codigo": 54659, "data": 2, "id": 6, "valor": 2260}, 
            {"0": {"codigo": 54656, "data": 2, "id": 3, "valor": 2500}}];
        expect(res).toEqual(true);
    });
    test('//Ex 4 - Se o valor da fatura for maior que 4000 e pertencer a algum estado da região Sul do Brasil', () => {
        const faturas = [
            {id: 1, codigo: 54654, valor: 500, data: 2},
            {id: 2, codigo: 54655, valor: 4900, data: 2},
            {id: 3, codigo: 54656, valor: 2500, data: 2},
            {id: 4, codigo: 54657, valor: 1600, data: 2},
            {id: 5, codigo: 54658, valor: 6680, data: 2},
            {id: 6, codigo: 54659, valor: 2260, data: 2}
        ];

        const cliente = [
            {id: 1, nome: 'Lucas', data: 4, estado: 'Santa Catarina'},
            {id: 2, nome: 'Jorel', data: 5, estado: 'Amazonas'},
            {id: 3, nome: 'Jose', data: 3, estado: 'Rio Grande do Sul'},
            {id: 4, nome: 'Abigail', data: 6,  estado: 'São Paulo'},
            {id: 5, nome: 'Guilherme', data: 1, estado: 'Parana'},
            {id: 6, nome: 'Loriane',  data: 1,  estado: 'Rio de Janeiro'}
        ];

        var res = Filtrarfraturas4(faturas, cliente);
        
        var comparador = [
            {"codigo": 54654, "data": 2, "id": 1, "valor": 500}, 
            {"codigo": 54656, "data": 2, "id": 3, "valor": 2500}, 
            {"codigo": 54657, "data": 2, "id": 4, "valor": 1600}, 
            {"codigo": 54659, "data": 2, "id": 6, "valor": 2260}, 
            {"0": {"codigo": 54655, "data": 2, "id": 2, "valor": 4900}}];
        expect(res).toEqual(true);
    });
});