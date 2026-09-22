import * as React from "react";

/** Section wrapper that paints the house background: deep ink + hairline tech grid + radial glow. */
export interface GridBackdropProps {
  children?: React.ReactNode;
  /** Radial light behind the content. @default "blue" */
  glow?: "blue" | "cyan" | "both" | "none";
  /** Draw the hairline grid. @default true */
  grid?: boolean;
  /** Grid cell size in px (48–64 is the house range). @default 56 */
  size?: number;
  style?: React.CSSProperties;
}

export declare function GridBackdrop(props: GridBackdropProps): JSX.Element;
