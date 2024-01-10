import { mediaQuery } from "@common-styles";
import { css } from "@emotion/react";

export const heroWrapperCss = css`
  height: calc(90vh - var(--header-height));
  width: 100%;
  position: relative;
  border-radius: 0 0 3rem 3rem;
  overflow: hidden;
  background-color: var(--color-secondary-highlight);
`;

export const heroVideoCss = css`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const heroHeadingCss = css`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 4rem;
  width: 100%;
  text-align: center;
  text-shadow: 0 0 2rem var(--color-grey);
  font-weight: 700;
  color: black;

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
