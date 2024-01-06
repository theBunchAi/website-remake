import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

export const companyName = "TheBunch.ai";

export const email = "a@b.com";
export const phone = "1234567890";
export const socialLinks = [
  {
    name: "email",
    id: email,
    link: `mailto:${email}`,
    icon: EmailRoundedIcon
  }
];

//navigation bar
export const navBarContent = {
  leftText: companyName,
  locationText: "Where are you?",
  nav: {
    topText: companyName,
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
