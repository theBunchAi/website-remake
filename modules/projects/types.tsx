import { ItemsWrapper } from "@modules/common/types";
import { ProjectDetailsItem } from "@modules/project/types";

export interface AllProjectsContent {
  projects: ItemsWrapper<Omit<ProjectDetailsItem, "projectDescription">>;
}
