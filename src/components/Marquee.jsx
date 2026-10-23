const items = [
  "Ethical Hacking",
  "Penetration Testing",
  "Kali Linux",
  "Metasploit",
  "Python",
  "Machine Learning",
  "Front-End",
  "Security Research",
];

export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-border py-6 bg-card/40">
      <div className="flex marquee-track whitespace-nowrap">
        {[...items, ...items, ...items].map((it, i) => (
          <div key={i} className="flex items-center gap-12 px-6 font-display italic text-3xl md:text-5xl text-muted-foreground">
            <span>{it}</span>
            <span className="h-2 w-2 rounded-full bg-primary" />
          </div>
        ))}
      </div>
    </div>
  );
}
