export const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/10 text-slate-400">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold text-white">
              TechStore
            </h2>
            <p className="mt-2 text-sm text-slate-500 max-w-sm">
              Tecnología moderna para potenciar tu mundo digital.
            </p>
          </div>
          <div className="flex gap-8 text-sm">
            <a href="/home" className="hover:text-white transition-colors duration-300">
              Home
            </a>
            <a href="/dashboard" className="hover:text-white transition-colors duration-300">
              Dashboard
            </a>
            <a href="/cart" className="hover:text-white transition-colors duration-300">
              Cart
            </a>
          </div>

        </div>
        <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} TechStore. Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
};

export default Footer