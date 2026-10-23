import { motion } from "framer-motion";
import portrait from "../assets/portrait-mountain.jpeg";

const ease = [0.22, 1, 0.36, 1];

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen pt-28 pb-16 px-6 md:px-10 overflow-hidden grain">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-8 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground"
          >
            <span className="h-px w-8 bg-primary" />
            Portfolio / 2026
          </motion.div>

          <h1 className="font-display text-[clamp(3rem,11vw,11rem)] leading-[0.88] tracking-[-0.04em] text-balance">
            {"Gunjan".split("").map((c, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1 + i * 0.05, ease }}
                className="inline-block"
              >
                {c}
              </motion.span>
            ))}
            <br />
            <motion.span
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease }}
              className="inline-block italic font-light text-primary"
            >
              Chakrabartty
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="grid md:grid-cols-2 gap-8 max-w-3xl pt-4"
          >
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Cybersecurity student & ethical hacker building safer digital spaces — one exploit, audit, and line of code at a time.
            </p>
            <div className="font-mono text-xs uppercase tracking-widest space-y-2 text-muted-foreground">
              <div className="flex justify-between border-b border-border pb-2"><span>Based in</span><span className="text-foreground">Guwahati, IN</span></div>
              <div className="flex justify-between border-b border-border pb-2"><span>Focus</span><span className="text-foreground">Security · ML</span></div>
              <div className="flex justify-between border-b border-border pb-2"><span>Status</span><span className="text-primary">Open to work</span></div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease }}
          className="lg:col-span-4 relative"
        >
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
            <img src={portrait} alt="Gunjan Chakrabartty" className="w-full h-full object-cover grayscale-[15%]" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between font-mono text-[10px] uppercase tracking-widest text-foreground/80">
              <span>Vol. 01</span>
              <span>·</span>
              <span>2026 Edition</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-6 left-6 right-6 md:left-10 md:right-10 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
      >
        <span>Scroll to explore</span>
        <span className="h-8 w-px bg-border" />
        <span>SMIT · B.Tech · 2021—Present</span>
      </motion.div>
    </section>
  );
}
