import * as React from "react";

/**
 * Modal panel over a blurred scrim — contact forms, confirmations, plan details.
 */
export interface DialogProps {
  /** @default true */
  open?: boolean;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  /** Action row, normally two Buttons. */
  footer?: React.ReactNode;
  /** Shows the × and enables scrim dismiss. */
  onClose?: () => void;
  /** Max width in px. @default 520 */
  width?: number;
  style?: React.CSSProperties;
}

export declare function Dialog(props: DialogProps): JSX.Element;
