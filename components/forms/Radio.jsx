import React from "react";

export function Radio({ label, checked, name, value, onChange, disabled = false, style, ...rest }) {
  return (
    <label
      onClick={() => !disabled && onChange && onChange(value)}
      style={{
        display: "inline-flex", alignItems: "center", gap: 12, cursor: disabled ? "not-allowed" : "pointer",
        fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--text-secondary)",
        opacity: disabled ? 0.45 : 1, ...style,
      }}
      {...rest}
    >
      <span style={{
        width: 20, height: 20, flex: "none", borderRadius: 999, display: "inline-flex",
        alignItems: "center", justifyContent: "center",
        background: "rgba(255,255,255,.03)",
        border: `1px solid ${checked ? "var(--primary)" : "var(--border)"}`,
        boxShadow: checked ? "var(--ring-focus)" : "none",
        transition: "all var(--duration-micro) var(--ease-standard)",
      }}>
        {checked && <span style={{ width: 9, height: 9, borderRadius: 999, background: "var(--gradient-primary)" }} />}
      </span>
      <input type="radio" name={name} value={value} checked={!!checked} readOnly style={{ display: "none" }} />
      {label}
    </label>
  );
}
