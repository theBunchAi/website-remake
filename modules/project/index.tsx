import { companyName } from "@common-data";
import BannerPageWrapper from "@components/banner-page-wrapper";
import { BannerPageWrapperProps } from "@components/banner-page-wrapper/types";
import ContentfulDocument from "@components/contentful-document";
import { ProjectDetailsItem } from "@modules/project/types";

export default function ProjectModule(props: ProjectDetailsItem) {
  const { projectDescription, projectImage, title, shortBrief } = props;
  // buttonText titlePrefix titleSuffix -> not used
  const bannerImg = { src: projectImage?.url ?? "", alt: `${title} | ${companyName}` };
  const meta: BannerPageWrapperProps["pageMeta"] = {
    title,
    description: shortBrief,
    og: {
      title,
      description: shortBrief
    }
  };
  return (
    <BannerPageWrapper
      heading={title}
      img={bannerImg}
      pageName={title.replace(/\s/g, "-").toLowerCase()}
      pageMeta={meta}
    >
      <ContentfulDocument {...projectDescription} />
    </BannerPageWrapper>
  );
}
