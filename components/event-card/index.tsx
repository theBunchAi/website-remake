import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { companyName } from "@common-data";
import { LocationOnIcon } from "@components/dynamic-imports";
import {
  eventCardArticleCss,
  eventCardHighlightContainerCss,
  eventCardLinkCss,
  eventCardLocationContainerCss,
  eventCardPictureContainerCss,
  eventCardTextContainerCss
} from "@components/event-card/styles";
import { EventCardProps } from "@components/event-card/types";

export default function EventCard(props: EventCardProps) {
  const { date, imgSrc, title, imgAlt, className, isNotHighlighted = false, description, location, link } = props;
  const time = {
    day: format(date, "dd"),
    month: format(date, "MMM"),
    year: format(date, "yyyy"),
    twelveHourTime: format(date, "hh:mm a")
  };
  return (
    <Link href={link} className={className} css={eventCardLinkCss}>
      <article css={eventCardArticleCss}>
        <div css={eventCardPictureContainerCss}>
          <Image src={imgSrc} alt={imgAlt ?? companyName + " | Event | " + title} fill sizes="100%" />
          <div css={eventCardHighlightContainerCss} className={isNotHighlighted ? "inactive" : "active"}>
            <span suppressHydrationWarning>{`${time.month} ${time.day} ${time.year}`}</span>
            <span suppressHydrationWarning>{`${time.twelveHourTime} onwards`}</span>
          </div>
        </div>
        <div css={eventCardTextContainerCss}>
          <h3 className="heading">{title}</h3>
          <p className="text">{description}</p>
          <div css={eventCardLocationContainerCss}>
            <LocationOnIcon />
            <span>{location}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
