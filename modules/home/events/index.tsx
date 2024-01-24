import FullWidthWrapper from "@components/full-width-wrapper";
import HomeEventList from "@modules/home/events/event-list";
import HomeProjectList from "@modules/home/events/project-list";
import { homeEventSectionOuterWrapperCss, homeEventSectionWrapper } from "@modules/home/events/styles";
import { HomeModuleProps } from "@modules/home/types";

export default function HomeEventsSection(
  props: Omit<HomeModuleProps, "heroProps" | "aboutDocument" | "featuredEvents">
) {
  const { upcomingEvents, pastEvents, projects } = props;
  return (
    <FullWidthWrapper css={homeEventSectionWrapper} wrapperCss={homeEventSectionOuterWrapperCss}>
      <HomeEventList upcomingEvents={upcomingEvents} pastEvents={pastEvents} />
      <HomeProjectList projects={projects} />
    </FullWidthWrapper>
  );
}
