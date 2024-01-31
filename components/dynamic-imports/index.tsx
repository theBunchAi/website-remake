import dynamic from "next/dynamic";

export const ArrowRightIcon = dynamic(() => import("@mui/icons-material/ArrowRightAltRounded"), {
  ssr: false,
  loading: () => <>→</>
});
export const LocationOnIcon = dynamic(() => import("@mui/icons-material/LocationOn"), {
  ssr: false,
  loading: () => <>📍</>
});
export const RightIcon = dynamic(() => import("@mui/icons-material/ChevronLeftRounded"), {
  ssr: false,
  loading: () => <>{"<"}</>
});
export const LeftIcon = dynamic(() => import("@mui/icons-material/ChevronRightRounded"), {
  ssr: false,
  loading: () => <>{">"}</>
});
export const ShareIcon = dynamic(() => import("@mui/icons-material/ShareRounded"), {
  ssr: false,
  loading: () => <>⠪</>
});
export const CalendarIcon = dynamic(() => import("@mui/icons-material/CalendarMonthRounded"), {
  ssr: false,
  loading: () => <>📅</>
});
export const DownIcon = dynamic(() => import("@mui/icons-material/KeyboardArrowDown"), {
  ssr: false,
  loading: () => <>↓</>
});
