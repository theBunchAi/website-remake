import { Document } from "@contentful/rich-text-types";
import { CommonAsset, ItemsExtendedWrapper, ItemsWrapper } from "@modules/common/types";

export interface EventNamesContent {
  eventNames: ItemsExtendedWrapper<{ eventName: string }>;
}

export interface EventDetailsContent {
  eventData: ItemsWrapper<EventDetailsItem>;
}

export interface EventDetailsItem {
  eventName: string;
  eventDate: string;
  eventPrice: number;
  eventDuration: string;
  venue: string;
  venueMapsLink: string;
  shortDescription: string;
  helperText: string;
  tabsCollection: ItemsWrapper<{
    tabTitle: string;
    tabText: {
      json: Document;
    };
  }>;
  eventPoster: CommonAsset;
  longDescription: {
    json: Document;
  };
}
