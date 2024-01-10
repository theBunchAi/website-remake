import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

export const headerWrapperCss = css`
  background-color: var(--color-primary-highlight);
  height: var(--header-height);
  color: var(--color-white);
  z-index: 999;
  position: fixed;
`;

export const headerContainerCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const logoContainerCss = css`
  font-family: var(--font-heading);
  font-weight: 500;
  font-size: clamp(1.5rem, 9vw, 2rem);
  text-shadow: 1px -1px 3px rgba(0, 0, 0, 0.4), -1px 1px 3px rgba(255, 255, 255, 0.4);
`;

export const otherContentCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  font-size: 0.85rem;
  font-weight: 500;
`;

export const locationContainerCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  ${mediaQuery.mobile} {
    display: none;
  }
`;

export const hamContainerCss = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 24px;
  width: 28px;
  position: relative;
  cursor: pointer;
  & > * {
    transition: right 0.2s ease, transform 0.2s ease 0.2s, top 0.2s ease 0.4s, width 0.2s ease 0.4s;
    height: 3.15px;
    border-radius: 4px;
    background-color: var(--color-white);
    position: absolute;
    &:nth-of-type(1) {
      width: 17.5px;
      right: 0;
      top: 0;
      transform: rotateZ(0deg) translateX(0%);
    }
    &:nth-of-type(2) {
      width: 100%;
      right: 0;
      top: calc(40% - (3.15px));
      transform: rotateZ(0deg) translateX(0%);
    }
    &:nth-of-type(3) {
      width: 20px;
      right: 0;
      top: calc(70% - (3.15px));
      transform: rotateZ(0deg) translateX(0%);
    }
    &:nth-of-type(4) {
      width: 10px;
      right: 0;
      top: calc(100% - (3.15px));
      transform: rotateZ(0deg) translateX(0%);
    }
  }
  &.active {
    & > * {
      transition: width 0.2s ease, top 0.2s ease 0.2s, transform 0.2s ease 0.4s, right 0.2s ease 0.4s;
      &:nth-of-type(1) {
        width: 100%;
        right: 25%;
        top: calc(28% - (3.15px / 2));
        transform: rotateZ(45deg) translateX(34%);
      }
      &:nth-of-type(2) {
        width: 100%;
        right: 25%;
        top: calc(28% - (3.15px / 2));
        transform: rotateZ(45deg) translateX(34%);
      }
      &:nth-of-type(3) {
        width: 100%;
        right: 25%;
        top: calc(84% - (3.15px / 2));
        transform: rotateZ(-45deg) translateX(34%);
      }
      &:nth-of-type(4) {
        width: 100%;
        right: 25%;
        top: calc(84% - (3.15px / 2));
        transform: rotateZ(-45deg) translateX(34%);
      }
    }
  }
`;
