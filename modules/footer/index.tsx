import Link from "next/link";
import { footerContent } from "@common-data";
import FullWidthWrapper from "@components/full-width-wrapper";
import {
  footerLowerWrapperCss,
  footerUpperWrapperCss,
  footerWrapperCss,
  mainNavWrapperCss,
  mainTopTextCss,
  socialsWrapperCss
} from "@modules/footer/styles";

export default function Footer() {
  const { topText: footerTopText, nav, socials, attributes, bottomText } = footerContent;
  const { topText: socialsTopText, links: socialLinks } = socials;
  const { text: attributesRawText, links: attributeLinks } = attributes;
  let attributesHtml = attributesRawText;
  for (const attribute of attributeLinks) {
    const { actualText, dummyText, link } = attribute;
    attributesHtml = attributesHtml.replace(
      dummyText,
      `<a href="${link}" target="_blank" rel="noopener noreferrer">${actualText}</a>`
    );
  }
  attributesHtml = attributesHtml.replace(/\s\|\s/g, "<span class='break'> | </span>");
  const navMapper = (item: (typeof nav)[0], index: number) => {
    const { link, text, isLong } = item;
    return (
      <Link key={"footer-nav-" + index} href={link} className={isLong ? "long-text" : undefined}>
        {text}
      </Link>
    );
  };
  const socialsMapper = (item: (typeof socialLinks)[0], index: number) => {
    const { link, icon: Icon, name, id } = item;
    return (
      <a
        key={"footer-socials-" + index}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={"The Bunch.ai | " + name + " | " + id}
      >
        <Icon className="footer-social-icon" />
      </a>
    );
  };
  const lowerJsx = (
    <div className="attribute" css={footerLowerWrapperCss}>
      <span dangerouslySetInnerHTML={{ __html: attributesHtml }} />
      <span>{bottomText}</span>
    </div>
  );
  return (
    <FullWidthWrapper
      element="footer"
      css={footerWrapperCss}
      secondContainer={lowerJsx}
      containerCss={footerUpperWrapperCss}
    >
      <span css={mainTopTextCss}>{footerTopText}</span>
      <nav css={mainNavWrapperCss}>{nav.map(navMapper)}</nav>
      <div className="socials" css={socialsWrapperCss}>
        <span>{socialsTopText}</span>
        <nav>{socialLinks.map(socialsMapper)}</nav>
      </div>
    </FullWidthWrapper>
  );
}
