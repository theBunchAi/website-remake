import { css } from "@emotion/react";

const fontUrl =
  // eslint-disable-next-line max-len
  "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100;0,9..40,200;0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;0,9..40,900;0,9..40,1000;1,9..40,100;1,9..40,200;1,9..40,300;1,9..40,400;1,9..40,500;1,9..40,600;1,9..40,700;1,9..40,800;1,9..40,900;1,9..40,1000&family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap";

export const globalStyles = css`
  @import url(${fontUrl});
  :root {
    --color-primary-highlight: #1804b4;
    --color-primary-neutral: #e8ecfa;

    --color-secondary-highlight: #512f16;
    --color-secondary-neutral: #f5e4d7;

    --color-white: #fdfdff;
    --color-black: #1c1c1c;
    --color-grey: #434343;
    --color-gray: var(--color-grey);

    --max-content-width: 1400px;

    --font-primary: "DM Sans", sans-serif;
    --font-heading: "Outfit", sans-serif;

    --header-height: 7.5vh;
  }
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  #__next {
    background-color: var(--color-white);
  }
  main {
    padding-top: var(--header-height);
    display: flex;
    flex-direction: column;
  }
`;
