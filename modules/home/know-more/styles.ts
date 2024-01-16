import { css } from "@emotion/react";

export const knowMoreOuterWrapperCss = css`
  background-color: var(--color-primary-neutral);
`;

export const knowMoreWrapperCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1rem;
  padding: 2.5% 0;
  color: var(--color-primary-highlight);
  & > * {
    max-width: 50vw;
  }
  .heading {
    font-weight: 600;
  }
  .para {
    font-weight: 400;
  }
  .link {
    color: inherit;
    text-decoration: none;
    font-weight: 500;
    border-bottom: 2px solid currentColor;
  }
`;
