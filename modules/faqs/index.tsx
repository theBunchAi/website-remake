import FullWidthWrapper from "@components/full-width-wrapper";
import PageWrapper from "@components/page-wrapper";
import { faqContainerCss, faqHeadingContainerCss, faqsContainerCss, faqsWrapperCss } from "@modules/faqs/styles";
import { FaqItem, FaqPageProps } from "@modules/faqs/types";

export default function FaqModule(props: FaqPageProps) {
  const { faqItems, faqSubHeading } = props;

  const faqMapper = (faq: FaqItem, index: number) => {
    return (
      <div key={index} css={faqContainerCss}>
        <h3 className="faq-question">{faq.question}</h3>
        <p className="faq-answer">{faq.answer}</p>
      </div>
    );
  };

  return (
    <PageWrapper name="faqs">
      <FullWidthWrapper wrapperCss={faqsWrapperCss}>
        <div css={faqHeadingContainerCss}>
          <h1 className="faq-heading">FAQs</h1>
          <span className="faq-subheading">{faqSubHeading}</span>
        </div>
        <div css={faqsContainerCss}>{faqItems.map(faqMapper)}</div>
      </FullWidthWrapper>
    </PageWrapper>
  );
}
