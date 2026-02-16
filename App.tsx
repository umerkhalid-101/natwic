
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Partners } from './components/Partners';
import { SelectedWork } from './components/SelectedWork';
import { WhyUs } from './components/WhyUs';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { Stats } from './components/Stats';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Blog } from './components/Blog';
import { Footer } from './components/Footer';
import { GeminiChat } from './components/GeminiChat';

const App: React.FC = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="relative min-h-screen bg-white text-black selection:bg-[#703FEC] selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* White background sections */}
        <Partners />
        <WhyUs />
        <AboutUs />
        
        {/* Switching context */}
        <SelectedWork />
        <Services />
        <Stats />
        
        <Pricing />
        <FAQ />
        <Blog />
      </main>

      <Footer />

      {/* Floating AI Assistant Trigger */}
      <motion.button 
        {...({
          initial: { y: 100, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          transition: { delay: 1.5, duration: 1, ease: [0.16, 1, 0.3, 1] }
        } as any)}
        onClick={() => setShowChat(true)}
        className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-[#703FEC] text-white px-8 py-4 rounded-full font-bold shadow-[0_10px_40px_rgba(112,63,236,0.4)] hover:scale-105 transition-transform"
      >
        <div className="w-2 h-2 bg-[#F3350C] rounded-full animate-pulse" />
        <span className="text-xs uppercase tracking-[0.2em]">Studio Assistant</span>
      </motion.button>

      <AnimatePresence>
        {showChat && (
          <GeminiChat onClose={() => setShowChat(false)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
