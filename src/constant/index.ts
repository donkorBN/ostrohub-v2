interface Goal {
  name: string;
  text: string;
}
interface feature {
  heading: string;
  description: string;
}
interface highlight {
  img: string;
  title: string;
}

interface technology {
  img: string;
  name: string;
}

interface FooterLinkItem {
  name: string;
  path: string;
}

interface FooterLinkGroup {
  name: string;
  links: FooterLinkItem[];
}

type FooterLinks = FooterLinkGroup[];

const Goals: Goal[] = [
  {
    name: "We are",
    text: "A dedicated team poised to bringing the best resources they can find, and adding them to the clutter",
  },
  {
    name: "The Future",
    text: "Of technology at your grasp, All you have to do, is reach out and grab it",
  },
  {
    name: "A Community",
    text: "To grow with, which is poised to facilitate perfectly strategised learning patterns",
  },
  {
    name: "Discover",
    text: "Access to coveted repositories of all emblances, paid and unpaid materials",
  },
];

const Features: feature[] = [
  {
    heading: "Features",
    description:
      "At OstroHub, we are dedicated to nurturing Africa's tech talent todrive innovation and social progress. Join us in creating a brighterfuture by empowering the next generation of tech leaders",
  },
  {
    heading: "Features",
    description:
      "At OstroHub, we are dedicated to nurturing Africa's tech talent todrive innovation and social progress. Join us in creating a brighterfuture by empowering the next generation of tech leaders",
  },
];

const Highlights: highlight[] = [
  {
    img: "/assets/hightlight1.jpeg",
    title: "Hackathons",
  },
  {
    img: "/assets/highlight2.png",
    title: "20 High-School tour",
  },
  {
    img: "/assets/highlight3.png",
    title: "Tertiary Engagement",
  },
  {
    img: "/assets/highlight4.png",
    title: "Design Cha",
  },
];

const Technologies: technology[] = [
  {
    img: "/assets/figma.png",
    name: "figma",
  },
  {
    img: "/assets/alpha.png",
    name: "alpha",
  },
  {
    img: "/assets/python.png",
    name: "python",
  },
  {
    img: "/assets/react.png",
    name: "react",
  },
  {
    img: "/assets/wordpress.png",
    name: "wordpress",
  },
  {
    img: "/assets/slack.png",
    name: "slack",
  },
  {
    img: "/assets/css.png",
    name: "css",
  },
];

const FooterLinks: FooterLinkGroup[] = [
  {
    name: "Legal",
    links: [
      { name: "Privacy", path: "/privacy" },
      { name: "Policy", path: "/policy" },
      { name: "Terms", path: "/terms" },
    ],
  },
  {
    name: "Socials",
    links: [
      { name: "Twitter", path: "/twitter" },
      { name: "LinkedIn", path: "/linkedIn" },
      { name: "Instagram", path: "/Instagram" },
    ],
  },
  {
    name: "Links",
    links: [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Contact", path: "/contact" },
    ],
  },
];

export { Goals, Features, Highlights, Technologies, FooterLinks };
