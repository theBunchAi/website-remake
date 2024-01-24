import { useEffect, useRef } from "react";
import { companyName } from "@common-data";
import { RightIcon, LeftIcon } from "@components/dynamic-imports";
import FeaturedEventCard from "@components/featured-event-card";
import FullWidthWrapper from "@components/full-width-wrapper";
import {
  dotCss,
  dotsContainerCss,
  featuredArrowIconCss,
  featuredCardCss,
  featuredCardsContainerCss,
  featuredCardsWrapperCss,
  featuredNavButtonsCss,
  homeFeaturedContainerCss,
  homeFeaturedHeadingCss
} from "@modules/home/featured/styles";
import { HomeModuleProps } from "@modules/home/types";

export default function HomeFeaturedSection(props: Pick<HomeModuleProps, "featuredEvents">) {
  const { featuredEvents } = props;
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const dotsContainerRef = useRef<HTMLDivElement>(null);
  const leftArrowRef = useRef<HTMLButtonElement>(null);
  const rightArrowRef = useRef<HTMLButtonElement>(null);
  const getSingleCardWidth = () => {
    const card = cardsContainerRef.current?.firstChild as HTMLDivElement;
    return card?.offsetWidth ?? 0;
  };
  const dotMapper = (_: unknown, index: number) => {
    const dotClickHandler = () => {
      const cardWidth = getSingleCardWidth();
      const cardsContainer = cardsContainerRef.current;
      cardsContainer?.scroll({
        left: cardWidth * index,
        behavior: "smooth"
      });
    };
    return <div css={dotCss} key={"featured-card-dot-" + index} onClick={dotClickHandler}></div>;
  };
  const clickHandler = (direction: "left" | "right") => {
    const mainFunc = () => {
      const cardWidth = getSingleCardWidth();
      const currentScrollVal = cardsContainerRef.current?.scrollLeft ?? 0;
      cardsContainerRef.current?.scroll({
        left: direction === "left" ? currentScrollVal - cardWidth : currentScrollVal + cardWidth,
        behavior: "smooth"
      });
    };
    return mainFunc;
  };
  useEffect(() => {
    const cardsContainer = cardsContainerRef.current;
    const allCards = Array.from(cardsContainer?.children ?? []) as HTMLDivElement[];
    if (allCards.length <= 3) {
      leftArrowRef.current?.classList.add("no-desktop");
      rightArrowRef.current?.classList.add("no-desktop");
    }
    if (allCards.length === 1) {
      leftArrowRef.current?.classList.add("no-mobile");
      rightArrowRef.current?.classList.add("no-mobile");
    }
    const observerOptions: IntersectionObserverInit = {
      root: cardsContainer,
      threshold: 0.6
    };
    const observerCallback: IntersectionObserverCallback = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const index = allCards.indexOf(entry.target as HTMLDivElement);
          const dotsContainer = dotsContainerRef.current;
          const allDots = Array.from(dotsContainer?.children ?? []) as HTMLDivElement[];
          allDots.forEach((dot) => dot.classList.remove("active"));
          allDots[index]?.classList?.add("active");
          break;
        }
      }
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    allCards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);
  const eventMapper = (event: (typeof featuredEvents)[0], index: number) => {
    const {
      eventDate,
      eventName,
      eventPoster,
      limitedSeats,
      limitedSeatsBottomText,
      limitedSeatsTopText,
      shortDescription,
      venue
    } = event;
    const mainDate = new Date(eventDate);
    const limitedSeatesText = {
      top: limitedSeatsTopText || "Hurry",
      bottom: limitedSeatsBottomText || "Limited Seats"
    };
    const eventLinkComponent = encodeURIComponent(eventName.replace(/\s/g, "-").toLowerCase());
    const imgProps = {
      src: eventPoster?.url ?? "",
      alt: `${companyName} | ${eventName}`
    };
    return (
      <FeaturedEventCard
        date={mainDate}
        image={imgProps}
        hasLimitedSeates={limitedSeats}
        title={eventName}
        description={shortDescription}
        location={venue}
        link={`/events/${eventLinkComponent}`}
        css={featuredCardCss}
        limitedSeatesText={limitedSeatesText}
        key={"featured-card-" + index}
      />
    );
  };
  return (
    <FullWidthWrapper css={homeFeaturedContainerCss}>
      <h2 css={homeFeaturedHeadingCss}>Featured Events</h2>
      <div css={featuredCardsWrapperCss}>
        <button
          css={featuredNavButtonsCss}
          onClick={clickHandler("left")}
          type="button"
          aria-label="Featured Events | Slide left"
          ref={leftArrowRef}
        >
          <RightIcon css={featuredArrowIconCss} />
        </button>
        <div css={featuredCardsContainerCss} ref={cardsContainerRef}>
          {featuredEvents.map(eventMapper)}
        </div>
        <button
          css={featuredNavButtonsCss}
          onClick={clickHandler("right")}
          type="button"
          aria-label="Featured Events | Slide right"
          ref={rightArrowRef}
        >
          <LeftIcon css={featuredArrowIconCss} />
        </button>
      </div>
      <div css={dotsContainerCss} ref={dotsContainerRef}>
        {featuredEvents.map(dotMapper)}
      </div>
    </FullWidthWrapper>
  );
}
