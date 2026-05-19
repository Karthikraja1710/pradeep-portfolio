import { motion } from 'motion/react';
import { ArrowUpRight, Github } from 'lucide-react';
import { PROJECTS } from '../constants';

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-black px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.4em] text-orange-500 mb-6">Selected Works</h2>
            <p className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              Bringing ideas <br /> to <span className="text-orange-500">life.</span>
            </p>
          </div>
          <div className="text-white/40 max-w-sm">
            <p className="text-lg">
              A curated selection of projects where AI meets practical web solutions.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="group relative"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-zinc-900 mb-8 border border-white/5">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-6 right-6 flex gap-2">
                   <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Github size={20} />
                  </div>
                   <div className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-2">
                  <span className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-white/10 text-white/40">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-white group-hover:text-orange-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/50 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs text-orange-500/80 font-mono">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
