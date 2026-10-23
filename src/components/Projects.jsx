import { motion } from "framer-motion";

const projects = [
  {
    no: "01",
    title: "House Price Prediction",
    tag: "Machine Learning",
    desc: "Built a regression model with Scikit-learn & Pandas, engineering features from location, size, bedroom count and more to forecast residential prices.",
    stack: ["Python", "Scikit-learn", "Pandas"],
  },
  {
    no: "02",
    title: "Python Keylogger",
    tag: "Cybersecurity",
    desc: "A research keylogger demonstrating how malicious software captures sensitive data — built with pynput to monitor and log keystrokes in real time.",
    stack: ["Python", "pynput", "Security R&D"],
  },
  {
    no: "03",
    title: "Job Recommender",
    tag: "NLP / ML",
    desc: "Personalized job recommendations using NLP to analyse descriptions against user skills, experience, and preferences.",
    stack: ["Python", "NLP", "ML"],
  },
];

export function Projects() {
  return (
    <section id="work" className="px-6 md:px-10 py-28 md:py-40">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">— Selected Work</div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
              Projects, in <span className="italic">practice</span>.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">A small archive of things I've built while learning at the crossroads of security and machine intelligence.</p>
        </div>

        <ul className="border-t border-border">
          {projects.map((p, i) => (
            <motion.li
              key={p.no}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group border-b border-border py-8 md:py-12 grid md:grid-cols-12 gap-6 items-start cursor-pointer relative"
            >
              <div className="md:col-span-1 font-mono text-xs text-muted-foreground">{p.no}</div>
              <div className="md:col-span-5">
                <h3 className="font-display text-3xl md:text-5xl tracking-tight group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-3">{p.tag}</div>
              </div>
              <p className="md:col-span-4 text-muted-foreground leading-relaxed text-sm">{p.desc}</p>
              <div className="md:col-span-2 flex md:justify-end flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="font-mono text-[10px] uppercase tracking-widest border border-border px-2 py-1 rounded-full">{s}</span>
                ))}
              </div>
              <span className="absolute left-0 right-0 bottom-0 h-px bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
