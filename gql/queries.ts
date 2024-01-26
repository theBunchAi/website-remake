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
    featuredEvents: eventInfoCollection(limit: 3, where: { featuredEvent: true }, order: [eventDate_ASC]) {
        items {
            ${commonHomeEventFields}
            limitedSeats
            limitedSeatsTopText
            limitedSeatsBottomText
        }
    }
    upcomingEvents: eventInfoCollection(
      limit: 3, 
      where: { eventDate_gte: $currentDate }, 
      order: [eventDate_ASC]) {
      items {
        ${commonHomeEventFields}
      }
    }
    pastEvents: eventInfoCollection(limit: 3, where: { eventDate_lt: $currentDate }, order: [eventDate_ASC]) {
      items {
        ${commonHomeEventFields}
      }
    }
    projects: projectsCollection(limit: 2, order: [sys_publishedAt_ASC]){
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

export const gqlUpcomingEvents = gql`
  query ($currentDate: DateTime!) {
    upcomingEvents: eventInfoCollection(
      limit: 98, 
      where: { eventDate_gte: $currentDate }, 
      order: [eventDate_ASC]) {
      items {
        ${commonHomeEventFields}
      }
    }
  }
`;
export const gqlPastEvents = gql`
  query ($currentDate: DateTime!) {
    pastEvents: eventInfoCollection(
      limit: 98, 
      where: { eventDate_lte: $currentDate }, 
      order: [eventDate_ASC]) {
      items {
        ${commonHomeEventFields}
      }
    }
  }
`;

export const gqlFaqsData = gql`
  query {
    faQsCollection(limit: 50) {
      items {
        question
        answer
      }
    }
    staticData: staticContentCollection(limit: 1) {
      items {
        faqSubHeading
      }
    }
  }
`;

export default gql;
