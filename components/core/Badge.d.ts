import * as React from "react";

/** Pill status marker — "Novo", "Em alta", plan labels, live indicators. */
export interface BadgeProps {
  children?: React.ReactNode;
  /** @default "blue" */
  tone?: "blue" | "neon" | "cyan" | "neutral" | "danger";
  /** @default "soft" */
  variant?: "soft" | "solid";
  /** Leading status dot. @default false */
  dot?: boolean;
  style?: React.CSSProperties;
}

export declare function Badge(props: BadgeProps): JSX.Element;
