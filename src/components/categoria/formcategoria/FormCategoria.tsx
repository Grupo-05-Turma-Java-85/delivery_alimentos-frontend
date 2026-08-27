import { useState } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

import type Categoria from "../../../models/Categoria";
import { cadastrar } from "../../../service/Service";

interface FormCategoriaProps {
    onCategoriaCadastrada?: (categoria: Categoria) => void;
}

function FormCategoria({
    onCategoriaCadastrada,
}: FormCategoriaProps) {

    const [categoria, setCategoria] = useState("");
    const [imagem, setImagem] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    async function cadastrarCategoria(
        e: React.FormEvent<HTMLFormElement>
    ) {
        e.preventDefault();

        if (!categoria.trim()) {
            toast.warning("Digite o nome da categoria.");
            return;
        }

        try {
            setIsLoading(true);

            const novaCategoria = {
                categoria: categoria.trim(),
                imagem: imagem.trim(),
            };

            await cadastrar(
                "/categorias",
                novaCategoria,
                () => { },
                {}
            );

            toast.success(
                "Categoria cadastrada com sucesso!"
            );

            setCategoria("");
            setImagem("");

            if (onCategoriaCadastrada) {
                onCategoriaCadastrada(
                    novaCategoria as Categoria
                );
            }

        } catch (error) {

            console.error(
                "Erro ao cadastrar categoria:",
                error
            );

            if (axios.isAxiosError(error)) {

                toast.error(
                    `Erro ao cadastrar categoria: ${error.response?.status ||
                    "Erro desconhecido"
                    }`
                );

            } else {

                toast.error(
                    "Não foi possível cadastrar a categoria."
                );
            }

        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className='bg-emerald-800 flex flex-col overflow-hidden justify-between'>

            <div className="min-h-screen flex items-center justify-center bg-emerald-800-low px-6 py-10">

                <div className="w-full max-w-xl">

                    <div className="relative overflow-hidden rounded-3xl bg-surface-container-lowest border border-outline-variant/20 shadow-2xl p-8 md:p-10">

                        {/* Detalhe superior */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-primary" />

                        {/* Título */}
                        <div className="text-center mb-8">

                            <h1 className="text-3xl font-bold font-headline text-on-surface">
                                Cadastrar Categoria
                            </h1>

                            <p className="mt-2 text-base text-on-surface-variant">
                                Adicione uma nova categoria.
                            </p>

                        </div>

                        {/* Formulário */}
                        <form
                            onSubmit={cadastrarCategoria}
                            className="space-y-5"
                        >

                            {/* Nome */}
                            <div className="space-y-2">

                                <label
                                    htmlFor="categoria"
                                    className="block text-sm font-bold text-on-surface"
                                >
                                    Nome da categoria
                                </label>

                                <input
                                    id="categoria"
                                    name="categoria"
                                    type="text"
                                    value={categoria}
                                    onChange={(e) =>
                                        setCategoria(e.target.value)
                                    }
                                    disabled={isLoading}
                                    placeholder="Digite o nome da categoria"
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

                            {/* Botão */}
                            <button
                                type="submit"
                                disabled={
                                    isLoading ||
                                    !categoria.trim()
                                }
                                className="w-full mt-6 px-6 py-3 rounded-full bg-primary text-on-primary font-bold transition-all hover:opacity-90 flex items-center justify-center min-h-[48px] disabled:opacity-70 disabled:cursor-not-allowed"
                            >

                                {isLoading ? (
                                    <ClipLoader
                                        color="#ffffff"
                                        size={22}
                                    />
                                ) : (
                                    "Cadastrar categoria"
                                )}

                            </button>

                        </form>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default FormCategoria;