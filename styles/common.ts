const mobileBreakpoint = 1125;

export const mediaQuery = {
  mobile: `@media only screen and (width <= ${mobileBreakpoint}px)`,
  mobileLandscape: `@media screen and (width < ${mobileBreakpoint}px) and (orientation: landscape)`,
  desktop: `@media only screen and (width > ${mobileBreakpoint}px)`
};
