import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowLeft } from 'lucide-react';
import { Contact } from './Contact';
import { Header } from './Header';

export const Terms: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#03000a] text-white min-h-screen font-sans selection:bg-accent selection:text-white">
      <Header />
      
      <main className="pt-32 pb-20 relative overflow-hidden">
        {/* Ambient Background */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#1a0b2e] to-transparent pointer-events-none" />
        <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6"
            >
              <FileText size={14} /> Agreement
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold tracking-tight mb-6"
            >
              Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-accent">Service</span>
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
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing and using the Vexury website and services ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this Service.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-blue-500"></span> 2. Services Description
              </h2>
              <p className="leading-relaxed">
                Vexury provides digital design, development, and branding services. The specific deliverables, timelines, and costs for each project are detailed in individual proposals or service agreements signed by the client.
              </p>
            </div>

            {/* Section 3 */}
            <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-4">3. Intellectual Property</h2>
              <p className="leading-relaxed mb-4">
                Upon full payment of all fees, the Client shall own the final designs and build files created specifically for them.
              </p>
              <p className="leading-relaxed">
                Vexury retains the right to use the completed project and any preliminary designs for promotional purposes, including in our portfolio, on our website, and in social media.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-blue-500"></span> 4. Limitation of Liability
              </h2>
              <p className="leading-relaxed">
                In no event shall Vexury, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </div>

            {/* Section 5 */}
            <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-4">5. Governing Law</h2>
              <p className="leading-relaxed">
                These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which Vexury operates, without regard to its conflict of law provisions.
              </p>
            </div>

             {/* Contact */}
             <div className="border-t border-white/10 pt-8 mt-12">
              <h2 className="text-xl font-bold text-white mb-2">Questions?</h2>
              <p className="leading-relaxed">
                Please send any questions regarding these Terms to <a href="mailto:hello@vexury.com" className="text-accent hover:text-white transition-colors font-medium">hello@vexury.com</a>.
              </p>
            </div>

          </motion.div>
        </div>
      </main>

      <Contact />
    </div>
  );
};