
import React, { useState } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Footer from './components/Footer.tsx';
import Modal from './components/Modal.tsx';
import { 
  CoursesSection, 
  AboutSection, 
  ContactSection, 
  TermsSection, 
  PrivacySection 
} from './components/Sections.tsx';

const App: React.FC = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const closeModal = () => setActiveModal(null);

  const renderModalContent = () => {
    switch (activeModal) {
      case 'cursos':
        return <CoursesSection />;
      case 'sobre':
        return <AboutSection />;
      case 'contato':
        return <ContactSection />;
      case 'termos':
        return <TermsSection />;
      case 'privacidade':
        return <PrivacySection />;
      default:
        return null;
    }
  };

  const getModalTitle = () => {
    switch (activeModal) {
      case 'cursos': return 'Nossos Cursos';
      case 'sobre': return 'Sobre o E-PAZ';
      case 'contato': return 'Entre em Contato';
      case 'termos': return 'Termos de Uso';
      case 'privacidade': return 'Política de Privacidade';
      default: return '';
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 selection:bg-blue-500 selection:text-white">
      <Header onOpenModal={setActiveModal} />
      
      <main>
        <Hero onOpenModal={setActiveModal} />
      </main>
      
      <Footer onOpenModal={setActiveModal} />

      <Modal 
        isOpen={activeModal !== null} 
        onClose={closeModal} 
        title={getModalTitle()}
      >
        {renderModalContent()}
      </Modal>

      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[0%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/5 rounded-full blur-[100px]"></div>
      </div>
    </div>
  );
};

export default App;