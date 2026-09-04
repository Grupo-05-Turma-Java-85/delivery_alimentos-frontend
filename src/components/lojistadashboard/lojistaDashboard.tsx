export default function LojistaDashboard() {
  return (
<div className="bg-surface text-on-surface font-body min-h-screen flex flex-col md:flex-row">
      {/* Sidebar Navigation (Desktop) */}
<aside className="hidden md:flex flex-col bg-surface-container h-full w-80 fixed left-0 top-0 border-r border-outline-variant py-6 z-40">
<div className="px-6 mb-8 flex items-center space-x-4">
<div className="w-12 h-12 rounded-full overflow-hidden bg-primary-container shrink-0">
<img className="w-full h-full object-cover" src="/mascot.png" alt="Mascote FitHub" />
</div>
<div>
<h2 className="font-bold text-lg text-primary truncate">FitHub Lojista</h2>
<span className="text-xs font-bold text-secondary bg-secondary-container px-2 py-0.5 rounded-full inline-block">
              Premium Merchant
</span>
</div>
</div>
 
        <nav className="flex-1 flex flex-col space-y-2">
<a className="flex items-center px-6 py-3 bg-primary-container text-on-primary-container font-bold rounded-r-full mr-4" href="#">
<span className="material-symbols-outlined mr-4">dashboard</span>
            Dashboard
</a>
<a className="flex items-center px-6 py-3 text-on-surface-variant hover:bg-surface-variant rounded-r-full mr-4 transition-colors" href="#">
<span className="material-symbols-outlined mr-4">inventory_2</span>
            Produtos
</a>
</nav>
</aside>
 
      {/* Main Content Area */}
<main className="flex-1 md:ml-80 pt-6 md:pt-12 px-4 md:px-12">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
<div>
<h1 className="text-2xl md:text-3xl font-bold font-headline text-on-surface">Painel do Lojista</h1>
<p className="text-on-surface-variant">Visão geral da sua loja no FitHub Delivery.</p>
</div>
<button className="inline-flex items-center px-6 py-2.5 border border-outline bg-surface-container-lowest text-primary font-bold rounded-full hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined mr-2 text-[18px]">arrow_back</span>
            Voltar para Loja
</button>
</div>
</main>
</div>
  );
}