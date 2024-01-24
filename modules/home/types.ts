import type { Document } from "@contentful/rich-text-types";
import { CommonAsset, CommonEventItem, FeaturedEventItem, ItemsWrapper, ProjectItem } from "@modules/common/types";
import { HomeHeroProps } from "@modules/home/hero/types";

interface StaticDataItem {
  homeVideoText: string;
  homeVideoPlaceholderText: string;
  homeVideoPoster: CommonAsset;
  homeVideo: CommonAsset;
  homeAboutText: {
    json: Document;
  };
}

export interface HomeContent {
  staticData: ItemsWrapper<StaticDataItem>;
  featuredEvents: ItemsWrapper<FeaturedEventItem>;
  upcomingEvents: ItemsWrapper<CommonEventItem>;
  pastEvents: ItemsWrapper<CommonEventItem>;
  projects: ItemsWrapper<ProjectItem>;
}

export interface HomePageProps {
  staticData: StaticDataItem;
  featuredEvents: FeaturedEventItem[];
  upcomingEvents: CommonEventItem[];
  pastEvents: CommonEventItem[];
  projects: ProjectItem[];
}

export interface HomeModuleProps {
  heroProps: HomeHeroProps;
  aboutDocument: Document;
  featuredEvents: FeaturedEventItem[];
  upcomingEvents: CommonEventItem[];
  pastEvents: CommonEventItem[];
  projects: ProjectItem[];
}
