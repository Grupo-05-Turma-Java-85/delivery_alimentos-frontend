import {
  HeartIcon,
  LeafIcon,
  SealCheckIcon,
  UsersThreeIcon,
  ArrowRightIcon,
} from "@phosphor-icons/react";
 
import BotaoCarrinho from "../../components/botaocarrinho/BotaoCarrinho";
import { Link } from "react-router-dom";
 
const valores = [
  {
    icon: LeafIcon,
    titulo: "Comida de verdade",
    descricao:
      "Ingredientes frescos, sem ultraprocessados e com Nutri-Score A garantido em cada prato.",
  },
  {
    icon: HeartIcon,
    titulo: "Bem-estar em primeiro lugar",
    descricao:
      "Cardápio pensado por nutricionistas para dar energia de verdade, não só matar a fome.",
  },
  {
    icon: SealCheckIcon,
    titulo: "Qualidade garantida",
    descricao:
      "Da cozinha até a sua porta, cuidamos de cada etapa para chegar fresquinho e no ponto certo.",
  },
  {
    icon: UsersThreeIcon,
    titulo: "Feito por gente que se importa",
    descricao:
      "Uma equipe apaixonada por comida boa e por fazer a diferença na rotina de quem confia na gente.",
  },
];
 
const numeros = [
  { valor: "50mil+", label: "Pratos entregues" },
  { valor: "4,8", label: "Avaliação média" },
  { valor: "120+", label: "Receitas no cardápio" },
  { valor: "98%", label: "Clientes satisfeitos" },
];
 
export default function Sobre() {
  return (
<div className="min-h-screen bg-emerald-800 overflow-x-hidden">
 
      <BotaoCarrinho />
 
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
 
        {/* CONTEÚDO PRINCIPAL */}
<div className="space-y-8 md:space-y-10">
 
          {/* HERO */}
<section className="relative overflow-hidden bg-surface-container-low rounded-3xl border border-outline-variant/20 shadow-sm">
 
            {/* Elemento decorativo */}
<div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-secondary-container/40 blur-3xl pointer-events-none" />
 
            <div className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-8 lg:gap-14 p-6 sm:p-8 md:p-12 lg:p-14">
 
              {/* Texto */}
<div className="space-y-6">
 
                <div className="space-y-4">
 
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary font-headline leading-tight">
                    Comida saudável não precisa ser sem graça.
</h1>
 
                  <p className="text-on-surface-variant text-base md:text-lg leading-relaxed max-w-xl">
                    Nascemos com uma missão simples: provar que dá pra
                    comer bem, com sabor de verdade e sem abrir mão da
                    saúde.
</p>
 
                </div>
 
                <Link
                  to="/produtos"
                  className="inline-flex items-center gap-2 bg-primary text-on-primary font-headline font-bold text-sm px-6 py-3 rounded-full shadow-sm hover:opacity-90 hover:translate-y-[-1px] transition-all"
>
                  Conheça nosso cardápio
<ArrowRightIcon size={18} weight="bold" />
</Link>
 
              </div>
 
              {/* Imagem */}
<div className="w-full">
 
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
 
                  <img
                    src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1000"
                    alt="Pratos saudáveis preparados com ingredientes frescos"
                    className="block w-full h-full object-cover object-center"
                  />
 
                  {/* Destaque sobre a imagem */}
<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
 
                </div>
 
              </div>
 
            </div>
 
          </section>
 
          {/* NÚMEROS */}
<section className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
 
            {numeros.map(({ valor, label }) => (
 
              <div
                key={label}
                className="bg-surface-container-lowest rounded-2xl border border-outline-variant/40 p-5 sm:p-6 text-center shadow-xs hover:shadow-md hover:-translate-y-1 transition-all"
>
 
                <p className="text-2xl sm:text-3xl font-extrabold font-headline text-primary">
                  {valor}
</p>
 
                <p className="text-xs sm:text-sm text-on-surface-variant mt-1">
                  {label}
</p>
 
              </div>
 
            ))}
 
          </section>
 
          {/* VALORES */}
<section className="space-y-6">
 
            <div className="text-center md:text-left space-y-2">
 
              <h2 className="text-2xl md:text-3xl font-bold font-headline text-white">
                O que nos move
</h2>

            </div>
 
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 
              {valores.map(
                ({ icon: Icon, titulo, descricao }) => (
 
                  <div
                    key={titulo}
                    className="group bg-surface-container-lowest rounded-2xl border border-outline-variant/40 p-6 flex gap-4 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all"
>
 
                    <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
 
                      <Icon
                        size={23}
                        weight="fill"
                        className="text-on-secondary-container"
                      />
 
                    </div>
 
                    <div>
 
                      <h3 className="font-headline font-bold text-on-surface">
                        {titulo}
</h3>
 
                      <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">
                        {descricao}
</p>
 
                    </div>
 
                  </div>
 
                )
              )}
 
            </div>
 
          </section>
 
          {/* CTA */}
<section className="relative overflow-hidden bg-secondary-container rounded-3xl p-7 sm:p-8 md:p-12">
 
            {/* Decoração */}
<div className="absolute -right-20 -bottom-20 w-56 h-56 rounded-full bg-primary/10 blur-2xl pointer-events-none" />
 
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
 
              <div className="max-w-xl">
 
                <h2 className="text-2xl md:text-3xl font-extrabold font-headline text-black">
                  Quer experimentar?
</h2>
 
                <p className="text-black text-sm md:text-base mt-2 leading-relaxed">
                  Monte seu pedido e receba comida boa, equilibrada e
                  cheia de sabor direto na sua porta.
</p>
 
              </div>
 
              <Link
                to="/produtos"
                className="inline-flex items-center gap-2 bg-primary text-on-primary font-headline font-bold text-sm px-7 py-3.5 rounded-full shadow-sm hover:opacity-90 hover:scale-[1.02] transition-all shrink-0"
>
                Ver cardápio
<ArrowRightIcon
                  size={18}
                  weight="bold"
                />
</Link>
 
            </div>
 
          </section>
 
        </div>
 
      </main>
 
    </div>
  );
}