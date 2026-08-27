import { WarningCircleIcon } from "@phosphor-icons/react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { buscar, deletar } from "../../../service/Service";
import { ClipLoader } from "react-spinners";
 
function DeletarCategoria() {
  const navigate = useNavigate();
 
  const [isLoading, setIsLoading] = useState<boolean>(false);
 
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
 
  const { id } = useParams<{ id: string }>();
 
  async function buscarCategoriaPorId() {
    setIsLoading(true);
 
    try {
      await buscar(`/categorias/${id}`, setCategoria, {});
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(
          `Erro ao consultar a categoria: ${error.response?.status}`
        );
      }
    } finally {
      setIsLoading(false);
    }
  }
 
  useEffect(() => {
    if (id !== undefined) {
      buscarCategoriaPorId();
    }
  }, [id]);
 
  async function deletarCategoria() {
    setIsLoading(true);
 
    try {
      await deletar(`/categorias/${id}`, {});
 
      alert("Categoria deletada com sucesso!");
 
      navigate("/categorias");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(
          `Erro ao deletar a categoria: ${error.response?.status}`
        );
      }
    } finally {
      setIsLoading(false);
    }
  }
 
  function retornar() {
    navigate("/categorias");
  }
 
  return (
<main className="min-h-[70vh] bg-emerald-800 flex items-center justify-center px-6 py-16">
<div className="w-full max-w-xl">
<div className="relative overflow-hidden rounded-3xl bg-surface-container-lowest border border-outline-variant/20 shadow-lg p-8 md:p-10">
 
          {/* Detalhe decorativo */}
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
 
          {/* Título */}
<div className="text-center space-y-3">
<h1 className="text-3xl font-bold font-headline text-on-surface">
              Excluir Categoria
</h1>
 
            <p className="text-base text-on-surface-variant leading-relaxed">
              Tem certeza que deseja excluir a categoria{" "}
<span className="font-bold text-primary">
                {categoria.categoria}
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
              onClick={retornar}
              disabled={isLoading}
              className="
                w-full
                sm:w-auto
                min-w-[130px]
                px-6
                py-3
                rounded-full
                border
                border-outline-variant
                bg-surface-container-high
                text-on-surface
                font-bold
                transition-all
                hover:bg-surface-container
                hover:scale-105
                disabled:opacity-50
                disabled:cursor-not-allowed
              "
>
              Não
</button>
 
            <button
              onClick={deletarCategoria}
              disabled={isLoading}
              className="
                w-full
                sm:w-auto
                min-w-[130px]
                px-6
                py-3
                rounded-full
                bg-red-600
                text-white
                font-bold
                transition-all
                hover:bg-red-700
                hover:scale-105
                flex
                items-center
                justify-center
                min-h-[48px]
                disabled:opacity-70
                disabled:cursor-not-allowed
              "
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
</main>
  );
}
 
export default DeletarCategoria;