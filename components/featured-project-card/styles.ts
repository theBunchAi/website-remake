import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

export const projectCardWrapperCss = css`
  position: relative;
  width: 100%;
  float: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: var(--color-primary-highlight);
  color: white;
  overflow: hidden;
  border-radius: var(--common-border-radius);
  padding: 5%;
  aspect-ratio: 2.65;
  font-size: 1rem;
  box-shadow: var(--common-shadow);
  & > *:not(img) {
    z-index: 1;
  }
  &:has(img) {
    background-color: var(--color-secondary-highlight);
  }
  ${mediaQuery.mobile} {
    aspect-ratio: unset;
    border-radius: 0;
    font-size: 0.85rem;
    padding: 10% 5%;
    box-shadow: none;
  }
`;

export const projectCardImgCss = css`
  object-fit: cover;
  opacity: 0.25;
`;

export const projectCardTitleCss = css`
  text-shadow: 0 0 5px var(--color-black);
  font-size: clamp(15px, 2vw, 24px);
  ${mediaQuery.mobile} {
    font-size: 24px;
    text-align: center;
    width: 100%;
    margin: 0em auto 0.5em auto;
  }
`;

export const projectCardDescriptionCss = css`
  margin: 0;
  margin-bottom: auto;
  text-shadow: 0 0 5px var(--color-black);
  font-weight: 500;
  font-size: 1em;
  font-size: clamp(10px, 1.15vw, 1em);
  ${mediaQuery.mobile} {
    font-size: 1rem;
    margin-bottom: 2em;
    text-shadow: 0 0 0.5em var(--color-black);
  }
`;

export const projectCardLinkCss = css`
  color: var(--color-black);
  text-decoration: none;
  font-weight: 600;
  background-color: var(--color-white);
  font-size: clamp(10px, 1.25vw, 1em);
  padding: 0.375em 1em;
  border-radius: 2rem;
  margin-top: 1em;
  ${mediaQuery.mobile} {
    font-size: 1rem;
    margin: 0.5em auto 0 auto;
  }
`;
