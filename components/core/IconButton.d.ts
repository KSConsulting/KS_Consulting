import * as React from "react";

/** Square action button holding a single glyph — toolbars, carousels, close affordances. */
export interface IconButtonProps {
  /** The glyph, normally an <Icon /> element. */
  icon?: React.ReactNode;
  children?: React.ReactNode;
  /** @default "secondary" */
  variant?: "primary" | "secondary" | "neon" | "ghost";
  /** 36 / 44 / 52 px. @default "md" */
  size?: "sm" | "md" | "lg";
  /** Accessible name — required, the button has no text. */
  label?: string;
  /** @default false */
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

export declare function IconButton(props: IconButtonProps): JSX.Element;
