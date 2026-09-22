import React from "react";

export function Toast({ title, message, tone = "info", icon, onClose, style, ...rest }) {
  const c = { info: "var(--accent)", success: "var(--secondary)", error: "var(--danger)", neutral: "var(--text-muted)" }[tone];
  return (
    <div
      role="status"
      style={{
        display: "flex", alignItems: "flex-start", gap: 14, width: 360, padding: 16,
        background: "var(--surface-glass)", backdropFilter: "var(--blur-glass)",
        border: "1px solid var(--border-soft)", borderRadius: "var(--radius-md)",
        boxShadow: "var(--shadow-card)", fontFamily: "var(--font-body)", ...style,
      }}
      {...rest}
    >
      <span style={{ width: 3, alignSelf: "stretch", borderRadius: 999, background: c, flex: "none" }} />
      {icon && <span style={{ color: c, display: "inline-flex", marginTop: 1 }}>{icon}</span>}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
        {title && <span style={{ fontSize: "var(--text-body-sm)", fontWeight: "var(--weight-semibold)", color: "var(--text-primary)" }}>{title}</span>}
        {message && <span style={{ fontSize: "var(--text-caption)", color: "var(--text-secondary)", lineHeight: 1.5 }}>{message}</span>}
      </div>
      {onClose && <button onClick={onClose} aria-label="Fechar" style={{ background: "none", border: "none", color: "var(--text-muted)", cursor: "pointer", fontSize: 16, lineHeight: 1 }}>×</button>}
    </div>
  );
}
