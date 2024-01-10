import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

export const homeFeaturedContainerCss = css`
  display: flex;
  flex-direction: column;
  gap: 2.5vh;
`;

export const homeFeaturedHeadingCss = css`
  color: var(--color-black);
`;

export const featuredCardsWrapperCss = css`
  --_card-size: 23.33vw;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mediaQuery.mobile} {
    --_card-size: 70vw;
  }
`;

export const featuredNavButtonsCss = css`
  width: 5%;
  height: var(--_card-size);
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-black);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > * {
    font-size: 250%;
    color: inherit;
  }
  ${mediaQuery.mobile} {
    width: 10%;
  }
`;

export const featuredCardsContainerCss = css`
  display: flex;
  align-items: center;
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 5vw;
  padding-bottom: 10px;
  ${mediaQuery.mobile} {
    width: var(--_card-size);
    gap: 0;
  }
`;

export const featuredCardCss = css`
  scroll-snap-align: start;
  flex-shrink: 0;
  width: var(--_card-size);
  height: var(--_card-size);
  max-width: 347.15px;
  max-height: 347.15px;
  color: var(--color-white);

  ${mediaQuery.mobile} {
    padding: 5%;
    max-width: unset;
    max-height: unset;
  }
`;

export const dotsContainerCss = css`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  ${mediaQuery.desktop} {
    display: none;
  }
`;

export const dotCss = css`
  width: 10px;
  height: 10px;
  margin: 1.5% 0;
  border-radius: 50%;
  background-color: var(--color-dark-grey);
  cursor: pointer;
  transition: 0.2s;
  position: relative;
  transition: all 0.3s ease;
  &::before {
    content: "";
    position: absolute;
    width: 150%;
    height: 150%;
    border-radius: 50%;
    border: 2px solid rgba(0, 0, 0, 0);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;
  }
  &.active {
    background-color: var(--color-black);
    &::before {
      border: 2px solid var(--color-black);
    }
  }
`;
