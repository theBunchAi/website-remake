import Image from "next/image";
import Link from "next/link";
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
  const { date, imgSrc, title, imgAlt, className, isHiglihgted = true, description, location, link } = props;
  const time = {
    day: date.getDate(),
    month: date.toLocaleString("default", { month: "short" }),
    year: date.getFullYear(),
    twelveHourTime: date.toLocaleString("default", { hour: "numeric", minute: "numeric", hour12: true }).toUpperCase()
  };
  return (
    <Link href={link} className={className} css={eventCardLinkCss}>
      <article css={eventCardArticleCss}>
        <div css={eventCardPictureContainerCss}>
          <Image src={imgSrc} alt={imgAlt ?? companyName + " | Event | " + title} fill sizes="100%" />
          <div css={eventCardHighlightContainerCss} className={isHiglihgted ? "active" : "inactive"}>
            <span>{`${time.month} ${time.day} ${time.year}`}</span>
            <span>{`${time.twelveHourTime} onwards`}</span>
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
