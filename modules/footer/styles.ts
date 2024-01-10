import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

export const footerWrapperCss = css`
  flex-direction: column;
  background-color: var(--color-grey);
`;

export const footerUpperWrapperCss = css`
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 2.5em 0;
  gap: 1rem;
  color: var(--color-black);
  ${mediaQuery.mobile} {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const footerLowerWrapperCss = css`
  width: 100%;
  background-color: var(--color-dark-grey);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.25em;
  padding: 0.75em 0;
  font-size: 0.85rem;
  color: var(--color-black);
  text-align: center;
  & a {
    font-weight: 600;
    color: black;
    text-decoration: none;
  }
  ${mediaQuery.mobile} {
    width: 100%;
    gap: 0.75em;
    .break {
      display: block;
      visibility: hidden;
      height: 0;
      width: 0;
    }
  }
`;

export const mainTopTextCss = css`
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 600;
  grid-column: 1 / -1;
`;

export const mainNavWrapperCss = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 5px;
  grid-auto-flow: column;
  & > * {
    color: var(--color-xDark-grey);
    font-weight: 500;
    text-decoration: none;
  }
  ${mediaQuery.mobile} {
    grid-template-rows: repeat(4, 1fr);
    font-size: 0.85rem;
    row-gap: 10px;
  }
`;

export const socialsWrapperCss = css`
  color: var(--color-xDark-grey);
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  & * {
    color: inherit;
  }
  a {
    font-size: 2em;
    & * {
      font-size: inherit;
    }
  }
  ${mediaQuery.mobile} {
    justify-content: center;
    align-items: flex-start;
    a {
      font-size: 1.75rem;
    }
  }
`;
