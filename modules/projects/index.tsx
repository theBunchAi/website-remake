import FeaturedProjectCard from "@components/featured-project-card";
import FullWidthWrapper from "@components/full-width-wrapper";
import PageWrapper from "@components/page-wrapper";
import { itemsWrapperCss, projectsPageContainerCss } from "@modules/projects/styles";
import { AllProjectsContent } from "@modules/projects/types";

type Props = AllProjectsContent["projects"];

export default function ProjectsModule(props: Props) {
  const { items } = props;
  const mapper = (project: (typeof items)[0], index: number) => {
    const { title, buttonText, projectImage, shortBrief, titlePrefix, titleSuffix } = project;
    const url = "/projects/" + encodeURI(title.replace(/\s/gm, "-").toLowerCase());
    return (
      <FeaturedProjectCard
        key={"home-project-card-" + index}
        title={title}
        description={shortBrief}
        linkText={buttonText}
        linkUrl={url}
        imgSrc={projectImage?.url ?? ""}
        titlePrefix={titlePrefix}
        titleSuffix={titleSuffix}
      />
    );
  };
  return (
    <PageWrapper name="projects">
      <FullWidthWrapper css={projectsPageContainerCss}>
        <h1>Projects</h1>
        <div css={itemsWrapperCss}>{items.map(mapper)}</div>
      </FullWidthWrapper>
    </PageWrapper>
  );
}
