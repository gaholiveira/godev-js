'use client';

import React, { useState } from 'react';
// Adicionei MessageCircle aos imports
import { Laptop, Smartphone, Bot, ChevronRight, Github, Linkedin, Instagram, FileCode2, X, Plus, Minus, MessageCircle } from 'lucide-react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import Image from 'next/image';

// --- FUNDO HIGH TECH (FIXO, GRANDE & IMERSIVO) ---
const HighTechBackground = () => {
  return (
    // MUDANÇA 1: 'fixed' em vez de 'absolute'. Agora cobre a tela o tempo todo.
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      
      {/* 1. GRID BASE */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* 2. SCANNER (Linha que desce) */}
      <motion.div
        initial={{ top: "-10%" }}
        animate={{ top: "110%" }}
        transition={{ 
          duration: 8,
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent shadow-[0_0_20px_rgba(59,130,246,0.6)] opacity-50"
      />

      {/* 3. BLOBS DE LUZ (Atmosfera) */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-20%] left-[-20%] w-[800px] h-[800px] bg-blue-800 rounded-full mix-blend-screen filter blur-[120px] opacity-20"
      />

      {/* 4. PARTÍCULAS DE DADOS (AGORA GRANDES E EM TODA A TELA) */}
      
      {/* Bloco 1 - Grande Azul (Esquerda) */}
      <motion.div
        // Começa lá embaixo (120vh) e vai até o topo (-20vh)
        initial={{ y: "120vh" }}
        animate={{ y: "-20vh", opacity: [0, 0.8, 0], rotate: 180 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 0 }}
        // Aumentei para w-8 (32px)
        className="absolute left-[10%] w-8 h-8 border border-blue-500 bg-blue-500/20 shadow-[0_0_20px_#3b82f6] backdrop-blur-sm"
      />
      
      {/* Bloco 2 - Grande Amber (Direita) */}
      <motion.div
        initial={{ y: "120vh" }}
        animate={{ y: "-20vh", opacity: [0, 0.6, 0], rotate: -90 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 5 }}
        // Aumentei para w-12 (48px) - Bem visível
        className="absolute right-[15%] w-12 h-12 border border-amber-500 bg-amber-500/10 shadow-[0_0_20px_#f59e0b] backdrop-blur-sm rounded-lg"
      />

      {/* Bloco 3 - Médio Rápido (Centro) */}
      <motion.div
        initial={{ y: "120vh" }}
        animate={{ y: "-20vh", opacity: [0, 0.4, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 2 }}
        className="absolute left-[45%] w-4 h-4 bg-white shadow-[0_0_15px_white] rounded-sm"
      />

      {/* Bloco 4 - Pequeno Lento (Canto Inferior) */}
      <motion.div
        initial={{ y: "120vh" }}
        animate={{ y: "-20vh", opacity: [0, 0.5, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 0 }}
        className="absolute left-[80%] w-6 h-6 border border-blue-300 bg-transparent shadow-[0_0_10px_#93c5fd]"
      />

       {/* Bloco 5 - Extra para preencher (Canto Superior Inicial) */}
       <motion.div
        initial={{ y: "50vh" }}
        animate={{ y: "-20vh", opacity: [0, 0.3, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 8 }}
        className="absolute left-[20%] w-5 h-5 border border-purple-500 bg-purple-500/10"
      />

    </div>
  );
};

// --- DADOS ---
interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

const services: ServiceItem[] = [
  { 
    id: 1, 
    title: "Sites de Alta Conversão", 
    description: "Seu site carrega em 1 segundo? O meu sim. Otimizado para o Google (SEO) para colocar sua empresa no topo sem gastar com anúncios.", 
    icon: Laptop 
  },
  { 
    id: 2, 
    title: "Apps Próprios", 
    description: "Fidelize seus melhores clientes. Pare de depender de algoritmos de terceiros e tenha seu próprio canal de vendas direto no bolso do cliente.", 
    icon: Smartphone 
  },
  { 
    id: 3, 
    title: "Automação de Vendas", 
    description: "Atenda 100 clientes ao mesmo tempo. Automatize agendamentos e suporte para vender enquanto você dorme.", 
    icon: Bot 
  },
];

const faqs = [
  {
    question: "Por que investir em um site Next.js e não Wordpress?",
    answer: "Wordpress é genérico e lento. Next.js é a tecnologia usada por gigantes como Uber e Netflix. Garantimos carregamento em menos de 1 segundo, o que melhora seu posicionamento no Google e aumenta conversão."
  },
  {
    question: "Quanto tempo demora para entregar o projeto?",
    answer: "Depende da complexidade. Landing Pages de alta performance são entregues em média em 7 a 10 dias úteis. Apps e Sistemas personalizados levam de 30 a 60 dias."
  },
  {
    question: "Vocês fazem o design ou preciso contratar à parte?",
    answer: "Cuidamos de tudo. Do design estratégico focado em vendas até a programação e publicação no ar."
  },
  {
    question: "Como funciona o pagamento?",
    answer: "Trabalhamos com contrato seguro. Geralmente 50% na entrada para início imediato e 50% na entrega final aprovada."
  }
];

const techStack = [
  "Next.js", "React Native", "Node.js", "TypeScript", 
  "Tailwind CSS", "PostgreSQL", "Docker", "AWS", 
  "Framer Motion", "Supabase", "GraphQL", "Prisma"
];

const projects = [
  {
    id: 1,
    title: "Landing Page Consultoria",
    category: "Web App • Next.js",
    image: "/prova.png",
    description: "Site responsivo para consultoria de marketplaces, focado em conversão e SEO."
  },
  {
    id: 2,
    title: "App Financeiro",
    category: "Mobile • React Native",
    image: "/prova2.png", 
    description: "Aplicativo de controle financeiro pessoal com integração bancária segura."
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.2, 
      delayChildren: 0.1 
    }
  }
};

const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 50 
  }, 
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94]
    } 
  }
};

