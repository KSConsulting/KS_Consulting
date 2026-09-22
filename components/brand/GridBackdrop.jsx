import React from "react";

export function GridBackdrop({ children, glow = "blue", grid = true, size = 56, style, ...rest }) {
  const radials = { blue: ["var(--backdrop-radial-blue)"], cyan: ["var(--backdrop-radial-cyan)"], both: ["var(--backdrop-radial-blue)", "var(--backdrop-radial-cyan)"], none: [] }[glow];
  return (
    <div style={{ position: "relative", background: "var(--bg-primary)", overflow: "hidden", ...style }} {...rest}>
      {grid && (
        <div aria-hidden="true" style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px)",
          backgroundSize: `${size}px ${size}px, ${size}px ${size}px`,
          maskImage: "radial-gradient(120% 100% at 50% 0%,#000 35%,rgba(0,0,0,.15) 100%)",
          WebkitMaskImage: "radial-gradient(120% 100% at 50% 0%,#000 35%,rgba(0,0,0,.15) 100%)",
        }} />
      )}
      {radials.length > 0 && (
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: radials.join(",") }} />
      )}
      <div style={{ position: "relative" }}>{children}</div>
    </div>
  );
}
