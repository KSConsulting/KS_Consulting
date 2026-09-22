import * as React from "react";

/**
 * Switches between sibling views — case-study categories, dashboard periods, pricing modes.
 */
export interface TabsProps {
  /** Strings, or {label, value} pairs. */
  items?: Array<string | { label: string; value: string }>;
  /** Controlled selected value. */
  value?: string;
  defaultValue?: string;
  /** @default "underline" */
  variant?: "underline" | "pill";
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
}

export declare function Tabs(props: TabsProps): JSX.Element;
