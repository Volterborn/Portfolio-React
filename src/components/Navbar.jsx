const Navbar = () => {
  return (
    <nav className="bg-gray-900/95 backdrop-blur text-white py-4 px-4 sm:px-8 fixed w-full top-0 z-50 border-b border-gray-700/60">
      <div className="max-w-6xl mx-auto flex justify-between items-center gap-4">

      
        <a href="#accueil" className="text-lg sm:text-xl font-bold tracking-tight text-blue-400 hover:text-blue-300 transition-colors whitespace-nowrap">
          Alexy Ringard
        </a>

    
        <ul className="flex gap-4 sm:gap-7 text-sm sm:text-base font-medium text-gray-300">
          <li className="hidden sm:block">
            <a href="#accueil" className="hover:text-white transition-colors">Accueil</a>
          </li>
          <li>
            <a href="#about" className="hover:text-white transition-colors">À propos</a>
          </li>
          <li>
            <a href="#projets" className="hover:text-white transition-colors">Projets</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
