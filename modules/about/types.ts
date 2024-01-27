import { Document } from "@contentful/rich-text-types";
import { CommonAsset, ItemsWrapper } from "@modules/common/types";

export interface AboutContent {
  aboutData: ItemsWrapper<AboutItem>;
}

export interface AboutItem {
  aboutBannerHeading: string;
  aboutBannerImage: CommonAsset;
  aboutFullText: {
    json: Document;
  };
}

export interface AboutProps {
  aboutData: AboutItem;
}
