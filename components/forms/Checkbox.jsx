import React from "react";

export function Checkbox({ label, checked, defaultChecked, onChange, disabled = false, style, ...rest }) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = checked !== undefined ? checked : internal;
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
        width: 20, height: 20, flex: "none", borderRadius: 6, display: "inline-flex",
        alignItems: "center", justifyContent: "center",
        background: on ? "var(--gradient-primary)" : "rgba(255,255,255,.03)",
        border: `1px solid ${on ? "transparent" : "var(--border)"}`,
        boxShadow: on ? "var(--glow-blue)" : "none",
        transition: "all var(--duration-micro) var(--ease-standard)",
      }}>
        {on && <span style={{ width: 5, height: 9, borderRight: "2px solid #fff", borderBottom: "2px solid #fff", transform: "rotate(45deg) translate(-1px,-1px)" }} />}
      </span>
      {label}
    </label>
  );
}
