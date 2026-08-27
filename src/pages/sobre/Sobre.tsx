import {
  HeartIcon,
  LeafIcon,
  SealCheckIcon,
  UsersThreeIcon,
} from '@phosphor-icons/react';
import BotaoCarrinho from '../../components/botaocarrinho/BotaoCarrinho';
import { Link } from 'react-router-dom';

const valores = [
  {
    icon: LeafIcon,
    titulo: 'Comida de verdade',
    descricao: 'Ingredientes frescos, sem ultraprocessados e com Nutri-Score A garantido em cada prato.',
  },
  {
    icon: HeartIcon,
    titulo: 'Bem-estar em primeiro lugar',
    descricao: 'Cardápio pensado por nutricionistas para dar energia de verdade, não só matar a fome.',
  },
  {
    icon: SealCheckIcon,
    titulo: 'Qualidade garantida',
    descricao: 'Da cozinha até a sua porta, cuidamos de cada etapa para chegar fresquinho e no ponto certo.',
  },
  {
    icon: UsersThreeIcon,
    titulo: 'Feito por gente que se importa',
    descricao: 'Uma equipe apaixonada por comida boa e por fazer a diferença na rotina de quem confia na gente.',
  },
];

const numeros = [
  { valor: '50mil+', label: 'Pratos entregues' },
  { valor: '4,8', label: 'Avaliação média' },
  { valor: '120+', label: 'Receitas no cardápio' },
  { valor: '98%', label: 'Clientes satisfeitos' },
];

export default function Sobre() {
  return (
    <div className="bg-emerald-800 flex flex-col overflow-hidden justify-between">
      <BotaoCarrinho />

      <main className="flex-1 min-w-[160vh] rounded-2xl mx-auto my-8 px-6 md:px-12 py-8 space-y-12 bg-surface-container-low text-on-surface font-body">
        {/* Hero */}
        <section className="bg-surface-container-low rounded-3xl p-8 md:p-14 flex flex-col md:flex-row items-center gap-10 border border-outline-variant/20 shadow-sm">
          <div className="w-full md:w-1/2 space-y-6">
            <span className="inline-block bg-secondary-container text-on-secondary-container font-headline font-bold text-xs px-4 py-1.5 rounded-full">
              Nossa história
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-primary font-headline leading-tight">
              Comida saudável não precisa ser sem graça.
            </h1>
            <p className="text-on-surface-variant text-base md:text-lg max-w-md">
              Nascemos com uma missão simples: provar que dá pra comer bem, com sabor de verdade,
              sem abrir mão da saúde. Nada de fórmulas mágicas ou dietas malucas — só comida boa,
              feita com carinho, todos os dias.
            </p>
          </div>

          <div className="w-full md:w-1/2">
            <div className="w-full aspect-[4/3] md:aspect-[5/4] rounded-3xl overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800"
                alt="Equipe preparando pratos saudáveis na cozinha"
                className="block w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </section>

        {/* Números */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {numeros.map(({ valor, label }) => (
            <div
              key={label}
              className="bg-surface-container-lowest rounded-2xl border border-outline-variant/40 p-6 text-center shadow-xs"
            >
              <p className="text-2xl md:text-3xl font-extrabold font-headline text-primary">{valor}</p>
              <p className="text-xs md:text-sm text-on-surface-variant mt-1">{label}</p>
            </div>
          ))}
        </section>

        {/* Valores */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-bold font-headline text-on-surface">
              O que nos move
            </h2>
            <p className="text-on-surface-variant text-sm md:text-base max-w-xl">
              Cada prato que sai da nossa cozinha carrega um pouco desses princípios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {valores.map(({ icon: Icon, titulo, descricao }) => (
              <div
                key={titulo}
                className="bg-surface-container-lowest rounded-2xl border border-outline-variant/40 p-6 flex gap-4 shadow-xs"
              >
                <div className="w-11 h-11 rounded-xl bg-secondary-container flex items-center justify-center shrink-0">
                  <Icon size={22} weight="fill" className="text-on-secondary-container" />
                </div>
                <div>
                  <h3 className="font-headline font-bold text-on-surface">{titulo}</h3>
                  <p className="text-sm text-on-surface-variant mt-1">{descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA final */}
        <section className="bg-secondary-container rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="text-xl md:text-2xl font-extrabold font-headline text-on-secondary-container">
              Quer experimentar?
            </h2>
            <p className="text-on-secondary-container/80 text-sm md:text-base mt-1">
              Monte seu pedido e receba comida boa direto na sua porta.
            </p>
          </div>
          <Link
            to='/produtos'
            className="bg-primary text-on-primary font-headline font-bold text-sm px-6 py-3 rounded-full shadow-xs hover:opacity-90 transition-opacity shrink-0"
          >
            Ver cardápio
          </Link>
        </section>
      </main>
    </div>
  );
}