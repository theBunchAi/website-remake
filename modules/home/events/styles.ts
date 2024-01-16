import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

export const homeEventSectionWrapper = css`
  display: flex;
  gap: 5vw;
  margin-bottom: var(--common-section-gap);
  & > * {
    flex: 1;
  }
  ${mediaQuery.mobile} {
    flex-direction: column;
    gap: 7.5vh;
    margin-bottom: 0;
    width: 100%;
  }
`;

export const homeEventSectionOuterWrapperCss = css`
  ${mediaQuery.mobile} {
    & > * {
      width: 100%;
    }
  }
`;
