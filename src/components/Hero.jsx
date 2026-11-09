const Hero = () => {
  return (
    <section id="accueil" className="py-20 md:min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center text-center">
      <span className="text-blue-400 font-semibold tracking-wider uppercase text-xs sm:text-sm mb-4">
        Portfolio
      </span>
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-5 tracking-tight">
        Alexy Ringard
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-8">
        Développeur d'applications &amp; web · 3<sup>e</sup> année de BUT Informatique
      </p>

      <div className="inline-flex items-center gap-2 bg-blue-950/40 border border-blue-500/30 px-5 py-2.5 rounded-full mb-10 text-blue-200 text-sm font-medium">
        <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
        En recherche de stage dès<strong className="text-white">Mars 2027</strong>
      </div>

      <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
        <a
          href="#projets"
          className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Voir mes projets
        </a>
        <a
          href="/CV_Alexy_Ringard.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-900 border border-gray-700 hover:border-gray-500 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Voir mon CV
        </a>
        <a
          href="#contact"
          className="bg-gray-900 border border-gray-700 hover:border-gray-500 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Me contacter
        </a>
      </div>
    </section>
  );
};

export default Hero;
