import { LocationOnIcon, ArrowRightIcon } from "@components/dynamic-imports";
import { featuredLocationContainerCss } from "@components/featured-event-card/styles";
import { FeaturedCardLocationProps } from "@components/featured-event-card/types";

export default function Location({ location, className }: FeaturedCardLocationProps) {
  return (
    <div className={className} css={featuredLocationContainerCss}>
      <LocationOnIcon />
      <span>{location}</span>
      <ArrowRightIcon className="featured-right-arrow" />
    </div>
  );
}
