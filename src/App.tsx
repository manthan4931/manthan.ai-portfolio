/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Terminal, 
  BadgeCheck, 
  Cpu, 
  Network, 
  Brain, 
  Mail, 
  MapPin, 
  Phone,
  Github, 
  Linkedin, 
  Twitter, 
  Home, 
  Code, 
  FlaskConical,
  ExternalLink,
  X,
  Download
} from 'lucide-react';

const IMAGES = {
  profile:"/images/profile.jpeg",
  project1: "https://lh3.googleusercontent.com/aida-public/AB6AXuAn-FdoVYSS_wepXxYrR41iFDphxGaTfOyL74KPHBmxvWcRPK8yPqlizl-FG4riMq66cjH73Py2eamY49w91RRvnyNnJr4JdBIItfkqxNIDYmoXjQ0FChm7YGlIYJg5HttuQwRmUhiAUqQUTF-55DPudvXpiWts84iA93V-BRYh0VvzQvnHpZbF8-lSlfRtlD-s7X8LVwTPL5eoVF9AOMxpu7CQYBUJxEomvTTx76Nm2dB8aCnOnYc7DmbQO0hqAGb74lqtR7rYNA",
  project2: "/images/crop.jpg",
  project3:"/images/agentic.jpg"
};

const TECH_STACK = [
  { name: "Python", color: "secondary" },
  { name: "LLM", color: "primary" },
  { name: "LangChain", color: "neutral" },
  { name: "SQL", color: "neutral" },
  { name: "RAG", color: "neutral" },
  { name: "NLP", color: "neutral" },
  { name: "PyTorch", color: "neutral" },
  { name: "FastAPI", color: "neutral" }
];

const PROJECTS = [
  
  {
    title: "AI Assistant For CommanderERP",
    description:"Built an AI-powered ERP Assistant that automatically extracts, processes, and understands knowledge from YouTube videos of ERP software channels. The system leverages speech-to-text transcription using high-performance models and transforms unstructured video content into a structured, searchable knowledge base. Implemented a Retrieval-Augmented Generation (RAG) pipeline to enable users to ask natural language questions and receive accurate, context-aware responses derived directly from video content. Designed scalable data pipelines for video ingestion, transcription, embedding generation, and semantic retrieval, significantly improving information accessibility and reducing manual learning effort.",
    image: IMAGES.project1,
    tags: ["Python","Langchain","Groq Whisper","Groq LLM","Vector DB","RAG"],
    icon: <Brain className="w-6 h-6 text-secondary" />,
    accent: "secondary"
  },
  {
    title: "Context Based RAG",
    description: "Real-time NLP engine capable of detecting multi-layered emotional contexts in technical documentation with 98.4% accuracy across multiple languages.",
    image: IMAGES.project2,
    tags: ["PyTorch", "FastAPI"],
    icon: <Brain className="w-6 h-6 text-secondary" />,
    accent: "secondary"
  },
  {
    title: "Crop Prediction Using Random Forest Classifier",
    description: "Real-time NLP engine capable of detecting multi-layered emotional contexts in technical documentation with 98.4% accuracy across multiple languages.",
    image: IMAGES.project2,
    tags: ["PyTorch", "FastAPI"],
    icon: <Brain className="w-6 h-6 text-secondary" />,
    accent: "secondary"
  }
];

