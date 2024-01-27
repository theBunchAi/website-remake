import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { companyName } from "@common-data";
import EventCard from "@components/event-card";
import FullWidthWrapper from "@components/full-width-wrapper";
import useSwipe from "@hooks/use-swipe";
import { CommonEventItem } from "@modules/common/types";
import { eventListContainer, eventListWrapper, eventsPageContainer, headingsContainer } from "@modules/events/styles";
import { EventsPageProps } from "@modules/events/types";

export default function EventsModule(props: EventsPageProps) {
  const { upcomingEvents = [], pastEvents = [] } = props;
  const headingContainerRef = useRef<HTMLDivElement>(null);
  const eventListWrapperRef = useRef<HTMLDivElement>(null);

  const upcomingHeadingClickHandler = () => {
    (eventListWrapperRef?.current?.firstChild as HTMLDivElement)?.classList.remove("inactive");
    (headingContainerRef?.current?.firstChild as HTMLHeadingElement)?.classList.add("active");
    eventListWrapperRef.current?.scroll({ behavior: "smooth", left: 0 });
    setTimeout(() => {
      (headingContainerRef?.current?.lastChild as HTMLHeadingElement)?.classList.remove("active");
      (eventListWrapperRef?.current?.lastChild as HTMLDivElement)?.classList.add("inactive");
    }, 300);
  };
  const pastHeadingClickHandler = () => {
    (eventListWrapperRef?.current?.lastChild as HTMLDivElement)?.classList.remove("inactive");
    (headingContainerRef?.current?.firstChild as HTMLHeadingElement)?.classList.remove("active");
    eventListWrapperRef.current?.scroll({ behavior: "smooth", left: eventListWrapperRef.current?.scrollWidth });
    setTimeout(() => {
      (headingContainerRef?.current?.lastChild as HTMLHeadingElement)?.classList.add("active");
      (eventListWrapperRef?.current?.firstChild as HTMLDivElement)?.classList.add("inactive");
    }, 300);
  };
  useSwipe({
    element: eventListWrapperRef,
    onSwipeLeft: pastHeadingClickHandler,
    onSwipeRight: upcomingHeadingClickHandler
  });
  const { query } = useRouter();
  const { category } = query;
  useEffect(() => {
    if (category === "past") {
      pastHeadingClickHandler();
    } else {
      upcomingHeadingClickHandler();
    }
  }, [category]);

  const eventsMapper = (event: CommonEventItem, index: number) => {
    const { eventDate, eventName, eventPoster, shortDescription, venue } = event;
    const linkComponent = encodeURIComponent(eventName.replace(/\s/g, "-").toLowerCase());
    const mainDate = new Date(eventDate);
    const isEventDateInPast = mainDate < new Date();
    return (
      <EventCard
        key={`${isEventDateInPast ? "past" : "upcoming"}-event-${index}`}
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
    <FullWidthWrapper css={eventsPageContainer}>
      <div css={headingsContainer} ref={headingContainerRef}>
        <h2 onClick={upcomingHeadingClickHandler} className="active">
          Upcoming Events
        </h2>
        <h2 onClick={pastHeadingClickHandler}>Past Events</h2>
      </div>
      <div css={eventListWrapper} ref={eventListWrapperRef}>
        <section css={eventListContainer} id="upcoming-events">
          {upcomingEvents.map(eventsMapper)}
        </section>
        <section css={eventListContainer} id="past-events">
          {pastEvents.map(eventsMapper)}
        </section>
      </div>
    </FullWidthWrapper>
  );
}
