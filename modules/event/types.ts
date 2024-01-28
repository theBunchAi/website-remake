import { CommonAsset, CommonDocument, ItemsExtendedWrapper, ItemsWrapper } from "@modules/common/types";

export interface EventNamesContent {
  eventNames: ItemsExtendedWrapper<{ eventName: string }>;
}

export interface EventDetailsContent {
  eventData: ItemsWrapper<EventDetailsItem>;
}

export interface EventBottomCollectionItem {}

export interface EventTabsCollectionItem {
  tabTitle: string;
  tabText: CommonDocument;
}

export interface EventDetailsItem {
  eventName: string;
  eventDate: string;
  eventPrice: number;
  eventDuration: string;
  eventPoster: CommonAsset;
  venue: string;
  venueMapsLink: string;
  formLink: string;
  shortDescription: string;
  helperText: string;
  bottomCollection: ItemsWrapper<EventBottomCollectionItem>;
  tabsCollection: ItemsWrapper<EventTabsCollectionItem>;
  longDescription: CommonDocument;
}
