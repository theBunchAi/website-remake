import FeaturedProjectCard from "@components/featured-project-card";
import { projectListWrapperCss } from "@modules/home/events/project-list/styles";

export default function HomeProjectList() {
  return (
    <aside css={projectListWrapperCss}>
      <FeaturedProjectCard
        title="Project 1"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae 
 aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nisl eu nisl.
 aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nisl eu nisl."
        linkText="view project"
        linkUrl="/"
        imgSrc={
          "https://images.pexels.com/photos/4078048/\
pexels-photo-4078048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      />
      <FeaturedProjectCard
        title="Project 2"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae \
aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nisl eu nisl."
        linkText="view project"
        linkUrl="/"
      />
    </aside>
  );
}
