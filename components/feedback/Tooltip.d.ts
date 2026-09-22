import * as React from "react";

/** Hover explainer for icon-only controls and metric definitions. */
export interface TooltipProps {
  /** The trigger element. */
  children?: React.ReactNode;
  /** Tooltip text — one short line. */
  content?: React.ReactNode;
  /** @default "top" */
  placement?: "top" | "bottom" | "left" | "right";
  style?: React.CSSProperties;
}

export declare function Tooltip(props: TooltipProps): JSX.Element;
