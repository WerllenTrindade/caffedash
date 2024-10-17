import { ImageSourcePropType } from "react-native";

export interface listaProdutos {
    id: number;
    nome: string;
    preco: number;
    expresso: boolean;
    deepFoam: boolean;
    estrelas: number;
    imagem: ImageSourcePropType | null; 
}

const imagens = {
    item1: require('../assets/item1.png'),
    item2: require('../assets/item2.png'),
    item3: require('../assets/item3.png'),
}


export const coffeProdutos: listaProdutos[] = [
    { id: 1, nome: 'Cappuccino', preco: 12.5, expresso: true, deepFoam: true, estrelas: 4.5, imagem: imagens.item1 },
    { id: 2, nome: 'Macchiato', preco: 10.0, expresso: true, deepFoam: false, estrelas: 4.0, imagem: imagens.item2 },
    { id: 3, nome: 'Latte', preco: 11.0, expresso: false, deepFoam: true, estrelas: 4.2, imagem: imagens.item1 },
    { id: 4, nome: 'Americano', preco: 9.5, expresso: true, deepFoam: false, estrelas: 3.8, imagem: imagens.item2 }
  ];
  