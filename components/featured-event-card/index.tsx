import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import Location from "@components/featured-event-card/location";
import {
  featuredCardBottomCss,
  featuredCardContainerCss,
  featuredCardDateCss,
  featuredCardGradientCss,
  featuredCardWrapperCss,
  featuredLimitedSeatsCss
} from "@components/featured-event-card/styles";
import type { FeaturedCardProps } from "@components/featured-event-card/types";

export default function FeaturedEventCard(props: FeaturedCardProps) {
  const {
    date,
    hasLimitedSeates = false,
    limitedSeatesText = {
      top: "Hurry",
      bottom: "Limited Seates"
    },
    title,
    description,
    image,
    location,
    link,
    className
  } = props;
  const day = format(date, "dd");
  const month = format(date, "MMM");
  const year = format(date, "yyyy");
  return (
    <Link href={link} className={className} css={featuredCardWrapperCss}>
      <article css={featuredCardContainerCss}>
        <Image src={image?.src ?? ""} alt={image?.alt ?? ""} fill sizes="100%" />
        <div css={featuredCardGradientCss}></div>
        <div css={featuredCardDateCss}>
          <span suppressHydrationWarning>
            {day} {month}
          </span>
          <span suppressHydrationWarning>{year}</span>
        </div>
        {hasLimitedSeates && (
          <div css={featuredLimitedSeatsCss}>
            <span>{limitedSeatesText?.top ?? ""}</span>
            <span>{limitedSeatesText?.bottom ?? ""}</span>
          </div>
        )}
        <div css={featuredCardBottomCss}>
          <h3 className="featured-heading">{title}</h3>
          <p className="featured-para">{description}</p>
          <Location location={location} />
        </div>
      </article>
    </Link>
  );
}
