'use client';

import React, { useState } from 'react';
import { Laptop, Smartphone, Bot, ChevronRight, Github, Linkedin, Instagram, FileCode2, X } from 'lucide-react';
import { AnimatePresence, motion, Variants } from 'framer-motion';

// --- COMPONENTE DE FUNDO OTIMIZADO ---
const EnergyBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], x: [0, 100, 0], y: [0, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600 rounded-full mix-blend-screen filter blur-[100px] opacity-30 will-change-transform"
      />

      <motion.div 
        animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2], x: [0, -100, 0], y: [0, 100, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-amber-500 rounded-full mix-blend-screen filter blur-[120px] opacity-10 will-change-transform"
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
  { id: 1, title: "Desenvolvimento Web", description: "Sites de alta performance, Landing Pages e E-commerce otimizados.", icon: Laptop },
  { id: 2, title: "Apps Mobile", description: "Aplicativos nativos para iOS e Android rápidos e intuitivos.", icon: Smartphone },
  { id: 3, title: "Automações & Chatbots", description: "Reduza custos automatizando atendimento e processos repetitivos.", icon: Bot },
];

const techStack = [
  "Next.js", "React Native", "Node.js", "TypeScript", 
  "Tailwind CSS", "PostgreSQL", "Docker", "AWS", 
  "Framer Motion", "Supabase", "GraphQL", "Prisma"
];

const projects = [
  {
    id: 1,
    title: "Landing page consultoria",
    category: "Web App • Next.js",
    image: "bg-gradient-to-br from-blue-900 to-slate-900", 
    description: "Site responsivo para consultoria de marketplaces, focado em conversão e SEO."
  },
  {
    id: 2,
    title: "Aplicativo Financeiro",
    category: "Mobile • React Native",
    image: "bg-gradient-to-br from-amber-900 to-slate-900", 
    description: "Aplicativo de controle financeiro pessoal com integração bancária segura."
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 50, damping: 20 } 
  }
};

export default function Home() {
  // 1. ESTADO DO MODAL
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // 2. ESTADO DO FORMULÁRIO
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Desenvolvimento Web',
    message: ''
  });

  // 3. FUNÇÃO DE ENVIO
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
      
      <EnergyBackground />

      {/* Navbar Atualizada */}
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

          {/* CORREÇÃO 1: Botão Navbar agora abre o modal */}
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
      <section className="flex flex-col items-center justify-center text-center py-32 px-6 relative z-10">
        <motion.span 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-300 rounded-full text-xs font-bold uppercase tracking-wider shadow-[0_0_10px_rgba(59,130,246,0.2)]"
        >
          Disponível para novos projetos
        </motion.span>
        
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
          className="text-xl text-slate-300 max-w-2xl mb-12 leading-relaxed"
        >
          Desenvolvimento de software de alta performance para escalar o seu negócio.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          {/* CORREÇÃO 2: Botão Hero agora é <motion.button> e abre o modal */}
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

      {/* --- TECH STACK MARQUEE --- */}
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
                  <span className="text-2xl font-bold text-slate-600 group-hover:text-amber-400 transition-colors cursor-default">
                    {tech}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SERVIÇOS --- */}
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
              className="group p-8 border border-white/10 rounded-2xl bg-slate-900/40 backdrop-blur-sm hover:bg-slate-800/60 transition-all hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]"
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

      {/* --- PROJETOS --- */}
      <section id="portfolio" className="py-24 px-6 max-w-6xl mx-auto w-full relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Projetos Selecionados</h2>
            <p className="text-slate-400">Obras que geram valor real.</p>
          </div>
          <a href="#" className="text-amber-400 hover:text-amber-300 font-mono text-sm flex items-center gap-2 transition-colors">
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
              className="group rounded-2xl overflow-hidden bg-slate-900/50 border border-white/5 hover:border-amber-500/30 transition-all"
            >
              <div className={`h-64 w-full ${project.image} relative p-6 flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-6 py-2 bg-amber-500 text-slate-950 font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    Ver Detalhes
                  </span>
                </div>
                <FileCode2 size={64} className="text-white/10 group-hover:scale-110 transition-transform duration-500" />
              </div>

              <div className="p-8">
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
            <a href="#" className="hover:text-amber-400 transition"><Github size={20} /></a>
            <a href="#" className="hover:text-amber-400 transition"><Instagram size={20} /></a>
          </div>
        </div>
      </footer>

      {/* --- MODAL DE CONTATO --- */}
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