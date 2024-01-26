import { GetStaticProps } from "next";
import gqlClient from "@/gql/client";
import { gqlAboutPageData } from "@/gql/queries";
import About from "@modules/about";
import { AboutContent } from "@modules/about/types";

export default function AboutPage() {
  return <About />;
}

export const getStaticProps: GetStaticProps = async () => {
  const aboutData = await gqlClient.request<AboutContent>(gqlAboutPageData);
  return {
    props: {
      data: aboutData
    }
  };
};
