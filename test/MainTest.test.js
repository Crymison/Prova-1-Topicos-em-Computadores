const {Filtrarfraturas, Filtrarfraturas2, Filtrarfraturas3, Filtrarfraturas4} = require ('../lib/Main');

describe('Prova', () =>{

    //TESTE 1
    test('Se o valor da fatura for menor que 2000', () => {
        const faturas = [
            {id: 1, codigo: 54654, valor: 500, data: 6},
            {id: 2, codigo: 54655, valor: 3900, data: 3},
            {id: 3, codigo: 54656, valor: 2500, data: 2},
            {id: 4, codigo: 54657, valor: 1600, data: 0},
            {id: 5, codigo: 54658, valor: 2680, data: 5},
            {id: 6, codigo: 54659, valor: 2260, data: 1}
        ];

        const cliente = [
            {id: 1, nome: 'Lucas', data: "10/10/2021", estado: 'Santa Catarina'},
            {id: 2, nome: 'Jorel', data: "16/12/2021", estado: 'Amazonas'},
            {id: 3, nome: 'Jose', data: "05/03/2021", estado: 'Rio Grande do Sul'},
            {id: 4, nome: 'Abigail', data: "26/01/2022",  estado: 'São Paulo'},
            {id: 5, nome: 'Guilherme', data: "11/12/2021", estado: 'Parana'},
            {id: 6, nome: 'Loriane',  data: "10/11/2021",  estado: 'Rio de Janeiro'}
        ];
    
        var res = Filtrarfraturas(faturas, cliente);
        
        var comparador = [
            {"codigo": 54655, "data": 3, "id": 2, "valor": 3900}, 
            {"codigo": 54656, "data": 2, "id": 3, "valor": 2500}, 
            {"codigo": 54658, "data": 5, "id": 5, "valor": 2680}, 
            {"codigo": 54659, "data": 1, "id": 6, "valor": 2260}];
        expect(res).toEqual(comparador);
    });

    //TESTE 2
    test('Se o valor da fatura estiver entre 2000 e 2500 e a data for menor ou igual a de um mês atrás', () => {
        var faturas = [
            {id: 1, codigo: 54654, valor: 500, data: 6},
            {id: 2, codigo: 54655, valor: 3900, data: 3},
            {id: 3, codigo: 54656, valor: 2500, data: 2},
            {id: 4, codigo: 54657, valor: 1600, data: 0},
            {id: 5, codigo: 54658, valor: 2680, data: 5},
            {id: 6, codigo: 54659, valor: 2260, data: 1}
        ];

        var cliente = [
            {id: 1, nome: 'Lucas', data: "10/10/2021", estado: 'Santa Catarina'},
            {id: 2, nome: 'Jorel', data: "16/12/2021", estado: 'Amazonas'},
            {id: 3, nome: 'Jose', data: "05/03/2021", estado: 'Rio Grande do Sul'},
            {id: 4, nome: 'Abigail', data: "26/01/2022",  estado: 'São Paulo'},
            {id: 5, nome: 'Guilherme', data: "11/12/2021", estado: 'Parana'},
            {id: 6, nome: 'Loriane',  data: "10/11/2021",  estado: 'Rio de Janeiro'}
        ]

        const res = Filtrarfraturas2(faturas,cliente);
        
        const comparador = [
            {"codigo": 54654, "data": 6, "id": 1, "valor": 500}, 
            {"codigo": 54655, "data": 3, "id": 2, "valor": 3900}, 
            {"codigo": 54656, "data": 2, "id": 3, "valor": 2500}, 
            {"codigo": 54657, "data": 0, "id": 4, "valor": 1600}, 
            {"codigo": 54658, "data": 5, "id": 5, "valor": 2680}];
        expect(res).toEqual(comparador);
    });

    //TESTE 3
    test('Se o valor da fatura estiver entre 2500 e 3000 e a data de inclusão do cliente for menor ou igual a 2 meses atrás', () => {
        const faturas = [
            {id: 1, codigo: 54654, valor: 500, data: 6},
            {id: 2, codigo: 54655, valor: 3900, data: 3},
            {id: 3, codigo: 54656, valor: 2500, data: 2},
            {id: 4, codigo: 54657, valor: 3000, data: 0},
            {id: 5, codigo: 54658, valor: 2680, data: 5},
            {id: 6, codigo: 54659, valor: 2260, data: 1}
        ];

        const cliente = [
            {id: 1, nome: 'Lucas', data: 2, estado: 'Santa Catarina'},
            {id: 2, nome: 'Jorel', data: 5, estado: 'Amazonas'},
            {id: 3, nome: 'Jose', data: 2, estado: 'Rio Grande do Sul'},
            {id: 4, nome: 'Abigail', data: 1,  estado: 'São Paulo'},
            {id: 5, nome: 'Guilherme', data: 6, estado: 'Parana'},
            {id: 6, nome: 'Loriane',  data: 1,  estado: 'Rio de Janeiro'}
        ];
    
        var res = Filtrarfraturas3(faturas, cliente);
        
        var comparador = [
            {"codigo": 54654, "data": 6, "id": 1, "valor": 500}, 
            {"codigo": 54655, "data": 3, "id": 2, "valor": 3900}, 
            {"codigo": 54659, "data": 1, "id": 6, "valor": 2260}, 
            {"0": {"codigo": 54658, "data": 5, "id": 5, "valor": 2680}}];
        expect(res).toEqual(comparador);
    });

    //TESTE 4
    test('//Ex 4 - Se o valor da fatura for maior que 4000 e pertencer a algum estado da região Sul do Brasil', () => {
        const faturas = [
            {id: 1, codigo: 54654, valor: 500, data: 6},
            {id: 2, codigo: 54655, valor: 4900, data: 3},
            {id: 3, codigo: 54656, valor: 2500, data: 2},
            {id: 4, codigo: 54657, valor: 1600, data: 0},
            {id: 5, codigo: 54658, valor: 6680, data: 5},
            {id: 6, codigo: 54659, valor: 2260, data: 1}
        ];

        const cliente = [
            {id: 1, nome: 'Lucas', data: "10/10/2021", estado: 'Santa Catarina'},
            {id: 2, nome: 'Jorel', data: "16/12/2021", estado: 'Amazonas'},
            {id: 3, nome: 'Jose', data: "05/03/2021", estado: 'Rio Grande do Sul'},
            {id: 4, nome: 'Abigail', data: "26/01/2022",  estado: 'São Paulo'},
            {id: 5, nome: 'Guilherme', data: "11/12/2021", estado: 'Parana'},
            {id: 6, nome: 'Loriane',  data: "10/11/2021",  estado: 'Rio de Janeiro'}
        ];

        var res = Filtrarfraturas4(faturas, cliente);
        
        var comparador = [
            {"codigo": 54654, "data": 6, "id": 1, "valor": 500}, 
            {"codigo": 54656, "data": 2, "id": 3, "valor": 2500}, 
            {"codigo": 54657, "data": 0, "id": 4, "valor": 1600}, 
            {"codigo": 54659, "data": 1, "id": 6, "valor": 2260}, 
            {"0": {"codigo": 54655, "data": 3, "id": 2, "valor": 4900}}];
        expect(res).toEqual(comparador);
    });
});