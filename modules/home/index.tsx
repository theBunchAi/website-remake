import HomeEventsSection from "@modules/home/events";
import HomeFeaturedSection from "@modules/home/featured";
import HomeHeroSection from "@modules/home/hero";
import HomeKnowMoreSection from "@modules/home/know-more";
import { homeWrapperCss } from "@modules/home/styles";
import { HomeModuleProps } from "@modules/home/types";

export default function Home(props: HomeModuleProps) {
  const { heroProps, aboutDocument, featuredEvents, upcomingEvents, pastEvents, projects } = props;
  return (
    <div css={homeWrapperCss}>
      <HomeHeroSection {...heroProps} />
      <HomeFeaturedSection featuredEvents={featuredEvents} />
      <HomeEventsSection upcomingEvents={upcomingEvents} pastEvents={pastEvents} projects={projects} />
      <HomeKnowMoreSection text={aboutDocument} />
    </div>
  );
}
