import { CommonAsset, ItemsExtendedWrapper, ItemsWrapper, CommonDocument } from "@modules/common/types";

export interface ProjectNamesContent {
  projectNames: ItemsExtendedWrapper<{ title: string }>;
}

export interface ProjectDetailsItem {
  title: string;
  titlePrefix: string;
  titleSuffix: string;
  shortBrief: string;
  projectImage: CommonAsset;
  buttonText: string;
  projectDescription: CommonDocument;
}

export interface ProjectDetailsContent {
  projectData: ItemsWrapper<ProjectDetailsItem>;
}
