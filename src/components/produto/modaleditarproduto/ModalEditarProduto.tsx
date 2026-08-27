import { useEffect, useState } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { PencilIcon, XIcon } from "@phosphor-icons/react";
import { toast } from "react-toastify";

import type Produto from "../../../models/Produto";
import { atualizar } from "../../../service/Service";

interface ModalEditarProdutoProps {
  produto: Produto;
  fecharModal: () => void;
  onProdutoAtualizado?: (produto: Produto) => void;
}

function ModalEditarProduto({
  produto,
  fecharModal,
  onProdutoAtualizado,
}: ModalEditarProdutoProps) {

  const [produtoEditado, setProdutoEditado] =
    useState<Produto>(produto);

  const [isLoading, setIsLoading] =
    useState<boolean>(false);

  useEffect(() => {
    setProdutoEditado(produto);
  }, [produto]);

  function atualizarEstado(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setProdutoEditado({
      ...produtoEditado,
      [e.target.name]:
        e.target.name === "valor" ||
        e.target.name === "calorias" ||
        e.target.name === "quantidade"
          ? Number(e.target.value)
          : e.target.value,
    });
  }

  async function salvarAlteracoes() {

    try {

      setIsLoading(true);

      const produtoAtualizado = await atualizar(
        "/produtos",
        produtoEditado,
        {}
      );

      console.log(
        "Produto atualizado:",
        produtoAtualizado
      );

      if (onProdutoAtualizado) {
        onProdutoAtualizado(produtoAtualizado);
      }

      toast.success(
        "Produto atualizado com sucesso!"
      );

      fecharModal();

    } catch (error) {

      console.error(
        "Erro ao atualizar produto:",
        error
      );

      if (axios.isAxiosError(error)) {

        console.log(
          "Resposta da API:",
          error.response?.data
        );

        toast.error(
          `Erro ao atualizar o produto: ${
            error.response?.status ||
            "Erro desconhecido"
          }`
        );

      } else {

        toast.error(
          "Erro ao atualizar o produto."
        );

      }

    } finally {

      setIsLoading(false);

    }
  }

  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-6 py-6">

      <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">

        <div className="relative overflow-hidden rounded-3xl bg-surface-container-lowest border border-outline-variant/20 shadow-2xl p-8 md:p-10">

          {/* Detalhe superior */}

          <div className="absolute top-0 left-0 w-full h-1 bg-primary" />

          {/* Fechar */}

          <button
            type="button"
            onClick={fecharModal}
            disabled={isLoading}
            className="absolute top-5 right-5 flex items-center justify-center w-10 h-10 rounded-full bg-surface-container-high text-on-surface-variant hover:bg-surface-container transition-all hover:scale-105 disabled:opacity-50"
          >

            <XIcon
              size={22}
              weight="bold"
            />

          </button>

          {/* Ícone */}

          <div className="flex justify-center mb-6">

            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-secondary-container text-on-secondary-container">

              <PencilIcon
                size={40}
                weight="fill"
              />

            </div>

          </div>

          {/* Título */}

          <div className="text-center mb-8">

            <h1 className="text-3xl font-bold font-headline text-on-surface">
              Editar Produto
            </h1>

            <p className="mt-2 text-base text-on-surface-variant">
              Altere as informações do produto.
            </p>

          </div>

          {/* Formulário */}

          <div className="space-y-5">

            {/* Nome */}

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
                value={produtoEditado.produto || ""}
                onChange={atualizarEstado}
                disabled={isLoading}
                className="w-full rounded-2xl border border-outline-variant bg-surface-container-low px-4 py-3 text-on-surface outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-60"
                placeholder="Digite o nome do produto"
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
                value={produtoEditado.descricao || ""}
                onChange={atualizarEstado}
                disabled={isLoading}
                rows={3}
                className="w-full rounded-2xl border border-outline-variant bg-surface-container-low px-4 py-3 text-on-surface outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-60 resize-none"
                placeholder="Digite a descrição do produto"
              />

            </div>

            {/* Valor + Quantidade */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

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
                  step="0.01"
                  min="0"
                  value={produtoEditado.valor ?? ""}
                  onChange={atualizarEstado}
                  disabled={isLoading}
                  className="w-full rounded-2xl border border-outline-variant bg-surface-container-low px-4 py-3 text-on-surface outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-60"
                  placeholder="0.00"
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
                  value={produtoEditado.quantidade ?? ""}
                  onChange={atualizarEstado}
                  disabled={isLoading}
                  className="w-full rounded-2xl border border-outline-variant bg-surface-container-low px-4 py-3 text-on-surface outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-60"
                  placeholder="Quantidade disponível"
                />

              </div>

            </div>

            {/* Calorias */}

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
                value={produtoEditado.calorias ?? ""}
                onChange={atualizarEstado}
                disabled={isLoading}
                className="w-full rounded-2xl border border-outline-variant bg-surface-container-low px-4 py-3 text-on-surface outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-60"
                placeholder="Quantidade de calorias"
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
                value={produtoEditado.imagem || ""}
                onChange={atualizarEstado}
                disabled={isLoading}
                className="w-full rounded-2xl border border-outline-variant bg-surface-container-low px-4 py-3 text-on-surface outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-60"
                placeholder="Digite a URL da imagem"
              />

            </div>

          </div>

          {/* Botões */}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">

            <button
              type="button"
              onClick={fecharModal}
              disabled={isLoading}
              className="w-full sm:w-auto min-w-[130px] px-6 py-3 rounded-full border border-outline-variant bg-surface-container-high text-on-surface font-bold transition-all hover:bg-surface-container hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Cancelar
            </button>

            <button
              type="button"
              onClick={salvarAlteracoes}
              disabled={
                isLoading ||
                !produtoEditado.produto?.trim() ||
                !produtoEditado.descricao?.trim()
              }
              className="w-full sm:w-auto min-w-[130px] px-6 py-3 rounded-full bg-primary text-on-primary font-bold transition-all hover:opacity-90 hover:scale-105 flex items-center justify-center min-h-[48px] disabled:opacity-70 disabled:cursor-not-allowed"
            >

              {isLoading ? (

                <ClipLoader
                  color="#ffffff"
                  size={22}
                />

              ) : (

                "Salvar alterações"

              )}

            </button>

          </div>

        </div>

      </div>

    </div>

  );
}

export default ModalEditarProduto;