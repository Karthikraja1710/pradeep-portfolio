import { motion } from 'motion/react';
import { EXPERIENCE, EDUCATION } from '../constants';

export default function Timeline() {
  return (
    <section id="experience" className="py-32 bg-zinc-950 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Experience */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.4em] text-orange-500 mb-12">Experience</h2>
            <div className="space-y-12 border-l border-white/5 ml-4 pl-12 relative">
              {EXPERIENCE.map((item, idx) => (
                <motion.div
                  key={item.role}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute left-0 -translate-x-1/2 w-8 h-8 rounded-full bg-black border border-white/10 flex items-center justify-center text-orange-500">
                    <item.icon size={16} />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-orange-500 mb-2 block">{item.period}</span>
                    <h3 className="text-xl font-bold text-white mb-1">{item.role}</h3>
                    <p className="text-white/60 text-sm mb-4">{item.company}</p>
                    <ul className="space-y-3">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="text-white/40 text-sm leading-relaxed flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-500/40 mt-1.5 shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.4em] text-orange-500 mb-12">Education</h2>
            <div className="space-y-12">
              {EDUCATION.map((item, idx) => (
                <motion.div
                  key={item.degree}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] relative group"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/50 group-hover:text-orange-500 group-hover:bg-orange-500/10 transition-all">
                      <item.icon size={24} />
                    </div>
                    <span className="text-xl font-bold text-orange-500">{item.stats}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.degree}</h3>
                  <p className="text-white/60 text-sm mb-4">{item.institution}</p>
                  <span className="text-xs font-mono text-white/30 uppercase tracking-widest">{item.period}</span>
                  {item.highlights && (
                    <div className="mt-4 flex gap-2">
                       {item.highlights.map(h => (
                         <span key={h} className="text-[10px] bg-white/5 px-2 py-1 rounded border border-white/5 text-white/40">{h}</span>
                       ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
