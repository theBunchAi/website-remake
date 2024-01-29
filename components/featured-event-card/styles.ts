import { css } from "@emotion/react";

export const featuredCardWrapperCss = css``;

export const featuredCardContainerCss = css`
  height: 100%;
  width: 100%;
  background-color: whitesmoke;
  position: relative;
  overflow: hidden;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border-radius: var(--common-border-radius);
  font-size: clamp(0.75rem, 1.125vw, 1.125rem);
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const featuredCardGradientCss = css`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(to top, var(--color-primary-highlight), rgba(0, 0, 0, 0));
`;

export const featuredCardDateCss = css`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey);
  padding: 0.75em 1.25em;
  color: var(--color-xDark-grey);
  border-radius: 0 0 var(--common-border-radius) var(--common-border-radius);
  top: 0;
  left: 7.5%;
  & > * {
    &:first-of-type {
      font-size: 1.125em;
      font-weight: 700;
    }
    &:last-of-type {
      font-size: 0.9em;
      font-weight: 500;
    }
  }
`;

export const featuredLimitedSeatsCss = css`
  position: absolute;
  background-color: var(--color-grey);
  border-radius: 0 0 var(--common-border-radius) var(--common-border-radius);
  display: flex;
  flex-direction: column;
  padding: 0.5em 1em;
  top: 0;
  right: 7.5%;
  & > * {
    &:first-of-type {
      font-size: 0.75em;
      font-weight: 600;
      color: var(--color-black);
    }
    &:last-of-type {
      font-size: 1em;
      font-weight: 700;
      color: var(--color-primary-highlight);
    }
  }
`;

export const featuredCardBottomCss = css`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 5% 7.5%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.75);
  .featured-heading {
    font-size: 1.5em;
    font-weight: 700;
  }
  .featured-para {
    font-size: 0.9em;
    font-weight: 500;
    margin-bottom: 10px;
  }
`;

export const featuredLocationContainerCss = css`
  display: flex;
  align-items: center;
  gap: 0.5em;
  .featured-right-arrow {
    margin-left: auto;
    font-size: 2.5em;
  }
`;
