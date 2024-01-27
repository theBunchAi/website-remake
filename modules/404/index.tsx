import Link from "next/link";
import FullWidthWrapper from "@components/full-width-wrapper";
import PageWrapper from "@components/page-wrapper";
import {
  error404HeaderCss,
  error404LinkCss,
  error404ParaCss,
  error404SubheadingCss,
  error404TextCss,
  error404WrapperCss
} from "@modules/404/styles";

export default function Error404Module() {
  return (
    <PageWrapper name="404">
      <FullWidthWrapper css={error404WrapperCss}>
        <h1 css={error404HeaderCss}>TheBunch.ai</h1>
        <span css={error404SubheadingCss}>Whoops! Page Not Found</span>
        <span css={error404TextCss}>404</span>
        <p css={error404ParaCss}>
          We are very sorry for the inconvenience. It looks like you’re trying to access a page that has been deleted or
          never existed.
        </p>
        <Link href="/" css={error404LinkCss}>
          Back to homepage
        </Link>
      </FullWidthWrapper>
    </PageWrapper>
  );
}
