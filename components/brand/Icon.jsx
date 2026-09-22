import React from "react";

/** Thin wrapper over the Lucide icon set (loaded from CDN as `window.lucide`). */
export function Icon({ name, size = 20, strokeWidth = 1.75, color = "currentColor", style, ...rest }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const draw = () => {
      if (window.lucide && ref.current) {
        ref.current.innerHTML = `<i data-lucide="${name}"></i>`;
        window.lucide.createIcons({ nameAttr: "data-lucide", attrs: { width: size, height: size, "stroke-width": strokeWidth }, root: ref.current });
      }
    };
    draw();
    const t = setTimeout(draw, 300);
    return () => clearTimeout(t);
  }, [name, size, strokeWidth]);
  return (
    <span ref={ref} aria-hidden="true"
      style={{ display: "inline-flex", width: size, height: size, color, flex: "none", ...style }}
      {...rest} />
  );
}
