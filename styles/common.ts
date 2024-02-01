const mobileBreakpoint = 900;

const retinaMedia = `@media
only screen and (-webkit-min-device-pixel-ratio: 2) and (max-width: ${mobileBreakpoint}px),
only screen and (min--moz-device-pixel-ratio: 2) and (max-width: ${mobileBreakpoint}px),
only screen and (-o-min-device-pixel-ratio: 2/1) and (max-width: ${mobileBreakpoint}px),
only screen and (min-device-pixel-ratio: 2) and (max-width: ${mobileBreakpoint}px),
only screen and (min-resolution: 192dpi) and (max-width: ${mobileBreakpoint}px),
only screen and (min-resolution: 2dppx) and (max-width: ${mobileBreakpoint}px)`;

export const mediaQuery = {
  mobile: `@media only screen and (max-device-width: ${mobileBreakpoint}px), ${retinaMedia}`,
  mobileLandscape: `@media screen and (width < ${mobileBreakpoint}px) and (orientation: landscape)`,
  desktop: `@media only screen and (min-device-width: ${mobileBreakpoint}px)`
};
