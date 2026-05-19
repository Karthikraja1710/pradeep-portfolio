import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Linkedin as LinkedInIcon, Github as GitHubIcon } from 'lucide-react';
import { CERTIFICATES, PERSONAL_INFO } from '../constants';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-black px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.4em] text-orange-500 mb-8">Get In Touch</h2>
            <p className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-12">
              LET'S <span className="text-orange-500">WORK</span> <br /> TOGETHER.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white/50">
                  <Mail size={24} />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-white/30 block mb-1">Email Me</span>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-lg text-white hover:text-orange-500 transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white/50">
                  <Phone size={24} />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-white/30 block mb-1">Call Me</span>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="text-lg text-white hover:text-orange-500 transition-colors">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white/50">
                  <MapPin size={24} />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-white/30 block mb-1">Location</span>
                  <span className="text-lg text-white">{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-16 border-t border-white/5 flex gap-8">
              {[
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: LinkedInIcon, href: "#" },
                { icon: GitHubIcon, href: "#" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -4 }}
                  className="text-white/40 hover:text-white transition-colors"
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="space-y-12">
             <div className="p-10 rounded-3xl bg-zinc-900/50 border border-white/5">
                <h3 className="text-white font-medium mb-8">Extra Accolades</h3>
                <div className="space-y-4">
                  {CERTIFICATES.map((cert) => (
                    <div key={cert.title} className="flex items-center justify-between group p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                      <div className="flex items-center gap-4">
                         <div className="text-orange-500/50 group-hover:text-orange-500 transition-colors">
                            <cert.icon size={20} />
                         </div>
                         <span className="text-sm text-white/70 group-hover:text-white transition-colors">{cert.title}</span>
                      </div>
                      <span className="text-[10px] text-white/20 uppercase tracking-widest">{cert.issuer}</span>
                    </div>
                  ))}
                </div>
             </div>

             <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-xs font-mono uppercase text-white/30 tracking-widest">Name</label>
                      <input type="text" className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-orange-500/50 focus:bg-white/[0.08] transition-all" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-xs font-mono uppercase text-white/30 tracking-widest">Email</label>
                      <input type="email" className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-orange-500/50 focus:bg-white/[0.08] transition-all" />
                   </div>
                </div>
                <div className="space-y-2">
                   <label className="text-xs font-mono uppercase text-white/30 tracking-widest">Message</label>
                   <textarea rows={4} className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-orange-500/50 focus:bg-white/[0.08] transition-all" />
                </div>
                <button className="w-full py-5 bg-white text-black font-bold flex items-center justify-center gap-2 rounded-2xl hover:bg-orange-500 hover:text-white transition-all transform hover:scale-[1.01] active:scale-[0.98]">
                  <span>Send Message</span>
                  <Send size={18} />
                </button>
             </form>
          </div>
        </div>
      </div>
    </section>
  );
}
