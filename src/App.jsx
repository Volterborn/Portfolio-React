import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About'; // 
import FeaturedProjects from './components/FeaturedProjects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-800 text-white pt-16">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6">
        <Hero />
        <About /> {}
        <FeaturedProjects />
        <Contact />
      </main>

      <footer className="bg-gray-900 text-center py-6 border-t border-gray-700/60">
        <p className="text-gray-400 text-sm">
          &copy; 2026 Alexy Ringard. Tous droits réservés.
        </p>
      </footer>
    </div>
  );
}

export default App;