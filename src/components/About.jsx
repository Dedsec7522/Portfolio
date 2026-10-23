import { motion } from "framer-motion";
import lab from "../assets/portrait-lab.jpeg";
import talk from "../assets/portrait-talk.jpeg";

export function About() {
  return (
    <section id="about" className="relative px-6 md:px-10 py-28 md:py-40">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28 self-start">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">— About</div>
          <h2 className="font-display text-5xl md:text-6xl leading-[0.95] tracking-tight">
            A curious mind with a <span className="italic text-primary">security-first</span> instinct.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            I'm an enthusiastic cybersecurity student passionate about enhancing digital security through ethical hacking, information security, and creative problem-solving. I thrive at the intersection of analytical rigor and creative experimentation.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Whether I'm leading a workshop on Metasploit, building ML models that predict house prices, or designing a clean front-end — the through-line is always: thoughtful, intentional, secure.
          </p>
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 gap-4 md:gap-6">
          <motion.figure
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="aspect-[3/4] overflow-hidden rounded-sm mt-12"
          >
            <img src={lab} alt="In the lab" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </motion.figure>
          <motion.figure
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="aspect-[3/4] overflow-hidden rounded-sm"
          >
            <img src={talk} alt="Presenting at workshop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </motion.figure>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-2 grid grid-cols-3 gap-4 md:gap-6 pt-4"
          >
            {[
              { k: "7.4", v: "Current CGPA" },
              { k: "3+", v: "Live Projects" },
              { k: "2024", v: "GDSC Bootcamp" },
            ].map((s) => (
              <div key={s.v} className="border-t border-border pt-4">
                <div className="font-display text-4xl md:text-5xl text-foreground">{s.k}</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-2">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
