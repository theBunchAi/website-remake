import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

export const projectsPageContainerCss = css`
  padding: var(--common-section-gap) 0;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  ${mediaQuery.mobile} {
    padding: calc(var(--header-height) / 2) 0;
  }
`;

export const itemsWrapperCss = css`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  height: fit-content;
  & > * {
    width: 100%;
  }
  ${mediaQuery.mobile} {
    grid-template-columns: repeat(1, 1fr);
    & > * {
      border-radius: var(--common-border-radius);
    }
  }
`;
