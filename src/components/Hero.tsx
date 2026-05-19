import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[128px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 text-orange-500 text-xs font-semibold uppercase tracking-[0.2em] mb-8"
          >
            Available for Internships
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-[120px] font-bold tracking-tighter leading-[0.85] text-white selection:bg-orange-500"
          >
            HELLO<span className="text-orange-500">.</span><br />
            I'M <span className="text-white/40">{PERSONAL_INFO.name.toUpperCase()}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 text-xl md:text-2xl text-white/50 max-w-2xl font-light"
          >
            {PERSONAL_INFO.tagline.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.05, delay: 0.2 + index * 0.02 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 flex flex-col md:flex-row items-center gap-6"
          >
            <a 
              href="#projects" 
              className="group relative px-8 py-4 bg-orange-600 text-white font-medium rounded-full overflow-hidden transition-all hover:pr-12"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <button className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
              <Download size={18} />
              <span>Download CV</span>
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/20 rotate-180 [writing-mode:vertical-rl]">Scroll</span>
          <div className="w-[1px] h-20 bg-gradient-to-b from-orange-500/50 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
