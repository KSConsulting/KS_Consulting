import React from "react";

export function Tag({ children, active = false, onRemove, onClick, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <span
      onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex", alignItems: "center", gap: 8, height: 32, padding: "0 14px",
        borderRadius: "var(--radius-pill)", fontFamily: "var(--font-body)",
        fontSize: "var(--text-body-sm)", fontWeight: "var(--weight-medium)",
        color: active ? "var(--text-primary)" : "var(--text-secondary)",
        background: active ? "rgba(0,102,255,.14)" : "rgba(255,255,255,.04)",
        border: `1px solid ${active ? "var(--primary)" : "var(--border)"}`,
        cursor: onClick ? "pointer" : "default",
        transition: "all var(--duration-hover) var(--ease-standard)",
        ...(hover && onClick && !active ? { borderColor: "rgba(0,102,255,.55)", color: "var(--text-primary)" } : null),
        ...style,
      }}
      {...rest}
    >
      {children}
      {onRemove && (
        <button onClick={(e) => { e.stopPropagation(); onRemove(e); }}
          aria-label="Remover"
          style={{ background: "none", border: "none", color: "var(--text-muted)", cursor: "pointer", padding: 0, lineHeight: 1, fontSize: 14 }}>×</button>
      )}
    </span>
  );
}
