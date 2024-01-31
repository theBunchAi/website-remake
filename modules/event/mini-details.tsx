import { format } from "date-fns";
import { CalendarIcon, LocationOnIcon } from "@components/dynamic-imports";
import { eventDetailContainerCss, eventDetailSectionWrapperCss } from "@modules/event/styles";

interface MiniEventDetailsProps {
  eventDate: Date;
  eventDuration: string;
  venue: string;
  venueMapsLink: string;
  helperText: string;
}

const MiniEventDetails = (props: MiniEventDetailsProps) => {
  const { eventDate, eventDuration, venue, venueMapsLink, helperText } = props;
  const upperDate = format(eventDate, "EEEE, d MMM");
  const lowerDate = format(eventDate, "hh:mm aaa");
  return (
    <div css={eventDetailSectionWrapperCss}>
      <div css={eventDetailContainerCss}>
        <CalendarIcon />
        <div className="date-container">
          <span className="upper-date" suppressHydrationWarning>{`${upperDate}`}</span>
          <span className="lower-date" suppressHydrationWarning>{`${lowerDate} onwards ( ${eventDuration} )`}</span>
        </div>
      </div>
      <a target="_blank" rel="noopener noreferrer" href={venueMapsLink} css={eventDetailContainerCss}>
        <LocationOnIcon />
        <span className="location-container">{venue}</span>
      </a>
      <div className="helper-text" css={eventDetailContainerCss}>
        {helperText}
      </div>
    </div>
  );
};

export default MiniEventDetails;
