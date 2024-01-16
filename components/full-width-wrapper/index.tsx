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
  switch (element) {
    case "div":
    default:
      return (
        <div className={wrapperClassName} css={[fullWidthWrapperCss(isContainerCenter), wrapperCss]}>
          <div css={[fullWidthContainerCss]} className={className}>
            {children}
          </div>
          {secondContainer}
        </div>
      );
    case "section":
      return (
        <section className={wrapperClassName} css={[fullWidthWrapperCss(isContainerCenter), wrapperCss]}>
          <div css={[fullWidthContainerCss]} className={className}>
            {children}
          </div>
          {secondContainer}
        </section>
      );
    case "article":
      return (
        <article className={wrapperClassName} css={[fullWidthWrapperCss(isContainerCenter), wrapperCss]}>
          <div css={[fullWidthContainerCss]} className={className}>
            {children}
          </div>
          {secondContainer}
        </article>
      );
    case "main":
      return (
        <main className={wrapperClassName} css={[fullWidthWrapperCss(isContainerCenter), wrapperCss]}>
          <div css={[fullWidthContainerCss]} className={className}>
            {children}
          </div>
          {secondContainer}
        </main>
      );
    case "header":
      return (
        <header className={wrapperClassName} css={[fullWidthWrapperCss(isContainerCenter), wrapperCss]}>
          <div css={[fullWidthContainerCss]} className={className}>
            {children}
          </div>
          {secondContainer}
        </header>
      );
    case "footer":
      return (
        <footer className={wrapperClassName} css={[fullWidthWrapperCss(isContainerCenter), wrapperCss]}>
          <div css={[fullWidthContainerCss]} className={className}>
            {children}
          </div>
          {secondContainer}
        </footer>
      );
  }
}
