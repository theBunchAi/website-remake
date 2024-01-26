import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import {
  bannerHeadingCss,
  bannerContainerCss,
  bannerPageWrapperCss,
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
  const { pageName, heading, children, cost, bannerDetails, img, secondChild } = props;

  const momentDate = moment(bannerDetails?.date ?? new Date());

  const costElem = cost && (
    <FullWidthWrapper element="div" css={costContainerCss} wrapperCss={costWrapperCss}>
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
        <span css={boldDetailSpanCss}>{momentDate.format("DD MMM")}</span>
        <span>{momentDate.format("YYYY")}</span>
      </span>
      <span css={detailsContainerCss} className="banner-venue">
        <span css={boldDetailSpanCss}>{momentDate.format("hh:mm A")}</span>
        <span>{bannerDetails.location}</span>
      </span>
    </div>
  );

  return (
    <PageWrapper name={pageName}>
      <FullWidthWrapper element="div" css={bannerContainerCss}>
        <div css={bannerImgContainerCss}>
          <Image src={img.src} alt={img.alt} sizes="100%" fill />
          {bannerDetailsElem}
        </div>
        <h1 css={bannerHeadingCss}>{heading}</h1>
      </FullWidthWrapper>
      <FullWidthWrapper wrapperCss={bannerPageWrapperCss}>
        <div css={textContainerCss}>{children}</div>
        {secondChild}
      </FullWidthWrapper>
      {costElem}
    </PageWrapper>
  );
}
