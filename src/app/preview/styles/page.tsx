export default function StylesPage() {
  return (
    <div className="min-h-screen bg-background p-12 space-y-16">
      <h2 className="text-xs font-mono uppercase tracking-widest text-text-muted">Style Guide</h2>

      {/* Colors */}
      <section className="space-y-4">
        <h3 className="text-xs font-mono uppercase tracking-widest text-text-muted">Colors</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "background", hex: "#ffffff", bg: "bg-background", border: true },
            { name: "surface", hex: "#f7f7f7", bg: "bg-surface", border: true },
            { name: "text-primary", hex: "#222018", bg: "bg-text-primary" },
            { name: "text-secondary", hex: "#595650", bg: "bg-text-secondary" },
            { name: "text-muted", hex: "#8c8a85", bg: "bg-text-muted" },
            { name: "border", hex: "#e5e5e4", bg: "bg-border", border: true },
            { name: "border-subtle", hex: "#ededec", bg: "bg-border-subtle", border: true },
            { name: "accent", hex: "#e8a0b4", bg: "bg-accent" },
            { name: "accent-muted", hex: "#e8a0b4/18%", bg: "bg-accent-muted", border: true },
          ].map(({ name, hex, bg, border }) => (
            <div key={name} className="flex flex-col gap-2">
              <div className={`h-14 rounded-xl ${bg} ${border ? "border border-border" : ""}`} />
              <span className="text-xs font-mono text-text-primary">{name}</span>
              <span className="text-[11px] font-mono text-text-muted">{hex}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Typography */}
      <section className="space-y-8">
        <h3 className="text-xs font-mono uppercase tracking-widest text-text-muted">Typography — Sans (Inter)</h3>
        <div className="space-y-6 border-l-2 border-border pl-8">
          {[
            { label: "text-7xl · font-black · uppercase", size: "72px", cls: "text-7xl font-black uppercase tracking-tight leading-none text-text-primary", sample: "Lyn Jung" },
            { label: "text-5xl · font-black · uppercase", size: "48px", cls: "text-5xl font-black uppercase tracking-tight leading-none text-text-primary", sample: "Lyn Jung" },
            { label: "text-3xl · font-bold", size: "30px", cls: "text-3xl font-bold text-text-primary", sample: "Design & Frontend Engineer" },
            { label: "text-xl · font-semibold", size: "20px", cls: "text-xl font-semibold text-text-primary", sample: "Section heading" },
            { label: "text-base · font-normal", size: "16px", cls: "text-base text-text-primary", sample: "Body text. Crafting clean, meticulous digital interfaces." },
            { label: "text-sm · font-light · text-secondary", size: "14px", cls: "text-sm font-light text-text-secondary", sample: "Secondary / subtitle text. Design & Frontend Engineer." },
            { label: "text-xs · text-muted", size: "12px", cls: "text-xs text-text-muted", sample: "Muted / caption text. Georgia Tech junior." },
          ].map(({ label, size, cls, sample }) => (
            <div key={size}>
              <p className="text-[11px] font-mono text-text-muted mb-1">{label} · <span className="text-accent">{size}</span></p>
              <p className={cls}>{sample}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <h3 className="text-xs font-mono uppercase tracking-widest text-text-muted">Typography — Mono (JetBrains Mono)</h3>
        <div className="space-y-4 border-l-2 border-border pl-8">
          <div>
            <p className="text-[11px] font-mono text-text-muted mb-1">text-base · font-mono · <span className="text-accent">16px</span></p>
            <p className="text-base font-mono text-text-primary">const name = "Lyn Jung";</p>
          </div>
          <div>
            <p className="text-[11px] font-mono text-text-muted mb-1">text-xs · font-mono · uppercase · tracking-widest · <span className="text-accent">12px</span></p>
            <p className="text-xs font-mono uppercase tracking-widest text-text-muted">Section Label / Tag</p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-xs font-mono uppercase tracking-widest text-text-muted">Accent color in context</h3>
        <div className="space-y-3 border-l-2 border-border pl-8">
          <p className="text-5xl font-black uppercase tracking-tight text-text-primary">
            <span className="text-accent">✦</span> Lyn Jung <span className="text-accent">✦</span>
          </p>
          <p className="text-base text-text-primary">Inline <span className="text-accent font-semibold">accent highlight</span> in body text.</p>
          <div className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-accent-muted text-accent">tag / badge</div>
        </div>
      </section>
    </div>
  );
}
