import { ItemsWrapper } from "@modules/common/types";

export interface FaqsContent {
  faQsCollection: ItemsWrapper<FaqItem>;
  staticData: ItemsWrapper<Record<"faqSubHeading", string>>;
}

export interface FaqPageProps {
  faqItems: FaqItem[];
  faqSubHeading: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
