//Landing page
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

//About Page

interface mission {
	h2: string;
	p: string;
}
interface qualities {
	H1: string;
	boda: string;
	content: string;
	img: string;
}

interface impacts {
	H1: string;
	content: string;
	name: string;
	role: string;
	img: string;
}

interface teamMembers {
	img: string;
	role: string;
}
//footer
interface FooterLinkItem {
	name: string;
	path: string;
}

interface FooterLinkGroup {
	name: string;
	links: FooterLinkItem[];
}

type FooterLinks = FooterLinkGroup[];

//Landing Page
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

//About Page
const Mission: mission[] = [
	{
		h2: "Mission",
		p: `OstroHub's mission is to forge paths and inspire journeys that
    empower individuals to unlock their innovative potential and
    create positive change across Africa. We aim to provide
    comprehensive education, mentorship, and resources to aspiring
    tech professionals.`,
	},
	{
		h2: "Vision",
		p: `At the heart of our community is a commitment
     to collaboration and support. We believe that 
     by working together and sharing our knowledge, we can
      all achieve greater success in our personal and professional 
      lives. Whether you are a seasoned productivity pro or just 
      starting out your journey, we welcome you to our community and 
      look forward to learning and growing with you.`,
	},
];
const Qualities: qualities[] = [
	{
		H1: "Reduced Inequalities",
		boda: "#662D91",
		content:
			"Our inclusive programs aim to diminish inequalities by providing tech education to underserved communities, ensuring equal access to opportunities.",
		img: "/assets/aboutInequal.png",
	},
	{
		H1: "Quality Education",
		boda: "#009444",
		content:
			"We provide accessible tech education, equipping young Africans with the knowledge and skills needed for the digital age.",
		img: "/assets/aboutEdu.png",
	},
	{
		H1: "Gender Equality",
		boda: "#FCB040",
		content:
			"We actively champion gender equality in the tech sector, ensuring equal opportunities for women and girls to excel in technology.",
		img: "/assets/aboutGenda.svg",
	},
	{
		H1: "Decent work & Economic Growth",
		boda: "#ED1C24",
		content:
			"Through high-demand tech training, we contribute to creating employment opportunities and fostering economic growth.",
		img: "/assets/aboutWork.svg",
	},
	{
		H1: "Industry, Innovation & Infrastructure",
		boda: "#1C75BC",
		content:
			"We cultivate innovation and cultivate a skilled workforce, propelling sustainable industrialization and infrastructure development.",
		img: "/assets/aboutIndust.svg",
	},
];

const TeamMembers: teamMembers[] = [
	{
		img: "/assets/team1.svg",
		role: "CTO",
	},
	{
		img: "/assets/team2.svg",
		role: "Frontend Dev",
	},
	{
		img: "/assets/team3.svg",
		role: "Product Designer",
	},
	{
		img: "/assets/team4.svg",
		role: "Brand Manager",
	},
	{
		img: "/assets/team1.svg",
		role: "Backend Dev",
	},
];
const Impacts: impacts[] = [
	{
		H1: "An amazing way to find resources",
		content:
			"A dedicated team poised to bringing the best resources they can find, and adding them to the clutter",
		name: "Jonah Doe",
		role: "Graphics designer",
		img: "/assets/aboutImpactlogo.svg",
	},
	{
		H1: "I am so grateful to Ostrohub...",
		content:
			"A dedicated team poised to bringing the best resources they can find, and adding them to the clutter",
		name: "Jonah Doe",
		role: "Graphics designer",
		img: "/assets/aboutImpactlogo.svg",
	},
	{
		H1: "An amazing way to find resources",
		content:
			"A dedicated team poised to bringing the best resources they can find, and adding them to the clutter",
		name: "Jonah Doe",
		role: "Graphics designer",
		img: "/assets/aboutImpactlogo.svg",
	},
];

//Footer

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

export {
	Goals,
	Features,
	Highlights,
	Technologies,
	FooterLinks,
	Mission,
	Qualities,
	TeamMembers,
	Impacts
};
