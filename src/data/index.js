// Social Links
export const socialLinks = {
  facebook: "https://www.facebook.com/discussionwiththechangemakers",
  linkedin: "#",
  twitter: "#",
};

// Import all images
import Adittya from "../assets/Adittya.jpeg";
import Award from "../assets/Award.jpeg";
import Ayman from "../assets/Ayman.jpeg";
import logoBlack from "../assets/DC Black.png";
import logoWhite from "../assets/DC White.png";
import heroImage from "../assets/Hero.png";
import Ibnath from "../assets/Ibnath.jpeg";
import Isma from "../assets/Isma.jpeg";
import Mahmudur from "../assets/Mahmudur.jpeg";
import Mubin from "../assets/Mubin.jpg";
import Networking from "../assets/Networking.jpeg";
import News1 from "../assets/News1.png";
import News2 from "../assets/News2.png";
import Panel from "../assets/Panel.jpeg";
import Presentation from "../assets/Presentation.jpeg";
import Raihan from "../assets/Raihan.jpeg";
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
    "Discussion with the Changemakers (DWC) envisions a future where youth are empowered to drive transformative change by bridging innovative ideas with actionable solutions through collaboration, dialogue, and partnership with city leaders and communities.",
  about:
    "Discussion with the Changemakers Chapter 02 empowers Chattogram's youth to collaborate with city leaders, building on last year's initiative as a bridge for innovative solutions, in partnership with Third Smile, The Decor, and Decor's Digital.",
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
    date: "June 20, 2025",
    title: "Registration Opens",
    description: "Submit your application to join the movement",
  },
  {
    date: "July 2025",
    title: "Round 1: Problem Discovery",
    description: "Engage in workshops and identify key challenges",
  },
  {
    date: "July 2025",
    title: "Round 2: Solution Development",
    description: "Work with mentors to develop actionable solutions",
  },
  {
    date: "July 31, 2025",
    title: "DWC Grand Summit",
    description: "Present your solutions and implementation plans",
  },
];

// Participate Section
export const participateData = {
  criteria: [
    "Age between 18-30 years",
    "Based in Bangladesh",
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
    ],
    style: "bg-brand-primary text-neutral-white border-brand-primary",
    textStyle: "text-neutral-white",
    iconStyle: "text-neutral-white",
  },
};

// Team Section
export const teamMembers = [
  {
    name: "Ayman Siddique",
    role: "Changesetter",
    // bio: "Leading innovation in community development with 10+ years experience",
    image: Ayman,
    social: {
      linkedin: "https://www.linkedin.com/in/ayman-siddiquee/",
    },
  },
  {
    name: "Fahmida Afroz Isma",
    role: "Deputy Changesetter",
    // bio: "Leading innovation in community development with 10+ years experience",
    image: Isma,
    social: {
      linkedin: "https://www.linkedin.com/in/isma-fahmida-5648b4275/",
    },
  },
  {
    name: "Adittya Basak",
    role: "Creative Changesetter",
    // bio: "Leading innovation in community development with 10+ years experience",
    image: Adittya,
    social: {
      linkedin: "https://www.linkedin.com/in/adittyabasak/",
    },
  },
  {
    name: "Obaidul Islam Raihan",
    role: "Communication Changesetter",
    // bio: "Leading innovation in community development with 10+ years experience",
    image: Raihan,
    social: {
      linkedin: "https://www.linkedin.com/in/obaidulislam1/",
    },
  },
  {
    name: "Tahrim Ibnath",
    role: "Executive Changesetter",
    // bio: "Leading innovation in community development with 10+ years experience",
    image: Ibnath,
    social: {
      linkedin: "https://www.linkedin.com/in/tahrim-ibnath-b23ab8347/",
    },
  },
  {
    name: "Abdullah Al Mubin",
    role: "Digital Changesetter",
    // bio: "Leading innovation in community development with 10+ years experience",
    image: Mubin,
    social: {
      linkedin: "https://www.linkedin.com/in/abdullah-al-mubin-akib/",
    },
  },
  {
    name: "Mohammad Mahmudur Rahman",
    role: "Visual Changesetter",
    // bio: "Leading innovation in community development with 10+ years experience",
    image: Mahmudur,
    social: {
      linkedin: "https://www.linkedin.com/in/mahmud-rahman-965187214/",
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
