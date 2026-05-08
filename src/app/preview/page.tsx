const PINK = "oklch(80% 0.08 355)";
const NAME = "oklch(18% 0.01 60)";

const options = [
  {
    id: 1,
    label: "✦ superscript (original fave)",
    render: () => (
      <div className="text-center">
        <h1 className="text-5xl font-black tracking-tight uppercase leading-none" style={{ color: NAME }}>
          Lyn Jung<sup className="text-lg ml-1" style={{ color: PINK }}>✦</sup>
        </h1>
      </div>
    ),
  },
  {
    id: 2,
    label: "✦ flanking both sides",
    render: () => (
      <div className="text-center">
        <h1 className="text-5xl font-black tracking-tight uppercase leading-none" style={{ color: NAME }}>
          <span className="text-2xl align-middle mr-3" style={{ color: PINK }}>✦</span>
          Lyn Jung
          <span className="text-2xl align-middle ml-3" style={{ color: PINK }}>✦</span>
        </h1>
      </div>
    ),
  },
  {
    id: 3,
    label: "· dot · dot · flanking",
    render: () => (
      <div className="text-center">
        <h1 className="text-5xl font-black tracking-tight uppercase leading-none" style={{ color: NAME }}>
          <span className="text-3xl align-middle mr-2" style={{ color: PINK }}>·</span>
          Lyn Jung
          <span className="text-3xl align-middle ml-2" style={{ color: PINK }}>·</span>
        </h1>
      </div>
    ),
  },
  {
    id: 4,
    label: "꩜ single centered below",
    render: () => (
      <div className="text-center">
        <h1 className="text-5xl font-black tracking-tight uppercase leading-none" style={{ color: NAME }}>
          Lyn Jung
        </h1>
        <div className="mt-1 text-base" style={{ color: PINK }}>꩜</div>
      </div>
    ),
  },
  {
    id: 5,
    label: "⟡ diamond superscript",
    render: () => (
      <div className="text-center">
        <h1 className="text-5xl font-black tracking-tight uppercase leading-none" style={{ color: NAME }}>
          Lyn Jung<sup className="text-base ml-1" style={{ color: PINK }}>⟡</sup>
        </h1>
      </div>
    ),
  },
  {
    id: 6,
    label: "﹡ small star flanking",
    render: () => (
      <div className="text-center">
        <h1 className="text-5xl font-black tracking-tight uppercase leading-none" style={{ color: NAME }}>
          <span className="text-xl align-middle mr-2" style={{ color: PINK }}>﹡</span>
          Lyn Jung
          <span className="text-xl align-middle ml-2" style={{ color: PINK }}>﹡</span>
        </h1>
      </div>
    ),
  },
  {
    id: 7,
    label: "◇ outline diamond flanking",
    render: () => (
      <div className="text-center">
        <h1 className="text-5xl font-black tracking-tight uppercase leading-none" style={{ color: NAME }}>
          <span className="text-lg align-middle mr-3" style={{ color: PINK }}>◇</span>
          Lyn Jung
          <span className="text-lg align-middle ml-3" style={{ color: PINK }}>◇</span>
        </h1>
      </div>
    ),
  },
  {
    id: 8,
    label: "✳ asterism superscript",
    render: () => (
      <div className="text-center">
        <h1 className="text-5xl font-black tracking-tight uppercase leading-none" style={{ color: NAME }}>
          Lyn Jung<sup className="text-base ml-1" style={{ color: PINK }}>✳</sup>
        </h1>
      </div>
    ),
  },
  {
    id: 9,
    label: "⁺ plus superscript (minimal)",
    render: () => (
      <div className="text-center">
        <h1 className="text-5xl font-black tracking-tight uppercase leading-none" style={{ color: NAME }}>
          Lyn Jung<sup className="text-xl ml-0.5 font-light" style={{ color: PINK }}>+</sup>
        </h1>
      </div>
    ),
  },
  {
    id: 10,
    label: "✿ flower flanking (playful)",
    render: () => (
      <div className="text-center">
        <h1 className="text-5xl font-black tracking-tight uppercase leading-none" style={{ color: NAME }}>
          <span className="text-xl align-middle mr-3" style={{ color: PINK }}>✿</span>
          Lyn Jung
          <span className="text-xl align-middle ml-3" style={{ color: PINK }}>✿</span>
        </h1>
      </div>
    ),
  },
  {
    id: 11,
    label: "꙳ asterisk above (subtle)",
    render: () => (
      <div className="text-center">
        <h1 className="text-5xl font-black tracking-tight uppercase leading-none" style={{ color: NAME }}>
          Lyn Jung<sup className="text-sm ml-1" style={{ color: PINK }}>꙳</sup>
        </h1>
      </div>
    ),
  },
  {
    id: 12,
    label: "∗ math asterisk trio below",
    render: () => (
      <div className="text-center">
        <h1 className="text-5xl font-black tracking-tight uppercase leading-none" style={{ color: NAME }}>
          Lyn Jung
        </h1>
        <div className="mt-1 text-sm tracking-widest" style={{ color: PINK }}>∗ ∗ ∗</div>
      </div>
    ),
  },
];

