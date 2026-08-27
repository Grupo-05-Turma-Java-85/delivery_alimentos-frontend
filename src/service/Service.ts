import axios from "axios"

// Conectar com o backend (baseURL = endereço do deploy)
const api = axios.create({
    baseURL: 'https://deliveryalimentos.onrender.com/'
})

// 1. Função assíncrona Buscar, responsável por executar todas as operações de busca de recursos na aplicação, como Categorias, Produtos e etc.
export const buscar = async (url: string, setDados: Function, header: Object) => {
    const resposta = await api.get(url, header)
    setDados(resposta.data)
}

// 2. Função assíncrona Cadastrar
export const cadastrar = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await api.post(url, dados, header)
    setDados(resposta.data)
}

export const atualizar = async (url: string, dados: Object, header: Object
) => {
    const resposta = await api.put(url, dados, header);
    return resposta.data;
}

// 4. Função assíncrona Deletar
export const deletar = async (url: string, header: Object) => {
    await api.delete(url, header)
}