
import React, { useState, useEffect } from 'react';
import { LogIn, Menu, X } from 'lucide-react';
import { NAV_ITEMS, MOODLE_LOGIN_URL, LOGO_URL } from '../constants.tsx';

interface HeaderProps {
  onOpenModal: (type: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const type = href.replace('#', '');
    onOpenModal(type);
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }} className="flex items-center transition-opacity hover:opacity-80">
          <img 
            src={LOGO_URL} 
            alt="E-PAZ Logomarca" 
            className={`transition-all duration-300 ${isScrolled ? 'h-10 md:h-12' : 'h-12 md:h-16'}`}
          />
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`font-medium transition-colors hover:text-blue-500 ${
                isScrolled ? 'text-slate-600' : 'text-white/90'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href={MOODLE_LOGIN_URL}
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30"
          >
            <LogIn className="w-4 h-4" />
            <span>Login Moodle</span>
          </a>
        </nav>

        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={isScrolled ? 'text-slate-900' : 'text-white'} size={28} />
          ) : (
            <Menu className={isScrolled ? 'text-slate-900' : 'text-white'} size={28} />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 border-t shadow-xl animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col p-6 space-y-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={(e) => {
                   onOpenModal(item.href.replace('#', ''));
                   setMobileMenuOpen(false);
                }}
                className="text-lg font-medium text-slate-700 hover:text-blue-600 flex items-center space-x-3 w-full text-left"
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
            <a
              href={MOODLE_LOGIN_URL}
              className="flex items-center justify-center space-x-2 bg-blue-600 text-white p-4 rounded-xl font-bold"
            >
              <LogIn className="w-5 h-5" />
              <span>Login Moodle</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;