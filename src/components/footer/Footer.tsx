import { FacebookLogoIcon, InstagramLogoIcon, XLogoIcon, LinkedinLogoIcon, YoutubeLogoIcon } from "@phosphor-icons/react";

export default function Footer() {
  return (
    <div className='bg-emerald-800 flex flex-col overflow-hidden justify-between'>
      <footer className="relative mt-24 bg-[#c4efb7] px-8 pt-24 pb-6 text-[#123b18]">

        {/* Onda superior */}
        <div className="absolute -top-16 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block h-20 w-full"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 C250,0 350,0 550,40 C750,80 900,90 1200,65 L1200,120 L0,120 Z"
              fill="#c4efb7"
            />
          </svg>
        </div>

        {/* Conteúdo */}
        <div className="flex min-w-full justify-between gap-10 md:grid-cols-4">

          <div className="px-6 text-md md:text-lg">
            <h2 className="font-bold">
              © 2026 FitNutri Delivery.
            </h2>
            <p> Esta empresa e todas as informações são fictícias e criadas exclusivamente para fins educacionais.</p>
          </div>

          <div className="grid md:px-10 gap-3 justify-center py-3">
            <div><p className="text-xl">Acesse nossas Redes Sociais</p></div>
            <div className="flex ml-6 gap-3">
            <FacebookLogoIcon size={30} weight="fill" className="hover:animate-bounce" />
            <InstagramLogoIcon size={30} weight="fill" className="hover:animate-bounce" />
            <XLogoIcon size={30} weight="fill" className="hover:animate-bounce" />
            <LinkedinLogoIcon size={30} weight="fill" className="hover:animate-bounce" />
            <YoutubeLogoIcon size={30} weight="fill" className="hover:animate-bounce" />
            </div>
          </div>
        </div>

      </footer>
    </div>
  );
}