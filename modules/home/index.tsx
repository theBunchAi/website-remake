import HomeEventsSection from "@modules/home/events";
import HomeFeaturedSection from "@modules/home/featured";
import HomeHeroSection from "@modules/home/hero";
import { homeWrapperCss } from "@modules/home/styles";

export default function Home() {
  return (
    <div css={homeWrapperCss}>
      <HomeHeroSection />
      <HomeFeaturedSection />
      <HomeEventsSection />
    </div>
  );
}
