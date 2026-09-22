import React from "react";

export function Card({
  children, variant = "default", padding = 32, glow = "none",
  interactive = false, style, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const v = {
    default: {
      background: "var(--surface-glass)", border: "1px solid var(--border-soft)",
      backdropFilter: "var(--blur-glass)", boxShadow: "var(--shadow-card)",
      borderRadius: "var(--radius-card)",
    },
    elevated: {
      background: "var(--surface-elevated)", border: "1px solid var(--border)",
      boxShadow: "var(--shadow-card-elevated)", borderRadius: "var(--radius-card-premium)",
    },
    outline: {
      background: "transparent", border: "1px solid var(--border)",
      borderRadius: "var(--radius-card)",
    },
    featured: {
      background: "linear-gradient(160deg,rgba(32,164,255,.12) 0%,rgba(16,24,39,.85) 55%)",
      border: "1px solid var(--primary)", boxShadow: "var(--shadow-card), var(--glow-blue)",
      borderRadius: "var(--radius-card-premium)",
    },
    neon: {
      background: "var(--secondary)", border: "1px solid var(--secondary)",
      color: "var(--text-on-secondary)", boxShadow: "var(--glow-green)",
      borderRadius: "var(--radius-card)",
    },
  }[variant];
  const glowShadow = {
    none: null, blue: "var(--glow-blue)", green: "var(--glow-green)", cyan: "var(--glow-cyan)",
  }[glow];
  return (
    <div
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        padding, position: "relative",
        transition: "transform var(--duration-hover) var(--ease-standard), box-shadow var(--duration-hover) var(--ease-standard), border-color var(--duration-hover) var(--ease-standard)",
        ...v,
        ...(glowShadow ? { boxShadow: [v.boxShadow, glowShadow].filter(Boolean).join(", ") } : null),
        ...(interactive && hover ? {
          transform: "translateY(var(--lift-card))",
          borderColor: variant === "neon" ? "var(--secondary)" : "rgba(0,102,255,.55)",
          boxShadow: [v.boxShadow, variant === "neon" ? "var(--glow-green)" : "var(--glow-blue)"].filter(Boolean).join(", "),
        } : null),
        ...style,
      }}
      {...rest}
    >{children}</div>
  );
}