// --- COMPONENTE LOGO HERO ---
const TechLogo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "backOut" }}
      className="relative w-64 h-64 md:w-80 md:h-80 mb-10 flex items-center justify-center"
    >
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-full h-full flex items-center justify-center"
      >
        <motion.div 
          animate={{ opacity: [0.2, 0.5, 0.2], scale: [0.8, 1.1, 0.8] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-10 bg-blue-500/30 rounded-full blur-3xl" 
        />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-full h-full drop-shadow-2xl relative z-10">
          <g fill="none" strokeLinecap="round" strokeLinejoin="round">
            <motion.path 
              strokeWidth="0.5"
              d="M12.5 33.333H8.333M25 12.5V6.25zm8.333 0V8.333zm-16.666 0V8.333zM37.5 25h6.25zm0 8.333h4.167zm0-16.666h4.167zM25 37.5v6.25zm-8.333 0v4.167zm16.666 0v4.167zM12.5 25H6.25zm0-8.333H8.333z"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1, stroke: ["#94a3b8", "#60a5fa", "#94a3b8"] }}
              transition={{ pathLength: { duration: 1.5, ease: "easeInOut" }, stroke: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 } }}
            />
            <motion.path 
              stroke="#3b82f6" strokeWidth="0.8" fill="rgba(2, 6, 23, 0.95)" 
              d="M35.417 12.5H14.583c-1.15 0-2.083.933-2.083 2.083v20.834c0 1.15.933 2.083 2.083 2.083h20.834c1.15 0 2.083-.933 2.083-2.083V14.583c0-1.15-.933-2.083-2.083-2.083"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </g>
          <text x="24.5" y="26" dominantBaseline="middle" textAnchor="middle" fontSize="4.0" fontFamily="monospace" fontWeight="600" className="select-none pointer-events-none tracking-widest">
             <tspan fill="#3b82f6" dx="-0.5"></tspan>
            <tspan fill="#ffffff" dx="0.5">godev</tspan>
            <tspan fill="#fbbf24">.js</tspan>
            <tspan fill="#3b82f6" dx="0.5"></tspan>
          </text>
        </svg>
      </motion.div>
    </motion.div>
  );
};

