import Image from "next/image";
import Link from "next/link";
import { companyName } from "@common-data";
import {
  projectCardDescriptionCss,
  projectCardImgCss,
  projectCardLinkCss,
  projectCardTitleCss,
  projectCardWrapperCss
} from "@components/featured-project-card/styles";
import { FeaturedProjectCardProps } from "@components/featured-project-card/types";

export default function FeaturedProjectCard(props: FeaturedProjectCardProps) {
  const { imgSrc, imgAlt, title, description, linkUrl, linkText } = props;
  return (
    <article css={projectCardWrapperCss}>
      {imgSrc && (
        <Image css={projectCardImgCss} src={imgSrc} alt={imgAlt ?? `${companyName} | ${title}`} fill sizes="100%" />
      )}
      <h2 css={projectCardTitleCss}>{title}</h2>
      <p css={projectCardDescriptionCss}>{description}</p>
      <Link href={linkUrl} css={projectCardLinkCss}>
        {linkText}
      </Link>
    </article>
  );
}
