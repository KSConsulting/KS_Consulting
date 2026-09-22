import React from "react";

export function Badge({ children, tone = "blue", variant = "soft", dot = false, style, ...rest }) {
  const tones = {
    blue: { c: "var(--primary-light)", bg: "rgba(0,102,255,.12)", b: "rgba(32,164,255,.35)" },
    neon: { c: "var(--secondary)", bg: "rgba(186,252,4,.10)", b: "rgba(186,252,4,.35)" },
    cyan: { c: "var(--accent)", bg: "rgba(0,217,255,.10)", b: "rgba(0,217,255,.35)" },
    neutral: { c: "var(--text-secondary)", bg: "rgba(255,255,255,.05)", b: "var(--border)" },
    danger: { c: "var(--danger)", bg: "rgba(255,77,94,.10)", b: "rgba(255,77,94,.35)" },
  }[tone];
  const solid = variant === "solid";
  return (
    <span
      style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        height: 28, padding: "0 12px", borderRadius: "var(--radius-badge)",
        fontFamily: "var(--font-body)", fontSize: "var(--text-caption)",
        fontWeight: "var(--weight-semibold)", letterSpacing: ".06em", textTransform: "uppercase",
        color: solid ? "var(--text-on-secondary)" : tones.c,
        background: solid ? tones.c : tones.bg,
        border: `1px solid ${solid ? "transparent" : tones.b}`,
        ...style,
      }}
      {...rest}
    >
      {dot && <span style={{ width: 6, height: 6, borderRadius: 999, background: solid ? "currentColor" : tones.c }} />}
      {children}
    </span>
  );
}
