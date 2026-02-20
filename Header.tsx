
import React from 'react';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const navItems = ['HOME', 'PORTFOLIO', 'ABOUT', 'HIRE ME'];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.toLowerCase().replace(' ', '-'));
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#F2F2F2]/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="cursor-pointer hover:opacity-70 transition-all duration-300 flex items-center group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Ananya Vishwakarma Home"
        >
          <div className="font-serif text-3xl font-bold tracking-tighter flex items-center">
            <span className="text-[#1A1A1A]">A</span>
            <span className="text-[#E63946] -ml-1.5 transition-transform duration-300 group-hover:translate-x-0.5">V</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#E63946] ml-1 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        <nav className="hidden md:flex space-x-12">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`text-[11px] font-semibold uppercase tracking-[2px] transition-all duration-300 relative group
                ${activeSection === item.replace(' ', '_') ? 'text-[#E63946]' : 'text-[#1A1A1A] hover:text-[#E63946]'}`}
            >
              {item}
              <span className={`absolute -bottom-1 left-0 w-0 h-[1px] bg-[#E63946] transition-all duration-300 group-hover:w-full ${activeSection === item.replace(' ', '_') ? 'w-full' : ''}`}></span>
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
