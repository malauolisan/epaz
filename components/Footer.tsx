
import React from 'react';
import { FOOTER_LINKS, LOGO_URL } from '../constants.tsx';

interface FooterProps {
  onOpenModal: (type: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const type = href.replace('#', '');
    onOpenModal(type);
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-20 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-32 bg-blue-600/10 blur-[100px] rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-8">
              <img 
                src={LOGO_URL} 
                alt="E-PAZ Logomarca" 
                className="h-16 md:h-20 object-contain brightness-0 invert" 
              />
            </div>
            <p className="max-w-md text-slate-400 leading-relaxed text-lg">
              Educando mentes e corações para um futuro mais justo e pacífico. Nossa plataforma integra tecnologia Moodle de ponta com valores humanos essenciais.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Navegação</h4>
            <ul className="space-y-4">
              <li><button onClick={() => onOpenModal('sobre')} className="hover:text-blue-400 transition-colors">Sobre o Projeto</button></li>
              <li><button onClick={() => onOpenModal('cursos')} className="hover:text-blue-400 transition-colors">Catálogo de Cursos</button></li>
              <li><button onClick={() => onOpenModal('contato')} className="hover:text-blue-400 transition-colors">Fale Conosco</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Legal & Suporte</h4>
            <ul className="space-y-4">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="flex items-center gap-3 hover:text-blue-400 transition-colors group"
                  >
                    <span className="p-1.5 bg-white/5 rounded-lg group-hover:bg-blue-600/20 transition-colors">
                      {link.icon}
                    </span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-sm flex flex-col items-center md:items-start gap-1">
            <p>&copy; {currentYear} E-PAZ - Educação Pela Paz.</p>
            <p className="opacity-50">Tecnologia Certificada & Ambiente Seguro</p>
          </div>
          
          <div className="flex items-center gap-8">
            <div className="flex flex-col items-end gap-1">
              <span className="text-[10px] uppercase tracking-widest opacity-40">Infraestrutura</span>
              <span className="text-xs font-mono text-blue-400">cPanel / Apache 2.4.66</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;