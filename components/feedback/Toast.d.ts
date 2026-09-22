import * as React from "react";

/** Transient confirmation or error, bottom-right of the viewport. */
export interface ToastProps {
  title?: string;
  message?: string;
  /** Colour of the status rail. @default "info" */
  tone?: "info" | "success" | "error" | "neutral";
  icon?: React.ReactNode;
  onClose?: () => void;
  style?: React.CSSProperties;
}

export declare function Toast(props: ToastProps): JSX.Element;
