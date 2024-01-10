import dynamic from "next/dynamic";
import FeaturedCard from "@components/featured-card";
import FullWidthWrapper from "@components/full-width-wrapper";
import {
  dotCss,
  dotsContainerCss,
  featuredCardCss,
  featuredCardsContainerCss,
  featuredCardsWrapperCss,
  featuredNavButtonsCss,
  homeFeaturedContainerCss,
  homeFeaturedHeadingCss
} from "@modules/home/featured/styles";
import { useEffect, useRef } from "react";
const ChevronLeftRoundedIcon = dynamic(() => import("@mui/icons-material/ChevronLeftRounded"), {
  ssr: false,
  loading: () => <>{"<"}</>
});
const ChevronRightRoundedIcon = dynamic(() => import("@mui/icons-material/ChevronRightRounded"), {
  ssr: false,
  loading: () => <>{">"}</>
});

export default function HomeFeaturedSection() {
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const dotsContainerRef = useRef<HTMLDivElement>(null);
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
  const leftClickHandler = () => {
    const cardWidth = getSingleCardWidth();
    const currentScrollVal = cardsContainerRef.current?.scrollLeft ?? 0;
    cardsContainerRef.current?.scroll({
      left: currentScrollVal - cardWidth,
      behavior: "smooth"
    });
  };
  const rightClickHandler = () => {
    const cardWidth = getSingleCardWidth();
    const currentScrollVal = cardsContainerRef.current?.scrollLeft ?? 0;
    cardsContainerRef.current?.scroll({
      left: currentScrollVal + cardWidth,
      behavior: "smooth"
    });
  };
  useEffect(() => {
    const cardsContainer = cardsContainerRef.current;
    const allCards = Array.from(cardsContainer?.children ?? []) as HTMLDivElement[];
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
        }
      }
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    allCards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);
  return (
    <FullWidthWrapper element="section" containerCss={homeFeaturedContainerCss}>
      <h2 css={homeFeaturedHeadingCss}>Featured Events</h2>
      <div css={featuredCardsWrapperCss}>
        <button
          css={featuredNavButtonsCss}
          onClick={leftClickHandler}
          type="button"
          aria-label="Featured Events | Slide left"
        >
          <ChevronLeftRoundedIcon />
        </button>
        <div css={featuredCardsContainerCss} ref={cardsContainerRef}>
          <FeaturedCard
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
          <FeaturedCard
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
          <FeaturedCard
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
          <FeaturedCard
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
          <FeaturedCard
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
          onClick={rightClickHandler}
          type="button"
          aria-label="Featured Events | Slide right"
        >
          <ChevronRightRoundedIcon />
        </button>
      </div>
      <div css={dotsContainerCss} ref={dotsContainerRef}>
        {Array(5).fill(0).map(dotMapper)}
      </div>
    </FullWidthWrapper>
  );
}
