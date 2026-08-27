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
 
    <div className="min-h-[60.4vh] bg-emerald-800 flex flex-col overflow-hidden justify-between">
 
      <main className="flex-1 min-w-[160vh] rounded-2xl mx-auto my-8 px-6 md:px-12 py-8 space-y-12 bg-surface-container-low text-on-surface font-body">
 
        <section className="h-full rounded-2xl shadow-2x">
 
          <div className="container mx-auto px-6">
 
            {/* Cabeçalho */}
 
            <div className="mb-8 text-center">
 
              <h1 className="text-4xl font-bold text-gray-800">
 
                {modoEdicao
                  ? "Modificar Categorias"
                  : "Categorias"}
 
              </h1>
 
              <p className="mt-2 text-gray-500">
 
                {modoEdicao
                  ? "Edite ou exclua as categorias da sua loja"
                  : "Encontre produtos por categoria"}
 
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
 
            {/* Nenhuma categoria */}
 
            {!isLoading && categorias.length === 0 && (
 
              <span className="flex justify-center items-center mt-30 text-3xl text-center my-8">
 
                Nenhuma categoria foi encontrada!
 
              </span>
 
            )}
 
            {/* Cards */}
 
            {!isLoading && categorias.length > 0 && (
 
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
 
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