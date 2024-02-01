const mobileBreakpoint = 900;

export const mediaQuery = {
  mobile: `@media screen and (width < ${mobileBreakpoint}px)`,
  mobileLandscape: `@media screen and (width < ${mobileBreakpoint}px) and (orientation: landscape)`,
  desktop: `@media screen and (width >= ${mobileBreakpoint}px)`
};
