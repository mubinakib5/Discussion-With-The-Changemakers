// Import all images
import Aisha from "../assets/Aisha.jpg";
import Award from "../assets/Award.jpeg";
import logoBlack from "../assets/DC Black.png";
import logoWhite from "../assets/DC White.png";
import heroImage from "../assets/Hero.png";
import Michael from "../assets/Michael.jpg";
import Networking from "../assets/Networking.jpeg";
import News1 from "../assets/News1.png";
import News2 from "../assets/News2.png";
import Panel from "../assets/Panel.jpeg";
import Presentation from "../assets/Presentation.jpeg";
import Sarah from "../assets/Sarah.jpg";
import Team from "../assets/Team.jpeg";
import Workshop from "../assets/Workshop.jpeg";
// Navigation
export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#why", label: "Why" },
  { href: "#timeline", label: "Timeline" },
  { href: "#participate", label: "Participate" },
  { href: "#sponsors", label: "Sponsors" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact", isButton: true },
];

// Hero Section
export const eventDate = new Date("2025-07-31T00:00:00");
export const heroData = {
  image: heroImage,
  title: "Discussion With The Changemakers",
  subtitle:
    "Join us in shaping the future through meaningful dialogue and action",
};

// About Section
export const aboutData = {
  vision:
    "To create a global platform where innovative minds converge to address pressing community challenges through collaborative problem-solving and actionable solutions.",
  expectations: [
    "Interactive workshops and panel discussions",
    "Networking opportunities with industry leaders",
    "Hands-on problem-solving sessions",
    "Community project showcases",
  ],
  eventFormat: [
    {
      title: "Round 1: Ideation",
      description: "Brainstorming sessions and problem identification",
    },
    {
      title: "Round 2: Development",
      description: "Solution development and mentorship",
    },
    {
      title: "Grand Finale",
      description: "Presentation and implementation planning",
    },
  ],
};

// Why Section
export const whyData = {
  stats: [
    { value: "500+", label: "Participants" },
    { value: "50+", label: "Speakers" },
    { value: "20+", label: "Institutions" },
  ],
  // challenges: [
  //   {
  //     problem:
  //       "Limited access to resources and opportunities in underserved communities",
  //     solution:
  //       "Creating platforms for equal access and distribution of resources",
  //   },
  //   {
  //     problem: "Gap between education and industry requirements",
  //     solution:
  //       "Building bridges through mentorship and skill development programs",
  //   },
  //   {
  //     problem: "Environmental sustainability challenges",
  //     solution: "Implementing innovative green technologies and practices",
  //   },
  // ],
};

// Timeline Section
export const timelineEvents = [
  {
    date: "March 2024",
    title: "Registration Opens",
    description: "Submit your application to join the movement",
  },
  {
    date: "April 2024",
    title: "Round 1: Problem Discovery",
    description: "Engage in workshops and identify key challenges",
  },
  {
    date: "May 2024",
    title: "Round 2: Solution Development",
    description: "Work with mentors to develop actionable solutions",
  },
  {
    date: "June 2024",
    title: "Grand Finale",
    description: "Present your solutions and implementation plans",
  },
];

// Participate Section
export const participateData = {
  criteria: [
    "Age between 18-30 years",
    "Based in Chattogram",
    "Passionate about community development",
    "Committed to attending all sessions",
  ],
  benefits: [
    "Network with industry leaders",
    "Mentorship opportunities",
    "Implementation support",
    "Certificates and recognition",
  ],
  steps: [
    "Fill out the online registration form",
    "Submit your motivation statement",
    "Complete a brief video introduction",
    "Attend the orientation session",
  ],
};

