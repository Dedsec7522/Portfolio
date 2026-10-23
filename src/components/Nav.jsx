import { motion } from "framer-motion";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/40 border-b border-border/40"
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-xl tracking-tight">
          Gunjan<span className="text-primary">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm font-mono text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="group flex items-center gap-2 hover:text-foreground transition-colors">
                <span className="relative">
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </span>
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="text-xs font-mono uppercase tracking-widest border border-border px-4 py-2 rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
        >
          Let's Talk
        </a>
      </nav>
    </motion.header>
  );
}
