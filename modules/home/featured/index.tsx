import { useEffect, useRef } from "react";
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

export default function HomeFeaturedSection() {
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
          <FeaturedEventCard
            date={new Date()}
            image={{
              src: "https://images.pexels.com/photos/9072250/pexels-photo-9072250.jpeg",
              alt: "Image"
            }}
            hasLimitedSeates
            title="Gok Trek"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatum."
            location="Gokarna"
            link="/events/gok-trek"
            css={featuredCardCss}
          />
          <FeaturedEventCard
            date={new Date()}
            image={{
              // eslint-disable-next-line max-len
              src: "https://images.pexels.com/photos/8819460/pexels-photo-8819460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              alt: "Image"
            }}
            hasLimitedSeates
            title="Speed Friendship"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatum."
            location="Gokarna"
            link="/events/gok-trek"
            css={featuredCardCss}
          />
          <FeaturedEventCard
            date={new Date()}
            image={{
              // eslint-disable-next-line max-len
              src: "https://images.pexels.com/photos/16617569/pexels-photo-16617569/free-photo-of-family-having-a-garden-party.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              alt: "Image"
            }}
            title="Dance"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatum."
            location="Gokarna"
            link="/events/gok-trek"
            css={featuredCardCss}
          />
          <FeaturedEventCard
            date={new Date()}
            image={{
              src: "https://images.pexels.com/photos/9072250/pexels-photo-9072250.jpeg",
              alt: "Image"
            }}
            title="Dance"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatum."
            location="Gokarna"
            link="/events/gok-trek"
            css={featuredCardCss}
          />
          <FeaturedEventCard
            date={new Date()}
            image={{
              src: "https://images.pexels.com/photos/9072250/pexels-photo-9072250.jpeg",
              alt: "Image"
            }}
            title="Dance"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatum."
            location="Gokarna"
            css={featuredCardCss}
            link="/events/gok-trek"
          />
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
        {Array(5).fill(0).map(dotMapper)}
      </div>
    </FullWidthWrapper>
  );
}
