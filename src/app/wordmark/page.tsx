import { Inter, Great_Vibes, Dancing_Script, Parisienne, Cormorant_Garamond, Pinyon_Script, Alex_Brush, Luxurious_Script } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["100", "300", "400", "900"] });
const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
const dancingScript = Dancing_Script({ subsets: ["latin"], weight: ["400", "700"] });
const parisienne = Parisienne({ subsets: ["latin"], weight: "400" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "600"], style: ["normal", "italic"] });
const pinyonScript = Pinyon_Script({ subsets: ["latin"], weight: "400" });
const alexBrush = Alex_Brush({ subsets: ["latin"], weight: "400" });
const luxuriousScript = Luxurious_Script({ subsets: ["latin"], weight: "400" });

const options = [
  // BOXY
  {
    category: "Boxy",
    label: "1. Stacked Initials",
    render: (
      <div className="flex flex-col items-center leading-none">
        <span style={{ fontWeight: 900, fontSize: "6rem", letterSpacing: "-0.04em", lineHeight: 1 }}>LJ</span>
        <span style={{ fontWeight: 400, fontSize: "0.65rem", letterSpacing: "0.3em", marginTop: "0.5rem" }}>LYN JUNG</span>
      </div>
    ),
  },
  {
    category: "Boxy",
    label: "2. Full Name Condensed",
    render: (
      <span style={{ fontWeight: 900, fontSize: "3.5rem", letterSpacing: "-0.03em", textTransform: "uppercase" }}>
        LYN JUNG
      </span>
    ),
  },
  {
    category: "Boxy",
    label: "3. Split Weight",
    render: (
      <span style={{ fontSize: "3.5rem", letterSpacing: "-0.03em", textTransform: "uppercase" }}>
        <span style={{ fontWeight: 100 }}>LYN </span>
        <span style={{ fontWeight: 900 }}>JUNG</span>
      </span>
    ),
  },
  {
    category: "Boxy",
    label: "4. Split Weight (reversed)",
    render: (
      <span style={{ fontSize: "3.5rem", letterSpacing: "-0.03em", textTransform: "uppercase" }}>
        <span style={{ fontWeight: 900 }}>LYN </span>
        <span style={{ fontWeight: 100 }}>JUNG</span>
      </span>
    ),
  },
  {
    category: "Boxy",
    label: "5. Outlined + Filled",
    render: (
      <span style={{ fontSize: "3.5rem", letterSpacing: "-0.03em", textTransform: "uppercase", fontWeight: 900 }}>
        <span style={{ WebkitTextStroke: "2px currentColor", color: "transparent" }}>LYN </span>
        <span>JUNG</span>
      </span>
    ),
  },
  {
    category: "Boxy",
    label: "6. Outlined + Filled (reversed)",
    render: (
      <span style={{ fontSize: "3.5rem", letterSpacing: "-0.03em", textTransform: "uppercase", fontWeight: 900 }}>
        <span>LYN </span>
        <span style={{ WebkitTextStroke: "2px currentColor", color: "transparent" }}>JUNG</span>
      </span>
    ),
  },
  {
    category: "Boxy",
    label: "7. Name + Rule",
    render: (
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <span style={{ fontWeight: 900, fontSize: "3.5rem", letterSpacing: "-0.03em", textTransform: "uppercase", lineHeight: 1 }}>
          LYN JUNG
        </span>
        <div style={{ height: "3px", background: "currentColor", width: "100%" }} />
      </div>
    ),
  },

  // ELEGANT
  {
    category: "Elegant",
    label: "8. Thin, Wide Tracking",
    render: (
      <span style={{ fontWeight: 100, fontSize: "3rem", letterSpacing: "0.5em", textTransform: "uppercase" }}>
        LYN JUNG
      </span>
    ),
  },
  {
    category: "Elegant",
    label: "9. Mixed Case, Light",
    render: (
      <span style={{ fontWeight: 300, fontSize: "3.5rem", letterSpacing: "0.05em" }}>
        Lyn Jung
      </span>
    ),
  },
  {
    category: "Elegant",
    label: "10. Italic Thin",
    render: (
      <span style={{ fontWeight: 100, fontSize: "3.5rem", letterSpacing: "0.1em", fontStyle: "italic" }}>
        Lyn Jung
      </span>
    ),
  },
  {
    category: "Elegant",
    label: "11. Name + Subtitle Stack",
    render: (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "0.25rem" }}>
        <span style={{ fontWeight: 300, fontSize: "3rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          Lyn Jung
        </span>
        <span style={{ fontWeight: 300, fontSize: "0.7rem", letterSpacing: "0.3em", opacity: 0.5 }}>
          DESIGN & FRONTEND ENGINEER
        </span>
      </div>
    ),
  },
  {
    category: "Elegant",
    label: "12. Split Italic",
    render: (
      <span style={{ fontSize: "3.5rem", letterSpacing: "0.02em" }}>
        <span style={{ fontWeight: 100, fontStyle: "italic" }}>Lyn </span>
        <span style={{ fontWeight: 300 }}>Jung</span>
      </span>
    ),
  },

  // CURSIVE INITIALS
  {
    category: "Cursive Initials",
    label: "13. Great Vibes — large LJ side by side",
    fontClass: "greatVibes",
    render: <span style={{ fontSize: "6rem", lineHeight: 1 }}>LJ</span>,
  },
  {
    category: "Cursive Initials",
    label: "14. Great Vibes — stacked with sans name",
    fontClass: "greatVibes",
    render: (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.25rem" }}>
        <span style={{ fontSize: "6rem", lineHeight: 1 }}>LJ</span>
        <span style={{ fontFamily: "inherit", fontSize: "0.6rem", letterSpacing: "0.4em", opacity: 0.4 }} className={inter.className}>LYN JUNG</span>
      </div>
    ),
  },
  {
    category: "Cursive Initials",
    label: "15. Pinyon Script — ornate stacked LJ",
    fontClass: "pinyonScript",
    render: (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <span style={{ fontSize: "3.5rem", lineHeight: 1 }}>L</span>
        <span style={{ fontSize: "3.5rem", lineHeight: 1 }}>J</span>
      </div>
    ),
  },
  {
    category: "Cursive Initials",
    label: "16. Parisienne — LJ in circle",
    fontClass: "parisienne",
    render: (
      <div style={{ width: "7rem", height: "7rem", borderRadius: "50%", border: "1.5px solid currentColor", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontSize: "3.5rem", lineHeight: 1 }}>LJ</span>
      </div>
    ),
  },
  {
    category: "Cursive Initials",
    label: "17. Dancing Script — bold, with dot",
    fontClass: "dancingScript",
    render: (
      <span style={{ fontSize: "5rem", fontWeight: 700, lineHeight: 1 }}>
        L<span style={{ fontSize: "1.5rem", verticalAlign: "middle", opacity: 0.4 }}>·</span>J
      </span>
    ),
  },
  {
    category: "Cursive Initials",
    label: "18. Alex Brush — thin flowing LJ",
    fontClass: "alexBrush",
    render: <span style={{ fontSize: "6rem", lineHeight: 1 }}>LJ</span>,
  },
  {
    category: "Cursive Initials",
    label: "19. Alex Brush — LJ with underline rule",
    fontClass: "alexBrush",
    render: (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <span style={{ fontSize: "6rem", lineHeight: 1 }}>LJ</span>
        <div style={{ width: "3rem", height: "1px", background: "currentColor", opacity: 0.3 }} />
      </div>
    ),
  },
  {
    category: "Cursive Initials",
    label: "20. Luxurious Script — dramatic LJ",
    fontClass: "luxuriousScript",
    render: <span style={{ fontSize: "6rem", lineHeight: 1 }}>LJ</span>,
  },
  {
    category: "Cursive Initials",
    label: "21. Cormorant italic — L & J split sizes",
    fontClass: "cormorant",
    render: (
      <span style={{ fontStyle: "italic", fontWeight: 300, lineHeight: 1 }}>
        <span style={{ fontSize: "7rem" }}>L</span>
        <span style={{ fontSize: "4rem", opacity: 0.6 }}>J</span>
      </span>
    ),
  },
  {
    category: "Cursive Initials",
    label: "22. Great Vibes — LJ in square border",
    fontClass: "greatVibes",
    render: (
      <div style={{ width: "7rem", height: "7rem", border: "1.5px solid currentColor", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontSize: "3.5rem", lineHeight: 1 }}>LJ</span>
      </div>
    ),
  },
  {
    category: "Cursive Initials",
    label: "23. Parisienne — overlapping LJ",
    fontClass: "parisienne",
    render: (
      <span style={{ fontSize: "6rem", lineHeight: 1, position: "relative", display: "inline-block" }}>
        <span>L</span>
        <span style={{ marginLeft: "-0.3em", opacity: 0.55 }}>J</span>
      </span>
    ),
  },
  {
    category: "Cursive Initials",
    label: "24. Dancing Script + sans — cursive L, block J",
    fontClass: "dancingScript",
    render: (
      <span style={{ fontSize: "5rem", lineHeight: 1, fontWeight: 700 }}>
        L<span className={inter.className} style={{ fontWeight: 900 }}>J</span>
      </span>
    ),
  },

  // MORE CURSIVE INITIALS
  {
    category: "More Initials",
    label: "25. Luxurious Script — LJ with full name below",
    fontClass: "luxuriousScript",
    render: (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <span style={{ fontSize: "6rem", lineHeight: 1 }}>LJ</span>
        <span className={inter.className} style={{ fontSize: "0.55rem", letterSpacing: "0.5em", fontWeight: 300, opacity: 0.35, textTransform: "uppercase" }}>Lyn Jung</span>
      </div>
    ),
  },
  {
    category: "More Initials",
    label: "26. Alex Brush — LJ inline with slash",
    fontClass: "alexBrush",
    render: (
      <span style={{ fontSize: "5rem", lineHeight: 1 }}>
        L<span style={{ fontSize: "2rem", opacity: 0.25, margin: "0 0.1em" }}>/</span>J
      </span>
    ),
  },
  {
    category: "More Initials",
    label: "27. Great Vibes — pink accent J",
    fontClass: "greatVibes",
    render: (
      <span style={{ fontSize: "6rem", lineHeight: 1 }}>
        L<span style={{ color: "oklch(80% 0.08 355)" }}>J</span>
      </span>
    ),
  },
  {
    category: "More Initials",
    label: "28. Pinyon Script — pink accent J",
    fontClass: "pinyonScript",
    render: (
      <span style={{ fontSize: "6rem", lineHeight: 1 }}>
        L<span style={{ color: "oklch(80% 0.08 355)" }}>J</span>
      </span>
    ),
  },
  {
    category: "More Initials",
    label: "29. Parisienne — LJ + hairline box",
    fontClass: "parisienne",
    render: (
      <div style={{ position: "relative", display: "inline-block", padding: "0.75rem 1.5rem", border: "0.5px solid currentColor" }}>
        <span style={{ fontSize: "5rem", lineHeight: 1 }}>LJ</span>
      </div>
    ),
  },
  {
    category: "More Initials",
    label: "30. Cormorant italic — L large, j small superscript",
    fontClass: "cormorant",
    render: (
      <span style={{ fontStyle: "italic", fontWeight: 300, lineHeight: 1, position: "relative" }}>
        <span style={{ fontSize: "7rem" }}>L</span>
        <span style={{ fontSize: "2.5rem", verticalAlign: "super", opacity: 0.5 }}>j</span>
      </span>
    ),
  },
  {
    category: "More Initials",
    label: "31. Dancing Script — LJ with thin circle, pink",
    fontClass: "dancingScript",
    render: (
      <div style={{ position: "relative", width: "8rem", height: "8rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "1px solid oklch(80% 0.08 355)" }} />
        <span style={{ fontSize: "4.5rem", fontWeight: 700, lineHeight: 1 }}>LJ</span>
      </div>
    ),
  },
  {
    category: "More Initials",
    label: "32. Alex Brush — lowercase lj",
    fontClass: "alexBrush",
    render: <span style={{ fontSize: "6rem", lineHeight: 1 }}>lj</span>,
  },
  {
    category: "More Initials",
    label: "33. Great Vibes — full name in script",
    fontClass: "greatVibes",
    render: <span style={{ fontSize: "3.5rem", lineHeight: 1 }}>Lyn Jung</span>,
  },
  {
    category: "More Initials",
    label: "34. Luxurious Script — outlined LJ",
    fontClass: "luxuriousScript",
    render: (
      <span style={{ fontSize: "6rem", lineHeight: 1, WebkitTextStroke: "1px currentColor", color: "transparent" }}>LJ</span>
    ),
  },
  {
    category: "More Initials",
    label: "35. Pinyon + Inter — cursive L, sans-serif JUNG",
    fontClass: "pinyonScript",
    render: (
      <div style={{ display: "flex", alignItems: "baseline", gap: "0.1em" }}>
        <span style={{ fontSize: "6rem", lineHeight: 1 }}>L</span>
        <span className={inter.className} style={{ fontSize: "2rem", fontWeight: 900, letterSpacing: "-0.03em", textTransform: "uppercase" }}>JUNG</span>
      </div>
    ),
  },
  {
    category: "More Initials",
    label: "36. Great Vibes — LJ diagonal offset",
    fontClass: "greatVibes",
    render: (
      <div style={{ position: "relative", width: "8rem", height: "6rem" }}>
        <span style={{ fontSize: "5rem", lineHeight: 1, position: "absolute", top: 0, left: 0, opacity: 0.15 }}>L</span>
        <span style={{ fontSize: "5rem", lineHeight: 1, position: "absolute", bottom: 0, right: 0 }}>J</span>
      </div>
    ),
  },
];

const fontClassMap: Record<string, string> = {
  greatVibes: greatVibes.className,
  dancingScript: dancingScript.className,
  parisienne: parisienne.className,
  cormorant: cormorant.className,
  pinyonScript: pinyonScript.className,
  alexBrush: alexBrush.className,
  luxuriousScript: luxuriousScript.className,
};

export default function WordmarkPage() {
  return (
    <div className={`${inter.className} min-h-screen bg-white text-black px-10 py-16`}>
      <p className="text-xs tracking-widest uppercase text-gray-400 mb-12">Wordmark Options — pick your favourite</p>

      {["Boxy", "Elegant", "Cursive Initials", "More Initials"].map((cat) => (
        <div key={cat} className="mb-16">
          <p className="text-xs tracking-widest uppercase text-gray-300 mb-8 border-b border-gray-100 pb-2">{cat}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {options
              .filter((o) => o.category === cat)
              .map((opt) => (
                <div key={opt.label} className="flex flex-col gap-4">
                  <div className={`flex items-center justify-center min-h-40 border border-gray-100 rounded-lg p-8 ${"fontClass" in opt ? fontClassMap[opt.fontClass!] : ""}`}>
                    {opt.render}
                  </div>
                  <p className="text-xs text-gray-400">{opt.label}</p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
