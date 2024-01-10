/* eslint-disable @typescript-eslint/no-explicit-any */
import { PropsWithChildren, ReactNode } from "react";
import { SerializedStyles } from "@emotion/react";

export interface FullWidthWrapperProps extends PropsWithChildren {
  className?: string;
  element?: "div" | "section" | "article" | "main" | "header" | "footer";
  secondContainer?: ReactNode;
  containerCss?: SerializedStyles;
  isContainerCenter?: boolean;
}
