import type Categoria from "./Categoria";

export default interface Produto {
    id: number;
    produto: string;
    calorias: number;
    descricao: string;
    quantidade: number;
    valor: number;
    imagem: string;
    categoria?: Categoria | null;
}