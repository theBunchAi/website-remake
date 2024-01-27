import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import {
  bannerHeadingCss,
  bannerContainerCss,
  boldDetailSpanCss,
  costContainerCss,
  detailsContainerCss,
  headerDetailsWrapperCss,
  costWrapperCss,
  textContainerCss,
  bannerImgContainerCss
} from "@components/banner-page-wrapper/styles";
import { BannerWidthWrapperProps } from "@components/banner-page-wrapper/types";
import FullWidthWrapper from "@components/full-width-wrapper";
import PageWrapper from "@components/page-wrapper";

export default function BannerPageWrapper(props: BannerWidthWrapperProps) {
  const { pageName, heading, children, cost, bannerDetails, img, secondChild, className } = props;

  const dateObj = bannerDetails?.date ?? new Date();

  const costElem = (
    <FullWidthWrapper css={costContainerCss} wrapperCss={costWrapperCss}>
      <span className="cost-span">
        <b>Rs. {cost}</b>
        <span> / Person</span>
      </span>
      <Link href="/" className="invite-cta">
        Request An Invite
      </Link>
    </FullWidthWrapper>
  );

  const bannerDetailsElem = bannerDetails && (
    <div css={headerDetailsWrapperCss}>
      <span css={detailsContainerCss} className="banner-date">
        <span css={boldDetailSpanCss}>{format(dateObj, "dd MMM")}</span>
        <span>{format(dateObj, "yyyy")}</span>
      </span>
      <span css={detailsContainerCss} className="banner-venue">
        <span css={boldDetailSpanCss}>{format(dateObj, "hh:mm a")}</span>
        <span>{bannerDetails.location}</span>
      </span>
    </div>
  );

  return (
    <PageWrapper name={pageName}>
      <FullWidthWrapper css={bannerContainerCss}>
        <div css={bannerImgContainerCss}>
          <Image src={img.src} alt={img.alt} sizes="100%" fill priority />
          {bannerDetailsElem}
        </div>
        <h1 css={bannerHeadingCss}>{heading}</h1>
      </FullWidthWrapper>
      <FullWidthWrapper className={className} css={textContainerCss}>
        {children}
        {secondChild}
      </FullWidthWrapper>
      {costElem}
    </PageWrapper>
  );
}
