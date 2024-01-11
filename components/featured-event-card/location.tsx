import dynamic from "next/dynamic";
import { featuredLocationContainerCss } from "@components/featured-event-card/styles";
import { FeaturedCardLocationProps } from "@components/featured-event-card/types";
const ArrowRightAltRoundedIcon = dynamic(() => import("@mui/icons-material/ArrowRightAltRounded"), {
  ssr: false,
  loading: () => <>→</>
});
const LocationOnIcon = dynamic(() => import("@mui/icons-material/LocationOn"), {
  ssr: false,
  loading: () => <>📍</>
});

export default function Location({ location, className }: FeaturedCardLocationProps) {
  return (
    <div className={className} css={featuredLocationContainerCss}>
      <LocationOnIcon />
      <span>{location}</span>
      <ArrowRightAltRoundedIcon className="featured-right-arrow" />
    </div>
  );
}
