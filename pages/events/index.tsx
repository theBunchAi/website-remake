import { GetStaticProps } from "next";
import gqlClient from "@/gql/client";
import { gqlEventPageData } from "@/gql/queries";
import EventsModule from "@modules/events";
import { EventContent, EventPageProps } from "@modules/events/types";

export default function EventsPage(props: EventPageProps) {
  const { upcomingEvents, pastEvents } = props;
  return (
    <div className="page-wrapper">
      <EventsModule upcomingEvents={upcomingEvents} pastEvents={pastEvents} />
    </div>
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
