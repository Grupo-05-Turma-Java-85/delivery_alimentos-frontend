import { WarningCircleIcon } from "@phosphor-icons/react";
import { useState } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

import type Produto from "../../../models/Produto";
import { deletar } from "../../../service/Service";

interface ModalDeletarProdutoProps {
  produto: Produto;
  fecharModal: () => void;
  onProdutoDeletado?: (id: number) => void;
}

function ModalDeletarProduto({
  produto,
  fecharModal,
  onProdutoDeletado,
}: ModalDeletarProdutoProps) {

  const [isLoading, setIsLoading] =
    useState<boolean>(false);

  async function deletarProduto() {

    try {

      setIsLoading(true);

      await deletar(
        `/produtos/${produto.id}`,
        {}
      );

      toast.success(
        "Produto deletado com sucesso!"
      );

      if (onProdutoDeletado) {
        onProdutoDeletado(produto.id);
      }

      fecharModal();

    } catch (error) {

      if (axios.isAxiosError(error)) {

        toast.error(
          `Erro ao deletar o produto: ${
            error.response?.status
          }`
        );

      } else {

        toast.error(
          "Erro ao deletar o produto."
        );

      }

    } finally {

      setIsLoading(false);

    }
  }

  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-6">

      <div className="w-full max-w-xl">

        <div className="relative overflow-hidden rounded-3xl bg-surface-container-lowest border border-outline-variant/20 shadow-2xl p-8 md:p-10">

          {/* Detalhe */}

          <div className="absolute top-0 left-0 w-full h-1 bg-red-500" />

          {/* Ícone */}

          <div className="flex justify-center mb-6">

            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-red-50 text-red-600">

              <WarningCircleIcon
                size={42}
                weight="fill"
              />

            </div>

          </div>

          {/* Texto */}

          <div className="text-center space-y-3">

            <h1 className="text-3xl font-bold font-headline text-on-surface">
              Excluir Produto
            </h1>

            <p className="text-base text-on-surface-variant leading-relaxed">

              Tem certeza que deseja excluir o produto{" "}

              <span className="font-bold text-primary">
                {produto.produto}
              </span>

              ?

            </p>

            <p className="text-sm text-on-surface-variant">
              Essa ação não poderá ser desfeita.
            </p>

          </div>

          {/* Botões */}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">

            <button
              type="button"
              onClick={fecharModal}
              disabled={isLoading}
              className="w-full sm:w-auto min-w-[130px] px-6 py-3 rounded-full border border-outline-variant bg-surface-container-high text-on-surface font-bold transition-all hover:bg-surface-container hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Não
            </button>

            <button
              type="button"
              onClick={deletarProduto}
              disabled={isLoading}
              className="w-full sm:w-auto min-w-[130px] px-6 py-3 rounded-full bg-red-600 text-white font-bold transition-all hover:bg-red-700 hover:scale-105 flex items-center justify-center min-h-[48px] disabled:opacity-70 disabled:cursor-not-allowed"
            >

              {isLoading ? (

                <ClipLoader
                  color="#ffffff"
                  size={22}
                />

              ) : (

                "Sim, excluir"

              )}

            </button>

          </div>

        </div>

      </div>

    </div>

  );
}

export default ModalDeletarProduto;