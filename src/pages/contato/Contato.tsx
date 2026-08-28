import { useState } from 'react';

import {
    ArrowUpRightIcon,
    CaretDownIcon,
    ChatCircleDotsIcon,
    CheckCircleIcon,
    ClockIcon,
    MapPinIcon,
    ShoppingBagIcon,
    UserCircleIcon,
} from '@phosphor-icons/react';

import BotaoCarrinho from '../../components/botaocarrinho/BotaoCarrinho';


const suporte = [
    {
        id: 'pedido',
        icon: ShoppingBagIcon,
        titulo: 'Pedido',
        texto: 'Precisa acompanhar ou resolver algo?',
        resposta: 'Vamos encontrar seu pedido juntos.',
    },
    {
        id: 'conta',
        icon: UserCircleIcon,
        titulo: 'Conta',
        texto: 'Está com dificuldade para acessar?',
        resposta: 'Vamos ajudar você a recuperar o acesso.',
    },
    {
        id: 'outro',
        icon: ChatCircleDotsIcon,
        titulo: 'Outra dúvida',
        texto: 'Não encontrou o que procurava?',
        resposta: 'Pode falar com a nossa equipe.',
    },
];

const perguntas = [
    {
        pergunta: 'Como faço um pedido?',
        resposta:
            'Escolha seus produtos, adicione ao carrinho e siga para a finalização da compra.',
    },
    {
        pergunta: 'Como acompanho meu pedido?',
        resposta:
            'Depois da confirmação, as informações do pedido ficam disponíveis na aplicação.',
    },
    {
        pergunta: 'Preciso de ajuda com minha conta.',
        resposta:
            'Nossa equipe pode orientar você pelo WhatsApp.',
    },
];

