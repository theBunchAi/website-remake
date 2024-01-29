import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from "next";
import gqlClient from "@/gql/client";
import { gqlProjectDetails, gqlProjectNames } from "@/gql/queries";
import ProjectModule from "@modules/project";
import { ProjectDetailsContent, ProjectDetailsItem, ProjectNamesContent } from "@modules/project/types";

export default function ProjectPage(props: ProjectDetailsItem) {
  return <ProjectModule {...props} />;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const projectName = decodeURIComponent(params?.project as string).replace(/-/gm, " ");
  const { projectData } =
    (await gqlClient.request<ProjectDetailsContent>(gqlProjectDetails, {
      title: projectName
    })) ?? {};
  return {
    props: { ...(projectData?.items?.[0] ?? {}) }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const projectNames: GetStaticPathsResult["paths"] = [];
  const getEventNames = async (skip: number) => {
    const collection = await gqlClient.request<ProjectNamesContent>(gqlProjectNames, {
      skip
    });
    const { skip: skipped = 0, total = 0, items = [] } = collection?.projectNames ?? {};
    for (const { title } of items) {
      const resturucturedEventName = encodeURIComponent(title.replace(/\s/gm, "-").toLowerCase());
      projectNames.push({ params: { project: resturucturedEventName } });
    }
    const itemsLength = items?.length ?? 0;
    if (skipped + itemsLength < total) {
      getEventNames(skip + 100);
    } else {
      return;
    }
  };
  await getEventNames(0);
  return {
    paths: projectNames,
    fallback: false
  };
};
