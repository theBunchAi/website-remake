import FullWidthWrapper from "@components/full-width-wrapper";
import HomeEventList from "@modules/home/events/event-list";
import HomeProjectList from "@modules/home/events/project-list";
import { homeEventSectionWrapper } from "@modules/home/events/styles";

export default function HomeEventsSection() {
  return (
    <FullWidthWrapper element="section" css={homeEventSectionWrapper}>
      <HomeEventList />
      <HomeProjectList />
    </FullWidthWrapper>
  );
}
