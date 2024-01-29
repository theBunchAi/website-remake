import { useEffect, useMemo, useState } from "react";
import { companyName } from "@common-data";
import BannerPageWrapper from "@components/banner-page-wrapper";
import type { BannerPageWrapperBottomBar, BannerPageWrapperProps } from "@components/banner-page-wrapper/types";
import ContentfulDocument from "@components/contentful-document";
import MiniEventDetails from "@modules/event/mini-details";
import { eventSubHeadingCss } from "@modules/event/styles";
import Tabs from "@modules/event/tabs";
import { EventDetailsItem } from "@modules/event/types";

export default function EventModule(props: EventDetailsItem) {
  const {
    eventPoster,
    eventName,
    longDescription,
    eventPrice,
    eventDate: propEventDate,
    venue,
    shortDescription,
    eventDuration,
    venueMapsLink,
    helperText,
    tabsCollection,
    formLink
  } = props;
  const eventDate = useMemo(() => new Date(propEventDate), [propEventDate]);
  const tabs = tabsCollection?.items ?? [];
  tabs.push();
  const [bottomBar, setBottomBar] = useState<BannerPageWrapperBottomBar | null>(null);
  const bannerDetails = { date: eventDate, location: venue };
  const bannerImg = { src: eventPoster?.url ?? "", alt: `${eventName} | ${companyName}` };

  useEffect(() => {
    const rawDate = new Date();
    if (eventDate > rawDate) {
      setBottomBar({
        cost: eventPrice,
        link: formLink
      });
    }
  }, [eventPrice, eventDate, formLink]);

  const meta: BannerPageWrapperProps["pageMeta"] = {
    title: eventName,
    description: shortDescription,
    og: {
      title: eventName,
      description: shortDescription
    }
  };

  return (
    <BannerPageWrapper
      heading={eventName}
      img={bannerImg}
      bottomBar={bottomBar}
      bannerDetails={bannerDetails}
      pageName={eventName.replace(/\s/g, "-").toLowerCase()}
      pageMeta={meta}
    >
      <p css={eventSubHeadingCss}>{shortDescription}</p>
      <MiniEventDetails
        eventDate={eventDate}
        eventDuration={eventDuration}
        venue={venue}
        venueMapsLink={venueMapsLink}
        helperText={helperText || "Hosted in english"}
      />
      <ContentfulDocument {...longDescription} />
      <Tabs items={tabsCollection?.items ?? []} />
    </BannerPageWrapper>
  );
}
