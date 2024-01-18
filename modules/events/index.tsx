import { useEffect, useRef } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { meta } from "@common-data";
import EventCard from "@components/event-card";
import FullWidthWrapper from "@components/full-width-wrapper";
import useSwipe from "@hooks/use-swipe";
import { eventListContainer, eventListWrapper, eventsPageContainer, headingsContainer } from "@modules/events/styles";

const EventsHead = () => {
  const { events: eventsMeta } = meta;
  const { title, description, og } = eventsMeta;
  const mapper = (ogKey: string, index: number) => {
    const value = og[ogKey as keyof typeof og];
    return <meta key={"og-meta-events-" + index} property={`og:${ogKey}`} content={value} />;
  };
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {Object.keys(og).map(mapper)}
    </Head>
  );
};

export default function EventsModule() {
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

  return (
    <FullWidthWrapper css={eventsPageContainer}>
      <EventsHead />
      <div css={headingsContainer} ref={headingContainerRef}>
        <h2 onClick={upcomingHeadingClickHandler} className="active">
          Upcoming Events
        </h2>
        <h2 onClick={pastHeadingClickHandler}>Past Events</h2>
      </div>
      <div css={eventListWrapper} ref={eventListWrapperRef}>
        <section css={eventListContainer} id="upcoming-events">
          {Array(8)
            .fill(0)
            .map((_, index) => {
              return (
                <EventCard
                  date={new Date()}
                  title="Event"
                  key={index + "evep"}
                  location="Location"
                  description="
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis ultricies
            "
                  link="/events/gok-trek"
                  imgSrc="https://images.pexels.com/photos/9072250/pexels-photo-9072250.jpeg"
                />
              );
            })}
        </section>
        <section css={eventListContainer} id="past-events">
          {Array(8)
            .fill(0)
            .map((_, index) => {
              return (
                <EventCard
                  date={new Date()}
                  title="Event"
                  key={index + "eveu"}
                  location="Location"
                  isHiglihgted={false}
                  description="
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis ultricies
            "
                  link="/events/gok-trek"
                  imgSrc="https://images.pexels.com/photos/9072250/pexels-photo-9072250.jpeg"
                />
              );
            })}
        </section>
      </div>
    </FullWidthWrapper>
  );
}
