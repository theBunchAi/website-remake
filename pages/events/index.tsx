import { GetStaticProps } from "next";
import gqlClient from "@/gql/client";
import { gqlUpcomingEvents, gqlPastEvents } from "@/gql/queries";
import PageWrapper from "@components/page-wrapper";
import EventsModule from "@modules/events";
import { EventPageProps, UpcomingEventsContent, PastEventsContent } from "@modules/events/types";

export default function EventsPage(props: EventPageProps) {
  const { upcomingEvents, pastEvents } = props;
  return (
    <PageWrapper name="events">
      <EventsModule upcomingEvents={upcomingEvents} pastEvents={pastEvents} />
    </PageWrapper>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const upcomingEvents = await gqlClient.request<UpcomingEventsContent>(gqlUpcomingEvents, {
    currentDate: new Date().toISOString()
  });
  const pastEvents = await gqlClient.request<PastEventsContent>(gqlPastEvents, {
    currentDate: new Date().toISOString()
  });
  return {
    props: {
      upcomingEvents: upcomingEvents?.upcomingEvents?.items ?? [],
      pastEvents: pastEvents?.pastEvents?.items ?? []
    }
  };
};
