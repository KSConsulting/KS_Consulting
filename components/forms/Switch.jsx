import React from "react";

export function Switch({ label, checked, defaultChecked, onChange, disabled = false, tone = "blue", style, ...rest }) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = checked !== undefined ? checked : internal;
  const fill = tone === "neon" ? "var(--secondary)" : "var(--gradient-primary)";
  const toggle = () => {
    if (disabled) return;
    if (checked === undefined) setInternal(!on);
    onChange && onChange(!on);
  };
  return (
    <label
      onClick={toggle}
      style={{
        display: "inline-flex", alignItems: "center", gap: 12, cursor: disabled ? "not-allowed" : "pointer",
        fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--text-secondary)",
        opacity: disabled ? 0.45 : 1, ...style,
      }}
      {...rest}
    >
      <span style={{
        width: 48, height: 28, flex: "none", borderRadius: 999, padding: 3, display: "inline-flex",
        alignItems: "center", justifyContent: on ? "flex-end" : "flex-start",
        background: on ? fill : "rgba(255,255,255,.06)",
        border: `1px solid ${on ? "transparent" : "var(--border)"}`,
        boxShadow: on ? (tone === "neon" ? "var(--glow-green)" : "var(--glow-blue)") : "none",
        transition: "all var(--duration-hover) var(--ease-standard)",
      }}>
        <span style={{ width: 22, height: 22, borderRadius: 999, background: on && tone === "neon" ? "#080E1C" : "#fff", boxShadow: "0 2px 6px rgba(0,0,0,.35)" }} />
      </span>
      {label}
    </label>
  );
}
