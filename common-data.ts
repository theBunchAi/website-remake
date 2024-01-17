import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export const companyName = "TheBunch.ai";

export const email = "a@b.com";
export const phone = "1234567890";
export const instagram = "thebunch.ai";
export const facebook = "people/The-Bunchai/100080487391695";
export const socialLinks = [
  {
    name: "email",
    id: email,
    link: `mailto:${email}`,
    icon: EmailRoundedIcon
  },
  {
    name: "instagram",
    id: instagram,
    link: `https://www.instagram.com/${instagram}`,
    icon: InstagramIcon
  },
  {
    name: "facebook",
    id: facebook,
    link: `https://www.facebook.com/${facebook}`,
    icon: FacebookIcon
  }
];

//navigation bar - header
export const navBarContent = {
  leftText: companyName,
  locationText: "Where are you?",
  nav: {
    links: [
      {
        text: "All Events",
        link: "/events"
      },
      {
        text: "The Bucketlist Project",
        link: "/bucketlist"
      },
      {
        text: "About Us",
        link: "/about"
      },
      {
        text: "FAQs",
        link: "/faqs"
      }
    ]
  }
};

//footer
export const footerContent = {
  topText: companyName,
  nav: [
    {
      text: "Past Events",
      link: "/events?category=past",
      isLong: false
    },
    {
      text: "Upcoming Events",
      link: "/events?category=upcoming",
      isLong: false
    },
    {
      text: "The Bucketlist Project",
      link: "/bucketlist",
      isLong: true
    },
    {
      text: "Refund & Privacy Policy",
      link: "/policy",
      isLong: true
    },
    {
      text: "FAQs",
      link: "/faqs",
      isLong: false
    },
    {
      text: "Terms of Service",
      link: "/terms",
      isLong: false
    },
    {
      text: "Contact Us",
      link: "/contact",
      isLong: false
    }
  ],
  socials: {
    topText: "Follow us",
    links: socialLinks.filter((social) => social.name !== "email")
  },
  attributes: {
    text: "Designed by <DESIGNER> | Developed by <DEVELOPER>",
    links: [
      {
        dummyText: "<DESIGNER>",
        actualText: "Anjali Joshy",
        link: "https://www.linkedin.com/in/anjalijoshy/"
      },
      {
        dummyText: "<DEVELOPER>",
        actualText: "Hymns Of Web",
        link: "https://www.hymnsofweb.com"
      }
    ]
  },
  bottomText: "2023 TheBunch.ai | All rights reserved"
};

export const meta = {
  home: {
    title: "TheBunch.ai | Home",
    description: "Home page of the app",
    og: {
      title: "TheBunch.ai | Home",
      description: "Home page of the app"
    }
  },
  events: {
    title: "TheBunch.ai | Events",
    description: "Events page of the app",
    og: {
      title: "TheBunch.ai | Events",
      description: "Events page of the app"
    }
  }
};
