import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/70 backdrop-blur-md border-b border-gray-200/50' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-gray-800">John Doe</div>
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <a href="#about" className="text-gray-600 hover:text-orange-500 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="text-gray-600 hover:text-orange-500 transition-colors">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="text-gray-600 hover:text-orange-500 transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#certifications" className="text-gray-600 hover:text-orange-500 transition-colors">
                Certifications
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-600 hover:text-orange-500 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-500 focus:outline-none" onClick={toggleMenu}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <nav className="md:hidden bg-white/80 backdrop-blur-md pb-4 px-4 border-b border-gray-200/50">
          <ul className="flex flex-col space-y-3">
            <li>
              <a href="#about" className="block py-2 text-gray-600 hover:text-orange-500 transition-colors" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="block py-2 text-gray-600 hover:text-orange-500 transition-colors" onClick={toggleMenu}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="block py-2 text-gray-600 hover:text-orange-500 transition-colors" onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#certifications" className="block py-2 text-gray-600 hover:text-orange-500 transition-colors" onClick={toggleMenu}>
                Certifications
              </a>
            </li>
            <li>
              <a href="#contact" className="block py-2 text-gray-600 hover:text-orange-500 transition-colors" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
        </nav>}
    </header>;
}