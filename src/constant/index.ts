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
    description: "At OstroHub, we are dedicated to nurturing Africa's tech talent todrive innovation and social progress. Join us in creating a brighterfuture by empowering the next generation of tech leaders",
  },
  {
    heading: "Features",
    description: "At OstroHub, we are dedicated to nurturing Africa's tech talent todrive innovation and social progress. Join us in creating a brighterfuture by empowering the next generation of tech leaders",
  },
];

const Highlight:highlight[] =[
    {
        img: "dd",
        title: "THis is life"
    }
]



export { Goals, Features };
