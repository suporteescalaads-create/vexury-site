import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import { Contact } from './Contact';
import { Header } from './Header';

export const Privacy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#03000a] text-white min-h-screen font-sans selection:bg-accent selection:text-white">
      <Header />
      
      <main className="pt-32 pb-20 relative overflow-hidden">
        {/* Ambient Background */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#1a0b2e] to-transparent pointer-events-none" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          
          <div className="mb-8">
            <a href="#" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors">
                <ArrowLeft size={16} /> Back to Home
            </a>
          </div>

          {/* Page Header */}
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-accent text-xs font-bold uppercase tracking-widest mb-6"
            >
              <ShieldCheck size={14} /> Legal
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold tracking-tight mb-6"
            >
              Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">Policy</span>
            </motion.h1>
            
            <p className="text-gray-400 text-lg">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
          </div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none space-y-12 text-gray-300"
          >
            {/* Section 1 */}
            <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
              <p className="leading-relaxed">
                At Vexury, we prioritize your privacy. We collect information that you provide directly to us, such as when you request a quote, create an account, or communicate with us. This information may include your name, email address, phone number, and company details.
              </p>
              <p className="leading-relaxed mt-4">
                We also automatically collect certain information when you visit our website, including your IP address, browser type, and operating system, to improve our services and user experience.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-accent"></span> 2. How We Use Your Information
              </h2>
              <p className="leading-relaxed mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-accent">
                <li>Provide, maintain, and improve our digital services.</li>
                <li>Process transactions and send related information, including confirmations and invoices.</li>
                <li>Send you technical notices, updates, security alerts, and support messages.</li>
                <li>Respond to your comments, questions, and requests.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-4">3. Data Security</h2>
              <p className="leading-relaxed">
                We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-accent"></span> 4. Third-Party Services
              </h2>
              <p className="leading-relaxed">
                We may share your information with third-party vendors, consultants, and other service providers who need access to such information to carry out work on our behalf (e.g., hosting providers, analytics services). These third parties are bound by confidentiality agreements.
              </p>
            </div>

            {/* Contact */}
            <div className="border-t border-white/10 pt-8 mt-12">
              <h2 className="text-xl font-bold text-white mb-2">Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at <a href="mailto:hello@vexury.com" className="text-accent hover:text-white transition-colors font-medium">hello@vexury.com</a>.
              </p>
            </div>

          </motion.div>
        </div>
      </main>

      <Contact />
    </div>
  );
};