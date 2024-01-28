import { CommonAsset, CommonDocument, ItemsWrapper } from "@modules/common/types";

export interface AboutContent {
  aboutData: ItemsWrapper<AboutItem>;
}

export interface AboutItem {
  aboutBannerHeading: string;
  aboutBannerImage: CommonAsset;
  aboutFullText: CommonDocument;
}

export interface AboutProps {
  aboutData: AboutItem;
}
