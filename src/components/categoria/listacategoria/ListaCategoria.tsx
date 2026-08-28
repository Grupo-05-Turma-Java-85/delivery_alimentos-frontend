import { useEffect, useState } from "react";
import CardCategorias from "../cardcategoria/CardCategoria";
import type Categoria from "../../../models/Categoria";
import { buscar } from "../../../service/Service";
import axios from "axios";
import { SyncLoader } from "react-spinners";

interface ListaCategoriaProps {
  modoEdicao?: boolean;
}

function ListaCategoria({
  modoEdicao = false,
}: ListaCategoriaProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    buscarCategorias();
  }, []);

  async function buscarCategorias() {
    try {
      setIsLoading(true);

      await buscar(
        "/categorias",
        setCategorias,
        {}
      );
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(
          `Erro ao consultar as categorias: ${error.response?.status}`
        );
      }
    } finally {
      setIsLoading(false);
    }
  }

  function removerCategoria(id: number) {
    setCategorias((categoriasAtuais) =>
      categoriasAtuais.filter(
        (categoria) => categoria.id !== id
      )
    );
  }

  function atualizarCategoria(
    categoriaAtualizada: Categoria
  ) {
    setCategorias((categoriasAtuais) =>
      categoriasAtuais.map((categoria) =>
        categoria.id === categoriaAtualizada.id
          ? categoriaAtualizada
          : categoria
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
                  ? "Modificar Categorias"
                  : "Categorias"}
              </h1>

              <p className="
                mt-2
                text-sm
                sm:text-base
                text-gray-500
                px-2
              ">
                {modoEdicao
                  ? "Edite ou exclua as categorias da sua loja"
                  : "Encontre produtos por categoria"}
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

            {/* Nenhuma categoria */}
            {!isLoading && categorias.length === 0 && (
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
                  Nenhuma categoria foi encontrada!
                </span>
              </div>
            )}

            {/* Cards */}
            {!isLoading && categorias.length > 0 && (
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
                {categorias.map((categoria) => (
                  <CardCategorias
                    key={categoria.id}
                    categoria={categoria}
                    modoEdicao={modoEdicao}
                    onCategoriaDeletada={removerCategoria}
                    onCategoriaAtualizada={atualizarCategoria}
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

export default ListaCategoria;
