import React from 'react';
import { BookOpen, Info, Mail, Shield, FileText } from 'lucide-react';

// URL do seu Moodle hospedado no cPanel (Mindnet/Hostgator)
export const MOODLE_URL = 'https://ead.e-paz.com.br'; 
export const MOODLE_LOGIN_URL = `${MOODLE_URL}/login/index.php`;
export const CONTACT_EMAIL = 'contato@e-paz.com.br';
export const LOGO_URL = 'https://e-paz.com.br/downloads/epazLogoSite.png';

export const NAV_ITEMS = [
  { label: 'Cursos', href: '#cursos', icon: <BookOpen className="w-5 h-5" /> },
  { label: 'Sobre', href: '#sobre', icon: <Info className="w-5 h-5" /> },
  { label: 'Contato', href: '#contato', icon: <Mail className="w-5 h-5" /> },
];

export const FOOTER_LINKS = [
  { label: 'Privacidade', href: '#privacidade', icon: <Shield className="w-4 h-4" /> },
  { label: 'Termos de Uso', href: '#termos', icon: <FileText className="w-4 h-4" /> },
];

export const COURSES_DATA = [
  { id: 1, title: "Comunicação interpessoal e a construção de laços de confiança", description: "Desenvolva habilidades para criar conexões profundas e duradouras baseadas na escuta ativa e confiança mútua.", image: "https://images.unsplash.com/photo-1521791136064-7986c2923216?auto=format&fit=crop&q=80&w=800" },
  { id: 2, title: "Educação em Direitos Humanos", description: "Uma imersão nos princípios fundamentais da dignidade humana e sua aplicação prática no cotidiano educacional.", image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800" },
  { id: 3, title: "Resolução de conflitos: da família a escola", description: "Ferramentas práticas para gerenciar tensões e mediar crises em diversos contextos sociais e pedagógicos.", image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800" },
  { id: 4, title: "Educação pela paz", description: "O curso fundamental do projeto, focado na transformação sistêmica através de valores humanos essenciais.", image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=800" },
  { id: 5, title: "Questões atuais na educação: gênero, LGBTQIA+, racismo e diversidade", description: "Debates necessários e abordagens inclusivas para promover a equidade e o respeito à diversidade em sala de aula.", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800" },
  { id: 6, title: "Histórias infantojuvenis na construção de uma cultura de paz, do voluntariado e da cidadania", description: "Explore o poder da narrativa lúdica na formação de cidadãos conscientes, empáticos e engajados.", image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800" },
  { id: 7, title: "Os conflitos como geradores de conhecimento", description: "Como transformar momentos de crise e desavença em oportunidades valiosas de aprendizado e crescimento.", image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800" },
  { id: 8, title: "Prevenção da Violência na Escola", description: "Estratégias preventivas e intervenções pedagógicas para garantir um ambiente seguro e acolhedor para todos.", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800" }
];

export const TERMS_OF_USE_TEXT = `TERMO DE USO DO PORTAL DE EDUCAÇÃO A DISTÂNCIA “E-PAZ”

1. ACEITAÇÃO DOS TERMOS
Ao acessar o portal E-PAZ, mantido pela BIT Editora, você concorda em cumprir estes termos de uso, todas as leis e regulamentos aplicáveis. Se você não concordar com algum destes termos, está proibido de usar ou acessar este site.

2. LICENÇA DE USO
É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no portal E-PAZ , apenas para visualização pessoal, educacional e não comercial.

3. ISENÇÃO DE RESPONSABILIDADE
Os materiais no portal E-PAZ são fornecidos 'como estão'. A MANTENEDORA não oferece garantias, expressas ou implícitas, e por este meio isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização.

4. LIMITAÇÕES
Em nenhum caso a BIT Editora ou seus fornecedores serão responsáveis por quaisquer danos decorrentes do uso ou da incapacidade de usar os materiais no portal E-PAZ.

5. PRIVACIDADE E DADOS
O tratamento de dados pessoais no portal E-PAZ segue rigorosamente a Lei Geral de Proteção de Dados (LGPD). Seus dados são utilizados exclusivamente para fins de gestão acadêmica e certificação.`;

export const PRIVACY_POLICY_TEXT = `POLÍTICA DE PRIVACIDADE E-PAZ

A sua privacidade é importante para nós. É política do portal E-PAZ respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site.

1. COLETA DE INFORMAÇÕES
Coletamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço (como matrícula e acesso ao Moodle). Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento.

2. RETENÇÃO DE DADOS
Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, os protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos.

3. COMPARTILHAMENTO
Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei ou para a emissão de certificados acadêmicos.

4. SEUS DIREITOS
Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.`;