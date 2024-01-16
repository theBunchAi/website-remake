import FullWidthWrapper from "@components/full-width-wrapper";
import HomeEventList from "@modules/home/events/event-list";
import HomeProjectList from "@modules/home/events/project-list";
import { homeEventSectionOuterWrapperCss, homeEventSectionWrapper } from "@modules/home/events/styles";

export default function HomeEventsSection() {
  return (
    <FullWidthWrapper css={homeEventSectionWrapper} wrapperCss={homeEventSectionOuterWrapperCss}>
      <HomeEventList />
      <HomeProjectList />
    </FullWidthWrapper>
  );
}
