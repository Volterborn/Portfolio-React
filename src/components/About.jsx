import { asset } from '../utils/asset';
const About = () => {
  const skills = [
    { name: "GitHub", icon: "/images/github-original.svg" },
    { name: "GitLab", icon: "/images/gitlab-original.svg" },
    { name: "Docker", icon: "/images/docker-original.svg" },
    { name: "Podman", icon: "/images/podman-original.svg" },
    { name: "HTML", icon: "/images/html5-original.svg" },
    { name: "CSS", icon: "/images/css3-original.svg" },
    { name: "JavaScript", icon: "/images/javascript-original.svg" },
    { name: "TypeScript", icon: "/images/typescript-original.svg" },
    { name: "Angular", icon: "/images/angular-original.svg" },
    { name: "Python", icon: "/images/python-original.svg" },
    { name: "Java", icon: "/images/java-original.svg" },
    { name: "SQL", icon: "/images/SQL.svg" },
    { name: "Git", icon: "/images/gitlab.svg" },
    { name: "PHP", icon: "/images/php-original.svg" },
    { name: "Bash", icon: "/images/bash-original.svg" },
    { name: "Flask", icon: "/images/flask-original.svg" },
    { name: "Laravel", icon: "/images/laravel-original.svg" },
    { name: "Anglais", icon: "/images/Anglais.svg" }
  ];

  const experiences = [
    {
      role: "Développeur d'applications",
      company: "Mairie de Courchelettes",
      date: "Avr. 2026 - Juin 2026",
      tasks: [
        "Conception et réalisation d'un logiciel de communication entre les services de la mairie pour les missions.",
        "Conception et réalisation d'un logiciel permettant de personnaliser des modèles pour les cérémonies civiles."
      ]
    },
    {
      role: "Bénévolat refuge animalier",
      company: "SOS Animaux — Pecquencourt",
      date: "Août 2022",
      tasks: [
        "Nettoyage et entretien des cages",
        "Aide à la mise en place d'événements (Marché de Noël)",
        "Soins et promenade des chiens"
      ]
    }
  ];

  const education = [
    {
      title: "BUT Informatique - IUT de Lens",
      date: "2023 - Aujourd'hui",
      description: "Formation approfondie en développement d'applications, architectures logicielles, bases de données, réseaux et gestion de projets agiles."
    },
    {
      title: "Lycée Edmond Labbé - Douai",
      date: "2020 - 2023",
      description: "Baccalauréat général avec spécialités NSI (Numérique et Sciences Informatiques), Mathématiques et Physique-Chimie."
    }
  ];

  const hobbies = [
    {
      title: "Jeux Vidéo",
      description: "Je suis un grand joueur de jeux vidéo, principalement les FPS comme Apex Legends, Battlefield ou Counter-Strike, ainsi que les jeux solo."
    },
    {
      title: "Photographie",
      description: "En dehors de mes études, je fais de la photographie, principalement de paysages et des portraits."
    },
    {
      title: "Sport & Automobile",
      description: "Je pratique des sports comme la musculation et la natation, et je m'intéresse à l'automobile, notamment avec la Formule 1."
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">À propos de moi</h2>
        <p className="text-gray-400">Découvre mon profil, mon parcours et mes centres d'intérêt</p>
      </div>

      <div className="flex flex-col gap-12">
        <div className="bg-gray-900 border border-gray-700/60 rounded-2xl shadow-lg shadow-black/10 p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
          <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-blue-500/40 shrink-0">
            <img
              src={asset("/images/Alexy-ringard.jpg")}
              alt="Photo de Alexy Ringard"
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white mb-2">Alexy Ringard</h3>
            <p className="text-blue-400 font-medium mb-4">Étudiant en 3<sup>e</sup> année de BUT Informatique</p>
            <p className="text-gray-300 leading-relaxed">
              Passionné par le développement web et d'applications, je conçois des solutions logicielles performantes et ergonomiques tout en restant en veille technologique constante.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-900 border border-gray-700/60 rounded-2xl shadow-lg shadow-black/10 p-6 md:p-8">
            <h3 className="text-2xl font-bold text-white mb-6 border-b border-gray-800 pb-4">
              Expériences professionnelles
            </h3>
            <div className="space-y-8">
              {experiences.map((item, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-blue-500/40">
                  <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-gray-900"></span>
                  <h4 className="text-lg font-bold text-white">{item.role}</h4>
                  <p className="text-blue-400 text-sm font-medium">{item.company}</p>
                  <p className="text-gray-400 text-xs mb-3">{item.date}</p>
                  <ul className="space-y-1.5 list-disc pl-4 marker:text-gray-600 text-gray-300 text-sm leading-relaxed">
                    {item.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="text-gray-400">
                        <span className="text-gray-300">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-700/60 rounded-2xl shadow-lg shadow-black/10 p-6 md:p-8">
            <h3 className="text-2xl font-bold text-white mb-6 border-b border-gray-800 pb-4">
              Formations
            </h3>
            <div className="space-y-8">
              {education.map((item, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-blue-500/40">
                  <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-gray-900"></span>
                  <h4 className="text-lg font-bold text-white">{item.title}</h4>
                  <p className="text-blue-400 text-xs mb-2 font-medium">{item.date}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-700/60 rounded-2xl shadow-lg shadow-black/10 p-6 md:p-8">
          <h3 className="text-2xl font-bold text-white mb-6 border-b border-gray-800 pb-4">
            Mes compétences
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2.5 bg-gray-800 px-4 py-2.5 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors"
              >
                <img
                  src={asset(skill.icon)}
                  alt={skill.name}
                  className="w-5 h-5"
                  onError={(e) => (e.target.style.display = 'none')}
                />
                <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-700/60 rounded-2xl shadow-lg shadow-black/10 p-6 md:p-8">
          <h3 className="text-2xl font-bold text-white mb-6 border-b border-gray-800 pb-4">
            Loisirs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hobbies.map((hobby, index) => (
              <div key={index} className="bg-gray-800/60 p-6 rounded-xl border border-gray-700/60">
                <h4 className="text-lg font-bold text-blue-400 mb-2">{hobby.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{hobby.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;