import React from "react";

const sizes = { sm: 36, md: 44, lg: 52 };

export function IconButton({ icon, children, variant = "secondary", size = "md", label, disabled = false, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const px = sizes[size];
  const v = {
    primary: { background: "var(--gradient-primary)", color: "#fff", border: "1px solid transparent" },
    secondary: { background: "rgba(255,255,255,.04)", color: "var(--text-primary)", border: "1px solid var(--border)" },
    neon: { background: "var(--secondary)", color: "var(--text-on-secondary)", border: "1px solid transparent" },
    ghost: { background: "transparent", color: "var(--text-secondary)", border: "1px solid transparent" },
  }[variant];
  const h = {
    primary: { filter: "brightness(1.1)", boxShadow: "var(--glow-blue)" },
    secondary: { background: "rgba(0,102,255,.08)", borderColor: "var(--primary)" },
    neon: { boxShadow: "var(--glow-green)" },
    ghost: { background: "rgba(255,255,255,.04)", color: "var(--text-primary)" },
  }[variant];
  return (
    <button
      aria-label={label} disabled={disabled}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        width: px, height: px, display: "inline-flex", alignItems: "center", justifyContent: "center",
        borderRadius: "var(--radius-button)", cursor: disabled ? "not-allowed" : "pointer",
        transition: "all var(--duration-hover) var(--ease-standard)",
        ...v, ...(hover && !disabled ? h : null), ...(disabled ? { opacity: 0.4 } : null), ...style,
      }}
      {...rest}
    >{icon || children}</button>
  );
}
