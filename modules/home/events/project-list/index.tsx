import FeaturedProjectCard from "@components/featured-project-card";
import { ProjectItem } from "@modules/common/types";
import { projectListWrapperCss } from "@modules/home/events/project-list/styles";
interface HomeProjectListProps {
  projects: ProjectItem[];
}
export default function HomeProjectList(props: HomeProjectListProps) {
  const { projects = [] } = props;
  const projectMapper = (project: ProjectItem, index: number) => {
    const { title, buttonText, projectImage, shortBrief, titlePrefix, titleSuffix } = project;
    return (
      <FeaturedProjectCard
        key={"home-project-card-" + index}
        title={title}
        description={shortBrief}
        linkText={buttonText}
        linkUrl="/"
        imgSrc={projectImage?.url ?? ""}
        titlePrefix={titlePrefix}
        titleSuffix={titleSuffix}
      />
    );
  };
  return <aside css={projectListWrapperCss}>{projects.map(projectMapper)}</aside>;
}
