import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

export const bannerContainerCss = css`
  margin: 5vh 0;
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  user-select: none;
  ${mediaQuery.mobile} {
    width: 100%;
    margin: 0;
    border-radius: 0;
  }
`;

export const bannerImgContainerCss = css`
  position: relative;
  width: 100%;
  aspect-ratio: 3.5;
  overflow: hidden;
  box-shadow: 0 17.5px 20px -15px var(--color-xDark-grey);
  background-color: var(--color-secondary-highlight);
  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background: linear-gradient(to top, var(--color-primary-highlight), transparent);
    inset: 0;
    z-index: 1;
  }
  img {
    border-radius: 15px;
    position: absolute;
    object-fit: cover;
    object-position: center;
    opacity: 0.5;
  }
  ${mediaQuery.mobile} {
    width: 100%;
    height: 45vh;
    border-radius: 0 0 2.5rem 2.5rem;
    img {
      opacity: 1;
      border-radius: 0;
    }
    &::before {
      content: none;
    }
  }
`;

export const bannerHeadingCss = css`
  position: absolute;
  width: 75%;
  top: 50%;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
  color: var(--color-white);
  font-size: 4rem;
  font-weight: 500;
  text-align: center;
  ${mediaQuery.mobile} {
    position: static;
    color: var(--color-black);
    transform: none;
    text-align: center;
    font-size: 1.75rem;
    width: 100%;
    margin: 1.5em 0;
    font-weight: 600;
  }
`;

export const textContainerCss = css`
  padding: 0 7.5%;
  padding-bottom: 5vh;
  & > * {
    margin-bottom: 1em;
  }
  p {
    font-weight: 500;
  }
  ${mediaQuery.mobile} {
    padding: 0;
  }
`;

export const costWrapperCss = css`
  background-color: var(--color-primary-highlight);
  position: sticky;
  bottom: 0;
  z-index: 5;
`;

export const costContainerCss = css`
  padding: 2vh 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1.5em;
  .cost-span {
    color: var(--color-white);
    font-size: 1.2rem;
  }
  .invite-cta {
    color: var(--color-primary-highlight);
    text-decoration: none;
    font-weight: 600;
    background-color: var(--color-white);
    font-size: clamp(10px, 1.25vw, 1em);
    padding: 0.375em 1.5em;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    width: fit-content;
    justify-content: center;
    text-align: center;
  }
  ${mediaQuery.mobile} {
    .invite-cta {
      font-size: 1rem;
    }
    .cost-span {
      font-size: 1rem;
    }
  }
`;

export const headerDetailsWrapperCss = css`
  --spl-padding: 0.75em;
  position: absolute;
  z-index: 1;
  bottom: 0;
  right: 5%;
  background-color: var(--color-grey);
  display: flex;
  padding: 0.75em 1.25em;
  color: var(--color-xDark-grey);
  border-radius: var(--common-border-radius) var(--common-border-radius) 0 0;
  .banner-date {
    border-right: 1px solid var(--color-xDark-grey);
    padding-right: var(--spl-padding);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .banner-venue {
    padding-left: var(--spl-padding);
  }
  ${mediaQuery.mobile} {
    --spl-padding: 0.4em;
    padding: 0.3em 0.35em;
  }
`;

export const detailsContainerCss = css`
  display: flex;
  flex-direction: column;
`;

export const boldDetailSpanCss = css`
  font-size: 1.2rem;
  font-weight: 700;
  ${mediaQuery.mobile} {
    font-size: 1rem;
  }
`;
