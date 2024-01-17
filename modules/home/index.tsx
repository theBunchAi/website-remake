import Head from "next/head";
import { meta } from "@common-data";
import HomeEventsSection from "@modules/home/events";
import HomeFeaturedSection from "@modules/home/featured";
import HomeHeroSection from "@modules/home/hero";
import HomeKnowMoreSection from "@modules/home/know-more";
import { homeWrapperCss } from "@modules/home/styles";

const HomeHead = () => {
  const { home: homeMeta } = meta;
  const { title, description, og } = homeMeta;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {Object.keys(og).map((ogKey: string, index: number) => {
        const value = og[ogKey as keyof typeof og];
        return <meta key={"og-meta-home-" + index} property={`og:${ogKey}`} content={value} />;
      })}
    </Head>
  );
};

export default function Home() {
  return (
    <div css={homeWrapperCss}>
      <HomeHead />
      <HomeHeroSection />
      <HomeFeaturedSection />
      <HomeEventsSection />
      <HomeKnowMoreSection />
    </div>
  );
}
