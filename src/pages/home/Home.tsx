import { ForkKnifeIcon } from '@phosphor-icons/react';
import { useState } from 'react';
import BotaoCarrinho from '../../components/botaocarrinho/BotaoCarrinho';
import CardHome from '../../components/cardHome/CardHome';
 
const CATEGORIAS = [
  'Doces',
  'Pizzas',
  'Açaí',
  'Lanches',
  'Saladas',
  'Marmitas',
  'Bebidas',
  'Caldos',
];
 
export default function Home() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todas');
 
  return (
    <div className="min-h-screen bg-emerald-800 overflow-x-hidden">
      <BotaoCarrinho />
 
      <main className="
        w-full
        max-w-7xl
        mx-auto
        my-4 sm:my-6 lg:my-8
        px-4 sm:px-6 lg:px-8
        py-6 sm:py-8
        space-y-8 sm:space-y-10 lg:space-y-12
        bg-surface-container-low
        text-on-surface
        font-body
        rounded-xl sm:rounded-2xl lg:rounded-3xl
      ">
 
        {/* Hero Banner */}
        <section className="
          bg-surface-container-low
          rounded-2xl sm:rounded-3xl
          p-5 sm:p-8 lg:p-12 xl:p-14
          flex flex-col lg:flex-row
          items-center justify-between
          gap-8 lg:gap-12
          border border-outline-variant/20
          shadow-sm
        ">
 
          {/* Texto */}
          <div className="w-full lg:w-1/2 space-y-5 sm:space-y-6">
 
            <h1 className="
              text-2xl
              sm:text-3xl
              md:text-4xl
              lg:text-5xl
              font-extrabold
              text-primary
              font-headline
              leading-tight
            ">
              Não entregamos corpos perfeitos.
              <br />
 
              Entregamos{' '}
              <span className="text-secondary">
                energia
              </span>
              , bem-estar e sabor.
            </h1>
 
            <div className="relative w-full max-w-xl">
              <input
                type="text"
                className="
                  w-full
                  pl-5
                  pr-4
                  py-3
                  sm:py-3.5
                  rounded-full
                  border
                  border-outline-variant
                  bg-surface-container-lowest
                  text-on-surface
                  placeholder:text-outline
                  text-sm sm:text-base
                  focus:outline-none
                  focus:border-primary
                  shadow-xs
                  transition-all
                "
                placeholder="Buscar pratos ou ingredientes..."
              />
            </div>
          </div>
 
          {/* Imagem */}
          <div className="
            w-full
            lg:w-1/2
            flex
            justify-center
            lg:justify-end
          ">
            <div className="
              rounded-2xl sm:rounded-3xl
              overflow-hidden
              shadow-md
              w-full
              max-w-md
            ">
              <img
                src="https://ik.imagekit.io/bellaceccon/fitnutri_hero_motoboy_central.png?updatedAt=1787856663561"
                alt="gato entregador"
                className="
                  w-full
                  h-52
                  sm:h-64
                  md:h-72
                  lg:h-70
                  object-cover
                "
              />
            </div>
          </div>
 
        </section>
 
        {/* Categorias */}
        <section className="space-y-4">
 
          <h2 className="
            text-lg
            sm:text-xl
            md:text-2xl
            font-bold
            font-headline
            text-on-surface
          ">
            Categorias
          </h2>
 
          <div className="
            flex
            items-center
            gap-2 sm:gap-3
            overflow-x-auto
            pb-2
            scrollbar-none
            -mx-1
            px-1
          ">
 
            {/* Todas */}
            <button
              onClick={() => setCategoriaSelecionada('Todas')}
              className={`
                font-headline
                font-bold
                text-xs sm:text-sm
                px-4 sm:px-5
                py-2 sm:py-2.5
                rounded-full
                shrink-0
                flex
                items-center
                gap-2
                shadow-xs
                transition-colors
                ${categoriaSelecionada === 'Todas'
                  ? 'bg-secondary-container text-on-secondary-container'
                  : 'bg-surface-container-lowest text-on-surface-variant border border-outline-variant hover:bg-secondary-container'
                }
              `}
            >
              <ForkKnifeIcon
                size={18}
                weight="fill"
              />
 
              Todas
            </button>
 
            {CATEGORIAS.map((item) => (
              <button
                key={item}
                onClick={() => setCategoriaSelecionada(item)}
                className={`
                  font-headline
                  font-semibold
                  text-xs sm:text-sm
                  px-4 sm:px-5
                  py-2 sm:py-2.5
                  rounded-full
                  shrink-0
                  transition-colors
                  ${categoriaSelecionada === item
                    ? 'bg-secondary-container text-on-secondary-container border border-transparent font-bold'
                    : 'bg-surface-container-lowest text-on-surface-variant border border-outline-variant hover:bg-secondary-container'
                  }
                `}
              >
                {item}
              </button>
            ))}
 
          </div>
        </section>
 
        {/* Conteúdo */}
        <CardHome categoriaSelecionada={categoriaSelecionada} />
 
      </main>
    </div>
  );
}