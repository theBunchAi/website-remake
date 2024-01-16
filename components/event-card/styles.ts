import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

export const eventCardLinkCss = css`
  overflow: hidden;
  text-decoration: none;
  border-radius: var(--common-border-radius);
  background-color: var(--color-grey);
  box-shadow: var(--common-shadow);
`;

export const eventCardArticleCss = css`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const eventCardPictureContainerCss = css`
  position: relative;
  height: 100%;
  flex: 3.5;
  overflow: hidden;
  background-color: var(--color-dark-grey);
  & > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  ${mediaQuery.mobile} {
    flex: 4;
  }
`;

export const eventCardHighlightContainerCss = css`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.5em;
  border-radius: 0 0 var(--common-border-radius) var(--common-border-radius);
  background-color: var(--color-primary-highlight);
  color: var(--color-white);
  font-size: clamp(0.5rem, 1.1vw, 0.85rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 10vw;
  gap: 0.25em;
  & > * {
    &:first-of-type {
      font-weight: 700;
    }
    &:last-of-type {
      font-weight: 500;
      font-size: 0.85em;
    }
  }
  &.inactive {
    background-color: var(--color-xDark-grey);
    & > * {
      &:last-of-type {
        display: none;
      }
    }
  }
  ${mediaQuery.mobile} {
    width: 85%;
    font-size: clamp(0.5rem, 2.5vw, 0.85rem);
  }
`;

export const eventCardTextContainerCss = css`
  font-size: clamp(0.75rem, 1.15vw, 1.125rem);
  flex: 6.5;
  padding: 1em;
  display: flex;
  flex-direction: column;
  color: var(--color-black);
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  gap: 0.25em;
  & > * {
    margin-bottom: 0;
  }
  .text {
    font-size: 0.85em;
    font-weight: 500;
    margin-top: 0;
  }
  ${mediaQuery.mobile} {
    flex: 6;
    gap: 0.5em;
    font-size: clamp(0.75rem, 3.5vw, 1.125rem);
  }
`;

export const eventCardLocationContainerCss = css`
  margin-top: auto;
  display: flex;
  align-items: center;
  gap: 0.25em;
  svg {
    font-size: 1.25em;
  }
`;
