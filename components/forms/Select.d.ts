import * as React from "react";

/** Native dropdown styled to match Input — same 48px box, radius and focus behaviour. */
export interface SelectProps {
  label?: string;
  /** Strings, or {label, value} pairs. */
  options?: Array<string | { label: string; value: string }>;
  hint?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  style?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
}

export declare function Select(props: SelectProps): JSX.Element;
