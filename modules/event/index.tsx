import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { format } from "date-fns";
import { companyName } from "@common-data";
import BannerPageWrapper from "@components/banner-page-wrapper";
import { CalendarIcon, LocationOnIcon } from "@components/dynamic-imports";
import { EventDetailsItem } from "@modules/event/types";

export default function EventModule(props: EventDetailsItem) {
  const {
    eventPoster,
    eventName,
    longDescription,
    eventPrice,
    eventDate: propEventDate,
    venue,
    shortDescription,
    eventDuration,
    venueMapsLink,
    helperText
  } = props;
  const eventDate = useMemo(() => new Date(propEventDate), [propEventDate]);
  const [cost, setCost] = useState<number | undefined>(undefined);
  useEffect(() => {
    const rawDate = new Date();
    if (eventDate > rawDate) {
      setCost(eventPrice);
    }
  }, [eventPrice, eventDate]);
  return (
    <BannerPageWrapper
      heading={eventName}
      img={{ src: eventPoster?.url ?? "", alt: `${eventName} | ${companyName}` }}
      cost={cost}
      bannerDetails={{ date: eventDate, location: venue }}
    >
      <span className="short-desc">{shortDescription}</span>
      <div>
        <div>
          <CalendarIcon />
          <div>
            <span>{`${format(eventDate, "EEEE, d MMM")}`}</span>
            <span>{`${format(eventDate, "hh:mm aaa")} onwards ( ${eventDuration} )`}</span>
          </div>
        </div>
        <Link href={venueMapsLink}>
          <LocationOnIcon />
          <span>{venue}</span>
        </Link>
        <div>{helperText || "Hosted in english"}</div>
      </div>
      {documentToReactComponents(longDescription?.json)}
    </BannerPageWrapper>
  );
}
