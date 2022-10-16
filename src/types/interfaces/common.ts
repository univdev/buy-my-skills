import { CSSProperties, ReactElement, ReactNode } from "react";

export interface ComponentProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode | ReactNode[];
};