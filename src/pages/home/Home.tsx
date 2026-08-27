import { ForkKnifeIcon } from '@phosphor-icons/react';
import BotaoCarrinho from '../../components/botaocarrinho/BotaoCarrinho';
import CardProduto from '../../components/produto/cardproduto/CardProduto';
import ListaProduto from '../../components/produto/listaproduto/ListaProduto';
import CardHome from '../../components/cardHome/CardHome';

export default function Home() {

  return (
    <div className='bg-emerald-800 flex flex-col overflow-hidden justify-between'>
      <BotaoCarrinho />
      <main className="flex-1 min-w-[160vh] rounded-2xl mx-auto my-8 px-6 md:px-12 py-8 space-y-12 bg-surface-container-low text-on-surface font-body">
        {/* Hero Banner */}
        <section className="bg-surface-container-low rounded-3xl p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 border border-outline-variant/20 shadow-sm">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-3xl md:text-5xl font-extrabold text-primary font-headline leading-tight">
              Não entregamos corpos perfeitos.<br />
              Entregamos <span className="text-secondary">energia</span>, bem-estar e sabor.
            </h1>

            <div className="relative max-w-sm">
              <input
                type="text"
                className="w-full pl-11 pr-4 py-3 rounded-full border border-outline-variant bg-surface-container-lowest text-on-surface placeholder:text-outline text-sm focus:outline-none focus:border-primary shadow-xs transition-all"
                placeholder="Buscar pratos ou ingredientes..."
              />
            </div>
          </div>

          <div className="md:w-1/2 flex justify-end">
            <div className="rounded-3xl overflow-hidden shadow-md max-w-md w-full">
              <img
                src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800"
                alt="Prato Saudável - Bowl de Frango e Salada"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Categorias (Chips) */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold font-headline text-on-surface">
            Categorias
          </h2>
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
            <button className="bg-secondary-container text-on-secondary-container font-headline font-bold text-sm px-5 py-2.5 rounded-full shrink-0 flex items-center gap-2 shadow-xs">
              <span className="material-symbols-outlined text-[18px]"><ForkKnifeIcon size={28}
                weight='fill' /></span>
              Todas
            </button>
            {['Doces Fit', 'Pizzas', 'Marmitas', 'Lanches', 'Salgados', 'Snacks', 'Bebidas'].map((item) => (
              <button
                key={item}
                className="bg-surface-container-lowest text-on-surface-variant border border-outline-variant font-headline font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-secondary-container transition-colors shrink-0"
              >
                {item}
              </button>
            ))}
          </div>
        </section>
       <CardHome/>
      </main>
    </div>
  );
}