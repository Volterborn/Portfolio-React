import { asset } from '../utils/asset';
import { useState, useMemo, useEffect } from 'react';


const FILTER_CATEGORIES = {
  langages: {
    label: "LANGAGES",
    items: ["HTML", "CSS", "JavaScript", "Ionic React", "Python", "Flask", "PHP", "Java", "JavaFX", "FXML", "Laravel", "TypeScript", "Angular"]
  },
  logiciels: {
    label: "LOGICIELS",
    items: ["Android Studio", "Git", "IntelliJ", "PyCharm", "API", "Scene Builder", "Gradle", "PhpStorm"]
  },
  types: {
    label: "TYPE",
    items: ["Personnel", "Scolaire"]
  },
  plateformes: {
    label: "PLATEFORME",
    items: ["Android", "Web", "Desktop"]
  }
};


const ALL_PROJECTS = [
  {
    id: 1,
    title: "UNO",
    description: "Développement d'une version numérique du célèbre jeu de cartes avec une interface graphique interactive, une gestion fluide des tours et le respect des règles officielles.",
    logo: "/images/projects/logos/LogoUNO.png",
    screenshot: "/images/projects/screens/LancementUNO.png",
    tags: ["Java", "JavaFX", "FXML"],
    software: ["IntelliJ", "Scene Builder", "Git"],
    type: "Personnel",
    platform: "Desktop",
    github: "https://github.com/Volterborn/UNO"
  },
  {
    id: 2,
    title: "Mille-bornes",
    description: "Adaptation logicielle du jeu de cartes emblématique intégrant une intelligence artificielle avec plusieurs niveaux de difficulté pour affronter l'ordinateur jusqu'aux 1000 kilomètres.",
    logo: "/images/projects/logos/mille-bornes.jpg",
    screenshot: "/images/projects/screens/mille-bornes.png",
    tags: ["Angular", "TypeScript", "CSS"],
    software: ["IntelliJ", "Gradle", "Git"],
    type: "Personnel",
    platform: "Desktop",
    github: "https://github.com/Volterborn/Mille-bornes"
  },
  {
    id: 3,
    title: "LateBox",
    description: "Web app immersive réalisée en temps limité lors d'un hackathon scolaire : un blog culturel retraçant les racines de la House Music avec un espace de rédaction d'articles.",
    logo: "/images/projects/logos/latebox.png",
    screenshot: "/images/projects/screens/LateBox-Lancement.png",
    tags: ["PHP", "HTML", "CSS", "JavaScript"],
    software: ["PhpStorm", "Git"],
    type: "Scolaire",
    platform: "Web",
    github: "https://github.com/Volterborn/LateBox"
  },
  {
    id: 4,
    title: "O-de-France",
    description: "Plateforme logicielle de gestion logistique et de suivi des flux (stocks, commandes et distribution d'eau), développée avec une architecture Java robuste.",
    logo: "/images/projects/logos/O-de-France.png",
    screenshot: "/images/projects/screens/LancementOFrance.png",
    tags: ["Java", "JavaFX"],
    software: ["IntelliJ", "Scene Builder", "Git"],
    type: "Scolaire",
    platform: "Desktop",
    github: "https://github.com/Volterborn/O-De-France"
  },
  {
    id: 5,
    title: "Convertisseur PDF",
    description: "Application ergonomique permettant de convertir, formater et exporter rapidement divers documents et fichiers textuels au format PDF.",
    logo: "/images/projects/logos/pdf.jpg",
    screenshot: "/images/projects/screens/convertisseur-pdf.png",
    tags: ["Python"],
    software: ["PyCharm", "Git"],
    type: "Personnel",
    platform: "Desktop",
    github: "https://github.com/Volterborn/ConvertisseurPDF"
  },
  {
    id: 6,
    title: "PlatinumTrophyApplication",
    description: "Application mobile dédiée au tracking de succès gaming, permettant de répertorier, filtrer et valoriser la collection de trophées Platine PlayStation.",
    logo: "/images/projects/logos/tropheeplatine.jpg",
    screenshot: "/images/projects/screens/platinum-trophy.png",
    tags: ["Ionic React", "JavaScript", "CSS"],
    software: ["Android Studio", "Git"],
    type: "Personnel",
    platform: "Android",
    github: "https://github.com/Volterborn/PlatinumTrophyApplication"
  },
  {
    id: 7,
    title: "Pacman",
    description: "Recréation fidèle du mythique jeu d'arcade dans le navigateur, comprenant la gestion de la boucle de jeu, les algorithmes de déplacement des fantômes et le scoring en temps réel.",
    logo: "/images/projects/logos/Pacman.jpg",
    screenshot: "/images/projects/screens/LancementPacMan.png",
    tags: ["Angular", "TypeScript", "CSS"],
    software: ["IntelliJ", "Git"],
    type: "Scolaire",
    platform: "Web",
    github: "https://github.com/Volterborn/Pacman"
  },
  {
    id: 8,
    title: "Puissance 4",
    description: "Jeu de réflexion et d'alignement pour PC, comprenant la gestion matricielle de la grille, la détection des conditions de victoire et le mode joueur contre joueur.",
    logo: "/images/projects/logos/Puissance4.png",
    screenshot: "/images/projects/screens/puissance4.png",
    tags: ["Java", "JavaFX", "FXML"],
    software: ["IntelliJ", "Gradle", "Git"],
    type: "Personnel",
    platform: "Desktop",
    github: "https://github.com/Volterborn/Puissance4"
  },
  {
    id: 9,
    title: "Simon",
    description: "Jeu de mémoire électronique basé sur le concept du Simon : reproduction d'une séquence de signaux lumineux et sonores avec score progressif.",
    logo: "/images/projects/logos/simon.png",
    screenshot: "/images/projects/screens/simon.png",
    tags: ["Angular", "TypeScript", "CSS"],
    software: ["IntelliJ", "Git"],
    type: "Personnel",
    platform: "Web",
    github: "https://github.com/Volterborn/Simon"
  }
];

