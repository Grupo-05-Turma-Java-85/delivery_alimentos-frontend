import {
  BellIcon,
  CheckCircleIcon,
  ClockIcon,
  PlusIcon,
  StarIcon,
  StorefrontIcon,
  TagIcon,
  WalletIcon,
  XCircleIcon,
} from "@phosphor-icons/react";

import { useState } from "react";

import { Link } from "react-router-dom";

type Pedido = {
  id: string;
  cliente: string;
  itens: string;
  valor: string;
  tempo: string;
};

const pedidosPendentes: Pedido[] = [
  {
    id: "#3201",
    cliente: "Marina Souza",
    itens: "Marmita fit + Suco detox",
    valor: "R$ 34,90",
    tempo: "há 2 min",
  },
  {
    id: "#3200",
    cliente: "Lucas Andrade",
    itens: "2x Bowl de frango",
    valor: "R$ 52,00",
    tempo: "há 6 min",
  },
  {
    id: "#3199",
    cliente: "Beatriz Lima",
    itens: "Pizza fit + Doce fit",
    valor: "R$ 41,50",
    tempo: "há 11 min",
  },
];

export default function LojistaHome() {

  const [lojaAberta, setLojaAberta] = useState(true);

  return (

    <div className="bg-emerald-800 flex flex-col overflow-hidden justify-between min-h-screen">

      <main className="flex-1 min-w-[160vh] rounded-2xl mx-auto my-8 px-6 md:px-12 py-8 space-y-12 bg-surface-container-low text-on-surface font-body">

        {/* Cabeçalho da loja */}

        <section className="bg-surface-container-low rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-outline-variant/20 shadow-sm">

          <div className="flex items-center gap-4">

            <div className="w-16 h-16 rounded-2xl bg-secondary-container flex items-center justify-center shrink-0">

              <StorefrontIcon
                size={32}
                weight="fill"
                className="text-on-secondary-container"
              />

            </div>

            <div>

              <h1 className="text-2xl md:text-3xl font-extrabold text-primary font-headline leading-tight">
                Olá, Sabor Fit 👋
              </h1>

              <p className="text-on-surface-variant text-sm md:text-base">
                Confira como está o seu negócio hoje
              </p>

            </div>

          </div>

          <div className="flex items-center gap-3">

            {/* Notificações */}

            <button
              type="button"
              className="relative rounded-full p-3 bg-surface-container-lowest border border-outline-variant shadow-xs"
            >

              <BellIcon
                size={20}
                className="text-on-surface-variant"
              />

              <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-secondary" />

            </button>

            {/* Status da loja */}

            <button
              type="button"
              onClick={() => setLojaAberta((v) => !v)}
              className={`font-headline font-bold text-sm px-5 py-2.5 rounded-full flex items-center gap-2 shadow-xs transition-colors ${lojaAberta
                  ? "bg-primary text-on-primary"
                  : "bg-surface-container-lowest text-on-surface-variant border border-outline-variant"
                }`}
            >

              <span
                className={`w-2 h-2 rounded-full ${lojaAberta
                    ? "bg-on-primary"
                    : "bg-outline"
                  }`}
              />

              {lojaAberta
                ? "Loja aberta"
                : "Loja fechada"}

            </button>

          </div>

        </section>

        {/* Métricas do dia */}

        <section className="space-y-4">

          <h2 className="text-xl md:text-2xl font-bold font-headline text-on-surface">
            Hoje
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            {[
              {
                label: "Pedidos",
                valor: "18",
                icon: ClockIcon,
              },
              {
                label: "Faturamento",
                valor: "R$ 612,40",
                icon: WalletIcon,
              },
              {
                label: "Produtos ativos",
                valor: "32",
                icon: TagIcon,
              },
              {
                label: "Avaliação",
                valor: "4,8",
                icon: StarIcon,
              },
            ].map(({ label, valor, icon: Icon }) => (

              <div
                key={label}
                className="bg-surface-container-lowest rounded-2xl border border-outline-variant/40 p-5 flex flex-col gap-3 shadow-xs"
              >

                <div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center">

                  <Icon
                    size={20}
                    weight="fill"
                    className="text-on-secondary-container"
                  />

                </div>

                <div>

                  <p className="text-2xl font-extrabold font-headline text-on-surface">
                    {valor}
                  </p>

                  <p className="text-xs text-on-surface-variant">
                    {label}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* Pedidos pendentes */}

        <section className="space-y-4">

          <div className="flex items-center justify-between">

            <h2 className="text-xl md:text-2xl font-bold font-headline text-on-surface">
              Pedidos pendentes
            </h2>

            <span className="text-xs font-bold px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container">
              {pedidosPendentes.length} aguardando
            </span>

          </div>

          <div className="space-y-3">

            {pedidosPendentes.map((pedido) => (

              <div
                key={pedido.id}
                className="bg-surface-container-lowest rounded-2xl border border-outline-variant/40 p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xs"
              >

                <div>

                  <p className="font-headline font-bold text-on-surface">
                    {pedido.id} · {pedido.cliente}
                  </p>

                  <p className="text-sm text-on-surface-variant">
                    {pedido.itens}
                  </p>

                  <p className="text-xs text-outline mt-1">
                    {pedido.tempo}
                  </p>

                </div>

                <div className="flex items-center gap-4">

                  <p className="font-bold font-headline text-primary">
                    {pedido.valor}
                  </p>

                  <div className="flex items-center gap-2">

                    <button
                      type="button"
                      className="rounded-full p-2 bg-error-container text-on-error-container hover:opacity-90 transition-opacity"
                    >

                      <XCircleIcon
                        size={22}
                        weight="bold"
                      />

                    </button>

                    <button
                      type="button"
                      className="rounded-full p-2 bg-primary text-on-primary hover:opacity-90 transition-opacity"
                    >

                      <CheckCircleIcon
                        size={22}
                        weight="bold"
                      />

                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* Ações rápidas */}

        <section className="space-y-4">

          <h2 className="text-xl md:text-2xl font-bold font-headline text-on-surface">
            Ações rápidas
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            {/* Cadastrar Categoria */}

            <Link to="/categorias/cadastrar">

              <button
                type="button"
                className="w-full bg-surface-container-lowest border border-outline-variant rounded-2xl p-5 flex flex-col items-center gap-2 hover:bg-secondary-container transition-colors shadow-xs"
              >

                <PlusIcon
                  size={24}
                  weight="bold"
                  className="text-primary"
                />

                <span className="text-sm font-headline font-semibold text-on-surface">
                  Cadastrar Categoria
                </span>

              </button>

            </Link>

            {/* Modificar Categoria */}

            <Link to="/categorias/modificar">

              <button
                type="button"
                className="w-full bg-surface-container-lowest border border-outline-variant rounded-2xl p-5 flex flex-col items-center gap-2 hover:bg-secondary-container transition-colors shadow-xs"
              >

                <PlusIcon
                  size={24}
                  weight="bold"
                  className="text-primary"
                />

                <span className="text-sm font-headline font-semibold text-on-surface">
                  Modificar Categoria
                </span>

              </button>

            </Link>

            {/* Cadastrar Produto */}

            <Link to="/produtos/cadastrar">

              <button
                type="button"
                className="w-full bg-surface-container-lowest border border-outline-variant rounded-2xl p-5 flex flex-col items-center gap-2 hover:bg-secondary-container transition-colors shadow-xs"
              >

                <PlusIcon
                  size={24}
                  weight="bold"
                  className="text-primary"
                />

                <span className="text-sm font-headline font-semibold text-on-surface">
                  Cadastrar Produto
                </span>

              </button>

            </Link>

            {/* Modificar Produto */}

            <Link to="/modificar-produtos">
              <button
                className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-5 flex flex-col items-center gap-2 hover:bg-secondary-container transition-colors shadow-xs"
              >
                <PlusIcon
                  size={24}
                  weight="bold"
                  className="text-primary"
                />

                <span className="text-sm font-headline font-semibold text-on-surface">
                  Modificar Produto
                </span>
              </button>
            </Link>

          </div>

        </section>

      </main>

    </div>
  );
}