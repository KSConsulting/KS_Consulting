import React from "react";

export function Tooltip({ children, content, placement = "top", style, ...rest }) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: { bottom: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)" },
    bottom: { top: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)" },
    left: { right: "calc(100% + 8px)", top: "50%", transform: "translateY(-50%)" },
    right: { left: "calc(100% + 8px)", top: "50%", transform: "translateY(-50%)" },
  }[placement];
  return (
    <span
      style={{ position: "relative", display: "inline-flex", ...style }}
      onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}
      {...rest}
    >
      {children}
      <span style={{
        position: "absolute", ...pos, whiteSpace: "nowrap", zIndex: 40,
        padding: "8px 12px", borderRadius: "var(--radius-sm)",
        background: "var(--surface-elevated)", border: "1px solid var(--border)",
        boxShadow: "var(--shadow-card)", color: "var(--text-primary)",
        fontFamily: "var(--font-body)", fontSize: "var(--text-caption)",
        opacity: show ? 1 : 0, pointerEvents: "none",
        transition: "opacity var(--duration-hover) var(--ease-standard)",
      }}>{content}</span>
    </span>
  );
}
