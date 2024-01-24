import { CommonEventItem, ItemsWrapper } from "@modules/common/types";

export interface EventPageProps {
  upcomingEvents: CommonEventItem[];
  pastEvents: CommonEventItem[];
}

export interface EventContent {
  upcomingEvents: ItemsWrapper<CommonEventItem>;
  pastEvents: ItemsWrapper<CommonEventItem>;
}
