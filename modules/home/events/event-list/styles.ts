import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

export const eventsWrapperCss = css`
  display: flex;
  flex-direction: column;
  gap: 3.75vh;
  height: fit-content;
  ${mediaQuery.mobile} {
    width: 90%;
    margin: 0 auto;
  }
`;

export const eventsHeadingContainerCss = css`
  display: flex;
  gap: 1.25rem;
  & > * {
    cursor: pointer;
    color: var(--color-xDark-grey);
    font-weight: 500;
    opacity: 0.8;
    &.active {
      opacity: 1;
      color: var(--color-black);
    }
    & > * {
      font-weight: 700;
    }
  }
  ${mediaQuery.mobile} {
    width: 100%;
    & > * {
      font-size: clamp(1rem, 6vw, 24px);
    }
  }
`;

export const eventsListsWrapperCss = css`
  width: 100%;
  display: flex;
  overflow-x: hidden;
  height: fit-content;
`;

export const eventsListContainerCss = css`
  flex-shrink: 0;
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5vh;
  transition: all 0.5s ease-in-out;
  padding: 1rem;
  & > * {
    aspect-ratio: 4 / 1;
  }
  ${mediaQuery.mobile} {
    padding: 0 0.25rem;
    & > * {
      aspect-ratio: 2 / 1;
    }
  }
`;

export const eventsViewMoreContainerCss = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const eventsViewMoreButtonCss = css`
  color: var(--color-xDark-grey);
  text-decoration: none;
  display: none;
  font-weight: 600;
  margin-right: 1rem;
  &.active {
    display: initial;
  }
`;
