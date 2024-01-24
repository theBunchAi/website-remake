import { useRef } from "react";
import Link from "next/link";
import { companyName } from "@common-data";
import EventCard from "@components/event-card";
import useSwipe from "@hooks/use-swipe";
import { CommonEventItem } from "@modules/common/types";
import {
  eventsHeadingContainerCss,
  eventsListContainerCss,
  eventsListsWrapperCss,
  eventsViewMoreButtonCss,
  eventsViewMoreContainerCss,
  eventsWrapperCss
} from "@modules/home/events/event-list/styles";

interface HomeEventListProps {
  upcomingEvents: CommonEventItem[];
  pastEvents: CommonEventItem[];
}

export default function HomeEventList(props: HomeEventListProps) {
  const { upcomingEvents = [], pastEvents = [] } = props;
  const upcomingHeadingRef = useRef<HTMLHeadingElement>(null);
  const pastHeadingRef = useRef<HTMLHeadingElement>(null);
  const listWrapperRef = useRef<HTMLDivElement>(null);
  const upcomingEventContainerRef = useRef<HTMLDivElement>(null);
  const pastEventContainerRef = useRef<HTMLDivElement>(null);
  const upcomingLinkRef = useRef<HTMLAnchorElement>(null);
  const pastLinkRef = useRef<HTMLAnchorElement>(null);
  const upcomingHeadingClickHandler = () => {
    pastHeadingRef.current?.classList.remove("active");
    upcomingHeadingRef.current?.classList.add("active");
    upcomingEventContainerRef.current?.style.setProperty("transform", "translateX(0)");
    pastEventContainerRef.current?.style.setProperty("transform", "translateX(0)");
    pastLinkRef.current?.classList.remove("active");
    upcomingLinkRef.current?.classList.add("active");
  };
  const pastHeadingClickHandler = () => {
    upcomingHeadingRef.current?.classList.remove("active");
    pastHeadingRef.current?.classList.add("active");
    upcomingEventContainerRef.current?.style.setProperty("transform", "translateX(-100%)");
    pastEventContainerRef.current?.style.setProperty("transform", "translateX(-100%)");
    upcomingLinkRef.current?.classList.remove("active");
    pastLinkRef.current?.classList.add("active");
  };
  useSwipe({
    element: listWrapperRef,
    onSwipeLeft: pastHeadingClickHandler,
    onSwipeRight: upcomingHeadingClickHandler
  });
  const eventsMapper = (event: CommonEventItem, index: number) => {
    const { eventDate, eventName, eventPoster, shortDescription, venue } = event;
    const linkComponent = encodeURIComponent(eventName.replace(/\s/g, "-").toLowerCase());
    const mainDate = new Date(eventDate);
    const isEventDateInPast = mainDate < new Date();
    return (
      <EventCard
        key={`home-${isEventDateInPast ? "past" : "upcoming"}-event-${index}`}
        date={mainDate}
        title={eventName}
        description={shortDescription}
        imgSrc={eventPoster?.url ?? ""}
        imgAlt={`${companyName} | ${eventName}`}
        link={`/events/${linkComponent}`}
        location={venue}
        isNotHighlighted={isEventDateInPast}
      />
    );
  };
  return (
    <div css={eventsWrapperCss}>
      <div css={eventsHeadingContainerCss}>
        <h2 className="active" ref={upcomingHeadingRef} onClick={upcomingHeadingClickHandler}>
          <span>Upcoming</span> Events
        </h2>
        <h2 ref={pastHeadingRef} onClick={pastHeadingClickHandler}>
          <span>Past</span> Events
        </h2>
      </div>
      <div css={eventsListsWrapperCss} ref={listWrapperRef}>
        <div css={eventsListContainerCss} ref={upcomingEventContainerRef}>
          {upcomingEvents.map(eventsMapper)}
        </div>
        <div css={eventsListContainerCss} ref={pastEventContainerRef}>
          {pastEvents.map(eventsMapper)}
        </div>
      </div>
      <div css={eventsViewMoreContainerCss}>
        <Link
          href={{
            pathname: "/events",
            query: { category: "upcoming" }
          }}
          css={eventsViewMoreButtonCss}
          ref={upcomingLinkRef}
          className="active"
        >
          View More
        </Link>
        <Link
          href={{
            pathname: "/events",
            query: { category: "past" }
          }}
          css={eventsViewMoreButtonCss}
          ref={pastLinkRef}
        >
          View More
        </Link>
      </div>
    </div>
  );
}