const filterStyles = {
  active: "bg-blue-600 text-white border-blue-500",
  idle: "bg-gray-800 text-gray-300 border-gray-700 hover:border-gray-500 hover:text-white"
};

const FeaturedProjects = () => {
  const [search, setSearch] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setActiveProject(null);
    };
    if (activeProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeProject]);

  const toggleFilter = (item) => {
    setSelectedFilters((prev) =>
      prev.includes(item) ? prev.filter((f) => f !== item) : [...prev, item]
    );
  };

  const resetFilters = () => {
    setSearch("");
    setSelectedFilters([]);
  };

  const filteredProjects = useMemo(() => {
    return ALL_PROJECTS.filter((project) => {
      const matchesSearch =
        search.trim() === "" ||
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase());

      const allProjectAttributes = [
        ...(project.tags || []),
        ...(project.software || []),
        project.type,
        project.platform
      ].filter(Boolean);

      const matchesFilters =
        selectedFilters.length === 0 ||
        selectedFilters.every((filter) => allProjectAttributes.includes(filter));

      return matchesSearch && matchesFilters;
    });
  }, [search, selectedFilters]);

  return (
    <section id="projets" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">Mes projets</h2>
        <p className="text-gray-400">Clique sur un projet pour afficher sa capture d'écran et ses détails</p>
      </div>

      {/* Filtres & Recherche */}
      <div className="bg-gray-900 border border-gray-700/60 rounded-2xl shadow-lg shadow-black/10 p-6 md:p-8 mb-10">
        <div className="mb-6">
          <input
            type="text"
            placeholder="Rechercher un projet..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>

        <div className="space-y-5">
          {Object.entries(FILTER_CATEGORIES).map(([key, group]) => (
            <div key={key}>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-2">
                {group.label}
              </span>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => {
                  const isSelected = selectedFilters.includes(item);
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => toggleFilter(item)}
                      className={`px-3 py-1 rounded-full text-xs md:text-[13px] font-medium border transition-all cursor-pointer ${
                        isSelected ? filterStyles.active : filterStyles.idle
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mt-6 pt-5 border-t border-gray-800">
          <p className="text-gray-400 text-sm font-medium">
            <span className="text-white font-bold">{filteredProjects.length}</span> projet{filteredProjects.length > 1 ? "s" : ""}
          </p>
          {(search || selectedFilters.length > 0) && (
            <button
              onClick={resetFilters}
              type="button"
              className="text-xs md:text-sm uppercase tracking-wider text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500 rounded-full px-4 py-1.5 transition-colors cursor-pointer"
            >
              Réinitialiser
            </button>
          )}
        </div>
      </div>

      {filteredProjects.length === 0 ? (
        <div className="text-center py-16 text-gray-400 bg-gray-900/40 rounded-xl border border-gray-800">
          Aucun projet ne correspond à ces critères.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), setActiveProject(project))}
              role="button"
              tabIndex={0}
              className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-700/60 hover:border-blue-500/70 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/10 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                {/* Zone Logo du projet */}
                <div className="h-40 bg-gray-800/50 flex items-center justify-center p-6 border-b border-gray-800 relative">
                  <img
                    src={asset(project.logo)}
                    alt={`Logo ${project.title}`}
                    className="h-24 w-24 rounded-xl object-contain group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  {/* Fallback si logo manquant */}
                  <div className="hidden absolute inset-0 items-center justify-center font-bold text-gray-400 text-lg">
                    {project.title}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start gap-3 mb-2">
                    <h3 className="min-w-0 [overflow-wrap:anywhere] text-xl font-semibold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="shrink-0 text-xs font-semibold px-2 py-0.5 rounded bg-gray-800 text-gray-300 border border-gray-700">
                      {project.platform}
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-gray-800 text-gray-300 text-xs px-2.5 py-1 rounded-md border border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <span className="text-sm font-semibold text-blue-400 flex items-center gap-1 group-hover:translate-x-1.5 transition-transform">
                  Voir la capture d'écran & détails &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* MODAL AVEC SCREENSHOT / CAPTURE D'ÉCRAN */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="bg-gray-900 border border-gray-700 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 md:p-8 relative flex flex-col gap-6 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton Fermer */}
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-5 right-5 text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 w-9 h-9 rounded-full flex items-center justify-center transition-colors text-lg"
              title="Fermer (Échap)"
              aria-label="Fermer"
            >
              &times;
            </button>

            {/* En-tête modal avec logo miniature & titre */}
            <div className="flex items-center gap-4 pr-10">
              <div className="w-12 h-12 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center p-2 shrink-0">
                <img
                  src={asset(activeProject.logo)}
                  alt={activeProject.title}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => (e.target.style.display = "none")}
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-500/30">
                    {activeProject.type}
                  </span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-gray-800 text-gray-300 border border-gray-700">
                    {activeProject.platform}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                  {activeProject.title}
                </h3>
              </div>
            </div>

            {/* Capture d'écran principale */}
            <div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                Aperçu du projet
              </h4>
              <div className="rounded-xl overflow-hidden border border-gray-700 bg-gray-950 shadow-inner flex items-center justify-center min-h-[220px]">
                <img
                  src={asset(activeProject.screenshot)}
                  alt={`Capture d'écran de ${activeProject.title}`}
                  className="w-full max-h-[380px] object-contain"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div className="hidden py-16 text-gray-500 italic text-sm text-center">
                  Capture d'écran à venir
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                Description
              </h4>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                {activeProject.description}
              </p>
            </div>

            {/* Langages & Outils */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                  Langages / Frameworks
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-blue-950/40 text-blue-300 border border-blue-500/30 text-xs px-2.5 py-1 rounded-md font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {activeProject.software && activeProject.software.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Logiciels / Outils
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.software.map((tool, i) => (
                      <span
                        key={i}
                        className="bg-gray-800 text-gray-300 border border-gray-700 text-xs px-2.5 py-1 rounded-md font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Bouton GitHub */}
            <div className="pt-4 border-t border-gray-800 flex justify-end">
              <a
                href={activeProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                Voir le projet sur GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedProjects;