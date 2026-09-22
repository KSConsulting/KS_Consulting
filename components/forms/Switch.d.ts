import * as React from "react";

/** Instant on/off toggle — pricing period, dashboard preferences, feature flags. */
export interface SwitchProps {
  label?: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  /** Track colour when on. @default "blue" */
  tone?: "blue" | "neon";
  disabled?: boolean;
  onChange?: (next: boolean) => void;
  style?: React.CSSProperties;
}

export declare function Switch(props: SwitchProps): JSX.Element;