// Sponsors Section
export const sponsorTiers = {
  title: {
    name: "Title",
    benefits: [
      'Large, Standalone Company Logo in opening credits. eg. "UCB Bank" Presents Discussion with the Changemakers S02',
      "Credit on Backdrop, Teaser, Celebrity Endorsement and Bites",
      "Standalone Logo above the title",
      "All Communications",
      "Press Release",
      "Product Placement Opportunity",
      "3 Appearances in Movie",
      "15-20 Secs Screen Time Exposures",
      "Invitation to the event",
      "Event Activation Opportunity",
      "Sponsorship Amount: 10 Lacs",
    ],
    style: "bg-brand-primary text-neutral-white border-brand-primary",
    textStyle: "text-neutral-white",
    iconStyle: "text-neutral-white",
  },
  gold: {
    name: "Gold",
    benefits: [
      'Logo on sponsor\'s title screen in opening credits as "Powered By"',
      "Only Logo below the title",
      "Logo below the movie name",
      "Selected Communications",
      "Press Release",
      "Product Placement Opportunity",
      "2 Appearances",
      "5-10 Secs Screen Time Exposures",
      "Invitation to the event",
      "Event Activation Opportunity",
      "Sponsorship Amount: 5 Lacs",
    ],
    style: "bg-brand-primary text-neutral-white border-brand-primary",
    textStyle: "text-neutral-white",
    iconStyle: "text-neutral-white",
  },
  partner: {
    name: "Co-Sponsor/Partner",
    benefits: [
      'Logo on partner\'s title screen in opening credits as "Partner"',
      "Only Logo in the bottom",
      "Logo bottom of the poster & banners",
      "Selected Communications",
      "Product Placement Opportunity",
      "1 Appearance",
      "3-5 Secs Screen Time Exposures",
      "Invitation to the event",
      "Event Activation Opportunity",
      "Sponsorship Amount: 2 Lacs",
    ],
    style: "bg-brand-primary text-neutral-white border-brand-primary",
    textStyle: "text-neutral-white",
    iconStyle: "text-neutral-white",
  },
};

// Team Section
export const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Executive Director",
    bio: "Leading innovation in community development with 10+ years experience",
    image: Sarah,
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Michael Chen",
    role: "Program Director",
    bio: "Expert in youth empowerment and educational program design",
    image: Michael,
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Aisha Patel",
    role: "Community Lead",
    bio: "Passionate about creating inclusive spaces for dialogue and growth",
    image: Aisha,
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
];

// Gallery Section
export const galleryImages = [
  {
    src: Workshop,
    alt: "Workshop Session",
    caption: "Interactive workshop on community leadership",
  },
  {
    src: Panel,
    alt: "Panel Discussion",
    caption: "Industry experts sharing insights",
  },
  {
    src: Team,
    alt: "Team Building",
    caption: "Participants engaging in team activities",
  },
  {
    src: Networking,
    alt: "Networking",
    caption: "Building connections during networking session",
  },
  {
    src: Presentation,
    alt: "Presentation",
    caption: "Youth leaders presenting their initiatives",
  },
  {
    src: Award,
    alt: "Award Ceremony",
    caption: "Recognizing outstanding contributions",
  },
];

// News Section
export const newsArticles = [
  {
    title: "বর্ণাঢ্য আয়োজনে সমাপ্ত 'ডিস্কাশন উইথ দ্যা চেঞ্জ মেকারস'",
    date: "September 29, 2023",
    author: "প্রিয় চট্টগ্রাম",
    excerpt:
      "চট্টগ্রামের সবচেয়ে বড় সামাজিক প্রতিযোগিতা মূলক অনুষ্ঠান 'ডিস্কাশন উইথ দ্যা চেঞ্জমেকার্স' সম্পন্ন হয়েছে।",
    image: News1,
    readTime: "3 mins read",
    category: "News",
    link: "https://newsnow24.com/prio-chattogram/INDKJYBtfI",
  },
  {
    title: "Discussion with change-makers held in Ctg",
    date: "September 30, 2023",
    author: "dailyobserver",
    excerpt:
      "A social competitive event 'Discussion with the Change-makers' organized to identify and solve the problems of Chattogram city was held at Hotel Agrabad on Thursday.",
    image: News2,
    readTime: "2 mins read",
    category: "News",
    link: "https://www.observerbd.com/news/439443",
  },
];

// FAQ Section
export const faqData = [
  {
    question: "What is DWC?",
    answer:
      "DWC (Discussion With The Changemakers) is a platform that brings together innovators, leaders, and community members to address pressing social challenges through collaborative dialogue and action.",
  },
  {
    question: "Who can participate?",
    answer:
      "Anyone passionate about creating positive change in their community can participate. We welcome students, professionals, entrepreneurs, and community leaders.",
  },
  {
    question: "How long is the event?",
    answer:
      "The event spans multiple days, featuring workshops, discussions, and collaborative sessions. Each phase is designed to maximize learning and impact.",
  },
  {
    question: "What should I prepare?",
    answer:
      "Come with an open mind and willingness to collaborate. Any specific materials or preparations needed will be communicated to registered participants.",
  },
];

// Logo Data
export const logos = {
  black: logoBlack,
  white: logoWhite,
};
