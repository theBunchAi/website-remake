import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

export const projectListWrapperCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: calc(1.875rem + 3.75vh + 1rem);
  padding-bottom: calc(20px + 3.75vh + 1rem);
  ${mediaQuery.mobile} {
    height: fit-content;
    padding-top: 0;
    padding-bottom: 0;
    gap: calc(var(--header-height) / 3);
    padding-bottom: calc(var(--header-height) / 3);
  }
`;
