import { asset } from '../utils/asset';
const Contact = () => {
  const cvPath = asset("/CV_Alexy_Ringard.pdf");

  return (
    <section id="contact" className="py-20 border-t border-gray-700/60">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">Me contacter</h2>
        <p className="text-gray-400">Une opportunité ou une question&nbsp;? Envoie-moi un message&nbsp;!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {/* Informations de contact & CV */}
        <div className="space-y-6">
          {/* Bloc Email */}
          <div className="bg-gray-900 p-6 border border-gray-700/60 rounded-2xl shadow-lg shadow-black/10">
            <h3 className="text-xl font-bold text-white mb-2">Email</h3>
            <p className="text-gray-400 mb-4">ringardalexy@gmail.com</p>
            <a
              href="mailto:ringardalexy@gmail.com"
              className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-1"
            >
              M'écrire &rarr;
            </a>
          </div>

          {/* Bloc LinkedIn */}
          <div className="bg-gray-900 p-6 border border-gray-700/60 rounded-2xl shadow-lg shadow-black/10">
            <h3 className="text-xl font-bold text-white mb-2">LinkedIn</h3>
            <p className="text-gray-400 mb-4">Retrouve mon profil et mon réseau professionnel</p>
            <a
              href="https://www.linkedin.com/in/alexy-ringard"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-1"
            >
              Voir mon profil &rarr;
            </a>
          </div>

          {/* Bloc CV (Visualiser & Télécharger) */}
          <div className="bg-gray-900 p-6 border border-gray-700/60 rounded-2xl shadow-lg shadow-black/10">
            <h3 className="text-xl font-bold text-white mb-2">CV</h3>
            <p className="text-gray-400 text-sm mb-4">Consulte ou télécharge mon CV au format PDF.</p>
            <div className="flex flex-wrap gap-3">
              <a
                href={cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Visualiser
              </a>
              <a
                href={cvPath}
                download="CV_Alexy_Ringard.pdf"
                className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-200 hover:text-white text-sm font-medium px-4 py-2 rounded-lg border border-gray-600 transition-colors"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Télécharger
              </a>
            </div>
          </div>
        </div>

        {/* Formulaire Formspree */}
        <form
          action="https://formspree.io/f/xgooowdk"
          method="POST"
          className="bg-gray-900 p-6 md:p-8 border border-gray-700/60 rounded-2xl shadow-lg shadow-black/10 flex flex-col gap-5"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Nom</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full bg-gray-800 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full bg-gray-800 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="w-full bg-gray-800 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 cursor-pointer px-4 rounded-lg transition-colors mt-2"
          >
            Envoyer le message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;