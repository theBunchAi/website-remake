import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

export const navWrapperCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - var(--header-height));
  width: 50vw;
  position: fixed;
  top: var(--header-height);
  right: 0;
  transform: translateX(100%);
  transition: transform 0.5s ease;
  background-color: var(--color-primary-neutral);
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: cover;
  &.active {
    transform: translateX(0%);
  }
  ${mediaQuery.mobile} {
    width: 100vw;
  }
`;

export const navContainerCss = css`
  height: 100%;
  width: 100%;
  max-width: var(--max-content-width);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 5vw;
`;

export const mainNavCss = css`
  display: flex;
  flex-direction: column;
  gap: 50px;
  & > * {
    color: var(--color-primary-highlight);
    text-decoration: none;
    font-family: var(--font-heading);
    font-weight: 400;
    font-size: 2.5rem;
    position: relative;
    display: inline-block;
    width: fit-content;
    &::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0%;
      height: 3px;
      background-color: var(--color-primary-highlight);
      transition: width 0.5s ease;
    }
    &.active::after {
      width: 100%;
    }
    ${mediaQuery.desktop} {
      &:hover {
        font-weight: 500;
      }
    }
  }
  ${mediaQuery.mobile} {
    gap: 25px;
    & > * {
      font-size: clamp(1.5rem, 9vw, 2rem);
    }
  }
`;
