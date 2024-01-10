import { fullWidthContainerCss, fullWidthWrapperCss } from "@components/full-width-wrapper/styles";
import { FullWidthWrapperProps } from "@components/full-width-wrapper/types";

export default function FullWidthWrapper({
  className,
  children,
  element = "div",
  secondContainer,
  containerCss,
  isContainerCenter = true
}: FullWidthWrapperProps) {
  switch (element) {
    case "div":
    default:
      return (
        <div className={className} css={fullWidthWrapperCss(isContainerCenter)}>
          <div css={[fullWidthContainerCss, containerCss]}>{children}</div>
          {secondContainer}
        </div>
      );
    case "section":
      return (
        <section className={className} css={fullWidthWrapperCss(isContainerCenter)}>
          <div css={[fullWidthContainerCss, containerCss]}>{children}</div>
          {secondContainer}
        </section>
      );
    case "article":
      return (
        <article className={className} css={fullWidthWrapperCss(isContainerCenter)}>
          <div css={[fullWidthContainerCss, containerCss]}>{children}</div>
          {secondContainer}
        </article>
      );
    case "main":
      return (
        <main className={className} css={fullWidthWrapperCss(isContainerCenter)}>
          <div css={[fullWidthContainerCss, containerCss]}>{children}</div>
          {secondContainer}
        </main>
      );
    case "header":
      return (
        <header className={className} css={fullWidthWrapperCss(isContainerCenter)}>
          <div css={[fullWidthContainerCss, containerCss]}>{children}</div>
          {secondContainer}
        </header>
      );
    case "footer":
      return (
        <footer className={className} css={fullWidthWrapperCss(isContainerCenter)}>
          <div css={[fullWidthContainerCss, containerCss]}>{children}</div>
          {secondContainer}
        </footer>
      );
  }
}
