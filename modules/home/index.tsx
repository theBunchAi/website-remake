import Head from "next/head";
import { meta } from "@common-data";
import HomeEventsSection from "@modules/home/events";
import HomeFeaturedSection from "@modules/home/featured";
import HomeHeroSection from "@modules/home/hero";
import HomeKnowMoreSection from "@modules/home/know-more";
import { homeWrapperCss } from "@modules/home/styles";
import { HomeModuleProps } from "@modules/home/types";

const HomeHead = () => {
  const { home: homeMeta } = meta;
  const { title, description, og } = homeMeta;
  const mapper = (ogKey: string, index: number) => {
    const value = og[ogKey as keyof typeof og];
    return <meta key={"og-meta-home-" + index} property={`og:${ogKey}`} content={value} />;
  };
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {Object.keys(og).map(mapper)}
    </Head>
  );
};

export default function Home(props: HomeModuleProps) {
  const { heroProps, aboutDocument, featuredEvents, upcomingEvents, pastEvents, projects } = props;
  return (
    <div css={homeWrapperCss}>
      <HomeHead />
      <HomeHeroSection {...heroProps} />
      <HomeFeaturedSection featuredEvents={featuredEvents} />
      <HomeEventsSection upcomingEvents={upcomingEvents} pastEvents={pastEvents} projects={projects} />
      <HomeKnowMoreSection text={aboutDocument} />
    </div>
  );
}
