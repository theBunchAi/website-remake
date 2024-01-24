import { CommonEventItem, ItemsWrapper } from "@modules/common/types";

export interface EventPageProps {
  upcomingEvents: CommonEventItem[];
  pastEvents: CommonEventItem[];
}

export interface UpcomingEventsContent {
  upcomingEvents: ItemsWrapper<CommonEventItem>;
}
export interface PastEventsContent {
  pastEvents: ItemsWrapper<CommonEventItem>;
}
