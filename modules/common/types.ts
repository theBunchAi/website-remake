import type { Document } from "@contentful/rich-text-types";

export interface CommonAsset {
  url: string;
}

export interface CommonAssetLink {
  sys: {
    id: string;
  };
  description: string;
  url: string;
  height: number;
  width: number;
  contentType: string;
}

export interface CommonDocument {
  json: Document;
  links: {
    assets: {
      block: CommonAssetLink[];
    };
  };
}

export interface CommonEventItem {
  eventDate: string;
  eventName: string;
  shortDescription: string;
  venue: string;
  eventPoster: CommonAsset;
}

export interface FeaturedEventItem extends CommonEventItem {
  limitedSeats: boolean;
  limitedSeatsTopText: string;
  limitedSeatsBottomText: string;
}

export interface ProjectItem {
  title: string;
  titlePrefix: string | null;
  titleSuffix: string | null;
  shortBrief: string;
  buttonText: string;
  projectImage: CommonAsset;
}

export interface ItemsWrapper<ItemType> {
  items: ItemType[];
}

export interface ItemsExtendedWrapper<T> extends ItemsWrapper<T> {
  total: number;
  skip: number;
  limit: number;
}
