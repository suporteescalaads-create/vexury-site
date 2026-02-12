import React, { useState } from 'react';
import { Instagram, Phone, Mail, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';

export const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: ''
  });

  const MDiv = motion.div as any;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      // Simulação de envio ou integração com serviço de tracking
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Se houver script de tracking global (Meta Pixel etc), ele será disparado pelo clique no botão
      // conforme configurado no App.tsx
      
      setFormStatus('success');
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const isHomePage = !window.location.hash.startsWith('#/');
    if (isHomePage && href.includes('#') && !href.includes('#/')) {
      e.preventDefault();
      const targetId = href.split('#')[1];
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 100; 
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
  };

  return (
    <footer id="contact" className="bg-[#03000a] pt-24 pb-12 relative overflow-hidden">
      {/* Divider Soft Neon */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          
          {/* Lado Esquerdo: Informações de Contato */}
          <MDiv 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-12"
          >
            <div>
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">talk</span>.
              </h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed max-w-md">
                Have a project in mind? We'd love to hear from you. Send us a message and we'll respond within 24 hours.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Phone Number</h4>
                  <a href="tel:+13054676317" className="text-gray-400 hover:text-white transition-colors font-medium">+1 (305) 467-6317</a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email Address</h4>
                  <a href="mailto:hello@vexury.com" className="text-gray-400 hover:text-white transition-colors font-medium">hello@vexury.com</a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Our Office</h4>
                  <p className="text-gray-400 font-medium">Key Biscayne, Miami, FL 33149</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
                <a href="https://www.instagram.com/vexuryco/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-gray-500 hover:text-white transition-all duration-300">
                    <Instagram size={20} />
                    <span className="text-sm font-medium tracking-widest uppercase">@vexuryco</span>
                </a>
            </div>
          </MDiv>

          {/* Lado Direito: Formulário Premium */}
          <MDiv 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                {formStatus === 'success' ? (
                  <MDiv
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    className="flex flex-col items-center justify-center py-20 text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 mb-8 border border-green-500/30">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
                    <p className="text-gray-400 max-w-sm">Thank you for reaching out. We've received your inquiry and will be in touch shortly.</p>
                    <button 
                      onClick={() => setFormStatus('idle')}
                      className="mt-8 text-accent hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
                    >
                      Send another message
                    </button>
                  </MDiv>
                ) : (
                  <MDiv key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <div className="mb-10">
                      <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">Send us a Message</h3>
                      <p className="text-gray-500 text-sm font-light">Fill out the form below and we'll get back to you within 24 hours.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 ml-1">Name</label>
                          <input 
                            required
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full bg-white/[0.05] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-accent/50 focus:bg-white/[0.08] transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 ml-1">Last Name</label>
                          <input 
                            required
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full bg-white/[0.05] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-accent/50 focus:bg-white/[0.08] transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 ml-1">E-Mail</label>
                          <input 
                            required
                            type="email"
                            name="email"
                            placeholder="example@mail.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-white/[0.05] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-accent/50 focus:bg-white/[0.08] transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 ml-1">Phone</label>
                          <input 
                            required
                            name="phone"
                            placeholder="+1 (305) 000-0000"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-white/[0.05] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-accent/50 focus:bg-white/[0.08] transition-all"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 ml-1">Company</label>
                        <input 
                          name="company"
                          placeholder="Your Company Name"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full bg-white/[0.05] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-accent/50 focus:bg-white/[0.08] transition-all"
                        />
                      </div>

                      <button 
                        disabled={formStatus === 'submitting'}
                        className="w-full py-5 bg-white text-black rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-accent hover:text-white transition-all duration-500 shadow-xl relative overflow-hidden group disabled:opacity-50 mt-4"
                      >
                        {formStatus === 'submitting' ? (
                          <Loader2 className="animate-spin" size={20} />
                        ) : (
                          <>
                            <span className="uppercase tracking-widest text-sm">Send Message</span>
                            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </form>
                  </MDiv>
                )}
              </AnimatePresence>
            </div>
          </MDiv>
        </div>

        {/* Rodapé de Navegação */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mb-10 md:mb-16 border-t border-white/5 pt-16">
            <div className="col-span-2 md:col-span-1">
                 <a href="https://vexury.com/#/" className="inline-block mb-6" onClick={(e) => {
                     e.preventDefault();
                     window.location.hash = '#/';
                     window.scrollTo({ top: 0, behavior: 'smooth' });
                 }}>
                    <Logo className="w-10 h-10" textClassName="text-lg" />
                </a>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                    High-quality website design with a focus on structure, performance, and business growth.
                </p>
            </div>
            
            <nav aria-label="Footer Navigation">
                <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">Navigation</h4>
                <ul className="space-y-4 text-gray-500 text-sm">
                    <li><a href="https://vexury.com/#services" onClick={(e) => handleNavClick(e, 'https://vexury.com/#services')} className="hover:text-white transition-colors">Services</a></li>
                    <li><a href="https://vexury.com/#team" onClick={(e) => handleNavClick(e, 'https://vexury.com/#team')} className="hover:text-white transition-colors">Team</a></li>
                    <li><a href="https://vexury.com/#pricing" onClick={(e) => handleNavClick(e, 'https://vexury.com/#pricing')} className="hover:text-white transition-colors">Pricing</a></li>
                    <li><a href="https://vexury.com/#contact" onClick={(e) => handleNavClick(e, 'https://vexury.com/#contact')} className="hover:text-white transition-colors">Contact</a></li>
                </ul>
            </nav>

             <div className="text-sm">
                <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">Connect</h4>
                <ul className="space-y-4 text-gray-500 mb-6">
                    <li><a href="tel:+13054676317" className="hover:text-white transition-colors font-medium">+1 (305) 467-6317</a></li>
                    <li><a href="mailto:hello@vexury.com" className="hover:text-white transition-colors font-medium">hello@vexury.com</a></li>
                </ul>
                <div className="flex gap-4">
                    <a href="https://www.instagram.com/vexuryco/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-accent hover:border-accent transition-all duration-300">
                        <Instagram size={18} />
                    </a>
                </div>
            </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <p>© 2026 Vexury. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                <a href="https://vexury.com/#/terms.html" className="hover:text-gray-400 transition-colors">Terms</a>
                <a href="https://vexury.com/#/privacy.html" className="hover:text-gray-400 transition-colors">Privacy</a>
            </div>
        </div>
      </div>
    </footer>
  );
};