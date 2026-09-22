import * as React from "react";

/**
 * The `01 — PERFORMANCE` eyebrow that opens sections and numbers steps.
 */
export interface MicroLabelProps {
  children?: React.ReactNode;
  /** Leading index, e.g. "01". */
  index?: string;
  /** Colour of the index. @default "blue" */
  tone?: "blue" | "neon" | "cyan" | "muted";
  /** Glyph between index and label. @default "—" */
  separator?: string;
  style?: React.CSSProperties;
}

export declare function MicroLabel(props: MicroLabelProps): JSX.Element;
