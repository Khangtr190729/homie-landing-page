import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import MapSearchSection from './sections/MapSearchSection';
import SafeSearchSection from './sections/SafeSearchSection';
import PropertyExploreSection from './sections/PropertyExploreSection';
import EcosystemSection from './sections/EcosystemSection';
import ProviderSection from './sections/ProviderSection';
import FinalCTA from './sections/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-ivory overflow-x-hidden text-mocha selection:bg-mocha/20">
      <Navbar />
      <main className="flex-grow pt-20">
        <Hero />
        <MapSearchSection />
        <SafeSearchSection />
        <PropertyExploreSection />
        <EcosystemSection />
        <ProviderSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
