// Import all images
import Aisha from "../assets/Aisha.jpg";
import Award from "../assets/Award.jpeg";
import sustainability from "../assets/Changemakers.webp";
import logoBlack from "../assets/DC Black.png";
import logoWhite from "../assets/DC White.png";
import communityAction from "../assets/Empowering.jpeg";
import heroImage from "../assets/Hero.jpg";
import mentorship from "../assets/Mentorship.jpeg";
import Michael from "../assets/Michael.jpg";
import Networking from "../assets/Networking.jpeg";
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
  challenges: [
    {
      problem:
        "Limited access to resources and opportunities in underserved communities",
      solution:
        "Creating platforms for equal access and distribution of resources",
    },
    {
      problem: "Gap between education and industry requirements",
      solution:
        "Building bridges through mentorship and skill development programs",
    },
    {
      problem: "Environmental sustainability challenges",
      solution: "Implementing innovative green technologies and practices",
    },
  ],
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
  platinum: {
    name: "Platinum",
    benefits: [
      "Premium logo placement",
      "Speaking opportunity",
      "VIP networking access",
      "Media coverage",
      "Dedicated booth space",
    ],
    style:
      "bg-gradient-to-br from-[#E5E4E2] via-[#DAD9D7] to-[#C0C0C0] border-[#E5E4E2]",
    textStyle: "text-neutral-black",
    iconStyle: "text-neutral-black",
  },
  gold: {
    name: "Gold",
    benefits: [
      "Logo on materials",
      "Event passes",
      "Networking session",
      "Brand visibility",
    ],
    style:
      "bg-gradient-to-br from-[#FFD700] via-[#FFC000] to-[#FFB000] border-[#FFD700]",
    textStyle: "text-neutral-black",
    iconStyle: "text-neutral-black",
  },
  silver: {
    name: "Silver",
    benefits: ["Logo inclusion", "Event passes", "Brand mention"],
    style:
      "bg-gradient-to-br from-[#C0C0C0] via-[#A8A8A8] to-[#808080] border-[#C0C0C0]",
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

// Blog Section
export const blogArticles = [
  {
    title: "The Power of Community-Led Change",
    date: "March 15, 2024",
    author: "Sarah Johnson",
    excerpt:
      "Exploring how local initiatives can create lasting impact in communities.",
    image: communityAction,
    readTime: "5 min read",
    category: "Leadership",
  },
  {
    title: "Innovation in Social Development",
    date: "March 12, 2024",
    author: "Michael Chen",
    excerpt:
      "New approaches to addressing community challenges through technology.",
    image: mentorship,
    readTime: "4 min read",
    category: "Mentorship",
  },
  {
    title: "Youth Leadership in Action",
    date: "March 10, 2024",
    author: "Aisha Patel",
    excerpt:
      "Stories of young changemakers making a difference in their communities.",
    image: sustainability,
    readTime: "6 min read",
    category: "Sustainability",
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
