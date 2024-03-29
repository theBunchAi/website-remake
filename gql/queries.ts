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

const commonDocumentFields = `
    json
    links {
      assets {
        block {
          url
          description
          width
          height
          contentType
          sys{
              id
            }
        }
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
          ${commonDocumentFields}
        }
      }
    }
    featuredEvents: eventInfoCollection(limit: 10, where: { featuredEvent: true }, order: [eventDate_ASC]) {
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
    pastEvents: eventInfoCollection(limit: 3, where: { eventDate_lt: $currentDate }, order: [eventDate_DESC]) {
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

export const gqlAboutPageData = gql`
  query {
    aboutData: staticContentCollection(limit: 1) {
      items {
        aboutBannerImage {
          url
        }
        aboutBannerHeading
        aboutFullText {
          ${commonDocumentFields}
        }
      }
    }
  }
`;

export const gqlEventNames = gql`
  query ($skip: Int!) {
    eventNames: eventInfoCollection(limit: 100, skip: $skip) {
      total
      skip
      limit
      items {
        eventName
      }
    }
  }
`;

export const gqlEventDetails = gql`
  query ($eventName: String!) {
    eventData: eventInfoCollection(limit: 1, where: { eventName_contains: $eventName }) {
      items {
        eventName
        eventDate
        eventPrice
        eventPoster {
          url
        }
        eventDuration
        venue
        venueMapsLink
        formLink
        helperText
        longDescription {
          ${commonDocumentFields}
        }
        shortDescription
        tabsCollection(limit: 3) {
          items {
            tabTitle
            tabText {
              ${commonDocumentFields}
            }
          }
        }
        bottomCollection(limit: 3) {
          items {
            title
            titlePrefix
            titleSuffix
            shortBrief
            buttonText
            projectImage {
              url
            }
          }
        }
      }
    }
  }
`;

export const gqlAllProjects = gql`
  query {
    projects: projectsCollection {
      items {
        title
        titlePrefix
        titleSuffix
        shortBrief
        projectImage {
          url
        }
        buttonText
      }
    }
  }
`;

export const gqlProjectNames = gql`
  query ($skip: Int!) {
    projectNames: projectsCollection(limit: 100, skip: $skip) {
      total
      skip
      limit
      items {
        title
      }
    }
  }
`;

export const gqlProjectDetails = gql`
  query ($title: String!) {
    projectData: projectsCollection(limit: 1, where: { title_contains: $title }) {
      items {
        title
        titlePrefix
        titleSuffix
        shortBrief
        projectImage {
          url
        }
        buttonText
        formLink
        projectDescription {
          ${commonDocumentFields}
        }
      }
    }
  }
`;

export default gql;
