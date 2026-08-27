import { useEffect, useState } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { PencilIcon, XIcon } from "@phosphor-icons/react";
 
import type Categoria from "../../../models/Categoria";
import { atualizar } from "../../../service/Service";
import { toast } from "react-toastify";
 
interface ModalEditarCategoriaProps {
  categoria: Categoria;
  fecharModal: () => void;
  onCategoriaAtualizada?: (categoria: Categoria) => void;
}
 
function ModalEditarCategoria({
  categoria,
  fecharModal,
  onCategoriaAtualizada,
}: ModalEditarCategoriaProps) {
  const [categoriaEditada, setCategoriaEditada] =
    useState<Categoria>(categoria);
 
  const [isLoading, setIsLoading] = useState<boolean>(false);
 
  useEffect(() => {
    setCategoriaEditada(categoria);
  }, [categoria]);
 
  function atualizarEstado(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setCategoriaEditada({
      ...categoriaEditada,
      [e.target.name]: e.target.value,
    });
  }
 
  async function salvarAlteracoes() {
    try {
      setIsLoading(true);
 
      const categoriaAtualizada = await atualizar(
        "/categorias",
        categoriaEditada,
        {}
      );
 
      console.log("Categoria atualizada:", categoriaAtualizada);
 
      if (onCategoriaAtualizada) {
        onCategoriaAtualizada(categoriaAtualizada);
      }
 
      toast.success("Categoria atualizada com sucesso!");
 
      fecharModal();
    } catch (error) {
      console.error("Erro ao atualizar:", error);
 
      if (axios.isAxiosError(error)) {
        console.log("Resposta da API:", error.response?.data);
 
        toast.error(
          `Erro ao atualizar a categoria: ${
            error.response?.status || "Erro desconhecido"
          }`
        );
      } else {
        toast.error("Erro ao atualizar a categoria.");
      }
    } finally {
      setIsLoading(false);
    }
  }
 
  return (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-6">
<div className="w-full max-w-xl">
 
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
<XIcon size={22} weight="bold" />
</button>
 
          {/* Ícone */}
<div className="flex justify-center mb-6">
<div className="flex items-center justify-center w-20 h-20 rounded-full bg-secondary-container text-on-secondary-container">
<PencilIcon size={40} weight="fill" />
</div>
</div>
 
          {/* Título */}
<div className="text-center mb-8">
<h1 className="text-3xl font-bold font-headline text-on-surface">
              Editar Categoria
</h1>
 
            <p className="mt-2 text-base text-on-surface-variant">
              Altere as informações da categoria.
</p>
</div>
 
          {/* Formulário */}
<div className="space-y-5">
 
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
                value={categoriaEditada.categoria || ""}
                onChange={atualizarEstado}
                disabled={isLoading}
                className="w-full rounded-2xl border border-outline-variant bg-surface-container-low px-4 py-3 text-on-surface outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-60"
                placeholder="Digite o nome da categoria"
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
                value={categoriaEditada.imagem || ""}
                onChange={atualizarEstado}
                disabled={isLoading}
                className="w-full rounded-2xl border border-outline-variant bg-surface-container-low px-4 py-3 text-on-surface outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-60"
                placeholder="Digite a URL da imagem"
              />
</div>
</div>
 
          {/* Botões */}
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
 
            {/* Cancelar */}
<button
              type="button"
              onClick={fecharModal}
              disabled={isLoading}
              className="w-full sm:w-auto min-w-[130px] px-6 py-3 rounded-full border border-outline-variant bg-surface-container-high text-on-surface font-bold transition-all hover:bg-surface-container hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
>
              Cancelar
</button>
 
            {/* Salvar */}
<button
              type="button"
              onClick={salvarAlteracoes}
              disabled={
                isLoading ||
                !categoriaEditada.categoria?.trim()
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
 
export default ModalEditarCategoria;