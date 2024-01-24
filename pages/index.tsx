import type { GetStaticProps } from "next";
import gqlClient from "@/gql/client";
import { gqlHomeData } from "@/gql/queries";
import PageWrapper from "@components/page-wrapper";
import Home from "@modules/home";
import type { HomeContent, HomePageProps } from "@modules/home/types";

export default function HomePage(props: HomePageProps) {
  const { staticData, featuredEvents, upcomingEvents, pastEvents, projects } = props;
  const { homeVideoText, homeVideoPlaceholderText, homeVideo, homeVideoPoster, homeAboutText } = staticData;
  const heroProps = {
    heroMainText: homeVideoText,
    heroPlaceholderText: homeVideoPlaceholderText,
    videoUrl: homeVideo?.url,
    posterUrl: homeVideoPoster?.url
  };
  return (
    <PageWrapper name="home">
      <Home
        heroProps={heroProps}
        aboutDocument={homeAboutText?.json}
        featuredEvents={featuredEvents}
        upcomingEvents={upcomingEvents}
        pastEvents={pastEvents}
        projects={projects}
      />
    </PageWrapper>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const homeData = await gqlClient.request<HomeContent>(gqlHomeData, {
    currentDate: new Date().toISOString()
  });
  return {
    props: {
      staticData: homeData?.staticData?.items?.[0] ?? {},
      featuredEvents: homeData?.featuredEvents?.items ?? [],
      upcomingEvents: homeData?.upcomingEvents?.items ?? [],
      pastEvents: homeData?.pastEvents?.items ?? [],
      projects: homeData?.projects?.items ?? []
    }
  };
};
