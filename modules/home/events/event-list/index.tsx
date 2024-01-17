import { useEffect, useRef } from "react";
import Link from "next/link";
import EventCard from "@components/event-card";
import {
  eventsHeadingContainerCss,
  eventsListContainerCss,
  eventsListsWrapperCss,
  eventsViewMoreButtonCss,
  eventsViewMoreContainerCss,
  eventsWrapperCss
} from "@modules/home/events/event-list/styles";

export default function HomeEventList() {
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
  useEffect(() => {
    const listWrapper = listWrapperRef.current;
    if (listWrapper) {
      let touchstartX = 0;
      let touchendX = 0;
      const threshold = 100;

      const checkDirection = () => {
        // if (touchendX < touchstartX) {
        if (touchendX + threshold < touchstartX) {
          pastHeadingClickHandler();
        }
        // if (touchendX > touchstartX) {
        if (touchendX > touchstartX + threshold) {
          upcomingHeadingClickHandler();
        }
      };
      const touchStartHandler = (e: TouchEvent) => {
        touchstartX = e.changedTouches[0]?.screenX ?? 0;
      };
      const touchEndHandler = (e: TouchEvent) => {
        touchendX = e.changedTouches[0]?.screenX ?? 0;
        checkDirection();
      };

      listWrapper.addEventListener("touchstart", touchStartHandler, { passive: true });

      listWrapper.addEventListener("touchend", touchEndHandler, { passive: true });
      return () => {
        listWrapper.removeEventListener("touchstart", touchStartHandler);
        listWrapper.removeEventListener("touchend", touchEndHandler);
      };
    }
    return;
  }, []);
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
          <EventCard
            date={new Date()}
            title="Gok Trek"
            description="lorem ipsum dolor sit amet, consectetur adipiscing elit. "
            location="Gokarna"
            imgSrc="https://images.pexels.com/photos/9072250/pexels-photo-9072250.jpeg"
            link="/events/gok-trek"
          />
          <EventCard
            date={new Date()}
            title="Gok Trek"
            description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
            location="Gokarna"
            imgSrc="https://images.pexels.com/photos/9072250/pexels-photo-9072250.jpeg"
            link="/events/gok-trek"
          />
          <EventCard
            date={new Date()}
            title="Gok Trek"
            description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
            location="Gokarna"
            imgSrc="https://images.pexels.com/photos/9072250/pexels-photo-9072250.jpeg"
            link="/events/gok-trek"
          />
        </div>
        <div css={eventsListContainerCss} ref={pastEventContainerRef}>
          <EventCard
            date={new Date()}
            title="Gok Trek"
            description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
            location="Gokarna"
            imgSrc="https://images.pexels.com/photos/9072250/pexels-photo-9072250.jpeg"
            link="/events/gok-trek"
            isHiglihgted={false}
          />
          <EventCard
            date={new Date()}
            title="Gok Trek"
            description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
            location="Gokarna"
            imgSrc="https://images.pexels.com/photos/9072250/pexels-photo-9072250.jpeg"
            link="/events/gok-trek"
            isHiglihgted={false}
          />
          <EventCard
            date={new Date()}
            title="Gok Trek"
            description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
            location="Gokarna"
            imgSrc="https://images.pexels.com/photos/9072250/pexels-photo-9072250.jpeg"
            link="/events/gok-trek"
            isHiglihgted={false}
          />
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
