import React from "react";

function useCountUp(target, run) {
  const [v, setV] = React.useState(target);
  React.useEffect(() => {
    if (!run || typeof document === "undefined" || document.visibilityState !== "visible") { setV(target); return; }
    let raf, start;
    setV(0);
    const finish = () => { cancelAnimationFrame(raf); clearTimeout(safety); setV(target); };
    const step = (t) => {
      if (!start) start = t;
      const p = Math.min((t - start) / 1200, 1);
      setV(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    const safety = setTimeout(finish, 1600);
    document.addEventListener("visibilitychange", finish);
    return () => { cancelAnimationFrame(raf); clearTimeout(safety); document.removeEventListener("visibilitychange", finish); };
  }, [target, run]);
  return v;
}

export function StatBlock({ value, prefix = "", suffix = "", label, tone = "white", size = "lg", animate = false, style, ...rest }) {
  const numeric = typeof value === "number";
  const shown = useCountUp(numeric ? value : 0, animate && numeric);
  const color = { white: "var(--text-primary)", blue: "var(--primary-light)", neon: "var(--secondary)", cyan: "var(--accent)" }[tone];
  const fs = { sm: "var(--text-h3)", md: "var(--text-h1)", lg: "var(--text-display-lg)", xl: "var(--text-display-xl)" }[size];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, ...style }} {...rest}>
      <div style={{
        fontFamily: "var(--font-heading)", fontSize: fs, fontWeight: "var(--weight-bold)",
        lineHeight: "var(--leading-display)", letterSpacing: "var(--tracking-display)", color,
      }}>{prefix}{numeric ? shown.toLocaleString("pt-BR") : value}{suffix}</div>
      {label && <div style={{
        fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)",
        color: "var(--text-muted)", letterSpacing: ".02em", maxWidth: 220,
      }}>{label}</div>}
    </div>
  );
}
