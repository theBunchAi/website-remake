import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

export const homeEventSectionWrapper = css`
  display: flex;
  gap: 5vw;
  & > * {
    flex: 1;
  }
  ${mediaQuery.mobile} {
    flex-direction: column;
    gap: 7.5vh;
  }
`;

export const homeEventSectionOuterWrapperCss = css`
  ${mediaQuery.mobile} {
    & > * {
      width: 100%;
    }
  }
`;
