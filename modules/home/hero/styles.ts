import { css, keyframes } from "@emotion/react";
import { mediaQuery } from "@common-styles";

export const heroWrapperCss = css`
  height: calc(100vh - var(--header-height));
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: var(--color-secondary-highlight);
  ${mediaQuery.mobile} {
    height: calc(75vh - var(--header-height));
  }
  margin-bottom: var(--common-section-gap);
`;

const downAnimation = keyframes`
  0%{
  transform: translate(-50%, -50%);
  opacity: 0;
  }
  50%{
  opacity: 1;
  }
  100%{
  transform: translate(-50%, 13.5%);
  opacity: 0;
  }
`;

export const downIconCss = css`
  position: absolute;
  top: 87.5%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 5rem;
  color: var(--color-white);
  animation: ${downAnimation} 1.5s ease-in-out infinite forwards;
`;

export const heroVideoCss = css`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const heroHeadingCss = css`
  position: absolute;
  top: 75%;
  left: 0%;
  transform: translateY(-50%);
  font-size: 4rem;
  width: 100%;
  text-align: center;
  text-shadow: 0 0 0.5em var(--color-black), 0 0 0.25em var(--color-black), 0 0 0.125em var(--color-black);
  font-weight: 700;
  color: var(--color-white);

  & > * {
    padding: 0 0.5em;
    color: var(--color-white);
    background-color: var(--color-primary-highlight);
    border-radius: 2rem;
    text-shadow: 0 0 0rem var(--color-white);
    font-weight: 600;
  }

  ${mediaQuery.mobile} {
    font-size: clamp(1.25rem, 7.5vw, 2.5rem);
  }
`;
