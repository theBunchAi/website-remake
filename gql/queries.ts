import { gql } from "graphql-request";

const commonHomeEventFields = `
    eventDate
    eventName
    shortDescription
    venue
    eventPoster {
        url
    }
`;

const commonHomeAndEventPageEvents = (limit: number) => `
    upcomingEvents: eventInfoCollection(
      limit: ${limit}, 
      where: { eventDate_gte: $currentDate }, 
      order: [eventDate_DESC]) {
      items {
        ${commonHomeEventFields}
      }
    }
    pastEvents: eventInfoCollection(limit: ${limit}, where: { eventDate_lt: $currentDate }, order: [eventDate_DESC]) {
      items {
        ${commonHomeEventFields}
      }
    }
`;

export const gqlHomeData = gql`
  query ($currentDate: DateTime!) {
    staticData: staticContentCollection(limit: 1) {
      items {
        homeVideoText
        homeVideoPlaceholderText
        homeVideoPoster {
          url
        }
        homeVideo {
          url
        }
        homeAboutText {
          json
        }
      }
    }
    featuredEvents: eventInfoCollection(limit: 3, where: { featuredEvent: true }) {
        items {
            ${commonHomeEventFields}
            limitedSeats
            limitedSeatsTopText
            limitedSeatsBottomText
        }
    }
    ${commonHomeAndEventPageEvents(3)}
    projects: projectsCollection(limit: 2, order: [sys_publishedAt_DESC]){
        items{
            title
            titlePrefix
            titleSuffix
            shortBrief
            buttonText
            projectImage{
                url
            }
        }
    }
}
`;

export const gqlEventPageData = gql`
  query ($currentDate: DateTime!) {
    ${commonHomeAndEventPageEvents(99)}
  }
`;

export default gql;
