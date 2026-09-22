import * as React from "react";

/**
 * Renders a Lucide glyph. Requires the Lucide UMD script on the page:
 * <script src="https://unpkg.com/lucide@0.469.0/dist/umd/lucide.js"></script>
 */
export interface IconProps {
  /** Lucide icon name, kebab-case, e.g. "arrow-up-right". */
  name: string;
  /** Pixel box. @default 20 */
  size?: number;
  /** @default 1.75 */
  strokeWidth?: number;
  /** @default "currentColor" */
  color?: string;
  style?: React.CSSProperties;
}

export declare function Icon(props: IconProps): JSX.Element;
