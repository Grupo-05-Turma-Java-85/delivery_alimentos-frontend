import { useEffect, useState } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

import type Produto from "../../../models/Produto";
import type Categoria from "../../../models/Categoria";

import { buscar, cadastrar } from "../../../service/Service";

interface FormProdutoProps {
    onProdutoCadastrado?: (produto: Produto) => void;
}

function FormProduto({
    onProdutoCadastrado,
}: FormProdutoProps) {

    const [produto, setProduto] = useState("");
    const [descricao, setDescricao] = useState("");
    const [calorias, setCalorias] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [valor, setValor] = useState("");
    const [imagem, setImagem] = useState("");

    const [categoriaId, setCategoriaId] = useState("");
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingCategorias, setIsLoadingCategorias] = useState(false);

    useEffect(() => {
        buscarCategorias();
    }, []);

    async function buscarCategorias() {

        try {

            setIsLoadingCategorias(true);

            await buscar(
                "/categorias",
                setCategorias,
                {}
            );

        } catch (error) {

            console.error(
                "Erro ao buscar categorias:",
                error
            );

            if (axios.isAxiosError(error)) {

                toast.error(
                    `Erro ao consultar categorias: ${
                        error.response?.status ||
                        "Erro desconhecido"
                    }`
                );

            } else {

                toast.error(
                    "Não foi possível carregar as categorias."
                );

            }

        } finally {

            setIsLoadingCategorias(false);

        }
    }

    async function cadastrarProduto(
        e: React.FormEvent<HTMLFormElement>
    ) {

        e.preventDefault();

        if (!produto.trim()) {

            toast.warning(
                "Digite o nome do produto."
            );

            return;
        }

        if (!descricao.trim()) {

            toast.warning(
                "Digite a descrição do produto."
            );

            return;
        }

        if (!categoriaId) {

            toast.warning(
                "Selecione uma categoria."
            );

            return;
        }

        if (!calorias || !quantidade || !valor) {

            toast.warning(
                "Preencha todos os campos obrigatórios."
            );

            return;
        }

        try {

            setIsLoading(true);

            const novaProduto = {

                produto: produto.trim(),

                descricao: descricao.trim(),

                calorias: Number(calorias),

                quantidade: Number(quantidade),

                valor: Number(valor),

                imagem: imagem.trim(),

                categoria: {
                    id: Number(categoriaId),
                },

            };

            await cadastrar(
                "/produtos",
                novaProduto,
                () => {},
                {}
            );

            toast.success(
                "Produto cadastrado com sucesso!"
            );

            setProduto("");
            setDescricao("");
            setCalorias("");
            setQuantidade("");
            setValor("");
            setImagem("");
            setCategoriaId("");

            if (onProdutoCadastrado) {

                onProdutoCadastrado(
                    novaProduto as Produto
                );

            }

        } catch (error) {

            console.error(
                "Erro ao cadastrar produto:",
                error
            );

            if (axios.isAxiosError(error)) {

                toast.error(
                    `Erro ao cadastrar produto: ${
                        error.response?.status ||
                        "Erro desconhecido"
                    }`
                );

            } else {

                toast.error(
                    "Não foi possível cadastrar o produto."
                );

            }

        } finally {

            setIsLoading(false);

        }
    }

    return (

        <div className="bg-emerald-800 flex flex-col overflow-hidden justify-between">

            <div className="min-h-screen flex items-center justify-center bg-emerald-800-low px-6 py-10">

                <div className="w-full max-w-2xl">

                    <div className="relative overflow-hidden rounded-3xl bg-surface-container-lowest border border-outline-variant/20 shadow-2xl p-8 md:p-10">

                        {/* Detalhe superior */}

                        <div className="absolute top-0 left-0 w-full h-1 bg-primary" />

                        {/* Título */}

                        <div className="text-center mb-8">

                            <h1 className="text-3xl font-bold font-headline text-on-surface">

                                Cadastrar Produto

                            </h1>

                            <p className="mt-2 text-base text-on-surface-variant">

                                Adicione um novo produto à sua loja.

                            </p>

                        </div>

                        {/* Formulário */}

                        <form
                            onSubmit={cadastrarProduto}
                            className="space-y-5"
                        >

                            {/* Produto */}

                            <div className="space-y-2">

                                <label
                                    htmlFor="produto"
                                    className="block text-sm font-bold text-on-surface"
                                >

                                    Nome do produto

                                </label>

                                <input
                                    id="produto"
                                    name="produto"
                                    type="text"
                                    value={produto}
                                    onChange={(e) =>
                                        setProduto(e.target.value)
                                    }
                                    disabled={isLoading}
                                    placeholder="Digite o nome do produto"
                                    className="w-full rounded-2xl border border-outline-variant bg-surface-container-low px-4 py-3 text-on-surface outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-60"
                                />

                            </div>

                            {/* Descrição */}

                            <div className="space-y-2">

                                <label
                                    htmlFor="descricao"
                                    className="block text-sm font-bold text-on-surface"
                                >

                                    Descrição

                                </label>

                                <textarea
                                    id="descricao"
                                    name="descricao"
                                    value={descricao}
                                    onChange={(e) =>
                                        setDescricao(e.target.value)
                                    }
                                    disabled={isLoading}
                                    placeholder="Digite a descrição do produto"
                                    rows={3}
                                    className="w-full rounded-2xl border border-outline-variant bg-surface-container-low px-4 py-3 text-on-surface outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-60 resize-none"
                                />

                            </div>

                            {/* Calorias + Quantidade */}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                                <div className="space-y-2">

                                    <label
                                        htmlFor="calorias"
                                        className="block text-sm font-bold text-on-surface"
                                    >

                                        Calorias

                                    </label>

                                    <input
                                        id="calorias"
                                        name="calorias"
                                        type="number"
                                        min="0"
                                        value={calorias}
                                        onChange={(e) =>
                                            setCalorias(e.target.value)
                                        }
                                        disabled={isLoading}
                                        placeholder="Ex: 350"
                                        className="w-full rounded-2xl border border-outline-variant bg-surface-container-low px-4 py-3 text-on-surface outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-60"
                                    />

                                </div>

                                <div className="space-y-2">

                                    <label
                                        htmlFor="quantidade"
                                        className="block text-sm font-bold text-on-surface"
                                    >

                                        Quantidade

                                    </label>

                                    <input
                                        id="quantidade"
                                        name="quantidade"
                                        type="number"
                                        min="0"
                                        value={quantidade}
                                        onChange={(e) =>
                                            setQuantidade(e.target.value)
                                        }
                                        disabled={isLoading}
                                        placeholder="Ex: 1"
                                        className="w-full rounded-2xl border border-outline-variant bg-surface-container-low px-4 py-3 text-on-surface outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-60"
                                    />

                                </div>

                            </div>

                            {/* Valor */}

                            <div className="space-y-2">

                                <label
                                    htmlFor="valor"
                                    className="block text-sm font-bold text-on-surface"
                                >

                                    Valor

                                </label>

                                <input
                                    id="valor"
                                    name="valor"
                                    type="number"
                                    min="0"
                                    step="0.01"
                                    value={valor}
                                    onChange={(e) =>
                                        setValor(e.target.value)
                                    }
                                    disabled={isLoading}
                                    placeholder="Ex: 29.90"
                                    className="w-full rounded-2xl border border-outline-variant bg-surface-container-low px-4 py-3 text-on-surface outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-60"
                                />

                            </div>

                            {/* Imagem */}

                            <div className="space-y-2">

                                <label
                                    htmlFor="imagem"
                                    className="block text-sm font-bold text-on-surface"
                                >

                                    URL da imagem

                                </label>

                                <input
                                    id="imagem"
                                    name="imagem"
                                    type="text"
                                    value={imagem}
                                    onChange={(e) =>
                                        setImagem(e.target.value)
                                    }
                                    disabled={isLoading}
                                    placeholder="Digite a URL da imagem"
                                    className="w-full rounded-2xl border border-outline-variant bg-surface-container-low px-4 py-3 text-on-surface outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-60"
                                />

                            </div>

                            {/* Categoria */}

                            <div className="space-y-2">

                                <label
                                    htmlFor="categoria"
                                    className="block text-sm font-bold text-on-surface"
                                >

                                    Categoria

                                </label>

                                <select
                                    id="categoria"
                                    name="categoria"
                                    value={categoriaId}
                                    onChange={(e) =>
                                        setCategoriaId(e.target.value)
                                    }
                                    disabled={
                                        isLoading ||
                                        isLoadingCategorias
                                    }
                                    className="w-full rounded-2xl border border-outline-variant bg-surface-container-low px-4 py-3 text-on-surface outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-60"
                                >

                                    <option value="">
                                        {isLoadingCategorias
                                            ? "Carregando categorias..."
                                            : "Selecione uma categoria"}
                                    </option>

                                    {categorias.map((categoria) => (

                                        <option
                                            key={categoria.id}
                                            value={categoria.id}
                                        >

                                            {categoria.categoria}

                                        </option>

                                    ))}

                                </select>

                            </div>

                            {/* Botão */}

                            <button
                                type="submit"
                                disabled={
                                    isLoading ||
                                    !produto.trim() ||
                                    !descricao.trim() ||
                                    !calorias ||
                                    !quantidade ||
                                    !valor ||
                                    !categoriaId
                                }
                                className="w-full mt-6 px-6 py-3 rounded-full bg-primary text-on-primary font-bold transition-all hover:opacity-90 flex items-center justify-center min-h-[48px] disabled:opacity-70 disabled:cursor-not-allowed"
                            >

                                {isLoading ? (

                                    <ClipLoader
                                        color="#ffffff"
                                        size={22}
                                    />

                                ) : (

                                    "Cadastrar produto"

                                )}

                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default FormProduto;