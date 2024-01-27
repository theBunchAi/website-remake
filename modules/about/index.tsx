/* eslint-disable max-len */
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { companyName } from "@common-data";
import BannerPageWrapper from "@components/banner-page-wrapper";
import { AboutProps } from "@modules/about/types";

export default function About(props: AboutProps) {
  const { aboutData } = props;
  const { aboutBannerHeading = "", aboutBannerImage = {} as never, aboutFullText } = aboutData;
  const { url: aboutImgUrl = "" } = aboutBannerImage;
  const aboutContent = documentToReactComponents(aboutFullText?.json);
  const imageProps = {
    src: aboutImgUrl,
    alt: `${companyName} | About Us`
  };
  return (
    <BannerPageWrapper pageName="about" heading={aboutBannerHeading} img={imageProps}>
      {aboutContent}
    </BannerPageWrapper>
  );
}
