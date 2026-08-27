"use client";
 
import { useState } from "react";
 
import type Categoria from "../../../models/Categoria";
 
import * as motion from "motion/react-client";
 
import {
  PencilIcon,
  TrashIcon,
} from "@phosphor-icons/react";
 
import ModalDeletarCategoria from "../modaldeletarcategoria/ModalDeletarCategoria";
 
import ModalEditarCategoria from "../modaleditarcategoria/ModalEditarCategoria";
 
interface CardCategoriasProps {
  categoria: Categoria;
  modoEdicao?: boolean;
  onCategoriaDeletada?: (id: number) => void;
  onCategoriaAtualizada?: (categoria: Categoria) => void;
}
 
function CardCategorias({
  categoria,
  modoEdicao = false,
  onCategoriaDeletada,
  onCategoriaAtualizada,
}: CardCategoriasProps) {
 
  const [modalDeletarAberto, setModalDeletarAberto] =
    useState<boolean>(false);
 
  const [modalEditarAberto, setModalEditarAberto] =
    useState<boolean>(false);
 
  return (
<>
<motion.div
        whileHover={{
          scale: 1.03,
        }}
        whileTap={{
          scale: 0.97,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        className="relative w-full"
>
<motion.div
          layout
          className="group relative flex h-32 w-full items-center gap-4 overflow-hidden rounded-2xl border border-outline-variant/20 bg-surface-container-lowest px-5 shadow-sm transition-shadow duration-300 hover:shadow-xl"
>
 
          {/* Fundo animado */}
<motion.div
            className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-fixed to-primary-container"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.18 }}
            transition={{ duration: 0.3 }}
          />
 
          {/* Imagem */}
<motion.div
            layout
            className="relative z-10 flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm"
            whileHover={{
              rotate: 5,
              scale: 1.08,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
            }}
>
<img
              src={categoria.imagem}
              alt={categoria.categoria}
              className="h-full w-full object-cover"
            />
</motion.div>
 
          {/* Nome da categoria */}
<motion.div
            layout
            className="relative z-10 min-w-0 flex-1"
>
<motion.p
              layout
              className="text-xl font-bold text-on-surface transition-colors duration-300 group-hover:text-primary"
>
              {categoria.categoria}
</motion.p>
</motion.div>
 
          {/* Botões de edição */}
          {modoEdicao && (
<div className="relative z-20 flex items-center gap-2">
 
              {/* Editar */}
<button
                type="button"
                title="Editar categoria"
                onClick={() => setModalEditarAberto(true)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-on-primary shadow-sm transition-all duration-200 hover:scale-105 hover:opacity-90"
>
<PencilIcon
                  size={20}
                  weight="bold"
                />
</button>
 
              {/* Deletar */}
<button
                type="button"
                title="Deletar categoria"
                onClick={() => setModalDeletarAberto(true)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-error-container text-on-error-container shadow-sm transition-all duration-200 hover:scale-105 hover:opacity-90"
>
<TrashIcon
                  size={20}
                  weight="bold"
                />
</button>
 
            </div>
          )}
 
          {/* Indicador animado */}
<motion.div
            className="absolute bottom-0 left-0 h-1 rounded-r-full bg-primary"
            initial={{ width: 0 }}
            whileHover={{ width: "35%" }}
            transition={{ duration: 0.3 }}
          />
 
          {/* Borda animada */}
<motion.div
            className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-primary"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
 
        </motion.div>
</motion.div>
 
      {/* Modal de deletar */}
      {modalDeletarAberto && (
<ModalDeletarCategoria
          categoria={categoria}
          fecharModal={() => setModalDeletarAberto(false)}
          onCategoriaDeletada={onCategoriaDeletada}
        />
      )}
 
      {/* Modal de editar */}
      {modalEditarAberto && (
<ModalEditarCategoria
          categoria={categoria}
          fecharModal={() => setModalEditarAberto(false)}
          onCategoriaAtualizada={onCategoriaAtualizada}
        />
      )}
</>
  );
}
 
export default CardCategorias;