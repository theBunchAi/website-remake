/* eslint-disable @typescript-eslint/no-explicit-any */
import { PropsWithChildren, ReactNode } from "react";
import { SerializedStyles } from "@emotion/react";

export interface FullWidthWrapperProps extends PropsWithChildren {
  className?: string;
  element?: "div" | "section" | "article" | "main" | "header" | "footer";
  secondContainer?: ReactNode;
  wrapperCss?: SerializedStyles;
  wrapperClassName?: string;
  isContainerCenter?: boolean;
}
