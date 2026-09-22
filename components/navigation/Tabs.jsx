import React from "react";

export function Tabs({ items = [], value, defaultValue, onChange, variant = "underline", style, ...rest }) {
  const first = items[0] && (typeof items[0] === "string" ? items[0] : items[0].value);
  const [internal, setInternal] = React.useState(defaultValue ?? first);
  const active = value !== undefined ? value : internal;
  const pick = (v) => { if (value === undefined) setInternal(v); onChange && onChange(v); };
  const pill = variant === "pill";
  return (
    <div
      role="tablist"
      style={{
        display: "flex", gap: pill ? 6 : 32, alignItems: "center",
        borderBottom: pill ? "none" : "1px solid var(--border)",
        background: pill ? "rgba(255,255,255,.03)" : "transparent",
        border: pill ? "1px solid var(--border)" : undefined,
        borderRadius: pill ? "var(--radius-pill)" : 0, padding: pill ? 6 : 0,
        width: "fit-content", fontFamily: "var(--font-body)", ...style,
      }}
      {...rest}
    >
      {items.map((it) => {
        const v = typeof it === "string" ? it : it.value;
        const l = typeof it === "string" ? it : it.label;
        const on = v === active;
        return (
          <button key={v} role="tab" aria-selected={on} onClick={() => pick(v)}
            style={{
              background: pill && on ? "rgba(0,102,255,.16)" : "transparent",
              border: pill && on ? "1px solid var(--primary)" : "1px solid transparent",
              borderRadius: pill ? "var(--radius-pill)" : 0,
              padding: pill ? "8px 18px" : "0 0 14px",
              marginBottom: pill ? 0 : -1,
              borderBottom: pill ? undefined : `2px solid ${on ? "var(--primary)" : "transparent"}`,
              color: on ? "var(--text-primary)" : "var(--text-muted)",
              fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)",
              fontWeight: "var(--weight-semibold)", cursor: "pointer",
              transition: "color var(--duration-hover) var(--ease-standard), border-color var(--duration-hover) var(--ease-standard)",
            }}>{l}</button>
        );
      })}
    </div>
  );
}
