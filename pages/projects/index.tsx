import { GetStaticProps } from "next";
import gqlClient from "@/gql/client";
import { gqlAllProjects } from "@/gql/queries";
import ProjectsModule from "@modules/projects";
import { AllProjectsContent } from "@modules/projects/types";

export default function ProjectsPage(props: AllProjectsContent["projects"]) {
  return <ProjectsModule items={props?.items} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = await gqlClient.request<AllProjectsContent>(gqlAllProjects);
  const items = projects?.projects?.items || [];
  return {
    props: { items },
    revalidate: 7 * 24 * 60 * 60
  };
};
