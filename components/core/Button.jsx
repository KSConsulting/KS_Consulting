import React from "react";

const sizes = {
  sm: { height: 40, padding: "0 18px", fontSize: 14 },
  md: { height: 48, padding: "0 24px", fontSize: 15 },
  lg: { height: 52, padding: "0 32px", fontSize: 16 },
};

const base = {
  display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10,
  fontFamily: "var(--font-body)", fontWeight: "var(--weight-semibold)",
  borderRadius: "var(--radius-button)", border: "1px solid transparent",
  cursor: "pointer", whiteSpace: "nowrap", textDecoration: "none",
  transition: "transform var(--duration-hover) var(--ease-standard), box-shadow var(--duration-hover) var(--ease-standard), background var(--duration-hover) var(--ease-standard), border-color var(--duration-hover) var(--ease-standard), filter var(--duration-hover) var(--ease-standard)",
};

const variants = {
  primary: {
    background: "var(--gradient-primary)", color: "var(--text-on-primary)",
    boxShadow: "0 8px 24px rgba(0,102,255,.20)",
  },
  secondary: {
    background: "rgba(255,255,255,.04)", color: "var(--text-primary)",
    borderColor: "var(--border)",
  },
  neon: {
    background: "var(--secondary)", color: "var(--text-on-secondary)",
    boxShadow: "var(--glow-green)",
  },
  ghost: { background: "transparent", color: "var(--text-secondary)" },
  link: {
    background: "transparent", color: "var(--text-link)", height: "auto",
    padding: 0, borderRadius: 0,
  },
};

const hovers = {
  primary: { filter: "brightness(1.10)", boxShadow: "0 10px 28px rgba(0,102,255,.28), var(--glow-blue)", transform: "translateY(var(--lift-button))" },
  secondary: { background: "rgba(0,102,255,.08)", borderColor: "var(--primary)", transform: "translateY(var(--lift-button))" },
  neon: { filter: "brightness(1.06)", boxShadow: "0 0 42px rgba(186,252,4,.32)", transform: "translateY(var(--lift-button))" },
  ghost: { background: "rgba(255,255,255,.04)", color: "var(--text-primary)" },
  link: { color: "var(--text-link-hover)" },
};

export function Button({
  children, variant = "primary", size = "md", iconLeft, iconRight,
  fullWidth = false, disabled = false, href, style, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = href ? "a" : "button";
  const s = {
    ...base, ...sizes[size], ...variants[variant],
    ...(hover && !disabled ? hovers[variant] : null),
    ...(variant === "link" ? { height: "auto", padding: 0 } : null),
    ...(fullWidth ? { width: "100%" } : null),
    ...(disabled ? { opacity: 0.4, cursor: "not-allowed", transform: "none", filter: "none" } : null),
    ...style,
  };
  return (
    <Tag
      href={href} disabled={!href ? disabled : undefined} style={s}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </Tag>
  );
}
