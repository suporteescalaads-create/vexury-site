
import React, { useState, useRef, useEffect } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Loader2, AlertCircle, Instagram, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo.tsx';

export const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const MDiv = motion.div as any;

  const validateField = (name: string, value: string) => {
    let error = '';

    switch (name) {
      case 'firstName':
        if (!value.trim()) error = 'Please enter a valid first name.';
        break;
      case 'lastName':
        if (!value.trim()) error = 'Please enter a valid last name.';
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim() || !emailRegex.test(value)) error = 'Please enter a valid email address.';
        break;
      case 'phone':
        if (!value.trim()) error = 'Please enter your phone number.';
        else if (value.length < 7) error = 'Please enter a valid phone number.';
        break;
      case 'company':
        if (value.length > 100) error = 'Company name is too long.';
        break;
    }

    return error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    const error = validateField(name, value);
    setErrors(prev => {
      const newErrors = { ...prev };
      if (!error) delete newErrors[name];
      else newErrors[name] = error;
      return newErrors;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, (formData as any)[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setFormStatus('submitting');
    const googleScriptUrl = "https://script.google.com/macros/s/AKfycby254fTQ8Pv3_PtcJmR9dkDWorxCKdxxSAdqqAdfLID9AhvrRJfO5H1_V83Tr5KSsXkmg/exec";

    try {
      await fetch(googleScriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          source: "Website"
        })
      });

      setFormStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', phone: '', company: '' });
      setErrors({});

    } catch (error) {
      console.error('Submission error:', error);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 4000);
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const hashIndex = href.indexOf('#');
    if (hashIndex !== -1) {
      const hash = href.substring(hashIndex);
      if (!hash.startsWith('#/')) {
        e.preventDefault();
        window.location.hash = hash;
      }
    }
  };

  return (
    <footer id="contact" className="bg-[#03000a] pt-24 pb-12 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
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
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email Address</h4>
                  <a href="mailto:hello@vexury.com" className="text-gray-400 hover:text-white transition-colors font-medium">hello@vexury.com</a>
                </div>
              </div>

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
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Our Office</h4>
                  <p className="text-gray-400 font-medium">Key Biscayne, Miami, FL 33149</p>
                </div>
              </div>
            </div>
          </MDiv>

          <MDiv 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div id="contact-form-top" className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-2xl min-h-[550px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {formStatus === 'success' ? (
                  <MDiv
                    key="success"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center text-center relative z-10"
                  >
                    {/* Animated Decorative Background Elements */}
                    <MDiv 
                      animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute inset-0 bg-accent rounded-full blur-[100px] -z-10"
                    />

                    {/* Premium Success Icon Visual */}
                    <div className="relative mb-12">
                      <MDiv 
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                        className="w-32 h-32 rounded-full bg-gradient-to-br from-green-400/20 to-green-600/5 flex items-center justify-center text-green-500 border border-green-500/30 relative z-10 shadow-[0_0_50px_rgba(34,197,94,0.3)] backdrop-blur-xl"
                      >
                        <CheckCircle2 size={64} strokeWidth={1.5} className="drop-shadow-[0_0_15px_rgba(34,197,94,0.8)]" />
                      </MDiv>
                      
                      {/* Floating Particles Around Icon */}
                      {[...Array(6)].map((_, i) => (
                        <MDiv
                          key={i}
                          animate={{ 
                            y: [0, -40, 0], 
                            x: [0, Math.sin(i) * 30, 0],
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0]
                          }}
                          transition={{ duration: 3, delay: i * 0.4, repeat: Infinity }}
                          className="absolute w-1.5 h-1.5 bg-green-400 rounded-full blur-[1px]"
                          style={{ 
                            top: '50%', 
                            left: '50%',
                          }}
                        />
                      ))}
                    </div>

                    <MDiv
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Thank <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-200">you!</span>
                      </h3>
                      
                      <div className="space-y-4 max-w-sm mx-auto">
                        <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed">
                          Our team is already reviewing your request.
                        </p>
                        <p className="text-gray-500 text-sm font-medium tracking-wide uppercase">
                          Expect a response within 24 hours.
                        </p>
                      </div>

                      <div className="mt-12 flex items-center justify-center gap-3 text-accent/60">
                        <Sparkles size={16} />
                        <span className="text-[10px] uppercase tracking-[0.3em] font-black">Vexury Concierge Activated</span>
                        <Sparkles size={16} />
                      </div>
                    </MDiv>
                  </MDiv>
                ) : (
                  <MDiv 
                    key="form" 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }}
                    className="flex flex-col flex-grow"
                  >
                    <div className="mb-10">
                      <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">Send us a Message</h3>
                      <p className="text-gray-500 text-sm font-light">Fill out the form below and we'll start your project analysis.</p>
                    </div>

                    <form onSubmit={handleSubmit} noValidate className="space-y-6 flex-grow">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 ml-1">First Name</label>
                          <input 
                            name="firstName"
                            placeholder="John"
                            value={formData.firstName}
                            onChange={handleChange}
                            className={`w-full bg-white/[0.05] border ${errors.firstName ? 'border-red-500/50' : 'border-white/10'} rounded-2xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-accent/50 focus:bg-white/[0.08] transition-all`}
                          />
                          {errors.firstName && <p className="text-red-500 text-[10px] font-bold mt-1 ml-1">{errors.firstName}</p>}
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 ml-1">Last Name</label>
                          <input 
                            name="lastName"
                            placeholder="Doe"
                            value={formData.lastName}
                            onChange={handleChange}
                            className={`w-full bg-white/[0.05] border ${errors.lastName ? 'border-red-500/50' : 'border-white/10'} rounded-2xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-accent/50 focus:bg-white/[0.08] transition-all`}
                          />
                          {errors.lastName && <p className="text-red-500 text-[10px] font-bold mt-1 ml-1">{errors.lastName}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 ml-1">E-Mail</label>
                          <input 
                            type="email"
                            name="email"
                            placeholder="hello@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full bg-white/[0.05] border ${errors.email ? 'border-red-500/50' : 'border-white/10'} rounded-2xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-accent/50 focus:bg-white/[0.08] transition-all`}
                          />
                          {errors.email && <p className="text-red-500 text-[10px] font-bold mt-1 ml-1">{errors.email}</p>}
                        </div>
                        <div className="space-y-2 relative">
                          <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 ml-1">Phone</label>
                          <input 
                            name="phone"
                            type="tel"
                            placeholder="(000) 000-0000"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`w-full bg-white/[0.05] border ${errors.phone ? 'border-red-500/50' : 'border-white/10'} rounded-2xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-accent/50 focus:bg-white/[0.08] transition-all`}
                          />
                          {errors.phone && <p className="text-red-500 text-[10px] font-bold mt-1 ml-1">{errors.phone}</p>}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 ml-1">Company (Optional)</label>
                        <input 
                          name="company"
                          placeholder="Your Business Name"
                          value={formData.company}
                          onChange={handleChange}
                          className={`w-full bg-white/[0.05] border ${errors.company ? 'border-red-500/50' : 'border-white/10'} rounded-2xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-accent/50 focus:bg-white/[0.08] transition-all`}
                        />
                        {errors.company && <p className="text-red-500 text-[10px] font-bold mt-1 ml-1">{errors.company}</p>}
                      </div>

                      <div className="pt-4">
                        <button 
                          type="submit"
                          disabled={formStatus === 'submitting'}
                          className="w-full py-5 bg-white text-black rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-accent hover:text-white transition-all duration-500 shadow-xl relative overflow-hidden group disabled:opacity-70"
                        >
                          {formStatus === 'submitting' ? (
                            <div className="flex items-center gap-3">
                              <Loader2 className="animate-spin" size={20} />
                              <span className="uppercase tracking-widest text-sm">Processing...</span>
                            </div>
                          ) : (
                            <>
                              <span className="uppercase tracking-widest text-sm">Send Message</span>
                              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-[-150%] group-hover:animate-shimmer" />
                        </button>
                        
                        {formStatus === 'error' && (
                          <MDiv 
                            initial={{ opacity: 0, y: 10 }} 
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-4 flex items-center justify-center gap-2 text-red-500 text-xs font-bold uppercase tracking-wider"
                          >
                            <AlertCircle size={14} /> Something went wrong. Please try again.
                          </MDiv>
                        )}
                      </div>
                    </form>
                  </MDiv>
                )}
              </AnimatePresence>
            </div>
          </MDiv>
        </div>

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
                    <li><a href="mailto:hello@vexury.com" className="hover:text-white transition-colors font-medium">hello@vexury.com</a></li>
                    <li><a href="tel:+13054676317" className="hover:text-white transition-colors font-medium">+1 (305) 467-6317</a></li>
                </ul>
                <div className="flex gap-4">
                    <a href="https://www.instagram.com/vexuryco/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-accent hover:border-accent transition-all duration-300" aria-label="Instagram">
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
