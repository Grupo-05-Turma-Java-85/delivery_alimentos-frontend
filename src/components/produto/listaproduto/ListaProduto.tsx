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

  const [isLoading, setIsLoading] =
    useState<boolean>(false);

  const [produtos, setProdutos] =
    useState<Produto[]>([]);

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
          `Erro ao consultar os produtos: ${
            error.response?.status
          }`
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

    <div className="min-h-[60.4vh] bg-emerald-800 flex flex-col overflow-hidden justify-between">

      <main className="flex-1 min-w-[160vh] rounded-2xl mx-auto my-8 px-6 md:px-12 py-8 space-y-12 bg-surface-container-low text-on-surface font-body">

        <section className="h-full rounded-2xl shadow-2x">

          <div className="container mx-auto px-6">

            {/* Cabeçalho */}

            <div className="mb-8 text-center">

              <h1 className="text-4xl font-bold text-gray-800">

                {modoEdicao
                  ? "Modificar Produtos"
                  : "Produtos"}

              </h1>

              <p className="mt-2 text-gray-500">

                {modoEdicao
                  ? "Edite ou exclua os produtos da sua loja"
                  : "Os melhores produtos estão aqui!"}

              </p>

            </div>

            {/* Loading */}

            {isLoading && (

              <div className="flex justify-center mt-30 w-full my-8">

                <SyncLoader
                  color="#298451"
                  size={32}
                />

              </div>

            )}

            {/* Nenhum produto */}

            {!isLoading &&
              produtos.length === 0 && (

                <span className="flex justify-center items-center mt-30 text-3xl text-center my-8">

                  Nenhum produto foi encontrado!

                </span>

              )}

            {/* Cards */}

            {!isLoading &&
              produtos.length > 0 && (

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

                  {produtos.map((produto) => (

                    <CardProduto
                      key={produto.id}
                      produto={produto}
                      modoEdicao={modoEdicao}
                      onProdutoDeletado={
                        removerProduto
                      }
                      onProdutoAtualizado={
                        atualizarProduto
                      }
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