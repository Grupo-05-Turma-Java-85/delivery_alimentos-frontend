import {
  ClockIcon,
  EnvelopeSimpleIcon,
  InstagramLogoIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsappLogoIcon,
} from '@phosphor-icons/react';
import BotaoCarrinho from '../../components/botaocarrinho/BotaoCarrinho';

const canais = [
  {
    icon: WhatsappLogoIcon,
    titulo: 'WhatsApp',
    valor: '(11) 98888-7777',
    href: 'https://wa.me/5511988887777',
  },
  {
    icon: PhoneIcon,
    titulo: 'Telefone',
    valor: '(11) 4002-8922',
    href: 'tel:+551140028922',
  },
  {
    icon: EnvelopeSimpleIcon,
    titulo: 'E-mail',
    valor: 'contato@fitnutri.com.br',
    href: 'mailto:contato@fitnutri.com.br',
  },
  {
    icon: InstagramLogoIcon,
    titulo: 'Instagram',
    valor: '@fitnutri',
    href: 'https://instagram.com/fitnutri',
  },
];

export default function Contatos() {
  return (
    <div className="bg-emerald-800 flex flex-col overflow-hidden justify-between">
      <BotaoCarrinho />

      <main className="flex-1 min-w-[160vh] rounded-2xl mx-auto my-8 px-6 md:px-12 py-8 space-y-12 bg-surface-container-low text-on-surface font-body">
        {/* Hero */}
        <section className="bg-surface-container-low rounded-3xl p-8 md:p-14 flex flex-col items-center text-center gap-4 border border-outline-variant/20 shadow-sm">
          <span className="inline-block bg-secondary-container text-on-secondary-container font-headline font-bold text-xs px-4 py-1.5 rounded-full">
            Fale com a gente
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-primary font-headline leading-tight max-w-2xl">
            Alguma dúvida, sugestão ou elogio?
          </h1>
          <p className="text-on-surface-variant text-base md:text-lg max-w-md">
            Nosso time está pronto pra te ajudar. Escolhe o canal que preferir.
          </p>
        </section>

        {/* Canais de contato */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {canais.map(({ icon: Icon, titulo, valor, href }) => (
            <a
              key={titulo}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface-container-lowest rounded-2xl border border-outline-variant/40 p-6 flex flex-col items-center text-center gap-3 shadow-xs hover:bg-secondary-container transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center">
                <Icon size={24} weight="fill" className="text-on-secondary-container" />
              </div>
              <div>
                <p className="font-headline font-bold text-on-surface text-sm">{titulo}</p>
                <p className="text-xs text-on-surface-variant mt-1">{valor}</p>
              </div>
            </a>
          ))}
        </section>

        {/* Formulário + Infos */}
        <section className="flex flex-col md:flex-row gap-8">
          {/* Formulário */}
          <div className="w-full md:w-3/5 bg-surface-container-lowest rounded-3xl border border-outline-variant/40 p-6 md:p-8 space-y-5 shadow-xs">
            <h2 className="text-xl md:text-2xl font-bold font-headline text-on-surface">
              Envie uma mensagem
            </h2>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-headline font-semibold text-on-surface-variant">
                    Nome
                  </label>
                  <input
                    type="text"
                    placeholder="Seu nome completo"
                    className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-low text-on-surface placeholder:text-outline text-sm focus:outline-none focus:border-primary shadow-xs transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-headline font-semibold text-on-surface-variant">
                    E-mail
                  </label>
                  <input
                    type="email"
                    placeholder="voce@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-low text-on-surface placeholder:text-outline text-sm focus:outline-none focus:border-primary shadow-xs transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-headline font-semibold text-on-surface-variant">
                  Assunto
                </label>
                <input
                  type="text"
                  placeholder="Sobre o que você quer falar?"
                  className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-low text-on-surface placeholder:text-outline text-sm focus:outline-none focus:border-primary shadow-xs transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-headline font-semibold text-on-surface-variant">
                  Mensagem
                </label>
                <textarea
                  rows={4}
                  placeholder="Escreva sua mensagem aqui..."
                  className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-low text-on-surface placeholder:text-outline text-sm focus:outline-none focus:border-primary shadow-xs transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-primary text-on-primary font-headline font-bold text-sm px-8 py-3 rounded-full shadow-xs hover:opacity-90 transition-opacity"
              >
                Enviar mensagem
              </button>
            </form>
          </div>

          {/* Infos laterais */}
          <div className="w-full md:w-2/5 space-y-4">
            <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/40 p-6 flex gap-4 shadow-xs">
              <div className="w-11 h-11 rounded-xl bg-secondary-container flex items-center justify-center shrink-0">
                <MapPinIcon size={22} weight="fill" className="text-on-secondary-container" />
              </div>
              <div>
                <h3 className="font-headline font-bold text-on-surface">Onde estamos</h3>
                <p className="text-sm text-on-surface-variant mt-1">
                  Rua das Flores, 123 — Vila Mariana
                  <br />
                  São Paulo, SP — CEP 04101-000
                </p>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/40 p-6 flex gap-4 shadow-xs">
              <div className="w-11 h-11 rounded-xl bg-secondary-container flex items-center justify-center shrink-0">
                <ClockIcon size={22} weight="fill" className="text-on-secondary-container" />
              </div>
              <div>
                <h3 className="font-headline font-bold text-on-surface">Horário de atendimento</h3>
                <p className="text-sm text-on-surface-variant mt-1">
                  Segunda a sábado, das 8h às 22h
                  <br />
                  Domingo, das 9h às 18h
                </p>
              </div>
            </div>

            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xs border border-outline-variant/40">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800"
                alt="Localização da loja no mapa"
                className="block w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}