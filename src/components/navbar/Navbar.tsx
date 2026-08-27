import { StorefrontIcon } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header className="bg-surface border-b border-outline-variant flex justify-between items-center px-4 md:px-12 h-20 w-full sticky top-0 z-40">
            <div className="flex items-center gap-12">
                <Link to='/' className="text-2xl md:text-3xl text-primary font-extrabold tracking-tight font-headline">
                    FitNutri
                </Link>
                <nav className="hidden md:flex items-center gap-6 font-bold text-md text-on-surface-variant">
                    <Link to='/produtos' className="hover:text-primary transition-colors" >Produtos</Link>
                    <Link to='/categorias' className="hover:text-primary transition-colors" >Categorias</Link>
                    <Link to='/sobre' className="hover:text-primary transition-colors" >Sobre</Link>
                    <Link to='/contato' className="hover:text-primary transition-colors" >Suporte</Link>

                </nav>
            </div>

            <div className="flex items-center gap-4">
                <Link to='/logistahome'> <button className="hidden md:flex items-center gap-2 bg-primary text-on-primary px-5 py-2.5 rounded-full hover:bg-primary-container transition-colors font-bold text-sm shadow-sm">
                    <StorefrontIcon size={28} weight="fill" />  Área do Lojista
                </button></Link>
                <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container border border-outline-variant cursor-pointer">
                    <img className="w-full h-full object-cover" src="https://ik.imagekit.io/bellaceccon/fitnutri_icone_perfil.png" alt="Perfil" />
                </div>
            </div>
        </header>
    );
}

export default Navbar;