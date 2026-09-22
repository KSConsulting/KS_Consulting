import * as React from "react";

/** Single-choice control within a named group. */
export interface RadioProps {
  label?: React.ReactNode;
  /** Controlled selected state. */
  checked?: boolean;
  /** Group name shared by the set. */
  name?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (value?: string) => void;
  style?: React.CSSProperties;
}

export declare function Radio(props: RadioProps): JSX.Element;
