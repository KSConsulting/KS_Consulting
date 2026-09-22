import * as React from "react";

/** Glass surface that holds every block of content — services, metrics, testimonials, pricing. */
export interface CardProps {
  children?: React.ReactNode;
  /** `default` glass, `elevated` solid graphite, `outline` hairline only, `featured` blue-lit, `neon` lime fill (max one per section). @default "default" */
  variant?: "default" | "elevated" | "outline" | "featured" | "neon";
  /** Inner padding in px. @default 32 */
  padding?: number;
  /** Extra glow ring. @default "none" */
  glow?: "none" | "blue" | "green" | "cyan";
  /** Enables the 4px hover lift + border light-up. @default false */
  interactive?: boolean;
  style?: React.CSSProperties;
}

export declare function Card(props: CardProps): JSX.Element;
