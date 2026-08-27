"use client";

import { useState } from "react";

import type Produto from "../../../models/Produto";

import * as motion from "motion/react-client";

import {
  PencilIcon,
  PlusIcon,
  TrashIcon,
} from "@phosphor-icons/react";

import { CheckFatIcon } from "@phosphor-icons/react/dist/ssr";

import ModalDeletarProduto from "../modaldeletarproduto/ModalDeletarProduto";
import ModalEditarProduto from "../modaleditarproduto/ModalEditarProduto";

interface CardProdutoProps {
  produto: Produto;
  modoEdicao?: boolean;
  onProdutoDeletado?: (id: number) => void;
  onProdutoAtualizado?: (produto: Produto) => void;
}

function CardProduto({
  produto,
  modoEdicao = false,
  onProdutoDeletado,
  onProdutoAtualizado,
}: CardProdutoProps) {

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

        <article
          className="
            group relative
            bg-surface-container-lowest
            rounded-2xl
            overflow-hidden
            shadow-sm
            hover:shadow-lg
            transition-all
            duration-300
            flex flex-col
            justify-between
            border-2 border-emerald-700
            min-h-[430px]
          "
        >

          {/* IMAGEM */}

          <div className="relative h-56 bg-surface-container overflow-hidden">

            <img
              src={produto.imagem}
              alt={produto.produto}
              className="
                w-full
                h-full
                object-cover
                transition-transform
                duration-300
                group-hover:scale-105
              "
            />

            {/* Nutri-Score */}

            <span
              className="
                absolute
                top-3
                right-3
                bg-lime-400
                text-emerald-950
                font-bold
                text-[11px]
                px-3
                py-1
                rounded-full
                flex
                items-center
                gap-1
                shadow-sm
                z-10
              "
            >
              Nutri-Score A

              <CheckFatIcon
                size={12}
                weight="fill"
              />

            </span>

          </div>

          {/* INFORMAÇÕES */}

          <div className="p-6 flex-1 flex flex-col justify-between space-y-5">

            <div>

              <h3 className="font-bold text-lg font-headline text-on-surface">
                {produto.produto}
              </h3>

              <p className="text-on-surface-variant text-sm mt-2 leading-relaxed">
                {produto.descricao}
              </p>

            </div>

            {/* PREÇO + BOTÕES */}

            <div className="flex items-center justify-between pt-3">

              <span className="text-xl font-bold font-headline text-primary">
                R$ {produto.valor}
              </span>

              {modoEdicao ? (

                <div className="flex items-center gap-2">

                  {/* Editar */}

                  <button
                    type="button"
                    title="Editar produto"
                    onClick={() =>
                      setModalEditarAberto(true)
                    }
                    className="
                      w-11
                      h-11
                      rounded-full
                      flex
                      items-center
                      justify-center
                      bg-primary
                      text-on-primary
                      shadow-sm
                      transition-all
                      duration-300
                      hover:opacity-90
                      hover:scale-105
                    "
                  >

                    <PencilIcon
                      size={20}
                      weight="bold"
                    />

                  </button>

                  {/* Deletar */}

                  <button
                    type="button"
                    title="Deletar produto"
                    onClick={() =>
                      setModalDeletarAberto(true)
                    }
                    className="
                      w-11
                      h-11
                      rounded-full
                      flex
                      items-center
                      justify-center
                      bg-error-container
                      text-on-error-container
                      shadow-sm
                      transition-all
                      duration-300
                      hover:opacity-90
                      hover:scale-105
                    "
                  >

                    <TrashIcon
                      size={20}
                      weight="bold"
                    />

                  </button>

                </div>

              ) : (

                <button
                  type="button"
                  className="
                    w-11
                    h-11
                    rounded-full
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                    bg-lime-700
                    text-white
                    hover:bg-lime-800
                    hover:scale-105
                  "
                >

                  <PlusIcon
                    size={24}
                    weight="bold"
                  />

                </button>

              )}

            </div>

          </div>

        </article>

      </motion.div>

      {/* MODAL DELETAR */}

      {modalDeletarAberto && (

        <ModalDeletarProduto
          produto={produto}
          fecharModal={() =>
            setModalDeletarAberto(false)
          }
          onProdutoDeletado={onProdutoDeletado}
        />

      )}

      {/* MODAL EDITAR */}

      {modalEditarAberto && (

        <ModalEditarProduto
          produto={produto}
          fecharModal={() =>
            setModalEditarAberto(false)
          }
          onProdutoAtualizado={
            onProdutoAtualizado
          }
        />

      )}

    </>

  );
}

export default CardProduto;