const shinyOptions = [
  {
    id: "s1",
    label: "✦ corners — all four",
    render: () => (
      <div className="relative inline-block px-8 py-3">
        <span className="absolute top-0 left-0 text-sm" style={{ color: PINK }}>✦</span>
        <span className="absolute top-0 right-0 text-sm" style={{ color: PINK }}>✦</span>
        <span className="absolute bottom-0 left-0 text-sm" style={{ color: PINK }}>✦</span>
        <span className="absolute bottom-0 right-0 text-sm" style={{ color: PINK }}>✦</span>
        <h1 className="text-5xl font-black tracking-tight uppercase leading-none" style={{ color: NAME }}>
          Lyn Jung
        </h1>
      </div>
    ),
  },
  {
    id: "s2",
    label: "sparkle above + below centered",
    render: () => (
      <div className="text-center flex flex-col items-center gap-1">
        <span className="text-sm tracking-[0.5em]" style={{ color: PINK }}>✦ ✦ ✦</span>
        <h1 className="text-5xl font-black tracking-tight uppercase leading-none" style={{ color: NAME }}>
          Lyn Jung
        </h1>
        <span className="text-sm tracking-[0.5em]" style={{ color: PINK }}>✦ ✦ ✦</span>
      </div>
    ),
  },
  {
    id: "s3",
    label: "scattered glitter — asymmetric",
    render: () => (
      <div className="relative inline-block px-10 py-4">
        <span className="absolute -top-1 left-4 text-xs" style={{ color: PINK }}>✦</span>
        <span className="absolute top-1 right-2 text-[10px]" style={{ color: PINK }}>✺</span>
        <span className="absolute -bottom-1 right-6 text-sm" style={{ color: PINK }}>✦</span>
        <span className="absolute bottom-2 left-0 text-[10px]" style={{ color: PINK }}>·</span>
        <h1 className="text-5xl font-black tracking-tight uppercase leading-none" style={{ color: NAME }}>
          Lyn Jung
        </h1>
      </div>
    ),
  },
  {
    id: "s4",
    label: "halo arc above",
    render: () => (
      <div className="text-center flex flex-col items-center gap-0">
        <span className="text-xs tracking-[0.8em] pl-[0.8em]" style={{ color: PINK }}>· ✦ ·</span>
        <h1 className="text-5xl font-black tracking-tight uppercase leading-none" style={{ color: NAME }}>
          Lyn Jung
        </h1>
      </div>
    ),
  },
  {
    id: "s5",
    label: "constellation — orbit around",
    render: () => (
      <div className="relative inline-block px-12 py-5">
        <span className="absolute top-0 left-1/2 -translate-x-1/2 text-xs" style={{ color: PINK }}>✦</span>
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-xs" style={{ color: PINK }}>✦</span>
        <span className="absolute top-1/2 left-0 -translate-y-1/2 text-xs" style={{ color: PINK }}>✦</span>
        <span className="absolute top-1/2 right-0 -translate-y-1/2 text-xs" style={{ color: PINK }}>✦</span>
        <h1 className="text-5xl font-black tracking-tight uppercase leading-none" style={{ color: NAME }}>
          Lyn Jung
        </h1>
      </div>
    ),
  },
  {
    id: "s6",
    label: "mixed sizes — big + small sparkles",
    render: () => (
      <div className="relative inline-block px-10 py-4">
        <span className="absolute -top-2 left-6 text-xl" style={{ color: PINK }}>✦</span>
        <span className="absolute top-0 right-3 text-xs" style={{ color: PINK }}>✦</span>
        <span className="absolute -bottom-1 left-2 text-xs" style={{ color: PINK }}>✦</span>
        <span className="absolute -bottom-2 right-8 text-base" style={{ color: PINK }}>✦</span>
        <h1 className="text-5xl font-black tracking-tight uppercase leading-none" style={{ color: NAME }}>
          Lyn Jung
        </h1>
      </div>
    ),
  },
  {
    id: "s7",
    label: "✺ starburst — left heavy",
    render: () => (
      <div className="flex items-center gap-2">
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs" style={{ color: PINK }}>✦</span>
          <span className="text-xl" style={{ color: PINK }}>✺</span>
          <span className="text-xs" style={{ color: PINK }}>✦</span>
        </div>
        <h1 className="text-5xl font-black tracking-tight uppercase leading-none" style={{ color: NAME }}>
          Lyn Jung
        </h1>
      </div>
    ),
  },
  {
    id: "s8",
    label: "shimmer row — above name",
    render: () => (
      <div className="text-center flex flex-col items-center gap-1">
        <div className="flex gap-2 items-end">
          <span className="text-[8px]" style={{ color: PINK }}>✦</span>
          <span className="text-sm" style={{ color: PINK }}>✦</span>
          <span className="text-lg" style={{ color: PINK }}>✦</span>
          <span className="text-sm" style={{ color: PINK }}>✦</span>
          <span className="text-[8px]" style={{ color: PINK }}>✦</span>
        </div>
        <h1 className="text-5xl font-black tracking-tight uppercase leading-none" style={{ color: NAME }}>
          Lyn Jung
        </h1>
      </div>
    ),
  },
  {
    id: "s9",
    label: "diagonal slash of sparkles",
    render: () => (
      <div className="relative inline-block px-10 py-4">
        <span className="absolute top-0 left-2 text-[10px]" style={{ color: PINK }}>✦</span>
        <span className="absolute top-1/3 left-1/3 text-xs" style={{ color: PINK }}>✦</span>
        <span className="absolute bottom-0 right-2 text-base" style={{ color: PINK }}>✦</span>
        <h1 className="text-5xl font-black tracking-tight uppercase leading-none" style={{ color: NAME }}>
          Lyn Jung
        </h1>
      </div>
    ),
  },
  {
    id: "s10",
    label: "꩜ + ✦ mixed symbols orbiting",
    render: () => (
      <div className="relative inline-block px-12 py-4">
        <span className="absolute -top-2 left-8 text-base" style={{ color: PINK }}>✦</span>
        <span className="absolute top-1 right-1 text-xs" style={{ color: PINK }}>꩜</span>
        <span className="absolute -bottom-2 left-4 text-xs" style={{ color: PINK }}>✦</span>
        <span className="absolute bottom-0 right-8 text-[10px]" style={{ color: PINK }}>✺</span>
        <h1 className="text-5xl font-black tracking-tight uppercase leading-none" style={{ color: NAME }}>
          Lyn Jung
        </h1>
      </div>
    ),
  },
];

export default function PreviewPage() {
  return (
    <div className="min-h-screen bg-white p-12">
      <h2 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-10">
        Pink accent options — name treatment
      </h2>
      <h3 className="text-xs font-mono uppercase tracking-widest text-gray-300 mb-6">Previous options</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
        {options.map((opt) => (
          <div key={opt.id} className="border border-gray-100 rounded-2xl p-10 flex flex-col gap-6 items-center justify-center bg-white shadow-sm">
            <opt.render />
            <p className="text-xs text-gray-400 font-mono text-center">
              {opt.id}. {opt.label}
            </p>
          </div>
        ))}
      </div>

      <h3 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-6">✦ Shiny / orbiting elements</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {shinyOptions.map((opt) => (
          <div key={opt.id} className="border border-gray-100 rounded-2xl p-10 flex flex-col gap-6 items-center justify-center bg-white shadow-sm">
            <opt.render />
            <p className="text-xs text-gray-400 font-mono text-center">
              {opt.id}. {opt.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
