import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

export const faqsWrapperCss = css`
  margin-bottom: 5vh;
  ${mediaQuery.desktop} {
    margin-bottom: 10vh;
  }
`;

export const faqsContainerCss = css`
  ${mediaQuery.desktop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 25px;
    padding: 0 2.5%;
  }
`;

export const faqHeadingContainerCss = css`
  margin: 2vh 0;
  .faq-heading {
    font-size: 1.8rem;
    color: var(--color-primary-highlight);
    margin: 2vh 0;
    font-weight: 500;
  }
  .faq-subheading {
    //
  }
  ${mediaQuery.desktop} {
    padding: 4vh 0;
    margin: 0;
    margin-bottom: 4vh;
    border-bottom: 1px solid var(--color-xDark-gray);
  }
`;

export const faqContainerCss = css`
  margin: 2vh 0;
  .faq-question {
    font-weight: 700;
    margin-bottom: 1vh;
  }
  .faq-answer {
    //
  }
`;
