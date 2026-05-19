import { motion } from 'motion/react';
import { PERSONAL_INFO, SKILLS } from '../constants';

export default function About() {
  return (
    <section id="about" className="py-32 bg-zinc-950 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-semibold uppercase tracking-[0.4em] text-orange-500 mb-6">About Me</h2>
            <p className="text-3xl md:text-4xl font-extralight text-white leading-tight">
              A developer focused on <span className="text-white font-medium italic">innovation</span> and <span className="text-white font-medium italic">user-centric</span> design.
            </p>
            <p className="mt-8 text-white/50 text-lg leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <span className="block text-4xl font-bold text-white mb-2">3rd</span>
                <span className="text-xs uppercase tracking-widest text-white/40">Year B.Tech</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-white mb-2">7.69</span>
                <span className="text-xs uppercase tracking-widest text-white/40">Current CGPA</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {SKILLS.map((item, idx) => (
              <div 
                key={item.category} 
                className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
                  <item.icon size={24} />
                </div>
                <h3 className="text-lg font-medium text-white mb-4">{item.category}</h3>
                <ul className="space-y-2">
                  {item.skills.map(skill => (
                    <li key={skill} className="text-white/40 text-sm flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-orange-500/30" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
