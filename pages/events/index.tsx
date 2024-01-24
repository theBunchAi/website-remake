import { GetStaticProps } from "next";
import gqlClient from "@/gql/client";
import { gqlEventPageData } from "@/gql/queries";
import PageWrapper from "@components/page-wrapper";
import EventsModule from "@modules/events";
import { EventContent, EventPageProps } from "@modules/events/types";

export default function EventsPage(props: EventPageProps) {
  const { upcomingEvents, pastEvents } = props;
  return (
    <PageWrapper name="events">
      <EventsModule upcomingEvents={upcomingEvents} pastEvents={pastEvents} />
    </PageWrapper>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const eventsData = await gqlClient.request<EventContent>(gqlEventPageData, {
    currentDate: new Date().toISOString()
  });
  return {
    props: {
      upcomingEvents: eventsData?.upcomingEvents?.items ?? [],
      pastEvents: eventsData?.pastEvents?.items ?? []
    }
  };
};
