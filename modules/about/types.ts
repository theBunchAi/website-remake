import { ItemsWrapper } from "@modules/common/types";

export interface AboutContent {
  staticData: {
    items: ItemsWrapper<AboutPageItems>;
  };
}

export interface AboutPageItems {
  aboutBannerHeading: string;
  aboutBannerImage: {
    url: string;
  };
  aboutFullText: {
    json: JSON;
  };
}
