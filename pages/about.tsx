import { GetStaticProps } from "next";
import gqlClient from "@/gql/client";
import { gqlAboutPageData } from "@/gql/queries";
import About from "@modules/about";
import { AboutContent, AboutProps } from "@modules/about/types";

export default function AboutPage(props: AboutProps) {
  return <About {...props} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const aboutData = await gqlClient.request<AboutContent>(gqlAboutPageData);
  return {
    props: {
      aboutData: aboutData?.aboutData?.items?.[0] ?? {}
    }
  };
};
