import * as React from "react";

/** Selectable/removable pill for filters, service categories and multi-select input. */
export interface TagProps {
  children?: React.ReactNode;
  /** Selected state — blue border + tint. @default false */
  active?: boolean;
  /** Shows a × affordance. */
  onRemove?: (e: React.MouseEvent) => void;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

export declare function Tag(props: TagProps): JSX.Element;
