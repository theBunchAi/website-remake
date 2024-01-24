import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

export const eventsPageContainer = css`
  padding: var(--common-section-gap) 0;
  ${mediaQuery.mobile} {
    padding: calc(var(--header-height) / 2) 0;
  }
`;

export const headingsContainer = css`
  display: flex;
  gap: 2em;
  color: var(--color-xDark-grey);
  & > * {
    cursor: pointer;
    &.active {
      color: var(--color-black);
    }
  }
`;

export const eventListWrapper = css`
  display: flex;
  width: 100%;
  height: fit-content;
  overflow-x: hidden;
  min-height: 32.5vh;
  ${mediaQuery.mobile} {
    min-height: 35vh;
  }
`;

export const eventListContainer = css`
  flex-shrink: 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  padding: 30px;
  height: fit-content;
  &.inactive {
    height: 5px;
    overflow-y: hidden;
  }
  & > * {
    width: 100%;
  }
  ${mediaQuery.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
