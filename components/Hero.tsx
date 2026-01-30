
import React from 'react';
import { LogIn, ChevronRight } from 'lucide-react';
import { MOODLE_LOGIN_URL } from '../constants.tsx';

interface HeroProps {
  onOpenModal: (type: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://e-paz.com.br/downloads/cogumelo-1.jpg" 
          alt="Educação Pela Paz - Fundo" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-slate-900/90"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center text-white">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8 animate-in fade-in slide-in-from-top-4 duration-500">
          <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
          <span className="text-sm font-medium tracking-wide uppercase text-blue-50">Cursos Online Disponíveis</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-extrabold mb-8 tracking-tight leading-tight animate-in fade-in slide-in-from-bottom-8 duration-700">
          E-PAZ <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Educação Pela Paz</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-100 mb-12 max-w-2xl mx-auto font-light leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 drop-shadow-lg">
          Transformando o mundo através do conhecimento, empatia e diálogo construtivo. Junte-se à nossa rede de aprendizado.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1200">
          <a 
            href={MOODLE_LOGIN_URL}
            className="w-full sm:w-auto px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold rounded-2xl transition-all flex items-center justify-center gap-3 group shadow-2xl shadow-blue-500/40 hover:scale-105 active:scale-95"
          >
            <LogIn className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            Entrar no Moodle
          </a>
          <button 
            onClick={() => onOpenModal('cursos')}
            className="w-full sm:w-auto px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-lg font-bold rounded-2xl transition-all border border-white/30 flex items-center justify-center gap-2 group hover:scale-105 active:scale-95"
          >
            Explorar Cursos
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 px-6 flex justify-between items-center text-white/50 text-xs tracking-[0.4em] uppercase z-10 hidden md:flex font-semibold">
        <span>Resiliência</span>
        <span>Empatia</span>
        <span>Diálogo</span>
        <span>Paz</span>
      </div>
    </section>
  );
};

export default Hero;