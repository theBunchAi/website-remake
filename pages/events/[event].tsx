import type { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from "next";
import gqlClient from "@/gql/client";
import { gqlEventDetails, gqlEventNames } from "@/gql/queries";
import EventModule from "@modules/event";
import { EventDetailsContent, EventDetailsItem, EventNamesContent } from "@modules/event/types";

export default function EventPage(props: EventDetailsItem) {
  return <EventModule {...props} />;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const eventName = decodeURIComponent(params?.event as string).replace(/-/gm, " ");
  const { eventData } =
    (await gqlClient.request<EventDetailsContent>(gqlEventDetails, {
      eventName
    })) ?? {};
  return {
    props: { ...(eventData?.items?.[0] ?? {}) }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const eventNames: GetStaticPathsResult["paths"] = [];
  const getEventNames = async (skip: number) => {
    const eventNameCollection = await gqlClient.request<EventNamesContent>(gqlEventNames, {
      skip
    });
    const { skip: skipped = 0, total = 0, items = [] } = eventNameCollection?.eventNames ?? {};
    for (const { eventName } of items) {
      const resturucturedEventName = encodeURIComponent(eventName.replace(/\s/gm, "-").toLowerCase());
      eventNames.push({ params: { event: resturucturedEventName } });
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
    paths: eventNames,
    fallback: false
  };
};
