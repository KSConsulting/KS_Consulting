/* @ds-bundle: {"format":4,"namespace":"KSConsultingDesignSystem_cfa9b6","components":[{"name":"GridBackdrop","sourcePath":"components/brand/GridBackdrop.jsx"},{"name":"Icon","sourcePath":"components/brand/Icon.jsx"},{"name":"MicroLabel","sourcePath":"components/brand/MicroLabel.jsx"},{"name":"StatBlock","sourcePath":"components/brand/StatBlock.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/GridBackdrop.jsx":"d46bb2d49f3c","components/brand/Icon.jsx":"1b414f869277","components/brand/MicroLabel.jsx":"e18cfd16b240","components/brand/StatBlock.jsx":"e15460311b00","components/core/Badge.jsx":"608ce877ae7a","components/core/Button.jsx":"9a927e5dc100","components/core/Card.jsx":"bbc36ef2cd9b","components/core/IconButton.jsx":"3294808114ab","components/core/Tag.jsx":"d5d14f5ae5f0","components/feedback/Dialog.jsx":"3d002bceef99","components/feedback/Toast.jsx":"369475d666c4","components/feedback/Tooltip.jsx":"23f5ed41224a","components/forms/Checkbox.jsx":"d976debfacb8","components/forms/Input.jsx":"f2d58d8b96d2","components/forms/Radio.jsx":"c1d7e0b3d351","components/forms/Select.jsx":"c02f741f8ac5","components/forms/Switch.jsx":"cd9ce6030e81","components/navigation/Tabs.jsx":"933e941b1c5a","ui_kits/website/CasesScreen.jsx":"31b0c1bfa899","ui_kits/website/Chrome.jsx":"0fbaa1fb9911","ui_kits/website/ContactScreen.jsx":"8dc181fcfbaa","ui_kits/website/HomeScreen.jsx":"36f8886b3663","ui_kits/website/ServicesScreen.jsx":"12dfcb615d0c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.KSConsultingDesignSystem_cfa9b6 = window.KSConsultingDesignSystem_cfa9b6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/GridBackdrop.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function GridBackdrop({
  children,
  glow = "blue",
  grid = true,
  size = 56,
  style,
  ...rest
}) {
  const radials = {
    blue: ["var(--backdrop-radial-blue)"],
    cyan: ["var(--backdrop-radial-cyan)"],
    both: ["var(--backdrop-radial-blue)", "var(--backdrop-radial-cyan)"],
    none: []
  }[glow];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      background: "var(--bg-primary)",
      overflow: "hidden",
      ...style
    }
  }, rest), grid && /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      backgroundImage: "linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px)",
      backgroundSize: `${size}px ${size}px, ${size}px ${size}px`,
      maskImage: "radial-gradient(120% 100% at 50% 0%,#000 35%,rgba(0,0,0,.15) 100%)",
      WebkitMaskImage: "radial-gradient(120% 100% at 50% 0%,#000 35%,rgba(0,0,0,.15) 100%)"
    }
  }), radials.length > 0 && /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      backgroundImage: radials.join(",")
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, children));
}
Object.assign(__ds_scope, { GridBackdrop });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/GridBackdrop.jsx", error: String((e && e.message) || e) }); }

// components/brand/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Thin wrapper over the Lucide icon set (loaded from CDN as `window.lucide`). */
function Icon({
  name,
  size = 20,
  strokeWidth = 1.75,
  color = "currentColor",
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const draw = () => {
      if (window.lucide && ref.current) {
        ref.current.innerHTML = `<i data-lucide="${name}"></i>`;
        window.lucide.createIcons({
          nameAttr: "data-lucide",
          attrs: {
            width: size,
            height: size,
            "stroke-width": strokeWidth
          },
          root: ref.current
        });
      }
    };
    draw();
    const t = setTimeout(draw, 300);
    return () => clearTimeout(t);
  }, [name, size, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      width: size,
      height: size,
      color,
      flex: "none",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Icon.jsx", error: String((e && e.message) || e) }); }

// components/brand/MicroLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function MicroLabel({
  children,
  index,
  tone = "blue",
  separator = "—",
  style,
  ...rest
}) {
  const c = {
    blue: "var(--primary-light)",
    neon: "var(--secondary)",
    cyan: "var(--accent)",
    muted: "var(--text-muted)"
  }[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-caption)",
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      ...style
    }
  }, rest), index && /*#__PURE__*/React.createElement("span", {
    style: {
      color: c
    }
  }, index), index && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--border)"
    }
  }, separator), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { MicroLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/MicroLabel.jsx", error: String((e && e.message) || e) }); }

// components/brand/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useCountUp(target, run) {
  const [v, setV] = React.useState(target);
  React.useEffect(() => {
    if (!run || typeof document === "undefined" || document.visibilityState !== "visible") {
      setV(target);
      return;
    }
    let raf, start;
    setV(0);
    const finish = () => {
      cancelAnimationFrame(raf);
      clearTimeout(safety);
      setV(target);
    };
    const step = t => {
      if (!start) start = t;
      const p = Math.min((t - start) / 1200, 1);
      setV(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    const safety = setTimeout(finish, 1600);
    document.addEventListener("visibilitychange", finish);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(safety);
      document.removeEventListener("visibilitychange", finish);
    };
  }, [target, run]);
  return v;
}
function StatBlock({
  value,
  prefix = "",
  suffix = "",
  label,
  tone = "white",
  size = "lg",
  animate = false,
  style,
  ...rest
}) {
  const numeric = typeof value === "number";
  const shown = useCountUp(numeric ? value : 0, animate && numeric);
  const color = {
    white: "var(--text-primary)",
    blue: "var(--primary-light)",
    neon: "var(--secondary)",
    cyan: "var(--accent)"
  }[tone];
  const fs = {
    sm: "var(--text-h3)",
    md: "var(--text-h1)",
    lg: "var(--text-display-lg)",
    xl: "var(--text-display-xl)"
  }[size];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: fs,
      fontWeight: "var(--weight-bold)",
      lineHeight: "var(--leading-display)",
      letterSpacing: "var(--tracking-display)",
      color
    }
  }, prefix, numeric ? shown.toLocaleString("pt-BR") : value, suffix), label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-sm)",
      color: "var(--text-muted)",
      letterSpacing: ".02em",
      maxWidth: 220
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  children,
  tone = "blue",
  variant = "soft",
  dot = false,
  style,
  ...rest
}) {
  const tones = {
    blue: {
      c: "var(--primary-light)",
      bg: "rgba(0,102,255,.12)",
      b: "rgba(32,164,255,.35)"
    },
    neon: {
      c: "var(--secondary)",
      bg: "rgba(186,252,4,.10)",
      b: "rgba(186,252,4,.35)"
    },
    cyan: {
      c: "var(--accent)",
      bg: "rgba(0,217,255,.10)",
      b: "rgba(0,217,255,.35)"
    },
    neutral: {
      c: "var(--text-secondary)",
      bg: "rgba(255,255,255,.05)",
      b: "var(--border)"
    },
    danger: {
      c: "var(--danger)",
      bg: "rgba(255,77,94,.10)",
      b: "rgba(255,77,94,.35)"
    }
  }[tone];
  const solid = variant === "solid";
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      height: 28,
      padding: "0 12px",
      borderRadius: "var(--radius-badge)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-caption)",
      fontWeight: "var(--weight-semibold)",
      letterSpacing: ".06em",
      textTransform: "uppercase",
      color: solid ? "var(--text-on-secondary)" : tones.c,
      background: solid ? tones.c : tones.bg,
      border: `1px solid ${solid ? "transparent" : tones.b}`,
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: solid ? "currentColor" : tones.c
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    height: 40,
    padding: "0 18px",
    fontSize: 14
  },
  md: {
    height: 48,
    padding: "0 24px",
    fontSize: 15
  },
  lg: {
    height: 52,
    padding: "0 32px",
    fontSize: 16
  }
};
const base = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,
  fontFamily: "var(--font-body)",
  fontWeight: "var(--weight-semibold)",
  borderRadius: "var(--radius-button)",
  border: "1px solid transparent",
  cursor: "pointer",
  whiteSpace: "nowrap",
  textDecoration: "none",
  transition: "transform var(--duration-hover) var(--ease-standard), box-shadow var(--duration-hover) var(--ease-standard), background var(--duration-hover) var(--ease-standard), border-color var(--duration-hover) var(--ease-standard), filter var(--duration-hover) var(--ease-standard)"
};
const variants = {
  primary: {
    background: "var(--gradient-primary)",
    color: "var(--text-on-primary)",
    boxShadow: "0 8px 24px rgba(0,102,255,.20)"
  },
  secondary: {
    background: "rgba(255,255,255,.04)",
    color: "var(--text-primary)",
    borderColor: "var(--border)"
  },
  neon: {
    background: "var(--secondary)",
    color: "var(--text-on-secondary)",
    boxShadow: "var(--glow-green)"
  },
  ghost: {
    background: "transparent",
    color: "var(--text-secondary)"
  },
  link: {
    background: "transparent",
    color: "var(--text-link)",
    height: "auto",
    padding: 0,
    borderRadius: 0
  }
};
const hovers = {
  primary: {
    filter: "brightness(1.10)",
    boxShadow: "0 10px 28px rgba(0,102,255,.28), var(--glow-blue)",
    transform: "translateY(var(--lift-button))"
  },
  secondary: {
    background: "rgba(0,102,255,.08)",
    borderColor: "var(--primary)",
    transform: "translateY(var(--lift-button))"
  },
  neon: {
    filter: "brightness(1.06)",
    boxShadow: "0 0 42px rgba(186,252,4,.32)",
    transform: "translateY(var(--lift-button))"
  },
  ghost: {
    background: "rgba(255,255,255,.04)",
    color: "var(--text-primary)"
  },
  link: {
    color: "var(--text-link-hover)"
  }
};
function Button({
  children,
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  href,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = href ? "a" : "button";
  const s = {
    ...base,
    ...sizes[size],
    ...variants[variant],
    ...(hover && !disabled ? hovers[variant] : null),
    ...(variant === "link" ? {
      height: "auto",
      padding: 0
    } : null),
    ...(fullWidth ? {
      width: "100%"
    } : null),
    ...(disabled ? {
      opacity: 0.4,
      cursor: "not-allowed",
      transform: "none",
      filter: "none"
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: !href ? disabled : undefined,
    style: s,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  variant = "default",
  padding = 32,
  glow = "none",
  interactive = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const v = {
    default: {
      background: "var(--surface-glass)",
      border: "1px solid var(--border-soft)",
      backdropFilter: "var(--blur-glass)",
      boxShadow: "var(--shadow-card)",
      borderRadius: "var(--radius-card)"
    },
    elevated: {
      background: "var(--surface-elevated)",
      border: "1px solid var(--border)",
      boxShadow: "var(--shadow-card-elevated)",
      borderRadius: "var(--radius-card-premium)"
    },
    outline: {
      background: "transparent",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-card)"
    },
    featured: {
      background: "linear-gradient(160deg,rgba(32,164,255,.12) 0%,rgba(16,24,39,.85) 55%)",
      border: "1px solid var(--primary)",
      boxShadow: "var(--shadow-card), var(--glow-blue)",
      borderRadius: "var(--radius-card-premium)"
    },
    neon: {
      background: "var(--secondary)",
      border: "1px solid var(--secondary)",
      color: "var(--text-on-secondary)",
      boxShadow: "var(--glow-green)",
      borderRadius: "var(--radius-card)"
    }
  }[variant];
  const glowShadow = {
    none: null,
    blue: "var(--glow-blue)",
    green: "var(--glow-green)",
    cyan: "var(--glow-cyan)"
  }[glow];
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      padding,
      position: "relative",
      transition: "transform var(--duration-hover) var(--ease-standard), box-shadow var(--duration-hover) var(--ease-standard), border-color var(--duration-hover) var(--ease-standard)",
      ...v,
      ...(glowShadow ? {
        boxShadow: [v.boxShadow, glowShadow].filter(Boolean).join(", ")
      } : null),
      ...(interactive && hover ? {
        transform: "translateY(var(--lift-card))",
        borderColor: variant === "neon" ? "var(--secondary)" : "rgba(0,102,255,.55)",
        boxShadow: [v.boxShadow, variant === "neon" ? "var(--glow-green)" : "var(--glow-blue)"].filter(Boolean).join(", ")
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: 36,
  md: 44,
  lg: 52
};
function IconButton({
  icon,
  children,
  variant = "secondary",
  size = "md",
  label,
  disabled = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const px = sizes[size];
  const v = {
    primary: {
      background: "var(--gradient-primary)",
      color: "#fff",
      border: "1px solid transparent"
    },
    secondary: {
      background: "rgba(255,255,255,.04)",
      color: "var(--text-primary)",
      border: "1px solid var(--border)"
    },
    neon: {
      background: "var(--secondary)",
      color: "var(--text-on-secondary)",
      border: "1px solid transparent"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-secondary)",
      border: "1px solid transparent"
    }
  }[variant];
  const h = {
    primary: {
      filter: "brightness(1.1)",
      boxShadow: "var(--glow-blue)"
    },
    secondary: {
      background: "rgba(0,102,255,.08)",
      borderColor: "var(--primary)"
    },
    neon: {
      boxShadow: "var(--glow-green)"
    },
    ghost: {
      background: "rgba(255,255,255,.04)",
      color: "var(--text-primary)"
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: px,
      height: px,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-button)",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "all var(--duration-hover) var(--ease-standard)",
      ...v,
      ...(hover && !disabled ? h : null),
      ...(disabled ? {
        opacity: 0.4
      } : null),
      ...style
    }
  }, rest), icon || children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  active = false,
  onRemove,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      height: 32,
      padding: "0 14px",
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-sm)",
      fontWeight: "var(--weight-medium)",
      color: active ? "var(--text-primary)" : "var(--text-secondary)",
      background: active ? "rgba(0,102,255,.14)" : "rgba(255,255,255,.04)",
      border: `1px solid ${active ? "var(--primary)" : "var(--border)"}`,
      cursor: onClick ? "pointer" : "default",
      transition: "all var(--duration-hover) var(--ease-standard)",
      ...(hover && onClick && !active ? {
        borderColor: "rgba(0,102,255,.55)",
        color: "var(--text-primary)"
      } : null),
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    "aria-label": "Remover",
    style: {
      background: "none",
      border: "none",
      color: "var(--text-muted)",
      cursor: "pointer",
      padding: 0,
      lineHeight: 1,
      fontSize: 14
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = true,
  title,
  description,
  children,
  footer,
  onClose,
  width = 520,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "rgba(4,8,16,.72)",
      backdropFilter: "blur(6px)",
      padding: 24,
      zIndex: 60
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: "100%",
      maxWidth: width,
      background: "var(--surface-elevated)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-card-premium)",
      boxShadow: "var(--shadow-overlay)",
      padding: 32,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      fontFamily: "var(--font-body)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-heading)",
      fontSize: "var(--text-h4)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-primary)",
      letterSpacing: "var(--tracking-heading)"
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-body-sm)",
      color: "var(--text-secondary)",
      lineHeight: "var(--leading-body)"
    }
  }, description)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Fechar",
    style: {
      background: "none",
      border: "none",
      color: "var(--text-muted)",
      fontSize: 20,
      lineHeight: 1,
      cursor: "pointer",
      padding: 4
    }
  }, "\xD7")), children, footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 12,
      marginTop: 8
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Toast({
  title,
  message,
  tone = "info",
  icon,
  onClose,
  style,
  ...rest
}) {
  const c = {
    info: "var(--accent)",
    success: "var(--secondary)",
    error: "var(--danger)",
    neutral: "var(--text-muted)"
  }[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 14,
      width: 360,
      padding: 16,
      background: "var(--surface-glass)",
      backdropFilter: "var(--blur-glass)",
      border: "1px solid var(--border-soft)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-card)",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 3,
      alignSelf: "stretch",
      borderRadius: 999,
      background: c,
      flex: "none"
    }
  }), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: c,
      display: "inline-flex",
      marginTop: 1
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, title && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-body-sm)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-primary)"
    }
  }, title), message && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-caption)",
      color: "var(--text-secondary)",
      lineHeight: 1.5
    }
  }, message)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Fechar",
    style: {
      background: "none",
      border: "none",
      color: "var(--text-muted)",
      cursor: "pointer",
      fontSize: 16,
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  children,
  content,
  placement = "top",
  style,
  ...rest
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    left: {
      right: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    right: {
      left: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      ...pos,
      whiteSpace: "nowrap",
      zIndex: 40,
      padding: "8px 12px",
      borderRadius: "var(--radius-sm)",
      background: "var(--surface-elevated)",
      border: "1px solid var(--border)",
      boxShadow: "var(--shadow-card)",
      color: "var(--text-primary)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-caption)",
      opacity: show ? 1 : 0,
      pointerEvents: "none",
      transition: "opacity var(--duration-hover) var(--ease-standard)"
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = checked !== undefined ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    if (checked === undefined) setInternal(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", _extends({
    onClick: toggle,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      cursor: disabled ? "not-allowed" : "pointer",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-sm)",
      color: "var(--text-secondary)",
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flex: "none",
      borderRadius: 6,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: on ? "var(--gradient-primary)" : "rgba(255,255,255,.03)",
      border: `1px solid ${on ? "transparent" : "var(--border)"}`,
      boxShadow: on ? "var(--glow-blue)" : "none",
      transition: "all var(--duration-micro) var(--ease-standard)"
    }
  }, on && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 9,
      borderRight: "2px solid #fff",
      borderBottom: "2px solid #fff",
      transform: "rotate(45deg) translate(-1px,-1px)"
    }
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  icon,
  type = "text",
  disabled = false,
  style,
  containerStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      fontFamily: "var(--font-body)",
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-body-sm)",
      fontWeight: "var(--weight-medium)",
      color: "var(--text-secondary)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      height: 48,
      padding: "0 16px",
      background: "rgba(255,255,255,.03)",
      borderRadius: "var(--radius-input)",
      border: `1px solid ${error ? "var(--danger)" : focus ? "var(--primary)" : "var(--border)"}`,
      boxShadow: focus && !error ? "var(--ring-focus)" : "none",
      transition: "border-color var(--duration-hover) var(--ease-standard), box-shadow var(--duration-hover) var(--ease-standard)",
      opacity: disabled ? 0.45 : 1
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)",
      display: "inline-flex"
    }
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      background: "transparent",
      border: "none",
      outline: "none",
      color: "var(--text-primary)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body)",
      ...style
    }
  }, rest))), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-caption)",
      color: error ? "var(--danger)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  checked,
  name,
  value,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    onClick: () => !disabled && onChange && onChange(value),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      cursor: disabled ? "not-allowed" : "pointer",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-sm)",
      color: "var(--text-secondary)",
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flex: "none",
      borderRadius: 999,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "rgba(255,255,255,.03)",
      border: `1px solid ${checked ? "var(--primary)" : "var(--border)"}`,
      boxShadow: checked ? "var(--ring-focus)" : "none",
      transition: "all var(--duration-micro) var(--ease-standard)"
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: 999,
      background: "var(--gradient-primary)"
    }
  })), /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: !!checked,
    readOnly: true,
    style: {
      display: "none"
    }
  }), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  options = [],
  hint,
  disabled = false,
  style,
  containerStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      fontFamily: "var(--font-body)",
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-body-sm)",
      fontWeight: "var(--weight-medium)",
      color: "var(--text-secondary)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "flex",
      opacity: disabled ? 0.45 : 1
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: "none",
      width: "100%",
      height: 48,
      padding: "0 44px 0 16px",
      background: "rgba(255,255,255,.03)",
      borderRadius: "var(--radius-input)",
      border: `1px solid ${focus ? "var(--primary)" : "var(--border)"}`,
      boxShadow: focus ? "var(--ring-focus)" : "none",
      color: "var(--text-primary)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body)",
      outline: "none",
      cursor: "pointer",
      transition: "border-color var(--duration-hover) var(--ease-standard)",
      ...style
    }
  }, rest), options.map(o => {
    const v = typeof o === "string" ? o : o.value;
    const l = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v,
      style: {
        background: "var(--surface-elevated)"
      }
    }, l);
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: 16,
      top: "50%",
      marginTop: -3,
      pointerEvents: "none",
      width: 8,
      height: 8,
      borderRight: "1.5px solid var(--text-muted)",
      borderBottom: "1.5px solid var(--text-muted)",
      transform: "rotate(45deg) translate(-2px,-2px)"
    }
  })), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-caption)",
      color: "var(--text-muted)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  tone = "blue",
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = checked !== undefined ? checked : internal;
  const fill = tone === "neon" ? "var(--secondary)" : "var(--gradient-primary)";
  const toggle = () => {
    if (disabled) return;
    if (checked === undefined) setInternal(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", _extends({
    onClick: toggle,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      cursor: disabled ? "not-allowed" : "pointer",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-sm)",
      color: "var(--text-secondary)",
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 28,
      flex: "none",
      borderRadius: 999,
      padding: 3,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: on ? "flex-end" : "flex-start",
      background: on ? fill : "rgba(255,255,255,.06)",
      border: `1px solid ${on ? "transparent" : "var(--border)"}`,
      boxShadow: on ? tone === "neon" ? "var(--glow-green)" : "var(--glow-blue)" : "none",
      transition: "all var(--duration-hover) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: 999,
      background: on && tone === "neon" ? "#080E1C" : "#fff",
      boxShadow: "0 2px 6px rgba(0,0,0,.35)"
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  variant = "underline",
  style,
  ...rest
}) {
  const first = items[0] && (typeof items[0] === "string" ? items[0] : items[0].value);
  const [internal, setInternal] = React.useState(defaultValue ?? first);
  const active = value !== undefined ? value : internal;
  const pick = v => {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };
  const pill = variant === "pill";
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "flex",
      gap: pill ? 6 : 32,
      alignItems: "center",
      borderBottom: pill ? "none" : "1px solid var(--border)",
      background: pill ? "rgba(255,255,255,.03)" : "transparent",
      border: pill ? "1px solid var(--border)" : undefined,
      borderRadius: pill ? "var(--radius-pill)" : 0,
      padding: pill ? 6 : 0,
      width: "fit-content",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, rest), items.map(it => {
    const v = typeof it === "string" ? it : it.value;
    const l = typeof it === "string" ? it : it.label;
    const on = v === active;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": on,
      onClick: () => pick(v),
      style: {
        background: pill && on ? "rgba(0,102,255,.16)" : "transparent",
        border: pill && on ? "1px solid var(--primary)" : "1px solid transparent",
        borderRadius: pill ? "var(--radius-pill)" : 0,
        padding: pill ? "8px 18px" : "0 0 14px",
        marginBottom: pill ? 0 : -1,
        borderBottom: pill ? undefined : `2px solid ${on ? "var(--primary)" : "transparent"}`,
        color: on ? "var(--text-primary)" : "var(--text-muted)",
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-body-sm)",
        fontWeight: "var(--weight-semibold)",
        cursor: "pointer",
        transition: "color var(--duration-hover) var(--ease-standard), border-color var(--duration-hover) var(--ease-standard)"
      }
    }, l);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CasesScreen.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  Icon,
  MicroLabel,
  StatBlock,
  Tabs,
  Tag
} = window.KSConsultingDesignSystem_cfa9b6;
const CASES = [{
  c: "Rede Menor Preço",
  seg: "Varejo farmacêutico",
  h: "R$ 1,1 mi em receita atribuída",
  m: [["+512%", "Receita"], ["−41%", "CPA"], ["11", "Meses"]],
  tags: ["Tráfego pago", "CRO"]
}, {
  c: "Ágape Saúde",
  seg: "Serviços de saúde",
  h: "Custo por lead 3,4× menor",
  m: [["−71%", "CPL"], ["+238%", "Leads"], ["6", "Meses"]],
  tags: ["SEO", "Automação"]
}, {
  c: "Nova Log",
  seg: "Logística B2B",
  h: "Pipeline previsível em 90 dias",
  m: [["+64", "SQLs/mês"], ["4,1×", "ROI"], ["90", "Dias"]],
  tags: ["LinkedIn", "Dados"]
}, {
  c: "Praia Comprida",
  seg: "Farmácia regional",
  h: "Da mídia local ao e-commerce",
  m: [["+189%", "Receita"], ["−28%", "CAC"], ["8", "Meses"]],
  tags: ["Branding", "Mídia"]
}];
const QUOTES = [{
  n: "Rogério Vieira",
  r: "Diretor comercial · Rede Menor Preço",
  q: "Com a KS a estratégia de tráfego pago finalmente virou receita rastreável. Em quatro meses o board parou de perguntar se mídia valia a pena."
}, {
  n: "Ariane Medeiros",
  r: "CMO · Ágape Saúde",
  q: "Transformaram nossa operação de aquisição. Reuniões viraram números, não opinião."
}];
function CasesScreen({
  go
}) {
  const [filter, setFilter] = React.useState("Todos");
  const [active, setActive] = React.useState(0);
  const shown = filter === "Todos" ? CASES : CASES.filter(c => c.tags.includes(filter));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    glow: "both",
    pad: "80px 32px 48px"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    index: "03",
    eyebrow: "Cases",
    title: "Opera\xE7\xF5es que passaram a crescer",
    accent: "com previsibilidade",
    sub: "Recortes reais de contas sob gest\xE3o. M\xE9tricas conferidas com o cliente antes de publicar."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 24,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: ["Todos", "Tráfego pago", "SEO", "CRO", "Dados"],
    value: filter,
    onChange: setFilter
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: 500,
    suffix: "+",
    size: "sm",
    label: "Projetos entregues"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: 98,
    suffix: "%",
    size: "sm",
    tone: "neon",
    label: "Reten\xE7\xE3o"
  })))), /*#__PURE__*/React.createElement(Section, {
    glow: "none",
    pad: "0 32px 48px"
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "featured",
    padding: 32,
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1.15fr) minmax(0,.85fr)",
      gap: 40,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-lg, 16px)",
      overflow: "hidden",
      border: "1px solid var(--border-soft)",
      background: "#000",
      aspectRatio: "16/9"
    }
  }, /*#__PURE__*/React.createElement("video", {
    src: "../../assets/cases/agendamento-odontologico.mp4",
    controls: true,
    muted: true,
    loop: true,
    playsInline: true,
    autoPlay: true,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(MicroLabel, {
    index: "Case",
    tone: "neon",
    separator: "/"
  }, "Cl\xEDnica odontol\xF3gica"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-h3)",
      lineHeight: 1.2,
      textWrap: "pretty"
    }
  }, "Agenda cheia no autom\xE1tico, ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--secondary)"
    }
  }, "sem depender da recep\xE7\xE3o.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: "var(--text-secondary)",
      lineHeight: 1.6,
      textWrap: "pretty"
    }
  }, "Implementamos um assistente de IA que atende o paciente no WhatsApp, entende o pedido, consulta a agenda em tempo real e confirma a consulta em segundos \u2014 24 horas por dia."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, ["Atendimento imediato, inclusive fora do horário comercial", "Confirmação e lembrete automáticos reduzem faltas", "Equipe livre para cuidar de quem está na cadeira"].map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "flex",
      gap: 10,
      alignItems: "flex-start",
      fontSize: 15,
      color: "var(--text-primary)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--secondary)",
      flexShrink: 0,
      paddingTop: 2
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16
  })), t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go("contact"),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    })
  }, "Quero isso na minha cl\xEDnica"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Tag, null, "Automa\xE7\xE3o"), /*#__PURE__*/React.createElement(Tag, null, "IA")))))), /*#__PURE__*/React.createElement(Section, {
    glow: "none",
    pad: "0 32px 96px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 24
    }
  }, shown.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.c,
    interactive: true,
    padding: 32,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: 20,
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, c.c), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, c.seg)), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up-right",
    size: 20,
    color: "var(--primary-light)"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: "var(--text-secondary)"
    }
  }, c.h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 32,
      paddingTop: 16,
      borderTop: "1px solid var(--border-soft)"
    }
  }, c.m.map(([v, l], i) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: 26,
      fontWeight: 700,
      color: i === 0 ? "var(--secondary)" : "var(--text-primary)"
    }
  }, v), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--text-muted)"
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, c.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t))))))), /*#__PURE__*/React.createElement(Section, {
    glow: "blue"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    index: "04",
    eyebrow: "Depoimentos",
    title: "O que os clientes dizem sobre",
    accent: "trabalhar com a KS"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr .6fr",
      gap: 24,
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "elevated",
    padding: 48,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      color: "var(--secondary)"
    }
  }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement(Icon, {
    key: i,
    name: "star",
    size: 16
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: 26,
      lineHeight: 1.4,
      color: "var(--text-primary)",
      letterSpacing: "-.01em"
    }
  }, "\u201C", QUOTES[active].q, "\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, QUOTES[active].n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, QUOTES[active].r)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, QUOTES.map((_, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => setActive(i),
    "aria-label": `Depoimento ${i + 1}`,
    style: {
      width: i === active ? 28 : 8,
      height: 8,
      borderRadius: 999,
      border: "none",
      cursor: "pointer",
      background: i === active ? "var(--primary)" : "var(--border)",
      transition: "all var(--duration-hover) var(--ease-standard)"
    }
  }))))), /*#__PURE__*/React.createElement(Card, {
    padding: 32,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20,
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(MicroLabel, {
    index: "NPS"
  }, "Satisfa\xE7\xE3o"), /*#__PURE__*/React.createElement(StatBlock, {
    value: 72,
    size: "md",
    tone: "neon",
    label: "NPS m\xE9dio das contas sob gest\xE3o em 2026"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    fullWidth: true,
    onClick: () => go("contact")
  }, "Quero crescer tamb\xE9m")))));
}
Object.assign(window, {
  CasesScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CasesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
const KS_MARK = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANYAAAC0CAYAAADo39J/AAAQAElEQVR4AeydCXxcVdn/nzNJ04WWfSngqyCrCihWlpKkjdCmLasKBWQV2UF5QXYUWnYEVBBkUwFlkT8gYkHbpCwpSVrgpaCICML7FjdkKWWpXUgzc/7f38zcdJJOZklmMjPJnc/zm7Pce8957nPOc+85z1luxMJfKIFQAgWXQKhYBRdpmGAoAbNQscJaEEqgCBIIFasIQg2TDCUQKlZYB8pVAhXNV6hYFV18IfPlKoFQscq1ZEK+KloCoWJVdPGVD/N+96lb+PppG5UPR6XlJFSs0sq/4nP3hx++tm+YeqhVxxaZjz3k99j7U73dlPd+GHC9HR9M8aFiDabSXONeihuBkkTs3WWHWzT200RO/ksWWbVrwp/236eNHYSRoWINwkIdsFuaOGV3W778BvM2mjxXmfNXWFvtr/GnJedcJxgSyhUqVtoqEEbmJIGY/YrzqlCsGO4drnXupc5myk9waFOoWEO7/Pt795+MJ+Dcda6t+cS4P/yLSyBUrLgYwr9+SWD/qc/16/pBeHGoWNkKNTwel0DcUBH3dft7Jx6aNftef9W10/z48SPj4fAvnIQb1oE1JYASySzegHtcAM76b9Cdhg+7mogoMHu0+WGrGnOtP+7kcVyT8YHN8c3i1wziv4wCyPe+EdgoUJPvdZV6vp80aR1f23i+r298sFLvIeCbctsN/ALoXh4g/pdAZvQAPyTcnZZ33kHENWApULmfYm/8826bOO0+wmmJ9DfhwH24DyZxB+66xA0qKphiIZwvIpl3wRIwNKjD1ZqzS7GKHejrptxbaTdNma0F3gT/gfd54EhwIDgA/BfISG5B0xKr7rjQVgwf23Xiyo+3t1hsup98wIt+/sKtu+JXe0bhrQfKRzga/7/EA7gL/6CggikW0lAHVkJbC/+gJ18/eaLF3O+40Spg5mJPWJn/qLifAHXgeNABu1KoTXFVZsNxHfgIPJWCm/Fvx/iTjuHtTq6lpdMtfGQ5yqU0buXoP4C3FSt2tHPPfwU5fYNwKm1HQOmrvizDr3SDenMEfIne4e8UMAEM45yKo0IqlgSUVgCDLdJPaDzEvGtZfV/uh4zh/Gx1uLx8VM6R4HK4+gUQ37fhplbYNwhfBb4Lvo0STUzBKfj/SnxGknJhcj8JufAGck/ET/amMa6r/Lx528TDib+/k95EvNOA+m3K88f4E4YQPJDmHP4EV2/Rq+H9fLAx4YqhQipWxdx0fxj1e+y5lcXsrNVpuKttTOSC1eHy8VEZpVBqoj4NV+JxT9zEG9ZMRofjCKsJ34h7ERX+CqC+FcE1ifSyNw/bm56keUyT0h+WSMFtYpddq4HkRNDsA+NHPovBz8EVBM8DDUC89GwOnk78JaCF/B/FrQgKFSuPYvINDdXmqo7iki8B0Wtm/iE3e/bHCpQDqHwObAxUIZfD09fBTkBTiT7EfQus7ZyrBqrYL+C+BlYRn43UZMt2jrnWpn/bkaf91jZYX28dsxUdnw4uIp83A3/gErcC/AWIl6NwHcfOAf8G74Nq8BmwD/clOpm/sn6DhYpFaeVM0eHnmHMXJc/3NHt+TPPnmWS45A6VTcaCb8LI38CPQED/h+fnYAqVdlMgKx7BvKlLQTJdCR/O7rrhbHtvyanJ855Pujk78HgN2IwLJoA7wWIQ0E14/kY+hwHdM8HyolCxciwPTOrnm/fqpySu8O5Q1950YyJQ+n8q2GVwcQ9QX28Eruhl/k4Bh1NJjwf9fQioL0ZyvZN/4eVtbK99b+eMmUDkrdqpySl/3oDnl8AxXKg37wm4MSDSPUrh7uHeP6eIvqBY14SKlZSsr2u8jTGpePs/GdXl+Nqp25m307oizE5Fqe5PCZfMS6WqBgtgQP2U1CUbekMpfCsV82mOF4IyNnl93eSv2n+f+ax1rMKAkczO2z6uZU5WhUye3avDPTzGQT001sf9f0AkA4zu8RlkoLe04soC/VIsbkbt+W1wry2Lu+kjEyjUIWbuaHO2DgrWrRL6XffawCJeMwyCsZp5FquWmd1K/UPuJ8ODmnW741YBWdZkyl6LingcWAaCJzyH+0ekpSZl74lE7CWLRV/lBPWR/mjI1LU3z7YC/cjfgw/BoUB5LCRp3b9M/Z9EHs+DfUEN8SWlPisWzGtemKw1Gqk/s6R30d/MnacgBBJy/gX+4+Q/O73GaqpvMu/3j0eYvWPOX+rm/76kT0dk/0Wgppb6GmoSib0/83c8aKDSyWiBd2DJPTX3NR5OVyGjGVYd+Ypra+rVwlggzvYiHRlpgvLYmfBvwfdBSSnSl9wpVE1laefa7wFZnBbhDg6KuhldN7L+R/Sh/PSucMz2Yrzq8a5wCTzIXvz8mqxX82mm/scBKNQsIOsfh0tDrrX5Ydc695JCNP+y3QH3qreX+nNTOVdjYzjx+a+nI6ffAVkSFTfgyFmxYFLTX76Mq36IRtO/ALfvgIO5wZysRZxbdqT5fmZOTz3Tz81v1j2Z36NxBzOvN4AjPmpVbk+OvYS/ZITsZeZX326LJBP/wpV5+j7K4H/xl4JKnif3/gpQE1gtixVJhvbGXYjM9sMdcMpJsWBOc7v0lHwCDtcBc8Bt3Mwm4AH8lUvLI5rKo4FJ3YOm8ySUKuJ1v4oTZtnKiNrz8g84kL/6sl8h4/8BAWng95PIv+eAanB8yLnI4hFuWsMNcvGauiuzkN/hCgwkMioWDK0HVHDCFBjTgN25uEdyEyfhDi5y/nI/oXFL3k70Ddy2yZt71qrdOe6Z2XGlS8YNmIP8NyczmdLhCR+vUf5/AFQGBTNMkN6gIOqlZtYfzc3ISooTp7uQY8psmXhcUf8yKhY5S+OPwNWWVnpLfRb/D2A+dbCOqAom55JTb7iHqLvTYnY1xgp1gomwZeaXTXItTa/72kl1jGUtjqNukqbf6HhRQWWQpU8tgnPIaAyQufti3Asog1CpEEQ6QjaarSFLdTCY7zjvCuR5EpCfYHEpm2JpmksbLEyE2WngAxAlPHgo4q/supmIkyHmoGT4Y/vs9lPNrbUtJvjfmIu0Mpa1QQKR8clziuZQAfQwe40MlFc1rvp3BznnLnbOaWY6USH1JgFkFAWXchwDVHxe5DD8mqn/NWRbdOXKqFgw9i6oB+oYwtcgJG+BuRprmp+bcocL7eVX1Px9mjj1b3BsJYr1a/NVMiAoXCB0T4aC354YNf22xBU18bcX5VAxk1DhtywImX0bRjQ0sQpXpOEhzaqXv2jIqFi55EolGAPKYsA0F34znNP9KeZN64Y0nKC3hS5bac5NtGEdJ7n5s4tmgUOWWk17NhnuAUTz+TuWChK3VuIPKU8JIDv1Ub/DZWpK49hVyLmofa4+KxaMrQNkgVGnXqZNMVxRiDfxeuPY2QbJQ8vMRY5xbc0jXWvTs66lZXEyvliOxqkkVym0hjb2dM7JrF6s/IZEushQTUJtI9DJDcsSfA31V+N/BAtPeSsWzGwHVPhagq/5aGJUo92F5674KSb2xUufz1KafXebj4xzrXM02TP9WQWMRa4ah9EiRKWq5RW7USGCp6ziQvRDAsjyQi6/AQR0LzI/NAgU0s1LsWBC1qm7YUAmTV2r/ocGi4vCHPmUhpybhVX7aNfefKRrn6O5b0XnA9nqLRUsCJQyXUZF+GvRMx5iGSBTNQnV1A7uXKb4PYNAoVwpR9a0KPRdgGYoy8qi0X9dtwUXToXRe8BK/KWlPHP3dZPVgdXwQfcrqzu2tKqPD3dtc3/T/UDxQshWK3jVTAkWEmpnJM3kLl6mQztlrVXTeKykoCZ3qqIprt+QgvSaCAU+HFzNCc8CmX+1C5PGBtZCmf4GtCKVQ5VFfo9pW5k5jc+NsMTvXZp9Z9uK92roQ70BtMlK4kiR/5GvzMD7kM36QPQActW+E4EVS3EhCigB5KshI23nJguhUp5KOVwPNG6rcL+RUbFIXR14abOm5l9L+BCYuhSUZPY0+ReGIlE9rfTmJT23GGvfMTT7rnULF5aiMsvyGKz1ehLZHgxTIRVZAshZtgH1Z+UqN5nlZTuQv9/IpljKQGMnk/GcBzOa0Y63csnXN2pMSJNrEzfhY9Nca1NJhgt4QmqnIrUAxIueomr/yx9iACRAfda45ZeTWWm4RRvbJIP9czIqFhm/CfYDzwAVfNrcqCBqp6Y9Vi6RjP46XzvlZpp8ekiIrQ6L+Z1d+1ztb6fwgAKZqQmogUvlK9l+Exn/QYEQAycBZK6ZRcGDdnPK5d9AU8n6xUQ3xepLSjChJlXJF5Zl5b2u8YtY+jTHT0+mlTT/zrT5c/+Y9boinIDMJHe9qbSsXDk8zF9gEcQb0gBLQIPw2h9E2a7Nn/rfOH0nFXCfrqZyaJ92tVHvJYGybsLEl9ebu86caaoQ7NqfrSrysEPTFCgBtH4tmCal9UM38uQsRf+uBLdeflkieymVhpJknJNl9mzqdzARu08MR/pyFZlKmV7jWr1CtcuplpMQLFMaFuHN5Ou6uKsePtW1zP5nV3jgPVqBvUMyW22Uqd1pk8HQKZEE1PfWoLyy1zCMprTJ3yfkrFgo04bgAKC9uTUVZBNyfBFoSbj2f8NbXqQ9K3xt48PmnNY0ibl/W3TpKNfyyGIFSgHkpwILlHwRT0tZW0vBSphnigQoB30fWavi1d+lMWO/oqw2TDklL29WxSJxjWVpKYX2FniY1D8BZP+/HGY+D2YRLk/a4MP9zZk2fBR/S/CfZgsWrFSghHgymTf2FNOsFQt/2SUwgGdcl5JXn7s4GRULpdI4VjMZ3QK0d8DbuBpzOQmFmoG/bMlPnLoLFkANAq6XZLLZYiOaeBSpQiejBtZBnmrHB09BrcoOrYADWwS55HYVJ70FROfrry/IqFgkqFnAeuJrn4t2lGksuAG8x7GyJd/QUG3RmCw9iU38vb3u2pq/7tpnaaC7JHyjVJI1lkmTmV3NjVeRo1YGlISfMNP0EqBM1E3oWtZPuWkz1PQnZ4hVYWc4bGo2PcQJ9WQY9AsIljl11ujzL8HY2nzX3iwDS6mZPhQGvgpEzyHPgg1GKsEQBZXAX0gtmHy9AcolYwZRuVNGxaLwl4ADgWax555qCc/0tVO+RfaJRYLO3jMX0W6xRJWOKBjNQdO+dzVJLjT/MukNnXKTgHNOc2NV59Vt0EM572lmGRUrlxum0si4kbotVy6XFeUcX9f4TXPx7aCT6fvrrWqlxiiS4ZI5GnTU53/iDFBwagXE/QP4F2aVnwS0u3PQVNc+GVKwnFPos2KhUNsDZa7momZf5JxpMU709ZNrSVdGFr0d8NpPXevcS11LSzDJUnGlggolmEn/zVIxEeabuwR4+L3H2VoqhWM78hcYnfBmp7wVC2XaCai59RLJawxGFfdW/CWmiNbYyDBgmNWbMVacYOXzU59P3EhWGrKQP0T5S0CW8IDLvJqDeSkWCnUBuWj18HW4mqioMZmp+GWCxykO+brJZ/raxiaaeokvBPbIhmN3fkJ3ugAAEABJREFUmfe7JKL9BxbzxyT8pf9HZpq+FMhZcypLZpksvTQqiwPeWpoMESyR0sLYnG8gKPBeL6BiaHtjfapHi/8u50TNt2M4yLYgY2108jhukfe5i3yet1CjmdX7humjcePkjR5VXeOtHAsmTXpzVYe69rnB1BQrg58G0wM2/uyc01srCIdu+Utg7ySL0oOcP3CXUbFQKvULfkTC2ntB3yB6Bb9mZa9PBQk+nUJU8cg37Efb1m+UzGGVa3lACs7YL+pUN0kzFwQd/g9vrZNd6xzN+VK4CMgvSeSnt3ogY82tzPx9qfySD88eGAloknSw63DQpM+ac1DovZ2o5eJ6BS7jBK0kPgKF0iYnA7ckv3NlPXlrkBonhaZNw3Qd0ZQTXOK93WDtc7VXBIGyIT3tgnmUGmB/pmw4CxnJVQIyYAQLYRN9+ByuzKZYSkK7vsoq8kOUauC/uOGdpvEL4mX1/npLozKjBzPE37eVwy+jfRo8WXRuOUDbQ+tt62FGsy1wQqokCVDntVFqUO9H0grJyZ6QUbFIVCuItc+FZmH3WmnJTFOfCi4vaqOzSFyxLP4bZV/X96wwYmjwTkYBRb9r0c4d3cJHgk6m4koOZKJmYOJtavYhDN0KQqpMCciGoPqvN5aGdbLeRUbFynY1lUcdOi111xcwsp2e//Ha2tH0m47turCjI2orqjSRdVwybpH5yNfcgif+5cdNWgfr4LF+wiS9XZOHS+pI8YP9FFbykCqLQfSSSqRyM9feGGoS6g5U52kcyds7+qxYKJWsc9oBV4v2zu09ix5H8gmuGqEnfrB83ezjmi3MxU3pmgeoptXt1j6n3Y+ftLONjPzGIvYTi0W0CDOfXIp1rtaABatQ9bQrVj5hukWWAA9F7YuilR3KaWv+ZBnH6Z36pFgolb52qOaNBtBUgTQjuPdc+nck8XSIMfpd5f5MUpsCQ8Het+qOa62+8Q6rin9t8cuYCtUkDfpdVuKf+BbERtgMlBQGB/Sw3D3breSsWCjTeuAIoMr9NRLWU/hx3EY0Wh10vAWmYZHdulKM2J+Mdl8yjGndfdM6a5ajTPp6nyrwKnPuBZqOuyTPKbUTGFxgy11SambC/PstAQ05BYmovgX+tG5WxUKRasBxXK2nrhbnaQq9dhSSGX5vlErtTw4XgZy7J22qzrS3uVYuJ2/QLaX2nma+8yBXou3M0vC5um+Y5mAYVXESuDIfjjMqFgq1MYn9EWiQWLuEvof/FHAyCnUTkLWEYNFo3bQpe9PK5uDQTIvExrnWpltc2+PlNACrZrJ4xLgpJ0TZSyADg9T1V1MOb4ZuqJ+fEtXdm1GxOFUXq6Om0ed5JL4huBmof8Xh4pEfPz6YpZ4uEw1Yv2rVkS1dW/PF7qm5r6U7qcRxkp1YWEkhbAE2VCDEoJDAQdyFlgLhpKdsiqUKfBOXTkGZtNkl3gGiqjGaVdEzM4/RQmbr01Co7V3LnMAE2vO8cgrrAbEIhmahXCcDvfkJhlSBEvBJnrXTlgxlyeCaTkbFQpk+BKeCF9a8tHgxftx+o+gzHbhGDt5/xWJVR6JUt69xrPwi9JZP5UqzMPSQ+hnK9TC4EKRv6qZeFfrLSQLaZFXQNgvvZ2Iso2JlujD1GBXk76nhfvtHrDwX6572eEsm5X6IaX0MholZboA+BJfMuD+OlOYQElgCUklNiAOI0L7t7yC7cpqJD1sh9SYBXjCzwG+T0ALf3k5lSLXXQ5kPUCEmgkuB58zEbkh4+ku+rvE03laaQS+LHyZ0u8C1NZ3pWlris9r7m/5AXY/wO8D9QIaW9chXX215AncVEOmhpikym0qG4C3wVVALtCuWzqk4hAwnJKDCTfhy/KfQvwQu5fRm8D0g0q42cvsFP6FRT/jruxLx7juutTkvM2fXtWXkQbk+APpqy16wpb6j7qnnFtfaWfghjs8BNyFj7W+HN6RKlEBeikVhawWxPiEqt4Yb1uvwLFwtj8DpO/HacxYzbbAZJHKha2+6MQgMFhcF0z2pGah5hDtxXz1nrWiq2GHEn4O8XwTzwVTCIVWQBLIqFoW6FtDGMWqKaQXxJ7g/VYY/UUlGgh+AflnnfGPjWlY35RHSTa5d8n9nbErTpogafIS81Ex8HVcy3AhXzd4fcKd6iwVGD8VpQrGMHrMpA9Ek/j4BZGnk9JDKVQIZFYsCHAXjesKqqacVxO8Q1kend6cy6GlLsH8UV6rl9mMzr+/wKrG3zUVOcU89pjwVHhJwzp0F1FdVU1Eylom+571rlotWbv+IsjkO5LSEoWciYbj4EsioWGQvy1aw9F3tf63NOp4KkK7QOb0PtNx9zbwFeRjjVIe4En261Mrg55y7Bfnq80j6oosGIu+GLVrK/CdIZXYiXq2W/iXK9SConF2KYXwokAop233KXLw/J32dAi/od5z8TjQBzf/MnCX4cO5c1zo3530FbBD/kPUzQM1h7UM4hltNN5FXa7403vcYyvUf8HOQceCSdEIaAAkkKnQvGVGwWkG8Ae4joNd5gRRmMH2nl5TWjPZ1e33a1rY/cURGEBz3vFV9TJMQb0hdEkDuq8AyMAOo36Ums1YVvMBJwZtMyqSmupRQU6j+QZlMAJ8DMulzakgDKYGMipWNEQrNATVX8tqL3E9o3NIs8gvSx+Xf7DmL+sMZq5KVMR4R/qWXAMr1ezCJo1IwWWfVVFxOOJVkYNKbXxbcaygjzfIIDR6pEiqyv8+KRWGpeaLN47Wc5Iy8+IzZ4WYu8eECs7fNxw50C5q1tZqFv9wkgHL9G2isS7sSa+GdtkjQ3M7UBLYhoOU9M3CfocyeABqsJhhSMSWQl2JRKFVACx61CaU2jNee7TJw6KPIOfHpd2kYy4kaYFbe3pw/y7U/VtgpUUYOQ4RQLs3nlNn+MfyjgePWtShPQyJB810b2+xIvMbOllCGmuWhjf43wa9y4FBIhZRAzkKlANQXOo3M9UE3dZjx2v/yJ3P8VrhZyddNmWTDa1LmxvkHMFaoKZP12vCE3CWAcmn29bZccRG4E/RsKmqWhwwjb3HsFMpWK8NzKkPO7yJvPBa3njbcA0vz87tN+4SvnzrF10/bKM3hQR2VVbEQegRobEV7tmtmhNZnIVPT9KPDKcT/BkuzSYl+1QSKQSZiPVE53d1lK/wJeEIqggQok/fB98ExJC/TvWZkp7Pq3sBxKd89lPN9YF/CudGEyVvbJtGf2dioVpR3u8aPn7K1DYveRjP/OLPokBtvy6hYCFnNNq0aVls++BrhzUhwLAWmCaY57ezqGxpGMFa1L/gU14qetDGR493Cx4q+YFKZDXVQVpqV/f+Qg6aeqel+E/5UUlNR+4voYfkA5f4ByD6NapN1/886q04loaBc8Sapxs2x9Ta81aLrHGXLtwh2kk0eHPxORsXi9nVcBdGJX0q0D4V0CtAMDKJypI6ar6BU2qJabyvPm+uXbvZs7VuRYwLhaYWQAOW2AqhPpjV2KguNjalp/0pK+iPwa3b9QyiXyp9gd/K1U7fzE6btae8ue9A2Gq03XJfFMX6sdsqXLRqL2XuLl5r7cLyt88/kVLXu6QzmUFrBxW848edxtGL3LNx6CuX3uHmRr51yOsO/q5sK3s+gX3VnXomEJxdFApTnDKBmmtaHXUQmqeUra6/Kn+jV5OunfNEisTss2jkR/MLe/1BKozVmiZOcZwjF70ZgLauy3eJYGdM5RA0dyqZYsixNR/jaOCZYR5SzdHz95CPMeT0Vk9e40137XFkEk+HQKQcJUL5/BSoX9cd2hadzwYPEraFYFvPaV+8Ba6+92LU2P+zam68157oMUq6taQ5xV3H9Wxy/Mo75cxYQHlKUUbEQrEb9/5ZJIjQXRgOZ3budRr9qtPmI2vQa7/Lm7DqEvnqtlYW/cpMA5f0O+B9wNWhPz593xP/D2UztK4k3pHQSyKhY6S4I4lAm7TeoybPNxKm5iJMgP316la2q4U3lZY1S5GKLWWozQ3EhKlECzsXMu/E8OPOexlaJt9tXnvukWCjVRWSozTu1b/t4/IvAanrzw1/whjpjdYQdS/NASx5SokJvZUog2kLzfnfrrLnL102+3dc2Ug+8JgPHb4exymPALwlsoWN+fKOGZwgWkCogqbwUC4XaCWhQ+ELu7WAga+HJuGp34yTJacpS4HfjXFuzFjEmI0KnkiUQ3xQ1tmyqdUS/ZTF3ng0bfoZ9HNWAdOK2Rvn7raPzDOuIbmuroqdbx3uqL4ljQ+g/q2KhSJrGtC3uvchFu+Lq6aQNMh93zg0DWj+Ubjwqat6fZK1NmoXNpSFVqgSwBG7q66fuFMAiY7a04cM2t6rIWIuu2kz+rmMrIlsp3IVRG30mONbl1u29baXKIle+MyoWyjSGhC4B2mFI/aV/4dfy/Kko1CT8megls0ibM/OZTgqPVYAEvGswi13Ag/K7hUHnSRVw1/1iMaNikbIU6wLcbYBGz2XluxClyjZpdpVF7VDX3qQvk3BpSBUtAV/zKGb275iPnVEYmMzxFS2SbMxnUyyZVDVGoTfUvijUiyCXN9Awq7Yf+M9Or8nGQHi8NBLIJ1fXPmupa5/7Zk/YsFXv2Ei/zN5fd3HPYxnD85vXmLlD60j7ePwWdx0wCrh8eCy3czMqFkr0FtgcNOXNuLe9bf0Pb/INDaPzvja8oDIksGrEVrbSzaecNezSZ55RItVDzVfUFhAfkJBWSB9NvLZzJlh5pBvqF9fcvD5poqUj6dI5lvGscPpSOslUeJyvnfwlGxYbZua0yZD18ydjRuqGOFq4qaGcX1G/7gDfBev3M48BvbxfisXNasb7i3AskztOkiL2yaTPGM860Nc1tlj4GxQSwLI3hfJ8xZx71DpNY5Px8Upft896xL+VxL5+wqQdk36t+cp27/qu2dGc1LPvrgnBehvO4Nir1Lc/4VYE5a1Y3NzG4AtAY1h6Wmn2ezcjhXuq+R/mYlp2oNe6BDEeIV/mp00brkCIypSAHzduGMaLXczZeYxNjgWbcif6KKG5tt+9T3gsNmCGZWL/sWjVZ8z7n8TjOCkT0dXQBqZaBa3lJ1oUOZvz/wCiQMSb0fR9sR2od6KP+JsIdgSaia9zygp5KRY3cTjc/wIsBGoTS6E0eVOzL4hKoarOeQhZr3MpIEYMd4Qt9wXZ5DMll1J6h17eYzbWyuOvYvF9vdebH1b1Q3ORB835qyxS9dtez+vlgHNuMZD1+YuccjG4ASwCqTSGgFpBmtx7I/XyfMJlRTkpFoyPA3rt/wTu9SbSdRrHOgghXAx6bmJirqVlpcU6f2Dmk693/ymLxm7HpKhrSSakCpXAcPNVeoOkZz/auRUPVB0faVGvnX3Tn5clljrlgR7aWrKkZS0TuSRZl/AlSFu+HYH3CurnPKD9FbWpDlGlpYyVHEY160LL8p+DTSnSSNwrwXBuWjMvXsHfK7kFT/zLtc3VXgrBngs7WF1j1Dc0qO3c63XhgRb1JUkAABAASURBVDKVQMvsN2kG3mqR6Gd9wzdGJMrR0Rrh8Wm8o7QHv4+caDHbxpzbx6p8Q3wLcev7j3oWNBOfwq+mouqsPjyoh3nqUqYJ5LIXaKbeiq7kT98dUMuK6IElMZkpR736eeuYNurXa11rsy7gBoPdfzJdu/qY99sQ+CNIUGfN037CZMUlwuF/RUiAgaWYRdwfzNm+5t69xzqH3Y46bcUbapHV1o625XYn4Rr7OPax+U71r7eMx1nhftQ9vcmOxdUwzgmkrE1x0i1tOo9jS8HFKNiBQIsvCQ4MZVMscdHK37FASjULN2/SYCFPsSO48CUg+rxF3S1+t72kuAqHqBAJuHlNra6t+evW2Xm5udhlrrX5INfePNe1ty8lfno8vPCxDzVZN+5vay7aN5dRrjuBNoyVRVH73d/SQ4yO8HfBg+BelOunQLsFEywuZVOst8n+AJj/FUh97RKdH7n5zS/xZFOz0sevdNZgw6pmWPirSAm41qbnXevjL5cD89TNeeBn8KL6pX5d9+EfDkCfBseBG1AubcF9K27RLIoZFQtmo+B9mElLMObAf4GcJlXqyUZClwCZUZX3yb5+svZcICqkUAL9kwB1dQX4J9CKC72t9iXFp8FfQOKBbjYKv7bgVjNSu1G9T/2V2X4r3GEcKwipcvcpIZiQAUI7Lz1MAtoSDSc70VyYaebv7TrTu0d9/aQpXeHQE0qgQBJAwX4HNBSk/tU1JKsFmDJ64O0ijcNqksMTxMygXn8LaCyNYN+pT4pFxjJoaEm+Zil/Me/so5HTueYBIFrXfOT2+IaeCoUIJVBgCaBcS8G5JKt97vUQV79sEeFU0mwh9cd+SOSj1PHfAxlICOZPkVwvIROZ3jXjQhYYtWXruVav12dx89po3y1oWsKb62Cu+wMQbYZxo0XTYhQIEUqgGBJAuaRg7bi/BupzaaB5MXnJyq2VHHhNzcFdzWwagaXU+/fAoUB7vOSsL1lPJEEplF6l2j31BTKTZuOYmoDa+HE3mJRp1fL+tTXrbSeroy515lYt8rWTgvQVFyKUQNEkQL39D1CzTy8GDURrSEk7P6fmqcm/2hdTG8xehD5MA2NTT0jnz6hYJCCrifpP2rddnT2loSUkUqivwlRP86aO5wxHZ8ss+g0zl9gXwRv5RS7346foZiz8hRIYCAlQj5eDHwEtU5Hl8Nvkq5YYTjeaQUjfHNsTNyNlVCyu1JSR43G3ACJ1BL8OA3p7Kdx/TKp/g/EQ9dUSszOcHWwRO6r/CZc2BR5Ki5L4bGk5CXPPRwLUbbXENHVPH/bbkmvVN8PpIk0kP5eyzfjwz6ZY6kOpDaq3lqYxPU3GvZrfu7LOw+Nmzoy51rk/M2+3cZnauTXm/I983eSiDSySz0CQHkbCxgORWZhH4SRAHdfsDk0GfgO/Ni+lcWXfS8lBE4ATL4KUyFRvNsXSlJAjSfwUoA5e6rUF9TPGdYaZl0k0ma6739dPyWl8LHlBuTqyNJUrb8Xla3ClfnXK7WhVh/pcKVHdvRkVC2VS525O90u6h7z3I4E+EdP9QB9Crm3ueeZMFsfE1d5f7+sbUbhEsEL/6yuU75Dt7hJInTXfiW747oe7hzIqVvdTu4dQJn2QTnO09EqU6bz7CX0MudZmLZy7LHl5DU3EM/0ejWt0Fn1Dw2hf17gUxdMH1ZKnl5Xz7yQ3apMnvaFTwRLQ10xzZj9vxUKhPgW0JmsludwJRD3XySiu7/AOK6TTaLjS2NwidpIUSYEudNaomTravDuxTK2I2i24i93QU/ESWDt5B1rpoZdJMpjeyUuxUCh9e1griLVltAbSlIk+f4rJPH0GfYmN70fo3DlcGwWi6dY57MfypOCjhN83MP6lgb5EsHz+tY9DnBvkVvFWzviNhH+SgCY1PCNPJuSkWFQMTVDUG+TnJKaVnNW42htuB9wzaG8+iVtQcq1zNF6mgelkuu4YX9soU2giHIntnvDw72o+x38508y+MhdeV3oJUP/1bYLAuqvdoN/IxlVGxSLBYeAiEtEeBzviauLtItwvoEybgP8DPSc1crgw5NqaF5r3WpatZp9h2DiAfpX2Khxhy0ZqapU3/VxMW2DLV05YAjNBAWjlNcGQKlQCGtPSFCixrxUfiXqnUC/IqFhco+ke2tADr+lDZDPw7IQyrV4NTEQxybXPncW41nfIQ306HHeiRYfTTHxzlXmbRYTI+YYGvUXlLxdoUad2sRI/w3lAfV6eEBUpAS3v11iWhpy0mWjWm8imWEpAA8QafT4Khfo++I8iBxTLl6hfd2oiTx/hLXa2jVhvNxRO8Ynozpqy+lokclL/UAUh/tbhb0BWrpJPSAWUAA9EzQvcLZmkxq609CQZ7N3JqFhUjje5VE0+jT53dcaJG1ByCxeuoll4O5lqUxscG20uQh/M8UZ1mq2huC/rr8ygDSY1QVlyDqxKZcZiyE4WCWgDG81012makSHlkj8jVOAZT3Cuq+KmPQ+N3gFonUva432JxEgxmb7Um8CDZj9hcmPiAwvDDiE9rQbFMa0EPcPMa8a9wqN9+q8H6lhJgOzuJeOgn6UlNzL2EBVSBUlgsxRetR1bSrB3b1bF6u1SlEkzLq7luGZdaFNFvAWiiNcmM0GHf7LFXJOt/+GPzXUcRPNP+xkEb8/tyXEcEG1uVb6gZn8lWgAEA8VfIK1QsRBChVGXRZcHpep7Tuz3SbFQKs3+lT1fRoXCz95ePuIhq3a78DZK3cDmRPPuEvOR28wiyr/nDUbMuXKc5aBlCAGv+yM7WVaDcOiWvwSC3Zvvz4fVSK4nUyH0zaIJuOo3nMJ1+kKETO3z8GuhGE5hyC18ZLlraXrdtc3VlKa9zdxfzUxtWxTHk29MWwMQ1YNidqQvs81peMqpnxosntNXMYM3cQ/mw2C5SYC6ro1oArauCzy5uFkVi8Q1J1D7BKgyS4mC5oyWkpxMxWkA6qDnkl/e57j25tmurWk783YhF6vP0vuyFWcb8EYrx1kY2lMR9uOk+ZVxT/hX9hLgIR7nUS8TWcfjgVz+MioWSqXFXL8xM33cIFjCobEj7dmupSR355JJIc5Bwa6xj+wEixn9LKc95HpJ1hW+adpLTnlEy8ASmN71gMrj0vDUUkiAun8m+Y4GIk1ACPr1CmdFRsXi6hFAX9nbFFekN9fXeENpW1+FBxTuxeZlbn7zEzZ27ZMsulRWQa087sFDLHXdTI9jJQtq+peaz2JALYC75AlRnhJAqTQgvCvcaT6sZtD8gTofJZwzZVMsT0r/ALL6jSDxZpBXBlxbcHIPPBB1CxascG3N55ur2pgMHgTBxMgqTPSY6aeUzUwH55zkqL7Wu/Ap+jyFN1aeEGUpATXdgxXsL1N+eRkudEfZFOsjTjqahE8DMh4QLC9yrbPfRcGmW0d0H6yCs1ZzF7vfT5yKZXF1TIl92ocxmKystrvG5ErMUph9TwnwwFMfXesLXfKY9hlMenN3MioWyrQMBJWh11RhRh9N6PX4QBxwzz7+nnV6Tb3SLHyydNtYZ+wyv0ej3miES0vIUW96GWA0oRjrph2L3MIvrvS7WAqegOwKWKLj6b5HuWlXpnggn7+MipUpISqF+go74OqDdBmMCZlSKewxt6BZ3+vSHhOqxM6cNTKgvD/tMFfYnPqWGoWkYQM1rZWAVgt8Rp4Q5SEB6rL0IZgpozrU5wefEsr7rmBgPy76FpAZchLuP0FZEM1CLDhOI+ToEyw591OrbTwMX7mQ1vYEvJTECBRkHrprSODIlJiH8WshL07+lJdioVBa8CgTu8zvmk2umRHao0IDn/nnXqQrGPc6z5y7rCt5Z7f52skndoVL6OGtJbP7eUkWqpFpaCFMCqOUDuWg5l9gUVbL5yrKKrlUKX/OclYsMtbscr2h9PTfgKw0m0AzLs6BgTbC5UVj177YzAVTn0ahaDdiLdSb1srg9zt4kJUQxw5GtsEuwwqHKI0E6sg26I9rF9yFhPtMGRWLAtdG8Ifhakb5MeSiN5T2Wv8cyrQhkHGjk/iyo7hJvq1JzdX7ksxpIeR9vn5qMPcrGT3wDnJ7iVwDQ0YNfm26XzrzOwwMZaJ+az7n+UkZqA98LGWU6EokI/N1MioWiW0I7gHbA2nxt8lwIiiLL/nBU3aq7uCB4IM36iiLxe7xe0zbKvuFRT9DC+Y0I0MZaS3ZVRTwKAVCDJwEkLkGg69IyXEm9bvfL4tsiqX8tGJYT35NY1JlUFzFwLW00E6OiH/NfjBztoNFold6m5nLvVuxfsnCS11VfCh56UGGE9IASmABeW0ERIdSLuryyN8vZKxcZPImGAN+AvSK7FdmpboYY8YfMbtr7hdKFudiutXOv6zU+2QgU31lZRM40hNSY1t/4wmq/itRIRVTAshZ3RxNKAgmEWjbaLXKCpJtRsXKJQcYXA+UlVUwHd+ude7dvK3O4ZgqseE/3zprNOZlJf5pZYC+vxSw8TzyLJvpWAFTg8lFvqr3mrIkg4Vu7S3+ZIRbhFsQUgZ9TggGJ3CxKkWwIy7B8iXX2nyDOacmV8DkTF83+cYg0B+3r9fy1pL5XQr+ZDKN/8K9ENkGFiqCIRVYAmr6achDVm0lfRzl8Ht5CoU+KRaF7oCetPpggma8y7JVKJ6Kmo5rbfq1edOYRTIfd7yf0CghJ8MD71CoambvQ856cjpcfQBNX7vEG1IRJPAaaQbrCjUOW1ClIm3LS7FQJs3Kvo0LNd1DW3rJsKHJpZpfRXSFUMxpJrwMMbqPGou6g33tlDV208U0P4WxrxY/fs/Ni31nKJdG+T9NPnpgyVI1G3nrQ39EhVQICSDPLYG+M6CJtkpSVtlzkX2/TOtKqCdyUiyY2Rpo3KWJBPSFRz1VtUPuCTA1BfS+qpcLyo3cgqYlNAmvN2eJNrXzO2PcuMzvt193c7eP6Y080aqqLvU7NerrlkW9FeQo5dLmJYGRpQ25H17UTIdI4shR8/40pqmmtu76f/jT10k1Nou3sJRVsWBIzRLNFFCBy4Kl+W0TqASXAs2nKixHA5QaTcLnzcW0iDPI8Sv2QUcw3hXEJV36ZWt1rpsMFNu5lQxuANovUeVzI2WgjjZRIfVFAshPcnyUa7V4Ecc062U69fdVBYoBZdhrujC0GQc1bV4DqmqiaDdcjWdp9gWHCkoDnph76rG/WPVwdWTVpDXzfmeahM/7ccGby+lLKuJrpA0fNiCbwFDYK4Gsl5K78pZC309ZBGZhxYXIUQLITRulqsmvNXC66gPkuznQ3v8KFwUZFSuZozp61+PfDGYG3YRR1/LIYnN+Kve3ulk4suMOP37K+lb9sbZ34xDUGfs+/wNGyPogMtPmOXpz4bVnqSQHgdBaKGnkAGSlZTn65kBwtnZSVlwQLpqbTbHUdzqSQj4TlOUK4kJIxrXObTcfOZ20Eh8U8/4rVu2PtZoaT9wSALmv8TfQpGUM15BpJxDdzd/NVJjtcUPKIAFuuLQvAAAJEklEQVRkpDmhkldg/fsjpx9BPZblFW9xKZIpeZhYAWRBy3QaLSi/Z8YTKuHg5N0fNe/UDjeMGjXm7RL7KEIz0Z1hyZ+vnzKgJnDn4tt7X0j2ahpK6Yfj/yp4hoqjjU7whtRTAshGqxrUXQnKS2/9euRZtD5VTx4yKlbPk1PDMK+1RONxZTnL6dMmqdeX2q8l+5jSx8XRsPdYN3NmzLU3HYJSBdNaRlh19GVzMc0693F+vZeJPu4dqD8qwyqgsRY1V7VsRxZZ9Rs6kP1OIDAdDxRLZZsPstAsIH06STtiSUbaUPZp5FcFtCVCX3nP+7o+KRY3oE0nLyG3+UADxG/jVhZF3DEwrAmYz1hn9E5fN/k7vqFhhHV2qsmXnAXhRpp3mvmsJx6n00DcbZoKTP4BhXNOT+AGMp0NApqH5zrKY8j3u5CBPvOkTWT1Rkcstpi/s4EG3nEGlvJSLJjfBsj0/mPYPB/I2nIJrpQLp5LIazNGrdFiMNbDv7vKOmvmWVXV+VZddRR38iIQcdwE/P6TNqxTCol/4AnlUn9PM+J/S+56i66Lq3AT5aIHAsGhR9y7FEp90UNS7n4y/luSMsM7sJRVsWBa05fWwj0L1v4KNB1IFU3mymEwPgOoY8ihyiHX1nwhncNdzduH2Nk1MKs+C+Mc7lTrjHFvTjs+9bgh3mAWCQYYexwbmCCyfgtobFEGDDV1lLG+ZPJryuguMAaouaj4QQvucRioAxoq0S7NGg5ZxQ2rFaJFuNpkUw8fogaeIpmyhGkx+w3O0cCpngh6YmqAeFcKdwtQMsbhqd/k2uc+Z+3N61nE7Yty3W8u/uEF0vXIxac2uYhLkvdb+/ppGyVDJXOQvR5y+tLgAzCh/R9xTBtNapehIym7LRUxGMG97c59aRdkNY+DGTEaZ9X0pD2QjbaN4JTSERUoY+aa/auFX3oiPs+Z6lsdCuMv4x8UxKPdu6ean3Btc9WM+IY5p4+L9f7AcEabvVOm3JLfP+XwZ5jQHiQqF711CZrmbeoTsnp7nUAlHKXI0qP/HHAvawOtpND43uoxRjP1g7WxrIw8/c+oAClkUyxloQJTn2MvCvJREIyp6Niggmttvs+WL77UVkU3NXOPWfpftcVcLnJLf3WBY1UeQFPLtiBpNddx4lTLvwb2F1EZZSUjWJkE/1VA5fE6d6CHSPA21oNFcwBnIgMtWuRweVDGCgKzWkE8CvcuoFdteXBdRC7cwoWr3DOPv+3amiZbdcdI3mCaePwvs/iYksV/zpr9HpP1Fo8Hy+GP8nkH6EsmqnTqZ2ifeH3UQhbDn1Axl4BTQVH49tOnV/kv77+d32PPT3nr/7YH8PlJsDOQtU8P872Qs5rgMpjpyx+3cr87gNeB+lYcLh/KqFi5sMmNrw+6BlFzuaZSznEtLStda9NUc/4QjBzap/CxLt4j7jlM9IFptyu61B4q2RtgD/iQtVBNo8ReH2Zq1mtRp1YoX0CZnQP6bYjx3565tp8w9QR766OLLLbqcYtUP2R18y/0dVP7tKocng4DF8C/+vLagkw8E4yTNoaVFXof7lEGi3hkOf71S7EQgJ4iGiAONjosx3vsN0+udW67a2+aYRHT/n9aeqA0sYxGrvJ7TC3LNVNUPM0iOQdGpwH1w3Di5Pi/HFwJHqEM54EZ+PMmX7v/GHvx6fMs5n+EhfUii0a1bk2zHWaaxW7y9VO0xMiy/ch/RxDnhXM1a0L8fQm/eMUxDX0ciGdf7usSoA01CZYv5a1YCEBmTpnftaT8MW5Ns67lxzu4CSPHIiqQmlvJqTF+W4v4I33jkYFlqrgCyDN1KmAneB78CqiSqpMvC6L6zSp77a0xgWRnUq4BSdE2JKAyFkbg17Wc1oMiHbtaNMZ4pk9nIFnXnLvET5q2c4+rEKFXutNJ920gQ5EUB8usiZd1OV9Nv+W4DIXYWvD+efAQqJhhHQkX/nMjhKAmhpZSfMAVGvfRknLteaHlJUQNfoqb6J1dT9Mwlrhbf7INX6Xt1RLBMv6nYn4XaOW3KruaWhrsV58llWtVbvXPND4kPMVBWRf1xsCbQj72cEpoTW8sNtY6oummXCnd+7lA/T+cLtKuVeILZbWN4HVdIAXrOqFSPDkpFgqlFcQ3cVNqBskqoxkLJxM+ihs/DOjJQnBokGttvtmcHd91t+8vucrXNapp1RVVzh7K61WgZSlaQKn7ELTlgt5kPVlXi+QWIvVxP5xupNkr3SLWCHi33Rpx3SM021z5C1pJofV+18JfRSpUcGtZFQul0viO5gSqs6jOrp4o+s7vrdx8S5DQUHNdWzPje04PmeDWz/L1jWpqBeGydyk/rV64A1efYZIBamuYVhlLmdTMJ9hP2mmHdM3Ii0hVwwPKa2fln4SsmRyqfMqoWCiVmnh6S8mipEHh4xGAnih/wVXbuPIl0I87wCT/S5qEFwD1Matxz/a1jccimHSVqR85Ff9SynM50PDKP3GfA5NBF8FBz2ab8dbWuJJl+Hn7w0va97/bKSSqbR3+hqu89MbqdnwwBDIqVvIG1bHUbIRxCEJPtmR0ZToF53qzda6mgv08mW41/iusdvK4ZHjQOJS9+l097scfx8NED5Ue8cmgt6etystEnowYOk42xdKcq0MQqkycg3YFcX+KW181saj7nnmXtBTaxijXPb5uH73l+5N0+V/bUf2COXezeUujXO6v5qJHxC2p5X8nBecwo2KhUB+Dsh8zKLhU8kwwvp2ar5rCZclty9y2Zqt+o9kIxA1acs/M/ojm8OmuvXm4mdfeKFKwj63K7Un8dq7tcc2QGLT3n+nGMipWpgvTHCtMZzdNwpUQ5eb/XktNNBPjrSS/E+ytj/QhhmRwcDuube62rq15OBjh5jU9ObjvNvvdFVKxNIXlFLIUcIYe8ZSeY+aOMbOVNI/+DDTPkGBIQ00CfVGstDJyzi0GNwtpTxgikXHl8rHtrDM6CX/FzBQYIsUzYLdZMMUaMI4rICPX/tjfNUO+AlgNWSySBELFKpJgw2SHtgRCxRra5R/efZEkECpWkQQbJlsSCZRNpqFilU1RhIwMJgmEijWYSjO8l7KRQKhYZVMUISODSQL/HwAA///IrI7GAAAABklEQVQDAFluH3dBFSdtAAAAAElFTkSuQmCC";
const {
  Button,
  Icon,
  MicroLabel
} = window.KSConsultingDesignSystem_cfa9b6;
const NAV = [{
  id: "home",
  label: "Início"
}, {
  id: "services",
  label: "Serviços"
}, {
  id: "cases",
  label: "Cases"
}, {
  id: "contact",
  label: "Contato"
}];
function Wordmark({
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: KS_MARK,
    alt: "",
    style: {
      height: 42
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: 22,
      fontWeight: 600,
      letterSpacing: "-.02em",
      color: "var(--text-primary)"
    }
  }, "KS ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      color: "var(--text-secondary)"
    }
  }, "Consulting")));
}
function Navbar({
  page,
  go
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "rgba(8,14,28,.72)",
      backdropFilter: "var(--blur-glass)",
      borderBottom: "1px solid var(--border-soft)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--pad-desktop)",
      height: 76,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    onClick: () => go("home")
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 32
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("button", {
    key: n.id,
    onClick: () => go(n.id),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "6px 0",
      fontFamily: "var(--font-body)",
      fontSize: 15,
      fontWeight: 500,
      color: page === n.id ? "var(--text-primary)" : "var(--text-muted)",
      borderBottom: `2px solid ${page === n.id ? "var(--primary)" : "transparent"}`,
      transition: "color var(--duration-hover) var(--ease-standard)"
    }
  }, n.label))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => go("contact"),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    })
  }, "Come\xE7ar agora")));
}
function Footer({
  go
}) {
  const cols = [{
    t: "Serviços",
    i: ["Tráfego pago", "SEO técnico", "Social media", "Branding & web"]
  }, {
    t: "Empresa",
    i: ["Sobre a KS", "Cases", "Metodologia", "Carreiras"]
  }, {
    t: "Contato",
    i: ["contato@ksconsulting.com.br", "+55 11 4000-0000", "São Paulo — SP"]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: "1px solid var(--border-soft)",
      background: "var(--bg-secondary)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "64px var(--pad-desktop) 32px",
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    onClick: () => go("home")
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: "var(--text-muted)",
      maxWidth: 260,
      lineHeight: 1.6
    }
  }, "Consultoria de performance digital para opera\xE7\xF5es que precisam de crescimento previs\xEDvel."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, ["linkedin", "instagram", "youtube"].map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      width: 36,
      height: 36,
      borderRadius: 10,
      border: "1px solid var(--border)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s,
    size: 16
  }))))), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.t,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(MicroLabel, null, c.t), c.i.map(x => /*#__PURE__*/React.createElement("span", {
    key: x,
    style: {
      fontSize: 14,
      color: "var(--text-secondary)"
    }
  }, x))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "20px var(--pad-desktop) 40px",
      borderTop: "1px solid var(--border-soft)",
      display: "flex",
      justifyContent: "space-between",
      fontSize: 12,
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 KS Consulting. Todos os direitos reservados."), /*#__PURE__*/React.createElement("span", null, "Privacidade \xB7 Termos")));
}
function Section({
  children,
  glow = "none",
  pad = "96px 32px",
  id
}) {
  const {
    GridBackdrop
  } = window.KSConsultingDesignSystem_cfa9b6;
  return /*#__PURE__*/React.createElement(GridBackdrop, {
    glow: glow,
    id: id,
    style: {
      padding: pad
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto"
    }
  }, children));
}
function SectionHead({
  index,
  eyebrow,
  title,
  accent,
  sub,
  align = "left"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      marginBottom: 48,
      alignItems: align === "center" ? "center" : "flex-start",
      textAlign: align
    }
  }, /*#__PURE__*/React.createElement(MicroLabel, {
    index: index
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-h2)",
      maxWidth: 720
    }
  }, title, " ", accent && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--primary-light)"
    }
  }, accent)), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: "var(--text-secondary)",
      maxWidth: 620
    }
  }, sub));
}
Object.assign(window, {
  Navbar,
  Footer,
  Wordmark,
  Section,
  SectionHead
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactScreen.jsx
try { (() => {
const {
  Button,
  Card,
  Icon,
  MicroLabel,
  Input,
  Select,
  Checkbox,
  Radio,
  Dialog,
  Toast,
  Badge
} = window.KSConsultingDesignSystem_cfa9b6;
function ContactScreen() {
  const [seg, setSeg] = React.useState("E-commerce");
  const [sent, setSent] = React.useState(false);
  const [confirm, setConfirm] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Section, {
    glow: "both",
    pad: "80px 32px 96px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 64,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(MicroLabel, {
    index: "04"
  }, "Contato"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--text-h1)"
    }
  }, "Diagn\xF3stico gratuito, ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--secondary)"
    }
  }, "30 minutos"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-body-lg)",
      color: "var(--text-secondary)",
      maxWidth: 460
    }
  }, "Um especialista s\xEAnior olha seus canais, seu funil e seus n\xFAmeros \u2014 e diz o que faria nos primeiros 90 dias. Sem apresenta\xE7\xE3o comercial."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      paddingTop: 8
    }
  }, [["mail", "contato@ksconsulting.com.br"], ["phone", "+55 11 4000-0000"], ["map-pin", "Av. Faria Lima, 1500 — São Paulo, SP"], ["clock", "Seg a sex, 9h às 19h"]].map(([ic, t]) => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center",
      fontSize: 15,
      color: "var(--text-secondary)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 18,
    color: "var(--primary-light)"
  }), t))), /*#__PURE__*/React.createElement(Card, {
    padding: 24,
    style: {
      display: "flex",
      gap: 16,
      alignItems: "center",
      maxWidth: 460
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 22,
    color: "var(--secondary)"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: "var(--text-secondary)"
    }
  }, "Seus dados ficam com o time de atendimento. Nada de listas, nada de disparo em massa."))), /*#__PURE__*/React.createElement(Card, {
    variant: "elevated",
    padding: 40,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-h4)"
    }
  }, "Agendar diagn\xF3stico"), /*#__PURE__*/React.createElement(Badge, {
    tone: "blue"
  }, "1 dia \xFAtil")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nome",
    placeholder: "Seu nome"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Empresa",
    placeholder: "Nome da empresa"
  })), /*#__PURE__*/React.createElement(Input, {
    label: "E-mail corporativo",
    type: "email",
    placeholder: "voce@empresa.com.br",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: 18
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "WhatsApp",
    placeholder: "(11) 90000-0000"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Investimento mensal em m\xEDdia",
    options: ["Até R$ 5 mil", "R$ 5–20 mil", "R$ 20–50 mil", "Acima de R$ 50 mil"]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: "var(--text-secondary)"
    }
  }, "Segmento"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 20,
      flexWrap: "wrap"
    }
  }, ["Serviço", "E-commerce", "Indústria", "B2B"].map(v => /*#__PURE__*/React.createElement(Radio, {
    key: v,
    name: "segmento",
    value: v,
    label: v,
    checked: seg === v,
    onChange: setSeg
  })))), /*#__PURE__*/React.createElement(Checkbox, {
    defaultChecked: true,
    label: "Aceito receber o diagn\xF3stico e materiais por e-mail"
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    fullWidth: true,
    onClick: () => setConfirm(true),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Solicitar diagn\xF3stico")))), /*#__PURE__*/React.createElement(Dialog, {
    open: confirm,
    onClose: () => setConfirm(false),
    title: "Confirmar solicita\xE7\xE3o",
    description: "Enviaremos o convite de agenda para o e-mail informado.",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setConfirm(false)
    }, "Agora n\xE3o"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => {
        setConfirm(false);
        setSent(true);
      }
    }, "Confirmar"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center",
      padding: 16,
      background: "rgba(0,102,255,.08)",
      border: "1px solid rgba(32,164,255,.25)",
      borderRadius: "var(--radius-md)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar-check",
    size: 20,
    color: "var(--primary-light)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: "var(--text-secondary)"
    }
  }, "Slots dispon\xEDveis nos pr\xF3ximos 3 dias \xFAteis."))), sent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      right: 24,
      bottom: 24,
      zIndex: 80
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    title: "Solicita\xE7\xE3o enviada",
    message: "Um especialista responde em at\xE9 1 dia \xFAtil.",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "check-circle",
      size: 18
    }),
    onClose: () => setSent(false)
  })));
}
Object.assign(window, {
  ContactScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  Icon,
  MicroLabel,
  StatBlock,
  Tag
} = window.KSConsultingDesignSystem_cfa9b6;
function Sparkline({
  color = "var(--secondary)",
  height = 120
}) {
  const pts = "0,95 60,78 120,84 180,58 240,64 300,36 360,42 420,18 480,8";
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 480 110",
    preserveAspectRatio: "none",
    style: {
      width: "100%",
      height
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "sparkFill",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "rgba(186,252,4,.22)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "rgba(186,252,4,0)"
  }))), /*#__PURE__*/React.createElement("polygon", {
    points: `${pts} 480,110 0,110`,
    fill: "url(#sparkFill)"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: pts,
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinejoin: "round",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "480",
    cy: "8",
    r: "4",
    fill: color
  }));
}
function HeroPanel() {
  return /*#__PURE__*/React.createElement(Card, {
    variant: "elevated",
    padding: 24,
    style: {
      width: "100%",
      maxWidth: 460,
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(MicroLabel, {
    index: "ROI"
  }, "\xDAltimos 90 dias"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neon",
    dot: true
  }, "Ao vivo")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 32,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: 312,
    suffix: "%",
    size: "sm",
    tone: "neon",
    label: "Retorno sobre investimento",
    animate: true
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: 1284,
    size: "sm",
    label: "Leads qualificados / m\xEAs",
    animate: true
  })), /*#__PURE__*/React.createElement(Sparkline, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 11,
      color: "var(--text-muted)",
      fontFamily: "var(--font-mono)",
      marginTop: 8
    }
  }, ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN"].map(m => /*#__PURE__*/React.createElement("span", {
    key: m
  }, m))));
}
function Hero({
  go
}) {
  return /*#__PURE__*/React.createElement(Section, {
    glow: "both",
    pad: "96px 32px 80px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.05fr .95fr",
      gap: 64,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "blue",
    dot: true,
    style: {
      alignSelf: "flex-start"
    }
  }, "Consultoria de performance digital"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--text-display-lg)",
      letterSpacing: "var(--tracking-display)",
      lineHeight: "var(--leading-display)"
    }
  }, "Transforme sua opera\xE7\xE3o em ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--primary-light)"
    }
  }, "resultado"), " mensur\xE1vel."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-body-lg)",
      color: "var(--text-secondary)",
      maxWidth: 520
    }
  }, "Estrat\xE9gia, m\xEDdia e dados no mesmo time. Montamos a opera\xE7\xE3o de aquisi\xE7\xE3o que a sua receita precisa \u2014 e provamos cada real investido."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go("contact"),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Come\xE7ar agora"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => go("cases")
  }, "Ver cases")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 48,
      paddingTop: 16,
      borderTop: "1px solid var(--border-soft)"
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: 500,
    suffix: "+",
    size: "sm",
    label: "Projetos entregues",
    animate: true
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: 98,
    suffix: "%",
    size: "sm",
    tone: "neon",
    label: "Reten\xE7\xE3o de clientes",
    animate: true
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "24/7",
    size: "sm",
    tone: "cyan",
    label: "Monitoramento de campanhas"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(HeroPanel, null))));
}
function Logos() {
  const names = ["FARMÁCIA CAMPINAS", "REDE MENOR PREÇO", "PRAIA COMPRIDA", "ÁGAPE", "NOVA LOG"];
  return /*#__PURE__*/React.createElement(Section, {
    glow: "none",
    pad: "40px 32px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 32,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      letterSpacing: ".14em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, "Confiam na KS"), names.map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: 15,
      fontWeight: 600,
      letterSpacing: ".06em",
      color: "var(--text-muted)",
      opacity: .7
    }
  }, n))));
}
function Pillars() {
  const items = [{
    i: "01",
    t: "Diagnóstico",
    d: "Mapeamos canais, funil e unit economics antes de investir o primeiro real.",
    ic: "search"
  }, {
    i: "02",
    t: "Operação",
    d: "Mídia, criativo e CRO rodando em ciclos semanais com meta de receita.",
    ic: "zap",
    neon: true
  }, {
    i: "03",
    t: "Escala",
    d: "O que prova retorno vira orçamento. O que não prova, sai do ar.",
    ic: "trending-up"
  }];
  return /*#__PURE__*/React.createElement(Section, {
    glow: "blue"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    index: "01",
    eyebrow: "Metodologia",
    title: "Tr\xEAs etapas para um crescimento",
    accent: "previs\xEDvel",
    sub: "Nada de retainer sem escopo. Cada etapa tem entreg\xE1vel, prazo e m\xE9trica de sa\xEDda."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 24
    }
  }, items.map(x => /*#__PURE__*/React.createElement(Card, {
    key: x.i,
    interactive: true,
    variant: x.neon ? "featured" : "default",
    padding: 32,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      minHeight: 240
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 12,
      background: "rgba(0,102,255,.10)",
      border: "1px solid rgba(32,164,255,.30)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--primary-light)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: x.ic,
    size: 20
  })), /*#__PURE__*/React.createElement(MicroLabel, {
    index: x.i,
    tone: x.neon ? "neon" : "blue"
  }, "Etapa"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-h4)"
    }
  }, x.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: "var(--text-secondary)"
    }
  }, x.d), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: "auto",
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      fontSize: 14,
      fontWeight: 600,
      color: "var(--primary-light)"
    }
  }, "Saiba mais ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16
  }))))));
}
function ResultBand() {
  return /*#__PURE__*/React.createElement(Section, {
    glow: "cyan"
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "featured",
    padding: 48,
    style: {
      display: "grid",
      gridTemplateColumns: "1fr auto",
      gap: 48,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(MicroLabel, {
    index: "Case",
    tone: "neon",
    separator: "/"
  }, "Rede Menor Pre\xE7o"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-h3)",
      maxWidth: 520
    }
  }, "De R$ 180 mil para ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--secondary)"
    }
  }, "R$ 1,1 milh\xE3o"), " em receita atribu\xEDda em 11 meses."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Tag, null, "Tr\xE1fego pago"), /*#__PURE__*/React.createElement(Tag, null, "CRO"), /*#__PURE__*/React.createElement(Tag, null, "Automa\xE7\xE3o"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: 512,
    suffix: "%",
    size: "md",
    tone: "neon",
    label: "Receita atribu\xEDda",
    animate: true
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: 41,
    prefix: "\u2212",
    suffix: "%",
    size: "md",
    label: "Custo por aquisi\xE7\xE3o",
    animate: true
  }))));
}
function CtaBand({
  go
}) {
  return /*#__PURE__*/React.createElement(Section, {
    glow: "blue",
    pad: "112px 32px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 28,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(MicroLabel, {
    index: "04",
    style: {
      alignSelf: "center"
    }
  }, "Pr\xF3ximo passo"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-h1)",
      maxWidth: 760
    }
  }, "Vamos olhar seus n\xFAmeros ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--secondary)"
    }
  }, "juntos"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: "var(--text-secondary)",
      maxWidth: 520
    }
  }, "Diagn\xF3stico gratuito de 30 minutos com um especialista s\xEAnior. Sem apresenta\xE7\xE3o comercial."), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go("contact"),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Agendar diagn\xF3stico")));
}
function HomeScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    go: go
  }), /*#__PURE__*/React.createElement(Logos, null), /*#__PURE__*/React.createElement(Pillars, null), /*#__PURE__*/React.createElement(ResultBand, null), /*#__PURE__*/React.createElement(CtaBand, {
    go: go
  }));
}
Object.assign(window, {
  HomeScreen,
  Sparkline
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServicesScreen.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  Icon,
  MicroLabel,
  StatBlock,
  Tabs,
  Tag,
  Switch,
  Tooltip,
  IconButton
} = window.KSConsultingDesignSystem_cfa9b6;
const SERVICES = [{
  ic: "target",
  t: "Tráfego pago",
  d: "Google, Meta e LinkedIn Ads geridos por receita — não por impressão.",
  tags: ["Google Ads", "Meta Ads", "LinkedIn"]
}, {
  ic: "search",
  t: "SEO técnico",
  d: "Arquitetura, performance e conteúdo para captar demanda que já existe.",
  tags: ["Técnico", "Conteúdo"]
}, {
  ic: "megaphone",
  t: "Social media",
  d: "Conteúdo com pauta comercial, não calendário de datas comemorativas.",
  tags: ["Estratégia", "Produção"]
}, {
  ic: "sparkles",
  t: "Branding & web",
  d: "Identidade e páginas construídas para converter, medidas desde o dia um.",
  tags: ["Identidade", "Landing pages"]
}, {
  ic: "bar-chart-3",
  t: "Dados & BI",
  d: "Um painel único ligando mídia, CRM e receita realizada.",
  tags: ["Dashboards", "Atribuição"]
}, {
  ic: "settings",
  t: "Automação",
  d: "CRM, nutrição e rotinas comerciais que devolvem horas ao time.",
  tags: ["CRM", "Workflows"]
}];
const PLANS = [{
  n: "Diagnóstico",
  p: "R$ 4.900",
  per: "único",
  d: "Auditoria completa de canais, funil e atribuição.",
  f: ["Auditoria de mídia", "Mapa de funil", "Plano de 90 dias"],
  v: "default"
}, {
  n: "Operação",
  p: "R$ 18.500",
  per: "/mês",
  d: "Time dedicado rodando aquisição fim a fim.",
  f: ["Mídia + criativo + CRO", "Squad dedicado", "Painel de receita", "Rituais semanais"],
  v: "featured",
  badge: "Mais contratado"
}, {
  n: "Enterprise",
  p: "Sob consulta",
  per: "",
  d: "Múltiplas unidades, BI próprio e governança.",
  f: ["Multi-marca", "BI dedicado", "SLA 24/7"],
  v: "default"
}];
function ServicesScreen({
  go
}) {
  const [filter, setFilter] = React.useState("Todos");
  const [annual, setAnnual] = React.useState(true);
  const shown = filter === "Todos" ? SERVICES : SERVICES.filter(s => s.t === filter);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    glow: "both",
    pad: "80px 32px 56px"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    index: "02",
    eyebrow: "Servi\xE7os",
    title: "Um time s\xF3, respons\xE1vel pelo",
    accent: "n\xFAmero final",
    sub: "Voc\xEA contrata resultado, n\xE3o horas. Escolha o ponto de partida e escale conforme a opera\xE7\xE3o prova retorno."
  }), /*#__PURE__*/React.createElement(Tabs, {
    items: ["Todos", ...SERVICES.map(s => s.t)],
    value: filter,
    onChange: setFilter
  })), /*#__PURE__*/React.createElement(Section, {
    glow: "none",
    pad: "0 32px 96px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 24
    }
  }, shown.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.t,
    interactive: true,
    padding: 28,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      minHeight: 230
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 12,
      background: "rgba(0,217,255,.08)",
      border: "1px solid rgba(0,217,255,.25)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--accent)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.ic,
    size: 20
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-h4)"
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: "var(--text-secondary)"
    }
  }, s.d), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      marginTop: "auto"
    }
  }, s.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t))))))), /*#__PURE__*/React.createElement(Section, {
    glow: "blue"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    index: "03",
    eyebrow: "Planos",
    title: "Contratos claros, escopo",
    accent: "fechado",
    align: "center"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: 40,
      gap: 16,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    tone: "neon",
    checked: annual,
    onChange: setAnnual,
    label: "Compromisso anual (\u221220%)"
  }), /*#__PURE__*/React.createElement(Tooltip, {
    content: "Contratos anuais travam o valor por 12 meses"
  }, /*#__PURE__*/React.createElement(IconButton, {
    size: "sm",
    label: "Ajuda",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "info",
      size: 15
    })
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 24,
      alignItems: "start"
    }
  }, PLANS.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.n,
    variant: p.v,
    padding: 32,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(MicroLabel, {
    tone: p.v === "featured" ? "neon" : "blue"
  }, p.n), p.badge && /*#__PURE__*/React.createElement(Badge, {
    tone: "neon"
  }, p.badge)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: 36,
      fontWeight: 700,
      color: "var(--text-primary)",
      letterSpacing: "-.03em"
    }
  }, annual && p.p.startsWith("R$ 1") ? "R$ 14.800" : p.p), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: "var(--text-muted)"
    }
  }, p.per)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: "var(--text-secondary)"
    }
  }, p.d), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      paddingTop: 8,
      borderTop: "1px solid var(--border-soft)"
    }
  }, p.f.map(f => /*#__PURE__*/React.createElement("span", {
    key: f,
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center",
      fontSize: 14,
      color: "var(--text-secondary)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    color: p.v === "featured" ? "var(--secondary)" : "var(--primary-light)"
  }), f))), /*#__PURE__*/React.createElement(Button, {
    variant: p.v === "featured" ? "primary" : "secondary",
    fullWidth: true,
    onClick: () => go("contact")
  }, p.p === "Sob consulta" ? "Falar com especialista" : "Começar agora"))))));
}
Object.assign(window, {
  ServicesScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServicesScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.GridBackdrop = __ds_scope.GridBackdrop;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.MicroLabel = __ds_scope.MicroLabel;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
