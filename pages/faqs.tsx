import { GetStaticProps } from "next";
import gqlClient from "@/gql/client";
import { gqlFaqsData } from "@/gql/queries";
import FaqModule from "@modules/faqs";
import { FaqPageProps, FaqsContent } from "@modules/faqs/types";

export default function Faqs(props: FaqPageProps) {
  return <FaqModule {...props} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const faqsData = await gqlClient.request<FaqsContent>(gqlFaqsData);
  return {
    props: {
      faqItems: faqsData?.faQsCollection?.items ?? [],
      faqSubHeading:
        faqsData?.staticData?.items?.[0]?.faqSubHeading ??
        "Here are a few frequently asked questions about the brand and events."
    }
  };
};
