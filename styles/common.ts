const mobileBreakpoint = 900;

export const mediaQuery = {
  mobile: `@media only screen and (max-device-width: ${mobileBreakpoint}px)`,
  mobileLandscape: `@media screen and (width < ${mobileBreakpoint}px) and (orientation: landscape)`,
  desktop: `@media only screen and (min-device-width: ${mobileBreakpoint}px)`
};
