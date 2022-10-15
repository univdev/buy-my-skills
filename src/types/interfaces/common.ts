import { CSSProperties, ReactElement } from "react";

export interface ComponentProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
  children?: ReactElement | ReactElement[];
};