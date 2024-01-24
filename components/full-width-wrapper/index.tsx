import { jsx } from "@emotion/react";
import { fullWidthContainerCss, fullWidthWrapperCss } from "@components/full-width-wrapper/styles";
import { FullWidthWrapperProps } from "@components/full-width-wrapper/types";

export default function FullWidthWrapper({
  className,
  children,
  element = "section",
  secondContainer,
  wrapperClassName,
  wrapperCss,
  isContainerCenter = true
}: FullWidthWrapperProps) {
  const innerElement = jsx(
    "div",
    {
      css: [fullWidthContainerCss],
      className
    },
    children
  );
  const outerElement = jsx(
    element,
    {
      className: wrapperClassName,
      css: [fullWidthWrapperCss(isContainerCenter), wrapperCss]
    },
    innerElement,
    secondContainer
  );
  return outerElement as JSX.Element;
}
