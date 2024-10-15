export interface listaGrupo {
    id: number;
    nome: string;
}

export interface listaProdutos {
    id: number;
    nome: string;
    preco: number;
    expresso: boolean;
    deepFoam: boolean;
    estrelas: number;
}

export const coffeeGroup: listaGrupo[] = [
    { id: 0, nome: 'All Coffee' },
    { id: 1, nome: 'Cappuccino' },
    { id: 2, nome: 'Macchiato' },
    { id: 3, nome: 'Latte' },
    { id: 4, nome: 'Americano' }
  ];

  const coffeProdutos: listaProdutos[] = [
    { id: 1, nome: 'Cappuccino', preco: 12.5, expresso: true, deepFoam: true, estrelas: 4.5 },
    { id: 2, nome: 'Macchiato', preco: 10.0, expresso: true, deepFoam: false, estrelas: 4.0 },
    { id: 3, nome: 'Latte', preco: 11.0, expresso: false, deepFoam: true, estrelas: 4.2 },
    { id: 4, nome: 'Americano', preco: 9.5, expresso: true, deepFoam: false, estrelas: 3.8 },
    { id: 5, nome: 'Caffe Mocha', preco: 13.0, expresso: true, deepFoam: true, estrelas: 4.7 },
    { id: 6, nome: 'Flat White', preco: 11.5, expresso: true, deepFoam: true, estrelas: 4.3 },
    { id: 7, nome: 'Affogato', preco: 14.0, expresso: true, deepFoam: false, estrelas: 4.6 },
    { id: 8, nome: 'Irish Coffee', preco: 15.5, expresso: false, deepFoam: false, estrelas: 4.8 },
    { id: 9, nome: 'Cortado', preco: 10.5, expresso: true, deepFoam: false, estrelas: 4.1 },
    { id: 10, nome: 'Mocha', preco: 12.8, expresso: true, deepFoam: true, estrelas: 4.4 }
  ];
  