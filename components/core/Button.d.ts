import * as React from "react";

/**
 * Primary action control. Blue gradient = the default action; neon lime is reserved
 * for a single opportunity/result CTA per view.
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** Visual weight. @default "primary" */
  variant?: "primary" | "secondary" | "neon" | "ghost" | "link";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  /** @default false */
  fullWidth?: boolean;
  /** @default false */
  disabled?: boolean;
  /** Renders an <a> instead of a <button>. */
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

export declare function Button(props: ButtonProps): JSX.Element;
