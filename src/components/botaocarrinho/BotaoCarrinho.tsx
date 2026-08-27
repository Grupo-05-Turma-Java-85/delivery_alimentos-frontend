import { ShoppingCartIcon } from "@phosphor-icons/react";
 
function BotaoCarrinho() {
  return (
<button
      className="
        group
        fixed
        z-50
        bottom-6
        right-6
        w-16
        h-16
        bg-secondary-container
        text-emerald-800
        rounded-full
        flex
        items-center
        justify-center
        shadow-lg
        transition-transform
        duration-200
        hover:scale-105
      "
>
<ShoppingCartIcon
        size={28}
        weight="bold"
        className="group-hover:hidden"
      />
 
      <ShoppingCartIcon
        size={28}
        weight="fill"
        className="hidden group-hover:block hover:animate-bounce"
      />
</button>
  );
}
 
export default BotaoCarrinho;