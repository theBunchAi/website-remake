import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document } from "@contentful/rich-text-types";
import FullWidthWrapper from "@components/full-width-wrapper";
import { knowMoreOuterWrapperCss, knowMoreWrapperCss } from "@modules/home/know-more/styles";
interface HomeKnowMoreSectionProps {
  text: Document;
}
export default function HomeKnowMoreSection(props: HomeKnowMoreSectionProps) {
  const { text } = props;
  const html = documentToReactComponents(text, {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_, children) => {
        return <p className="para">{children}</p>;
      }
    }
  });
  return (
    <FullWidthWrapper element="main" wrapperCss={knowMoreOuterWrapperCss} css={knowMoreWrapperCss}>
      <h2 className="heading">About TheBunch.ai</h2>
      {html}
      <Link href="/about" className="link">
        Know More
      </Link>
    </FullWidthWrapper>
  );
}
