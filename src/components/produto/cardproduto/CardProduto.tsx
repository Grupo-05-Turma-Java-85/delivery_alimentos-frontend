import { PlusIcon } from "@phosphor-icons/react";
import { CheckFatIcon } from "@phosphor-icons/react/dist/ssr";
 
import type Produto from "../../../models/Produto";
 
interface CardProdutoProps {
  produto: Produto;
}
 
function CardProduto({ produto }: CardProdutoProps) {
 
  return (
 
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
 
        {/* Hover nutricional */}
 
        <div
          className="
            absolute inset-0
            bg-black/20
            backdrop-blur-[2px]
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-300
            flex items-center
            justify-center
            p-4
          "
>
 
          <div className="bg-white rounded-xl p-4 shadow-lg text-center w-full max-w-[220px]">
 
            <h4 className="text-emerald-700 font-bold text-sm">
              Transparência Nutricional
</h4>
 
            <p className="text-gray-600 text-xs mt-2 font-medium">
              Informações nutricionais do produto
</p>
 
          </div>
 
        </div>
 
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
 
        {/* PREÇO + BOTÃO */}
 
        <div className="flex items-center justify-between pt-3">
 
          <span className="text-xl font-bold font-headline text-primary">
            R$ {produto.valor}
</span>
 
          <button
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
 
        </div>
 
      </div>
 
    </article>
 
  );
}
 
export default CardProduto;