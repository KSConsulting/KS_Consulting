import React from "react";

export function Select({ label, options = [], hint, disabled = false, style, containerStyle, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 8, fontFamily: "var(--font-body)", ...containerStyle }}>
      {label && <span style={{ fontSize: "var(--text-body-sm)", fontWeight: "var(--weight-medium)", color: "var(--text-secondary)" }}>{label}</span>}
      <span style={{ position: "relative", display: "flex", opacity: disabled ? 0.45 : 1 }}>
        <select
          disabled={disabled}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{
            appearance: "none", width: "100%", height: 48, padding: "0 44px 0 16px",
            background: "rgba(255,255,255,.03)", borderRadius: "var(--radius-input)",
            border: `1px solid ${focus ? "var(--primary)" : "var(--border)"}`,
            boxShadow: focus ? "var(--ring-focus)" : "none",
            color: "var(--text-primary)", fontFamily: "var(--font-body)", fontSize: "var(--text-body)",
            outline: "none", cursor: "pointer",
            transition: "border-color var(--duration-hover) var(--ease-standard)", ...style,
          }}
          {...rest}
        >
          {options.map((o) => {
            const v = typeof o === "string" ? o : o.value;
            const l = typeof o === "string" ? o : o.label;
            return <option key={v} value={v} style={{ background: "var(--surface-elevated)" }}>{l}</option>;
          })}
        </select>
        <span aria-hidden="true" style={{
          position: "absolute", right: 16, top: "50%", marginTop: -3, pointerEvents: "none",
          width: 8, height: 8, borderRight: "1.5px solid var(--text-muted)", borderBottom: "1.5px solid var(--text-muted)",
          transform: "rotate(45deg) translate(-2px,-2px)",
        }} />
      </span>
      {hint && <span style={{ fontSize: "var(--text-caption)", color: "var(--text-muted)" }}>{hint}</span>}
    </label>
  );
}
