import { useState, useEffect } from 'react';
import { Menu, X, Home } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 text-forest font-bold text-2xl tracking-tight">
          <Home className="w-8 h-8" />
          <span>Homie</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-charcoal/80 font-medium">
          <a href="#features" className="hover:text-forest transition-colors">Tính năng</a>
          <a href="#about" className="hover:text-forest transition-colors">Về Homie</a>
          <a href="#contact" className="hover:text-forest transition-colors">Liên hệ</a>
        </nav>

        <div className="hidden md:block">
          <button className="bg-forest text-white px-6 py-2.5 rounded-full font-medium hover:bg-forest/90 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            Tải ứng dụng
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-forest" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col gap-6 animate-in slide-in-from-top-2">
          <a href="#features" className="text-lg font-medium text-charcoal" onClick={() => setMobileMenuOpen(false)}>Tính năng</a>
          <a href="#about" className="text-lg font-medium text-charcoal" onClick={() => setMobileMenuOpen(false)}>Về Homie</a>
          <a href="#contact" className="text-lg font-medium text-charcoal" onClick={() => setMobileMenuOpen(false)}>Liên hệ</a>
          <button className="bg-forest text-white px-6 py-3 rounded-full font-medium w-full text-center mt-2 shadow-md">
            Tải ứng dụng ngay
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
