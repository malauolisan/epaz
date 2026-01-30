
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2, Check } from 'lucide-react';
import { COURSES_DATA, TERMS_OF_USE_TEXT, PRIVACY_POLICY_TEXT, CONTACT_EMAIL, MOODLE_URL } from '../constants.tsx';

export const CoursesSection: React.FC = () => {
  return (
    <div className="w-full">
      <p className="text-slate-600 mb-12 text-lg">
        Trilhas de aprendizagem desenhadas para promover competências socioemocionais e uma cultura de paz.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {COURSES_DATA.map((course) => (
          <div key={course.id} className="group bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 transition-all hover:shadow-xl">
            <div className="h-48 overflow-hidden">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2">{course.title}</h3>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                {course.description}
              </p>
              <a 
                href={`${MOODLE_URL}/course/index.php`}
                className="text-blue-600 font-bold flex items-center gap-2 hover:text-blue-700 text-sm"
              >
                Ver no Moodle
                <span>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const AboutSection: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-2/5">
          <img 
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800" 
            alt="Educação e Paz" 
            className="rounded-[2.5rem] shadow-2xl w-full object-cover aspect-square"
          />
        </div>
        <div className="lg:w-3/5 space-y-6">
          <h3 className="text-3xl md:text-4xl font-black text-slate-900">
            Bem-vindo ao E-PAZ
          </h3>
          <p className="text-slate-600 text-lg leading-relaxed">
            O Portal E-PAZ nasceu para oferecer formações profundas e transformadoras em temas essenciais para o cotidiano escolar. Aqui, você vivencia uma jornada de reflexão e transformação pessoal.
          </p>
          <div className="p-6 bg-blue-50 rounded-3xl border-l-4 border-blue-600">
            <p className="font-bold text-blue-900 italic">"Educação pela Paz não é utopia – é método, é prática, é resultado."</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ContactSection: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 size={48} />
        </div>
        <h3 className="text-3xl font-bold text-slate-900 mb-4">Mensagem Enviada!</h3>
        <p className="text-slate-600">Nossa equipe responderá em breve através do e-mail informado.</p>
        <button onClick={() => setStatus('idle')} className="mt-8 px-8 py-3 bg-slate-100 text-slate-700 font-bold rounded-2xl">Enviar outra</button>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row gap-12">
      <div className="lg:w-1/2 space-y-6">
        <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100">
          <h3 className="text-xl font-bold text-blue-900 mb-6">Contatos Oficiais</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-slate-700">
              <Mail className="text-blue-600" /> <span>{CONTACT_EMAIL}</span>
            </div>
            <div className="flex items-center gap-4 text-slate-700">
              <Phone className="text-blue-600" /> <span>(83) 9999-9999</span>
            </div>
            <div className="flex items-center gap-4 text-slate-700">
              <MapPin className="text-blue-600" /> <span>João Pessoa, PB</span>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input required type="text" placeholder="Nome" className="w-full px-5 py-4 bg-slate-50 border rounded-2xl outline-none focus:ring-2 focus:ring-blue-500" />
          <input required type="email" placeholder="E-mail" className="w-full px-5 py-4 bg-slate-50 border rounded-2xl outline-none focus:ring-2 focus:ring-blue-500" />
          <textarea required placeholder="Mensagem" rows={4} className="w-full px-5 py-4 bg-slate-50 border rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 resize-none"></textarea>
          <button disabled={status === 'loading'} className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl flex items-center justify-center gap-2">
            {status === 'loading' ? <Loader2 className="animate-spin" /> : <Send size={20} />}
            {status === 'loading' ? 'Enviando...' : 'Enviar Mensagem'}
          </button>
        </form>
      </div>
    </div>
  );
};

export const TermsSection: React.FC = () => (
  <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200">
    <div className="text-slate-700 whitespace-pre-wrap leading-relaxed">{TERMS_OF_USE_TEXT}</div>
  </div>
);

export const PrivacySection: React.FC = () => (
  <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200">
    <div className="text-slate-700 whitespace-pre-wrap leading-relaxed">{PRIVACY_POLICY_TEXT}</div>
  </div>
);
