import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="relative px-6 md:px-10 py-28 md:py-40 border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-6">— Get in touch</div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(3rem,10vw,9rem)] leading-[0.9] tracking-[-0.04em] text-balance"
        >
          Let's build <span className="italic text-primary">something</span> safer.
        </motion.h2>

        <div className="mt-16 grid md:grid-cols-3 gap-8 border-t border-border pt-10">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Email</div>
            <a href="mailto:micklucha8471931040@gmail.com" className="text-lg hover:text-primary transition-colors break-all">
              micklucha8471931040@gmail.com
            </a>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Phone</div>
            <a href="tel:+916296241665" className="text-lg hover:text-primary transition-colors">+91 62962 41665</a>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Location</div>
            <p className="text-lg">Guwahati, India</p>
          </div>
        </div>

        <a
          href="mailto:micklucha8471931040@gmail.com"
          className="mt-16 inline-flex items-center gap-4 group"
        >
          <span className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-500">→</span>
          <span className="font-display text-2xl md:text-3xl italic underline decoration-1 underline-offset-4 decoration-primary/40 group-hover:decoration-primary">Say hello</span>
        </a>
      </div>

      <footer className="max-w-7xl mx-auto mt-32 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        <span>© 2026 Gunjan Chakrabartty</span>
        <span>Designed & coded with care</span>
      </footer>
    </section>
  );
}
