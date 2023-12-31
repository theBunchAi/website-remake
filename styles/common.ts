const mobileBreakpoint = 900;

export const mediaQuery = {
  mobile: `@media (width < ${mobileBreakpoint}px) and (orientation: portrait)`,
  mobileLandscape: `@media (width < ${mobileBreakpoint}px) and (orientation: landscape)`,
  desktop: `@media (width >= ${mobileBreakpoint}px)`
};
