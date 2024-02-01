import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

export const eventSubHeadingCss = css`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const eventDetailSectionWrapperCss = css`
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
  margin: 3rem auto;
  min-width: 675px;
  ${mediaQuery.mobile} {
    width: 100%;
    flex-direction: column;
    min-width: unset;
  }
`;

export const eventDetailContainerCss = css`
  display: flex;
  color: var(--color-primary-highlight);
  text-decoration: none;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  font-size: clamp(0.8rem, 1.3vw, 1rem);
  flex: 1;
  font-weight: 600;
  gap: 0.75em;
  .date-container {
    display: flex;
    flex-direction: column;
    .lower-date {
      color: var(--color-xDark-grey);
      font-size: 0.75em;
    }
  }
  &.helper-text {
    color: var(--color-xDark-grey);
  }
  ${mediaQuery.mobile} {
    width: 100%;
    font-size: clamp(0.85rem, 4.5vw, 1.25rem);
    min-height: 4rem;
    justify-content: flex-start;
    &.helper-text {
      text-align: center;
      justify-content: center;
      align-items: center;
      align-self: center;
    }
  }
`;

export const tabsWrapperCss = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 3rem 0;
  gap: 1.5rem;
  line-height: 1.75em;
`;

export const tabsButtonsWrapperCss = css`
  display: flex;
  width: 80%;
  height: 48px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey);
  border-radius: 3rem;
  overflow: hidden;
  position: relative;
  font-size: 1.15rem;
`;

export const tabButtonCss = css`
  cursor: pointer;
  flex: 1;
  height: 100%;
  border: none;
  outline: none;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 3rem;
  z-index: 2;
  transition: all 0.4s ease;
  font-weight: 600;
  font-size: inherit;
  color: var(--color-xDark-grey);
  &.active {
    color: var(--color-white);
  }
`;

export const tabIndicatorCss = css`
  position: absolute;
  background-color: var(--color-primary-highlight);
  z-index: 1;
  height: 100%;
  border-radius: 3rem;
  left: 0;
  transition: all 0.4s ease;
`;

export const tabsContentWrapperCss = css`
  display: flex;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  transition: all 1s ease;
`;

export const tabPanelCss = css`
  height: fit-content;
  width: 100%;
  padding: 0 5px;
  flex-shrink: 0;
  scroll-snap-align: center;
  & > * {
    max-width: 100%;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 1rem 0 0.5rem 0;
  }
  & > img,
  & > video {
    object-fit: contain;
    height: fit-content;
    margin: 1rem 0;
  }

  &.highlights {
    display: grid;
    /* grid-template-columns: repeat(2, calc((90vw - 7.5vw * 2) / 2)); */
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
  ${mediaQuery.mobile} {
    &.highlights {
      grid-template-columns: 1fr;
    }
  }
`;