// --- COMPONENTE SOBRE MIM ---
const AboutSection = () => {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto w-full relative z-10 border-t border-white/5">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* Foto */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full md:w-1/2 flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-amber-500 rounded-full blur-2xl opacity-20 animate-pulse" />
            <div className="relative w-full h-full rounded-full border-2 border-white/10 overflow-hidden bg-slate-900 shadow-2xl">
              {/* ATENÇÃO: Coloque sua foto real nomeada como 'perfil.jpg' na pasta public */}
              <Image 
                src="/Eu-foto.png" 
                alt="Gabriel Oliveira" 
                fill 
                className="object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="absolute -bottom-4 -right-4 bg-slate-800 border border-white/10 p-4 rounded-2xl shadow-xl flex items-center gap-3"
            >
              <div className="bg-blue-500/20 p-2 rounded-full">
                <FileCode2 className="text-blue-400" size={24} />
              </div>
              <div>
                <span className="block text-2xl font-bold text-white">3+</span>
                <span className="text-xs text-slate-400 font-mono">ANOS DE EXP.</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Texto */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2"
        >
          <span className="text-amber-400 font-mono text-sm tracking-wider mb-2 block">QUEM ESTÁ NOS BASTIDORES</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Mais do que código,<br />
            <span className="text-blue-500">Estratégia Digital.</span>
          </h2>
          
          <p className="text-slate-400 leading-relaxed mb-6 text-lg">
            Olá, sou o <strong className="text-white">Gabriel Oliveira</strong>. 
            Acredito que um site lento é dinheiro deixado na mesa.
          </p>
          
          <p className="text-slate-400 leading-relaxed mb-8">
            Minha missão não é apenas escrever linhas de código, mas criar ecossistemas digitais que vendem por si sós.
            Trabalho com a mesma tecnologia usada por gigantes como Netflix e Uber (Next.js) para garantir que sua empresa 
            esteja anos-luz à frente da concorrência local.
          </p>

          <div className="flex gap-4">
            <a 
               href="https://www.instagram.com/gabrieloliver.dev/" 
               target="_blank"
               className="flex items-center gap-2 text-white font-semibold hover:text-amber-400 transition-colors cursor-pointer"
            >
              <Instagram size={20} />
              Acompanhar Bastidores
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- COMPONENTE FAQ ---
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto w-full relative z-10">
      <div className="text-center mb-16">
        <span className="text-blue-500 font-mono text-sm tracking-wider uppercase">Tire suas dúvidas</span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
          Perguntas Frequentes
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="border border-white/10 rounded-2xl bg-slate-900/50 overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-800/50 transition-colors cursor-pointer"
            >
              <span className="text-lg font-semibold text-slate-200">{faq.question}</span>
              {openIndex === index ? (
                <Minus className="text-amber-400" />
              ) : (
                <Plus className="text-slate-500" />
              )}
            </button>
            
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-white/5">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Desenvolvimento Web',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const dataLayer = (window as any).dataLayer || [];
      dataLayer.push({
        event: 'generate_lead',
        user_name: formData.name,
        selected_service: formData.service
      });
    }

    const text = `Olá Gabriel! Meu nome é *${formData.name}*. \nTenho interesse em: *${formData.service}*. \n\n${formData.message ? `Detalhes: ${formData.message}` : ''}`;
    const whatsappUrl = `https://wa.me/5516994064845?text=${encodeURIComponent(text)}`;
    
    window.open(whatsappUrl, '_blank');
    setIsModalOpen(false);
    setFormData({ name: '', email: '', service: 'Desenvolvimento Web', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen flex flex-col bg-slate-950 relative overflow-hidden font-sans selection:bg-blue-500 selection:text-white">
      
      <HighTechBackground />

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-slate-950/70 backdrop-blur-md border-b border-white/5">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center"
        >
          <div className="flex items-center gap-2 group cursor-pointer select-none">
            <FileCode2 size={24} className="text-amber-400 group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-xl font-mono font-bold text-white tracking-tight">
              godev<span className="text-amber-400">.js</span>
            </span>
          </div>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-amber-400 transition cursor-pointer"
          >
            <span>Contratar Dev</span>
            <ChevronRight size={16} />
          </button>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center pt-15 pb-20 px-6 relative z-10">
        <TechLogo />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-6 flex items-center gap-2 px-4 py-1.5 bg-slate-900/80 border border-slate-700 text-slate-300 rounded-full text-xs font-mono shadow-lg"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]"/>
          <span>Disponível para Projetos</span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold mb-8 text-white leading-tight tracking-tight"
        >
          Sua empresa, <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 animate-gradient-x">
            Digital e Automática.
          </span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl text-slate-300 max-w-lg mb-12 leading-relaxed mx-auto"
        >
          Transforme cliques em lucro. Tecnologia estratégica para escalar as suas vendas.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <motion.button 
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-blue-600 text-white rounded-lg font-bold shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            Solicitar Orçamento
          </motion.button>

          <motion.a 
            href="#servicos" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-slate-900/50 border border-slate-700 text-slate-300 rounded-lg font-bold backdrop-blur-sm transition-colors cursor-pointer"
          >
            Conhecer Serviços
          </motion.a>
        </motion.div>
      </section>

      {/* Tech Stack */}
      <section className="py-10 border-y border-white/5 bg-slate-900/30 backdrop-blur-sm overflow-hidden relative z-10">
        <div className="max-w-full mx-auto">
          <p className="text-center text-xs text-slate-500 mb-6 uppercase tracking-widest font-mono">
            Powering applications with modern stack
          </p>
          <div className="flex relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-10" />
            <motion.div 
              className="flex gap-12 whitespace-nowrap"
              animate={{ x: [0, -1000] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            >
              {[...techStack, ...techStack, ...techStack].map((tech, index) => (
                <div key={index} className="flex items-center gap-2 group">
                  <span className="text-2xl font-bold text-blue-600 group-hover:text-blue-400 transition-colors cursor-default shadow-blue-500/20 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                    {tech}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-900/50" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-24 px-6 max-w-6xl mx-auto w-full relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Soluções Sob Medida</h2>
          <p className="text-slate-400">Tecnologia ponta a ponta.</p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              variants={itemVariants}
              className="group p-8 border border-white/10 rounded-2xl bg-slate-900/40 backdrop-blur-sm hover:bg-slate-800/60 transition-colors duration-300 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]"
            >
              <div className="mb-6 bg-blue-500/10 w-16 h-16 flex items-center justify-center rounded-xl border border-blue-500/20 group-hover:border-blue-500/50 transition-colors">
                <motion.div
                   animate={{ y: [0, -10, 0] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <service.icon className="w-8 h-8 text-blue-400" strokeWidth={1.5} />
                </motion.div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Portfólio */}
      <section id="portfolio" className="py-24 px-9 max-w-6xl mx-auto w-full relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Projetos Selecionados</h2>
            <p className="text-slate-400">Obras que geram valor real.</p>
          </div>
          <a href="https://github.com/gaholiveira" className="text-amber-400 hover:text-amber-300 font-mono text-sm flex items-center gap-2 transition-colors">
            VER GITHUB <ChevronRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group rounded-2xl overflow-hidden bg-slate-900/50 border border-white/5 transition-colors duration-300 hover:border-amber-500/30"
            >
              <div className="h-64 w-full relative overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill 
                  className="object-cover object-center scale-[1.2] md:scale-[1.0] transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/60 transition-colors duration-300" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                  <span className="px-6 py-2 bg-amber-500 text-slate-950 font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform shadow-lg">
                    Ver Detalhes
                  </span>
                </div>
              </div>
              <div className="p-8 border-t border-white/5">
                <span className="text-xs font-mono text-amber-400 mb-2 block">{project.category}</span>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SOBRE MIM --- */}
      <AboutSection />

      {/* --- FAQ --- */}
      <FAQSection />

      {/* Footer */}
      <footer className="bg-slate-950/80 backdrop-blur border-t border-white/5 text-slate-400 py-12 px-6 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col">
            <span className="font-mono font-bold text-white text-lg tracking-tight">
              godev<span className="text-amber-400">.js</span>
            </span>
            <span className="text-xs text-slate-600 mt-1">© Gabriel Oliveira. All rights reserved.</span>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-amber-400 transition"><Linkedin size={20} /></a>
            <a href="https://github.com/gaholiveira" className="hover:text-amber-400 transition"><Github size={20} /></a>
            <a href="https://www.instagram.com/gabrieloliver.dev/" className="hover:text-amber-400 transition"><Instagram size={20} /></a>
          </div>
        </div>
      </footer>
      
      {/* --- BOTÃO FLUTUANTE WHATSAPP (Ajustado com a cor oficial + Estilo Dev) --- */}
      <motion.button
        onClick={() => setIsModalOpen(true)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        // MUDANÇA: Usei a cor hex #25D366 (WhatsApp) mas mantive o shadow/glow customizado
        className="fixed bottom-8 right-8 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.5)] flex items-center justify-center cursor-pointer group hover:shadow-[0_0_30px_rgba(37,211,102,0.8)] transition-shadow duration-300"
      >
        {/* Ping Animation - Mantive para chamar atenção sutilmente */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></span>
        
        {/* Ícone - MessageCircle é mais elegante que o logo vetorizado cheio de curvas */}
        <MessageCircle size={28} className="relative z-10 fill-white text-white" />
      </motion.button>

      {/* Modal de Contato */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg bg-slate-900 border border-white/10 rounded-2xl shadow-2xl p-6 md:p-8 z-10"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Vamos construir algo?</h3>
                <p className="text-slate-400 text-sm">Preencha os dados e será redirecionado para o meu WhatsApp já com tudo pronto.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-amber-400 mb-1">SEU NOME</label>
                  <input 
                    required
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ex: João Silva"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-amber-400 mb-1">INTERESSE</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-amber-500 transition-colors appearance-none"
                  >
                    <option>Desenvolvimento Web</option>
                    <option>App Mobile (iOS/Android)</option>
                    <option>Automação & Bots</option>
                    <option>Outro Projeto</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono text-amber-400 mb-1">DETALHES (OPCIONAL)</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Conte um pouco sobre a sua ideia..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg shadow-lg shadow-amber-500/20 transition-all transform active:scale-95 flex items-center justify-center gap-2 mt-4 cursor-pointer"
                >
                  <FileCode2 size={20} />
                  Gerar Mensagem WhatsApp
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </main>
  );
}