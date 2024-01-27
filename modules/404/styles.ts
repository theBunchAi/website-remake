import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

export const error404WrapperCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5vh;
  height: 70vh;
  ${mediaQuery.mobile} {
    height: fit-content;
    padding: 8vh 0;
  }
  ${mediaQuery.mobileLandscape} {
    padding: 15vh 0;
  }
`;

export const error404HeaderCss = css`
  color: var(--color-primary-highlight);
`;

export const error404SubheadingCss = css`
  color: var(--color-primary-highlight);
  font-weight: 600;
`;

export const error404TextCss = css`
  color: var(--color-primary-highlight);
  font-size: clamp(5rem, 6vw, 7rem);
  font-weight: 700;
`;

export const error404ParaCss = css`
  width: 600px;
  text-align: center;
  ${mediaQuery.mobile} {
    width: 90%;
  }
`;

export const error404LinkCss = css`
  color: var(--color-white);
  text-decoration: none;
  font-weight: 600;
  background-color: var(--color-primary-highlight);
  font-size: clamp(10px, 1.25vw, 1em);
  padding: 0.375em 1.5em;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  width: fit-content;
  justify-content: center;
  text-align: center;
  ${mediaQuery.mobile} {
    font-size: 1rem;
    font-weight: 500;
  }
`;
