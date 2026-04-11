export const SPRING = {
  snappy: { type: "spring" as const, stiffness: 500, damping: 30 },
  smooth: { type: "spring" as const, stiffness: 300, damping: 30 },
  bouncy: { type: "spring" as const, stiffness: 400, damping: 28 },
  gentle: { type: "spring" as const, stiffness: 200, damping: 28 },
} as const;
