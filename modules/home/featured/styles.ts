import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

export const homeFeaturedContainerCss = css`
  display: flex;
  flex-direction: column;
  gap: 2.5vh;
  margin-bottom: var(--common-section-gap);
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
  color: var(--color-secondary-highlight);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${mediaQuery.desktop} {
    &.no-desktop {
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
    }
  }
  ${mediaQuery.mobile} {
    width: 10%;
    &.no-mobile {
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
    }
  }
`;
export const featuredArrowIconCss = css`
  font-size: 2.25rem;
  color: inherit;
`;

export const featuredCardsContainerCss = css`
  display: flex;
  align-items: center;
  width: 90%;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  gap: 5vw;
  padding: 10px 0;
  ${mediaQuery.mobile} {
    width: var(--_card-size);
    padding: 0px;
    gap: 0;
    ::-webkit-scrollbar:horizontal {
      height: 0em;
    }
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
    background-color: var(--color-primary-highlight);
    &::before {
      border: 2px solid var(--color-primary-highlight);
    }
  }
`;
