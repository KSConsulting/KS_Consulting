import * as React from "react";

/** Oversized number with a small caption — the brand's core proof device (98%, +500, 24/7). */
export interface StatBlockProps {
  /** Number (count-up capable) or a literal string like "24/7". */
  value: number | string;
  prefix?: string;
  suffix?: string;
  /** Short caption under the figure. */
  label?: string;
  /** @default "white" */
  tone?: "white" | "blue" | "neon" | "cyan";
  /** @default "lg" */
  size?: "sm" | "md" | "lg" | "xl";
  /** Count from 0 on mount (numeric values only). @default false */
  animate?: boolean;
  style?: React.CSSProperties;
}

export declare function StatBlock(props: StatBlockProps): JSX.Element;
