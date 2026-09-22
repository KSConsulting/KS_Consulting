import * as React from "react";

/**
 * Single-line text field with label, hint and error slots.
 */
export interface InputProps {
  label?: string;
  /** Helper text under the field. */
  hint?: string;
  /** Error message — replaces hint and turns the border red. */
  error?: string;
  /** Leading glyph, usually an <Icon />. */
  icon?: React.ReactNode;
  /** @default "text" */
  type?: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
}

export declare function Input(props: InputProps): JSX.Element;