export default function App() {
  const [showResume, setShowResume] = useState(false);

  const handleResumeClick = () => {
    setShowResume(true);
  };

  const handleCloseResume = () => {
    setShowResume(false);
  };

  return (
    <div className="min-h-screen bg-background text-on-surface selection:bg-primary/20">
      <div className="grainy-overlay fixed inset-0 z-100" />
      
      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 bg-background/60 backdrop-blur-xl border-b border-outline/10 shadow-[0_0_40px_rgba(0,245,255,0.08)]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Terminal className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold tracking-tighter text-primary font-headline">MANTHAN.AI</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {['Home', 'Work', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item}`} 
                className="text-xs font-medium uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
            <button 
              onClick={handleResumeClick}
              className="bg-primary text-background px-4 py-1.5 rounded-xl font-bold text-xs tracking-tight hover:scale-95 active:scale-90 transition-all"
            >
              RESUME
            </button>
          </nav>
          <button 
            onClick={handleResumeClick}
            className="md:hidden bg-primary text-background px-4 py-1.5 rounded-xl font-bold text-xs tracking-tight"
          >
            RESUME
          </button>
        </div>
      </header>

      <main className="pt-24 pb-24 md:pb-12 px-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section id="Home" className="py-12 md:py-20 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-32 h-32 md:w-48 md:h-48 mb-8 group"
          >
            <div className="absolute inset-0 bg-linear-to-tr from-primary to-secondary rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/20">
              <img 
                src={IMAGES.profile} 
                alt="Manthan Prajapati" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-surface p-2 rounded-full border border-outline/30">
              <BadgeCheck className="w-4 h-4 md:w-5 md:h-5 text-secondary fill-secondary" />
            </div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-medium text-[10px] md:text-xs uppercase tracking-[0.2em] text-primary mb-2"
          >
            Artificial Intelligence Developer
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-headline text-4xl md:text-7xl font-bold tracking-tighter text-on-surface mb-4 leading-none"
          >
            Manthan <br className="md:hidden" /> 
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">Prajapati</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-on-surface-variant text-sm md:text-lg font-light leading-relaxed mb-8 max-w-70 md:max-w-xl"
          >
            AI/ML Specialist focused on building autonomous agents and neural architectures that solve real-world complexities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a 
              href="#Work" 
              className="bg-linear-to-r from-primary to-primary-dim px-8 py-3.5 rounded-xl text-background font-bold text-sm hover:scale-95 active:scale-90 transition-transform shadow-[0_4px_20px_rgba(0,244,254,0.2)] inline-block"
            >
              VIEW WORK
            </a>
          </motion.div>
        </section>

        {/* Tech Stack */}
        <section className="py-12 border-y border-outline/15 overflow-hidden">
          <div className="flex justify-between items-center mb-6 px-2">
            <h3 className="text-[10px] md:text-xs uppercase tracking-widest text-on-surface-variant font-bold">Core Stack</h3>
            <Cpu className="w-4 h-4 text-secondary animate-pulse" />
          </div>
          <div className="flex flex-wrap md:justify-center gap-3 md:gap-4 py-2">
            {TECH_STACK.map((tech, i) => (
              <motion.span 
                key={tech.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i }}
                className={`shrink-0 px-5 py-2.5 rounded-full text-xs font-medium border transition-colors ${
                  tech.color === 'primary' ? 'bg-primary/10 text-primary border-primary/30' :
                  tech.color === 'secondary' ? 'bg-secondary/10 text-secondary border-secondary/30' :
                  'bg-surface text-on-surface-variant border-outline/30'
                }`}
              >
                {tech.name}
              </motion.span>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="Work" className="py-20">
          <div className="flex items-baseline gap-4 mb-12">
            <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tight">Active Nodes</h2>
            <div className="h-px grow bg-linear-to-r from-outline/30 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project, i) => (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative bg-surface/50 rounded-2xl overflow-hidden border border-outline/10 transition-all duration-300 hover:border-primary/40 hover:bg-surface"
              >
                <div className="aspect-video w-full overflow-hidden bg-surface">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-headline text-xl font-bold text-on-surface">{project.title}</h4>
                    {project.icon}
                  </div>
                  <p className="text-on-surface-variant text-sm md:text-base font-light leading-relaxed mb-8">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tags.map(tag => (
                      <span key={tag} className={`text-[10px] uppercase tracking-tighter bg-background px-3 py-1.5 rounded border ${
                        project.accent === 'primary' ? 'text-primary border-primary/20' : 'text-secondary border-secondary/20'
                      }`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className={`w-full py-4 rounded-xl border border-outline/30 text-[10px] font-bold tracking-[0.2em] text-on-surface-variant transition-all flex items-center justify-center gap-2 ${
                    project.accent === 'primary' ? 'hover:border-primary hover:text-primary hover:bg-primary/5' : 'hover:border-secondary hover:text-secondary hover:bg-secondary/5'
                  }`}>
                    <Code className="w-4 h-4" /> GITHUB LINK
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="Contact" className="py-20">
          <div className="bg-surface/50 rounded-4xl p-8 md:p-16 border border-outline/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
              <div>
                <h3 className="font-headline text-3xl md:text-5xl font-bold mb-4">Initialize Contact</h3>
                <p className="text-on-surface-variant text-sm md:text-lg mb-12">
                  Seeking collaboration on bleeding-edge AI modules or neural research pipelines. Protocol response in 24h.
                </p>
                <div className="space-y-6">
                  <a href="mailto:prajapatimanthan49@gmail.com" className="flex items-center gap-6 group max-w-max">
                    <div className="bg-surface p-4 rounded-2xl group-hover:bg-primary/10 transition-colors">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">Protocol</span>
                      <span className="text-sm md:text-lg font-medium">prajapatimanthan49@gmail.com</span>
                    </div>
                  </a>
                  <div className="flex items-center gap-6 group max-w-max">
                    <div className="bg-surface p-4 rounded-2xl group-hover:bg-secondary/10 transition-colors">
                      <Phone className="w-6 h-6 text-secondary" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">Signal</span>
                      <span className="text-sm md:text-lg font-medium">+91 9265896256</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group max-w-max">
                    <div className="bg-surface p-4 rounded-2xl">
                      <MapPin className="w-6 h-6 text-secondary" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">Location</span>
                      <span className="text-sm md:text-lg font-medium">Gandhinagar | Gujarat</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-6">
                <div className="bg-surface/30 p-8 rounded-2xl border border-outline/10">
                  <h4 className="text-primary font-bold uppercase tracking-widest text-xs mb-4">Base Operations</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Neural Research Hub<br />
                    Sector 42, AI District<br />
                    Digital Horizon, 400001
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background w-full py-16 border-t border-outline/15 bg-linear-to-t from-surface/30 to-transparent">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-3">
              <Terminal className="w-6 h-6 text-primary" />
              <span className="text-primary font-bold font-headline text-xl">MANTHAN.AI</span>
            </div>
            <p className="text-[10px] font-light tracking-[0.1rem] uppercase text-on-surface-variant">
              © 2026 MANTHAN PRAJAPATI // SYSTEM: ONLINE
            </p>
          </div>
          <div className="flex gap-10">
            {[
              { name: 'GitHub', icon: <Github className="w-4 h-4" />, href: 'https://github.com/manthan4931' },
              { name: 'LinkedIn', icon: <Linkedin className="w-4 h-4" />, href: 'https://linkedin.com/in/manthan-prajapati' },
            
            ].map(social => (
              <a 
                key={social.name} 
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold tracking-[0.2rem] uppercase text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 w-full z-60 rounded-t-3xl bg-surface/80 backdrop-blur-xl border-t border-outline/15 shadow-[0_-10px_40px_rgba(0,0,0,0.6)] flex justify-around items-center p-4 md:hidden">
        {[
          { name: 'Home', icon: <Home className="w-5 h-5" />, href: '#Home' },
          { name: 'Work', icon: <Code className="w-5 h-5" />, href: '#Work' },
          { name: 'Labs', icon: <FlaskConical className="w-5 h-5" />, href: '#Work' },
          { name: 'Mail', icon: <Mail className="w-5 h-5" />, href: '#Contact' }
        ].map((item, i) => (
          <a 
            key={item.name} 
            href={item.href} 
            className={`flex flex-col items-center justify-center rounded-2xl px-5 py-2 transition-all duration-200 ${
              i === 0 ? 'text-primary bg-primary/10' : 'text-on-surface-variant hover:bg-outline/10'
            }`}
          >
            {item.icon}
            <span className="text-[8px] uppercase tracking-widest mt-1.5 font-bold">{item.name}</span>
          </a>
        ))}
      </nav>

      {/* Resume Modal */}
      {showResume && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-100 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={handleCloseResume}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-surface rounded-3xl border border-outline/30 max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-[0_0_60px_rgba(0,245,255,0.15)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 md:p-8 border-b border-outline/10">
              <h3 className="text-xl md:text-2xl font-bold text-primary">RESUME / CV</h3>
              <button
                onClick={handleCloseResume}
                className="text-on-surface-variant hover:text-primary transition-colors p-2"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Resume Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              <div className="space-y-8 max-w-3xl mx-auto text-on-surface">
                {/* Header */}
                <div className="text-center border-b-2 border-primary pb-8">
                  <h1 className="text-4xl font-bold mb-1">MANTHAN PRAJAPATI</h1>
                  <p className="text-xl text-primary font-bold mb-4">AI/ML ENGINEER | AUTONOMOUS SYSTEMS SPECIALIST</p>
                  <div className="flex flex-wrap justify-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary" />
                      <span>prajapatimanthan49@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-secondary" />
                      <span>+91 9265896256</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-secondary" />
                      <span>Gandhinagar, Gujarat, India</span>
                    </div>
                  </div>
                  <div className="flex justify-center gap-6 mt-4">
                    <a href="https://github.com/manthan4931" className="text-primary hover:underline text-sm flex items-center gap-1">
                      <Github className="w-4 h-4" /> GitHub
                    </a>
                    <a href="https://linkedin.com/in/manthan-prajapati" className="text-primary hover:underline text-sm flex items-center gap-1">
                      <Linkedin className="w-4 h-4" /> LinkedIn
                    </a>
                  </div>
                </div>

                {/* Professional Summary */}
                <div>
                  <h2 className="text-lg font-bold text-primary mb-3 border-b border-outline/30 pb-2">PROFESSIONAL SUMMARY</h2>
                  <p className="text-on-surface-variant leading-relaxed">
                    Results-driven AI/ML Engineer with expertise in building production-ready autonomous agents, neural architectures, and intelligent systems. Specialized in Large Language Models (LLMs), Retrieval-Augmented Generation (RAG) pipelines, and natural language processing. Proven track record of designing scalable data pipelines and transforming unstructured data into actionable insights. Passionate about cutting-edge AI research and delivering solutions that solve real-world complexities.
                  </p>
                </div>

                {/* Technical Skills */}
                <div>
                  <h2 className="text-lg font-bold text-primary mb-3 border-b border-outline/30 pb-2">TECHNICAL EXPERTISE</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-sm text-secondary mb-2">AI/ML Technologies</h4>
                      <p className="text-sm text-on-surface-variant leading-relaxed">
                        Large Language Models (LLM), Retrieval-Augmented Generation (RAG), Natural Language Processing (NLP), PyTorch, Autonomous Agents, Neural Networks, Transformer Architecture
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-secondary mb-2">Programming Languages</h4>
                      <p className="text-sm text-on-surface-variant leading-relaxed">
                        Python, JavaScript/TypeScript, SQL, Bash/PowerShell
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-secondary mb-2">Frameworks & Libraries</h4>
                      <p className="text-sm text-on-surface-variant leading-relaxed">
                        FastAPI, LangChain, Django, React, Vite, Motion, PyTorch, scikit-learn, Pandas, NumPy
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-secondary mb-2">Data & Infrastructure</h4>
                      <p className="text-sm text-on-surface-variant leading-relaxed">
                        Vector Databases, SQL Databases, Groq API, Whisper API, Git, API Integration
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-secondary mb-2">Specializations</h4>
                      <p className="text-sm text-on-surface-variant leading-relaxed">
                        Data Pipelines, Machine Learning Model Development, Data Engineering, Production Deployment
                      </p>
                    </div>
                  </div>
                </div>

                {/* Projects & Experience */}
                <div>
                  <h2 className="text-lg font-bold text-primary mb-4 border-b border-outline/30 pb-2">FEATURED PROJECTS & EXPERIENCE</h2>
                  <div className="space-y-6">
                    
                    {/* Project 1 */}
                    <div className="bg-surface/50 p-5 rounded-xl border border-outline/20">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-bold text-base">AI Assistant For CommanderERP</h4>
                          <p className="text-sm text-primary font-semibold">Autonomous ERP Knowledge System</p>
                        </div>
                        <span className="text-[10px] bg-primary/20 text-primary px-3 py-1 rounded-full">Production</span>
                      </div>
                      <p className="text-sm text-on-surface-variant mb-3 leading-relaxed">
                        Architected and deployed an AI-powered ERP Assistant that automatically extracts, processes, and understands knowledge from YouTube videos of ERP software channels. Implemented a sophisticated speech-to-text transcription pipeline using Groq's high-performance Whisper model, transforming unstructured video content into a structured, searchable knowledge base.
                      </p>
                      <p className="text-sm text-on-surface-variant mb-3 leading-relaxed">
                        Designed and implemented a Retrieval-Augmented Generation (RAG) pipeline enabling users to ask natural language questions and receive accurate, context-aware responses derived directly from video content. Achieved 98.4% accuracy across multiple languages through advanced embedding and semantic retrieval techniques.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-[10px] bg-background px-3 py-1 rounded border border-primary/30 text-primary">Python</span>
                        <span className="text-[10px] bg-background px-3 py-1 rounded border border-secondary/30 text-secondary">LangChain</span>
                        <span className="text-[10px] bg-background px-3 py-1 rounded border border-secondary/30 text-secondary">Groq Whisper</span>
                        <span className="text-[10px] bg-background px-3 py-1 rounded border border-secondary/30 text-secondary">Groq LLM</span>
                        <span className="text-[10px] bg-background px-3 py-1 rounded border border-secondary/30 text-secondary">Vector DB</span>
                        <span className="text-[10px] bg-background px-3 py-1 rounded border border-secondary/30 text-secondary">RAG</span>
                      </div>
                    </div>

                    {/* Project 2 */}
                    <div className="bg-surface/50 p-5 rounded-xl border border-outline/20">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-bold text-base">Context-Based Emotional Analysis Engine</h4>
                          <p className="text-sm text-primary font-semibold">Multi-layered NLP System</p>
                        </div>
                        <span className="text-[10px] bg-secondary/20 text-secondary px-3 py-1 rounded-full">Research</span>
                      </div>
                      <p className="text-sm text-on-surface-variant mb-3 leading-relaxed">
                        Developed real-time NLP engine capable of detecting multi-layered emotional contexts in technical documentation with 98.4% accuracy. System processes content across multiple languages and cultural contexts, providing nuanced sentiment and emotional intelligence analysis.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-[10px] bg-background px-3 py-1 rounded border border-primary/30 text-primary">PyTorch</span>
                        <span className="text-[10px] bg-background px-3 py-1 rounded border border-secondary/30 text-secondary">FastAPI</span>
                        <span className="text-[10px] bg-background px-3 py-1 rounded border border-secondary/30 text-secondary">Transformers</span>
                      </div>
                    </div>

                    {/* Project 3 */}
                    <div className="bg-surface/50 p-5 rounded-xl border border-outline/20">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-bold text-base">Crop Prediction & Agricultural Analytics</h4>
                          <p className="text-sm text-primary font-semibold">Machine Learning Model</p>
                        </div>
                        <span className="text-[10px] bg-secondary/20 text-secondary px-3 py-1 rounded-full">Deployed</span>
                      </div>
                      <p className="text-sm text-on-surface-variant mb-3 leading-relaxed">
                        Built predictive model using Random Forest Classifier for agricultural optimization. Processes environmental and soil data to predict optimal crop types, improving farming efficiency and resource allocation.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-[10px] bg-background px-3 py-1 rounded border border-primary/30 text-primary">Python</span>
                        <span className="text-[10px] bg-background px-3 py-1 rounded border border-secondary/30 text-secondary">Scikit-learn</span>
                        <span className="text-[10px] bg-background px-3 py-1 rounded border border-secondary/30 text-secondary">Random Forest</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Core Competencies */}
                <div>
                  <h2 className="text-lg font-bold text-primary mb-3 border-b border-outline/30 pb-2">KEY COMPETENCIES</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    <div className="text-sm">
                      <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-lg font-bold">Autonomous Agents</span>
                    </div>
                    <div className="text-sm">
                      <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-lg font-bold">LLM Integration</span>
                    </div>
                    <div className="text-sm">
                      <span className="inline-block bg-secondary/10 text-secondary px-3 py-1 rounded-lg font-bold">RAG Pipeline</span>
                    </div>
                    <div className="text-sm">
                      <span className="inline-block bg-secondary/10 text-secondary px-3 py-1 rounded-lg font-bold">NLP Systems</span>
                    </div>
                    <div className="text-sm">
                      <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-lg font-bold">Data Pipelines</span>
                    </div>
                    <div className="text-sm">
                      <span className="inline-block bg-secondary/10 text-secondary px-3 py-1 rounded-lg font-bold">ML Deployment</span>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h2 className="text-lg font-bold text-primary mb-3 border-b border-outline/30 pb-2">EDUCATION</h2>
                  <div className="bg-surface/50 p-5 rounded-xl border border-outline/20">
                    <h4 className="font-bold">Bachelor of Engineering - Computer Science</h4>
                    <p className="text-sm text-secondary font-semibold mt-1">Specialization: Artificial Intelligence & Machine Learning</p>
                    <p className="text-sm text-on-surface-variant mt-2">Focus Areas: Neural Networks, Natural Language Processing, Autonomous Systems, Data Science</p>
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <h2 className="text-lg font-bold text-primary mb-3 border-b border-outline/30 pb-2">EXPERTISE AREAS</h2>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">▸</span>
                      <span className="text-sm">Building scalable autonomous AI systems and agentic workflows</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">▸</span>
                      <span className="text-sm">Designing production-ready LLM applications with robust error handling</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">▸</span>
                      <span className="text-sm">Implementing advanced RAG systems with semantic search and retrieval</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">▸</span>
                      <span className="text-sm">Data engineering and ETL pipeline optimization</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">▸</span>
                      <span className="text-sm">Full-stack ML model development and deployment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">▸</span>
                      <span className="text-sm">Cross-functional collaboration with product and engineering teams</span>
                    </li>
                  </ul>
                </div>

                {/* Call to Action */}
                <div className="border-t border-outline/30 pt-6 text-center">
                  <p className="text-sm text-on-surface-variant mb-4">
                    Seeking opportunities to collaborate on cutting-edge AI projects, neural research, and autonomous systems development.
                  </p>
                  <p className="text-xs font-bold tracking-widest text-primary">
                    LET'S BUILD THE FUTURE OF AI TOGETHER
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="border-t border-outline/10 p-6 md:p-8 flex gap-4 justify-end bg-surface/50">
              <button
                onClick={handleCloseResume}
                className="px-6 py-2.5 rounded-xl border border-outline/30 text-on-surface-variant hover:border-outline/50 transition-colors font-bold text-sm"
              >
                CLOSE
              </button>
              <a
                href="/resume.pdf"
                download
                className="px-6 py-2.5 rounded-xl bg-primary text-background hover:scale-95 transition-transform font-bold text-sm flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                DOWNLOAD
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
