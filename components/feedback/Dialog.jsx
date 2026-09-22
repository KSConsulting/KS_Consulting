import React from "react";

export function Dialog({ open = true, title, description, children, footer, onClose, width = 520, style, ...rest }) {
  if (!open) return null;
  return (
    <div
      style={{
        position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
        background: "rgba(4,8,16,.72)", backdropFilter: "blur(6px)", padding: 24, zIndex: 60,
      }}
      onClick={onClose}
    >
      <div
        role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%", maxWidth: width, background: "var(--surface-elevated)",
          border: "1px solid var(--border)", borderRadius: "var(--radius-card-premium)",
          boxShadow: "var(--shadow-overlay)", padding: 32,
          display: "flex", flexDirection: "column", gap: 16, fontFamily: "var(--font-body)", ...style,
        }}
        {...rest}
      >
        <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
            {title && <h3 style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: "var(--text-h4)", fontWeight: "var(--weight-semibold)", color: "var(--text-primary)", letterSpacing: "var(--tracking-heading)" }}>{title}</h3>}
            {description && <p style={{ margin: 0, fontSize: "var(--text-body-sm)", color: "var(--text-secondary)", lineHeight: "var(--leading-body)" }}>{description}</p>}
          </div>
          {onClose && (
            <button onClick={onClose} aria-label="Fechar"
              style={{ background: "none", border: "none", color: "var(--text-muted)", fontSize: 20, lineHeight: 1, cursor: "pointer", padding: 4 }}>×</button>
          )}
        </div>
        {children}
        {footer && <div style={{ display: "flex", justifyContent: "flex-end", gap: 12, marginTop: 8 }}>{footer}</div>}
      </div>
    </div>
  );
}
