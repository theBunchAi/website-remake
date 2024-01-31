import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

const fontUrl =
  // eslint-disable-next-line max-len
  "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100;0,9..40,200;0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;0,9..40,900;0,9..40,1000;1,9..40,100;1,9..40,200;1,9..40,300;1,9..40,400;1,9..40,500;1,9..40,600;1,9..40,700;1,9..40,800;1,9..40,900;1,9..40,1000&family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap";

export const globalStyles = css`
  /* @import url(${fontUrl}); */
  :root {
    --color-primary-highlight: #1804b4;
    --color-primary-neutral: #d9e0ff;

    --color-secondary-highlight: #512f16;
    --color-secondary-neutral: #f5e4d7;

    --color-white: #fdfdff;
    --color-black: #3c3c3c;
    --color-grey: #e9e9e9;
    --color-gray: var(--color-grey);
    --color-dark-grey: #d9d9d9;
    --color-dark-gray: var(--color-dark-grey);
    --color-xDark-grey: #686868;
    --color-xDark-gray: var(--color-xDark-grey);
    --color-shadow: rgba(0, 0, 0, 0.25);

    --max-content-width: 1400px;
    --common-border-radius: 8px;
    --header-height: 7.5vh;
    --common-section-gap: 7.5vh;
    --common-shadow: 0 0 15px var(--color-shadow);
  }
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  #__next {
    background-color: var(--color-white);
  }
  .page-wrapper {
    padding-top: var(--header-height);
    display: flex;
    flex-direction: column;
  }
  ::selection {
    background: var(--color-secondary-highlight);
    color: var(--color-white);
  }

  ::-moz-selection {
    background: var(--color-secondary-highlight);
    color: var(--color-white);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--font-heading);
  }
  body {
    font-family: var(--font-primary);
    color: var(--color-black);
  }

  ::-webkit-scrollbar {
    width: 0.5rem;
  }
  ::-webkit-scrollbar:horizontal {
    height: 0.5em;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--color-xDark-grey);
    border-radius: 1rem;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ${mediaQuery.mobile} {
    a {
      min-height: 48px;
      min-width: 48px;
    }
  }
`;
export const globalFonts = ({ primary, heading }: { primary: string; heading: string }) => css`
  :root {
    --font-primary: ${primary}, sans-serif;
    --font-heading: ${heading}, sans-serif;
  }
`;
