import React from "react";

export function MicroLabel({ children, index, tone = "blue", separator = "—", style, ...rest }) {
  const c = { blue: "var(--primary-light)", neon: "var(--secondary)", cyan: "var(--accent)", muted: "var(--text-muted)" }[tone];
  return (
    <div
      style={{
        display: "inline-flex", alignItems: "center", gap: 10,
        fontFamily: "var(--font-body)", fontSize: "var(--text-caption)",
        fontWeight: "var(--weight-semibold)", letterSpacing: "var(--tracking-label)",
        textTransform: "uppercase", color: "var(--text-muted)", ...style,
      }}
      {...rest}
    >
      {index && <span style={{ color: c }}>{index}</span>}
      {index && <span style={{ color: "var(--border)" }}>{separator}</span>}
      <span>{children}</span>
    </div>
  );
}
