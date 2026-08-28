import { PlusIcon } from "@phosphor-icons/react";
import { CheckFatIcon } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useState } from "react";
import type Produto from "../../models/Produto";
import { buscar } from "../../service/Service";
import axios from "axios";
import { Link } from "react-router-dom";
import { SyncLoader } from "react-spinners";
 
function getNutriScore(calories: number) {
    if (calories <= 300) return 'A';
    if (calories <= 500) return 'B';
    return 'C';
}
 
// Aceita categoria como string OU como objeto { categoria: string, ... }
function getNomeCategoria(categoria: unknown): string {
    if (!categoria) return '';
    if (typeof categoria === 'string') return categoria;
    if (typeof categoria === 'object' && 'categoria' in categoria) {
        return (categoria as { categoria: string }).categoria;
    }
    return '';
}
 
interface CardHomeProps {
    categoriaSelecionada?: string;
}
 
function CardHome({ categoriaSelecionada = 'Todas' }: CardHomeProps) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [produtos, setProdutos] = useState<Produto[]>([]);
 
    useEffect(() => {
        buscarProdutos();
    }, []);
 
    async function buscarProdutos() {
        try {
            setIsLoading(true);
 
            await buscar("/produtos", setProdutos, {});
        } catch (error) {
            if (axios.isAxiosError(error) && error.response?.status === 401) {
                alert(`Erro ao consultar os produtos: ${error.response.status}`);
            }
        } finally {
            setIsLoading(false);
        }
    }
 
    const produtosFiltrados = categoriaSelecionada === 'Todas'
        ? produtos
        : produtos.filter((produto) => getNomeCategoria(produto.categoria) === categoriaSelecionada);
 
    return (
        <section className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xl md:text-2xl font-bold font-headline text-on-surface">
                    Destaques Saudáveis
                </h2>
                <Link to='/produtos' className="text-primary font-bold text-xs uppercase tracking-wider hover:underline">
                    Ver todos
                </Link>
            </div>
            {isLoading && (
                <div className="flex justify-center mt-30 w-full my-8">
                    <SyncLoader color="#298451" size={32} />
                </div>
            )}
            {!isLoading && produtosFiltrados.length === 0 && (
                <p className="text-on-surface-variant text-sm text-center py-8">
                    Nenhum produto encontrado nessa categoria.
                </p>
            )}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {produtosFiltrados.map((produto) => {
                    const score = getNutriScore(produto.calorias);
 
                    return (
                        <article
                            key={produto.id}
                            className="group relative bg-surface-container-lowest rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                        >
                            <div className="relative h-48 bg-surface-container overflow-hidden">
                                <img
                                    src={produto.imagem}
                                    alt={produto.produto}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
 
                                <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                                    <div className="bg-white rounded-xl p-3 shadow-lg text-center w-full max-w-[200px]">
                                        <h4 className="text-emerald-700 font-bold text-xs">
                                            Transparência Nutricional
                                        </h4>
                                        <p className="text-gray-600 text-[11px] mt-1 font-medium">
                                            Carb: {produto.calorias}
                                        </p>
                                    </div>
                                </div>
 
                                <span className="absolute top-3 right-3 bg-lime-400 text-emerald-950 font-bold text-[11px] px-3 py-1 rounded-full flex items-center gap-1 shadow-xs z-10">
                                    Nutri-Score {score}
                                    <CheckFatIcon size={12} weight="fill" />
                                </span>
                            </div>
 
                            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                                <div>
                                    <h3 className="font-bold text-base font-headline text-on-surface">
                                        {produto.produto}
                                    </h3>
                                    <p className="text-on-surface-variant text-xs mt-1 leading-relaxed">
                                        {produto.descricao}
                                    </p>
                                </div>
 
                                <div className="flex items-center justify-between pt-2">
                                    <span className="text-lg font-bold font-headline text-primary">
                                        R${produto.valor}
                                    </span>
                                    <button className="w-9 h-9 rounded-full flex items-center justify-center transition-colors
                                        bg-surface-container-high text-primary hover:bg-primary hover:text-on-primary">
                                        <PlusIcon size={22} weight="bold" />
                                    </button>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
 
export default CardHome;