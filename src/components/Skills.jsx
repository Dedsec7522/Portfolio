import { motion } from "framer-motion";

const skills = [
  "Cybersecurity Fundamentals",
  "Ethical Hacking",
  "Kali Linux Tools",
  "Metasploit Framework",
  "Web Design",
  "Front-End Coding",
  "Python",
  "Problem-Solving",
  "Computer Literacy",
  "Strong Communication",
];

const experience = [
  {
    year: "2024",
    org: "Google Developer Students Club",
    role: "Bootcamp Lead — Ethical Hacking & Android Security",
    bullets: [
      "Taught Metasploit fundamentals and exploitation workflows",
      "Led a hands-on workshop on Android security & hacking",
      "Mentored students across SDG-aligned security projects",
    ],
  },
];

const education = [
  { year: "2021—Now", school: "Sikkim Manipal Institute of Technology", detail: "B.Tech · 7.4 CGPA" },
  { year: "2020", school: "Noonmati Public School", detail: "Senior Secondary · 76%" },
  { year: "2018", school: "Maharishi Vidya Mandir", detail: "Higher Secondary · 88%" },
];

export function Skills() {
  return (
    <section id="skills" className="px-6 md:px-10 py-28 md:py-40 border-t border-border">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">— Toolkit</div>
          <h2 className="font-display text-5xl md:text-6xl leading-[0.95] tracking-tight mb-10">
            Skills & <span className="italic">arsenal</span>.
          </h2>
          <ul className="flex flex-wrap gap-2">
            {skills.map((s, i) => (
              <motion.li
                key={s}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="px-4 py-2 border border-border rounded-full text-sm hover:border-primary hover:text-primary transition-colors"
              >
                {s}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-7 space-y-16">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-6">— Experience</div>
            {experience.map((e) => (
              <div key={e.org} className="border-t border-border pt-6">
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-display text-2xl md:text-3xl">{e.org}</h3>
                  <span className="font-mono text-xs text-muted-foreground">{e.year}</span>
                </div>
                <p className="text-foreground/80 mb-4">{e.role}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex gap-3"><span className="text-primary">→</span>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-6">— Education</div>
            <ul>
              {education.map((e) => (
                <li key={e.school} className="border-t border-border py-5 grid grid-cols-12 gap-4 items-baseline">
                  <span className="col-span-3 font-mono text-xs text-muted-foreground">{e.year}</span>
                  <span className="col-span-6 font-display text-lg md:text-xl">{e.school}</span>
                  <span className="col-span-3 text-right font-mono text-xs text-muted-foreground">{e.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
