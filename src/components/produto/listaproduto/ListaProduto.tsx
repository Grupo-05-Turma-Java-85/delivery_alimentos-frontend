import { useEffect, useState } from "react";

import { buscar } from "../../../service/Service";
import axios from "axios";
import { SyncLoader } from "react-spinners";

import type Produto from "../../../models/Produto";
import CardProduto from "../cardproduto/CardProduto";

interface ListaProdutoProps {
  modoEdicao?: boolean;
}


function ListaProduto({
  modoEdicao = false,
}: ListaProdutoProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    buscarProdutos();
  }, []);

  async function buscarProdutos() {
    try {
      setIsLoading(true);

      await buscar(
        "/produtos",
        setProdutos,
        {}
      );
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(
          `Erro ao consultar os produtos: ${error.response?.status}`
        );
      }
    } finally {
      setIsLoading(false);
    }
  }

  // Remove o produto da tela depois de excluir
  function removerProduto(id: number) {
    setProdutos((produtosAtuais) =>
      produtosAtuais.filter(
        (produto) => produto.id !== id
      )
    );
  }

  // Atualiza o produto na tela depois de editar
  function atualizarProduto(
    produtoAtualizado: Produto
  ) {
    setProdutos((produtosAtuais) =>
      produtosAtuais.map((produto) =>
        produto.id === produtoAtualizado.id
          ? produtoAtualizado
          : produto
      )
    );
  }

  return (
    <div className="
      min-h-[60vh]
      bg-emerald-800
      flex
      flex-col
      overflow-x-hidden
    ">
      <main className="
        w-full
        max-w-7xl
        mx-auto
        my-4 sm:my-6 lg:my-8
        px-4 sm:px-6 lg:px-8
        py-6 sm:py-8 lg:py-10
        bg-surface-container-low
        text-on-surface
        font-body
        rounded-xl sm:rounded-2xl lg:rounded-3xl
      ">

        <section className="
          w-full
          rounded-xl sm:rounded-2xl
          shadow-sm
          p-2 sm:p-4 lg:p-6
        ">

          <div className="w-full mx-auto">

            {/* Cabeçalho */}
            <div className="
              mb-6 sm:mb-8 lg:mb-10
              text-center
            ">
              <h1 className="
                text-2xl
                sm:text-3xl
                lg:text-4xl
                font-bold
                text-gray-800
              ">
                {modoEdicao
                  ? "Modificar Produtos"
                  : "Produtos"}
              </h1>

              <p className="
                mt-2
                text-sm
                sm:text-base
                text-gray-500
                px-2
              ">
                {modoEdicao
                  ? "Edite ou exclua os produtos da sua loja"
                  : "Os melhores produtos estão aqui!"}
              </p>
            </div>

            {/* Loading */}
            {isLoading && (
              <div className="
                flex
                justify-center
                items-center
                w-full
                min-h-[250px]
                py-8
              ">
                <SyncLoader
                  color="#298451"
                  size={20}
                />
              </div>
            )}

            {/* Nenhum produto */}
            {!isLoading && produtos.length === 0 && (
              <div className="
                flex
                justify-center
                items-center
                text-center
                min-h-[250px]
                px-4
              ">
                <span className="
                  text-xl
                  sm:text-2xl
                  lg:text-3xl
                  text-gray-700
                ">
                  Nenhum produto foi encontrado!
                </span>
              </div>
            )}

            {/* Cards */}
            {!isLoading && produtos.length > 0 && (
              <div className="
                grid
                grid-cols-1
                gap-4
                sm:grid-cols-2
                sm:gap-5
                lg:grid-cols-3
                xl:grid-cols-4
                lg:gap-6
              ">
                {produtos.map((produto) => (
                  <CardProduto
                    key={produto.id}
                    produto={produto}
                    modoEdicao={modoEdicao}
                    onProdutoDeletado={removerProduto}
                    onProdutoAtualizado={atualizarProduto}
                  />
                ))}
              </div>
            )}

          </div>

        </section>

      </main>
    </div>
  );
}

export default ListaProduto;