export default function Contatos() {
    const [selecionado, setSelecionado] = useState<string | null>(null);

    const [aberta, setAberta] = useState<number | null>(null);

    const [formulario, setFormulario] = useState({
        nome: '',
        email: '',
        assunto: '',
        mensagem: '',
    });

    const [enviado, setEnviado] = useState(false);

    const suporteAtual = suporte.find(
        (item) => item.id === selecionado
    );

    function escolherSuporte(id: string) {
        setSelecionado((atual) => (atual === id ? null : id));
    }

    function handleChange(
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        const { name, value } = event.target;

        setFormulario((prev) => ({
            ...prev,
            [name]: value,
        }));

        setEnviado(false);
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const { nome, email, assunto, mensagem } = formulario;

        const corpo = `
Nome: ${nome}
E-mail: ${email}

Mensagem:
${mensagem}
`;

        const mailto = `mailto:contato@fitnutri.com?subject=${encodeURIComponent(
            assunto
        )}&body=${encodeURIComponent(corpo)}`;

        window.location.href = mailto;

        setEnviado(true);

        setFormulario({
            nome: '',
            email: '',
            assunto: '',
            mensagem: '',
        });
    }

    return (
        <div className="min-h-screen bg-emerald-800 overflow-x-hidden">
            <div className="min-h-screen bg-emerald-800">
                <BotaoCarrinho />

                <main className="w-full max-w-7xl mx-auto my-6 md:my-8 px-4 sm:px-6 md:px-10 py-6 md:py-8 bg-surface-container-low text-on-surface font-body rounded-2xl">

                    {/* =========================
            SUPORTE
        ========================== */}
                    <section className="relative overflow-hidden rounded-[2rem] bg-primary text-on-primary min-h-[460px]">

                        {/* DECORAÇÃO */}
                        <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full bg-white/10" />

                        <div className="absolute -left-20 -bottom-24 w-64 h-64 rounded-full bg-white/5" />

                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 min-h-[460px]">

                            {/* CONTEÚDO */}
                            <div className="p-7 md:p-12 flex flex-col justify-center">

                                <h1 className="mt-4 text-3xl md:text-5xl font-extrabold font-headline leading-tight max-w-lg">
                                    Oi! 👋
                                    <br />
                                    Como posso ajudar?
                                </h1>

                                <p className="mt-4 text-sm text-on-primary/75 max-w-sm">
                                    Escolha uma opção e vamos resolver isso juntos.
                                </p>

                                {/* OPÇÕES */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-2 mt-7 max-w-md">

                                    {suporte.map((item) => {

                                        const Icon = item.icon;

                                        const ativo = selecionado === item.id;

                                        return (
                                            <button
                                                key={item.id}
                                                type="button"
                                                onClick={() => escolherSuporte(item.id)}
                                                className={`group flex items-center gap-3 p-3.5 rounded-2xl text-left border transition-all duration-300 ${ativo
                                                        ? 'bg-white text-primary border-white'
                                                        : 'bg-white/10 border-white/10 hover:bg-white/15'
                                                    }`}
                                            >

                                                <div
                                                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${ativo
                                                            ? 'bg-secondary-container'
                                                            : 'bg-white/10'
                                                        }`}
                                                >

                                                    <Icon
                                                        size={20}
                                                        weight="fill"
                                                        className={
                                                            ativo
                                                                ? 'text-on-secondary-container'
                                                                : 'text-on-primary'
                                                        }
                                                    />

                                                </div>

                                                <div className="flex-1">

                                                    <p className="text-sm font-bold">
                                                        {item.titulo}
                                                    </p>

                                                    <p
                                                        className={`text-xs mt-0.5 ${ativo
                                                                ? 'text-on-surface-variant'
                                                                : 'text-on-primary/60'
                                                            }`}
                                                    >
                                                        {item.texto}
                                                    </p>

                                                </div>

                                                <ArrowUpRightIcon
                                                    size={17}
                                                    className={`transition-transform ${ativo
                                                            ? 'text-primary -translate-y-0.5 translate-x-0.5'
                                                            : 'text-on-primary/50'
                                                        }`}
                                                />

                                            </button>
                                        );
                                    })}

                                </div>

                                {/* RESPOSTA */}
                                {suporteAtual && (
                                    <div className="mt-4 flex items-center gap-3 bg-white text-primary rounded-2xl p-3.5 max-w-md">

                                        <div className="w-9 h-9 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
                                            <span className="text-lg">
                                                🐱
                                            </span>
                                        </div>

                                        <div className="flex-1">

                                            <p className="text-xs font-bold">
                                                {suporteAtual.resposta}
                                            </p>

                                            {suporteAtual.id === 'outro' && (
                                                <a
                                                    href="https://wa.me/5511977776655"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1 mt-1.5 text-xs font-bold text-primary"
                                                >
                                                    Falar com a equipe
                                                    <ArrowUpRightIcon size={13} />
                                                </a>
                                            )}

                                        </div>

                                    </div>
                                )}

                            </div>

                            {/* GATINHO */}
                            <div className="relative flex items-center justify-center overflow-hidden">

                                <div className="absolute w-80 h-80 md:w-[420px] md:h-[420px] rounded-full bg-white/10 bottom-[-100px]" />

                                <img
                                    src="https://ik.imagekit.io/bellaceccon/fitnutri_suporte_02.png"
                                    alt="Gatinho do suporte FitNutri"
                                    className="relative z-10 w-full rounded-full max-w-[470px] md:max-w-[500px] h-auto object-contain transition-transform duration-500 hover:scale-105"
                                />

                            </div>

                        </div>
                    </section>

                    {/* =========================
            RESPOSTAS RÁPIDAS
        ========================== */}
                    <section className="max-w-3xl mx-auto mt-10">

                        <div className="mb-5">

                            <h2 className="text-2xl font-bold font-headline mt-1">
                                Perguntas Frequentes
                            </h2>

                        </div>

                        <div className="space-y-2">

                            {perguntas.map((item, index) => {

                                const isOpen = aberta === index;

                                return (
                                    <div
                                        key={item.pergunta}
                                        className="rounded-2xl bg-surface-container-lowest border border-outline-variant/40 overflow-hidden"
                                    >

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setAberta(isOpen ? null : index)
                                            }
                                            className="w-full flex items-center justify-between gap-4 p-5 text-left"
                                            aria-expanded={isOpen}
                                        >

                                            <span className="font-semibold text-sm md:text-base">
                                                {item.pergunta}
                                            </span>

                                            <CaretDownIcon
                                                size={19}
                                                weight="bold"
                                                className={`text-primary shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''
                                                    }`}
                                            />

                                        </button>

                                        {isOpen && (
                                            <div className="px-5 pb-5">

                                                <p className="text-sm text-on-surface-variant leading-relaxed">
                                                    {item.resposta}
                                                </p>

                                            </div>
                                        )}

                                    </div>
                                );
                            })}

                        </div>

                    </section>

                    {/* =========================
            CONTATO
        ========================== */}
                    <section className="grid grid-cols-1 gap-6 mt-10">

                        {/* FORMULÁRIO */}
                        <div className="lg:col-span-3 bg-surface-container-lowest rounded-3xl border border-outline-variant/40 p-6 md:p-8">
                        
                            <h2 className="text-2xl font-bold font-headline mt-1">
                                Fale com a gente
                            </h2>

                            <form
                                onSubmit={handleSubmit}
                                className="mt-6 space-y-4"
                            >

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                    <input
                                        name="nome"
                                        type="text"
                                        value={formulario.nome}
                                        onChange={handleChange}
                                        required
                                        placeholder="Seu nome"
                                        className="w-full px-4 py-3.5 rounded-xl border border-outline-variant bg-surface-container-low text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                                    />

                                    <input
                                        name="email"
                                        type="email"
                                        value={formulario.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="Seu e-mail"
                                        className="w-full px-4 py-3.5 rounded-xl border border-outline-variant bg-surface-container-low text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                                    />

                                </div>

                                <input
                                    name="assunto"
                                    type="text"
                                    value={formulario.assunto}
                                    onChange={handleChange}
                                    required
                                    placeholder="Assunto"
                                    className="w-full px-4 py-3.5 rounded-xl border border-outline-variant bg-surface-container-low text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                                />

                                <textarea
                                    name="mensagem"
                                    rows={4}
                                    maxLength={500}
                                    value={formulario.mensagem}
                                    onChange={handleChange}
                                    required
                                    placeholder="Como podemos ajudar?"
                                    className="w-full px-4 py-3.5 rounded-xl border border-outline-variant bg-surface-container-low text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
                                />

                                {enviado && (
                                    <div className="flex items-center gap-2 p-3 rounded-xl bg-secondary-container text-on-secondary-container text-sm">

                                        <CheckCircleIcon
                                            size={20}
                                            weight="fill"
                                        />

                                        Mensagem preparada com sucesso.

                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-on-primary font-bold text-sm hover:opacity-90 transition"
                                >
                                    Enviar
                                    <ArrowUpRightIcon size={17} />
                                </button>

                            </form>

                        </div>

                        {/* INFORMAÇÕES */}
                        <div className="flex justify-around w-full gap-5 lg:col-span-2 space-y-4">

                            <div className="bg-surface-container-lowest rounded-2xl w-full border border-outline-variant/40 p-5 flex gap-4">

                                <div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center shrink-0">

                                    <MapPinIcon
                                        size={21}
                                        weight="fill"
                                        className="text-on-secondary-container"
                                    />

                                </div>

                                <div>

                                    <h3 className="font-bold text-sm">
                                        Onde estamos
                                    </h3>

                                    <p className="text-xs text-on-surface-variant mt-1">
                                        Avenida das Comunicações, 4 - Vila Jaraguá
                                        <br />
                                        São Paulo, SP
                                    </p>

                                </div>

                            </div>

                            <div className="bg-surface-container-lowest rounded-2xl border w-full h-24.5 border-outline-variant/40 p-5 flex gap-4">

                                <div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center shrink-0">

                                    <ClockIcon
                                        size={21}
                                        weight="fill"
                                        className="text-on-secondary-container"
                                    />

                                </div>

                                <div>

                                    <h3 className="font-bold text-sm">
                                        Horário
                                    </h3>

                                    <p className="text-xs text-on-surface-variant mt-1">
                                        Segunda a sexta, das 8h às 17h
                                    </p>

                                </div>

                            </div>

                        </div>

                    </section>

                </main>
            </div>
        </div>
    );
}