import React from "react";

export function Input({ label, hint, error, icon, type = "text", disabled = false, style, containerStyle, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 8, fontFamily: "var(--font-body)", ...containerStyle }}>
      {label && <span style={{ fontSize: "var(--text-body-sm)", fontWeight: "var(--weight-medium)", color: "var(--text-secondary)" }}>{label}</span>}
      <span style={{
        display: "flex", alignItems: "center", gap: 10, height: 48, padding: "0 16px",
        background: "rgba(255,255,255,.03)", borderRadius: "var(--radius-input)",
        border: `1px solid ${error ? "var(--danger)" : focus ? "var(--primary)" : "var(--border)"}`,
        boxShadow: focus && !error ? "var(--ring-focus)" : "none",
        transition: "border-color var(--duration-hover) var(--ease-standard), box-shadow var(--duration-hover) var(--ease-standard)",
        opacity: disabled ? 0.45 : 1,
      }}>
        {icon && <span style={{ color: "var(--text-muted)", display: "inline-flex" }}>{icon}</span>}
        <input
          type={type} disabled={disabled}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{
            flex: 1, minWidth: 0, background: "transparent", border: "none", outline: "none",
            color: "var(--text-primary)", fontFamily: "var(--font-body)", fontSize: "var(--text-body)", ...style,
          }}
          {...rest}
        />
      </span>
      {(error || hint) && (
        <span style={{ fontSize: "var(--text-caption)", color: error ? "var(--danger)" : "var(--text-muted)" }}>{error || hint}</span>
      )}
    </label>
  );
}
