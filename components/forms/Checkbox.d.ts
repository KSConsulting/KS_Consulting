import * as React from "react";

/** Multi-select control — consent lines, feature opt-ins, filter lists. */
export interface CheckboxProps {
  label?: React.ReactNode;
  /** Controlled state. */
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (next: boolean) => void;
  style?: React.CSSProperties;
}

export declare function Checkbox(props: CheckboxProps): JSX.Element;
