// Social Links
export const socialLinks = {
  facebook: "https://www.facebook.com/discussionwiththechangemakers",
  linkedin: "https://www.linkedin.com/showcase/discussionwiththechangemakers/",
  instagram: "https://www.instagram.com/discussionwiththechangemakers/",
};

// Define image paths from public folder
const Adittya = "/images/Adittya.jpeg";
const Award = "/images/Award.jpeg";
const Ayman = "/images/Ayman.jpeg";
const logoBlack = "/images/DC Black.png";
const logoWhite = "/images/DC White.png";
const heroImage = "/images/Hero.png";
const Ibnath = "/images/Ibnath.jpeg";
const Isma = "/images/Isma.jpeg";
const Mahmudur = "/images/Mahmudur.jpeg";
const Mubin = "/images/Mubin.jpg";
const Networking = "/images/Networking.jpeg";
const News1 = "/images/News1.png";
const News2 = "/images/News2.png";
const Panel = "/images/Panel.jpeg";
const Presentation = "/images/Presentation.jpeg";
const Raihan = "/images/Raihan.jpeg";
const Team = "/images/Team.jpeg";
const Workshop = "/images/Workshop.jpeg";
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
      title: "DWC Grand Summit",
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
    title: "Round 1: Ideation",
    description: "Engage in workshops and identify key challenges",
  },
  {
    date: "July 2025",
    title: "Round 2: Development",
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
      'Large, Standalone Company Logo in opening credits. eg. "XYZ" Presents Discussion with the Changemakers S02',
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
    section: "General Information",
    items: [
      {
        question: "What is the Discussion with the Changemakers (DWC)?",
        answer:
          "Discussion with the Changemakers (DWC) is a youth-driven platform dedicated to solving real-world problems through innovation, dialogue, and collaboration.\n\nIt bridges the gap between young people and city leaders, empowering the next generation by connecting their ideas with policymakers to drive actionable change.\n\nDWC engages youth from over 30 universities, city officials, and the public to create sustainable solutions for urban challenges.",
      },
      {
        question: "What are the objectives of DWC?",
        answer:
          "The primary objectives of DWC are:\n\n• Empowering Youth: Connecting young people's innovative ideas with policy leaders and city officials to foster leadership and impact.\n• Fostering Dialogue: Creating opportunities for meaningful collaboration between youth and decision-makers.\n• Driving Social Change: Developing actionable solutions to real-world problems, with a focus on sustainable community development.",
      },
      {
        question: "Who are the partners involved in organizing DWC?",
        answer:
          "DWC is organized in partnership with:\n\n• Organizing Partner: Third Smile is responsible for overall coordination and management.\n• Event Partner: The Decor, managing event logistics.\n• Digital Partner: Decor's Digital, handling digital promotion and coverage.\n\nThese partners collaborate to ensure the successful execution of DWC events, aligning with the mission to shape a better future through youth engagement.",
      },
    ],
  },
  {
    section: "Event Structure and Participation",
    items: [
      {
        question: "What is the structure and program of DWC events?",
        answer:
          "DWC events are structured in multiple stages:\n\n1. Problem Identification: Teams identify key issues affecting their city or community.\n2. Roadmap Development: Participants create detailed plans to address these issues.\n3. Plan Execution: Solutions are tested through fieldwork, surveys, and trial runs to ensure effectiveness.\n\nThe program includes group rounds, elimination stages, and a final showcase where teams present their solutions to a panel of judges, including city officials.",
      },
      {
        question: "Who is the target audience for DWC?",
        answer:
          "DWC engages a diverse audience:\n\n• Youth: Students from over 30 universities.\n• City Leaders: Including CDA Chairman, City Mayor, Ward Councilors, and Members of Parliament (MPs).\n• General Public: Events are broadly promoted through media for maximum outreach and impact.",
      },
      {
        question: "How can universities and youth participate in DWC?",
        answer:
          "Participation steps:\n\n• Forming Teams: Students register in teams focused on solving city issues.\n• Case Studies: Teams research and develop real-world solutions.\n• Competition Rounds: Participants progress through elimination rounds.\n• Final Showcase: Finalists present their projects to city officials.\n\nDetails are available on the DWC website or via official contacts.",
      },
    ],
  },
  {
    section: "Sponsorship and Funding",
    items: [
      {
        question: "What are the sponsorship opportunities and benefits?",
        answer:
          "Sponsorship levels:\n\n• Title Sponsor: Maximum visibility and engagement.\n• Gold Sponsor: Significant branding and exposure.\n• Co-Sponsor/Partner: Flexible contribution options.\n\nBenefits include:\n• Brand Visibility: Featured in event materials, website, and promotions.\n• Media Exposure: Press coverage, social media, and live broadcasts.\n• Event Access: Direct interaction with youth and policymakers.",
      },
      {
        question: "How is DWC marketed and promoted?",
        answer:
          "DWC’s marketing strategy:\n\n• Pre-Event: Ambassador programs, university outreach, paid ads.\n• On-Event: Live coverage, media presence, branded zones.\n• Post-Event: Highlight reels, winner announcements, impact reports.\n\nThis multi-stage strategy maximizes reach across youth, city officials, and the public.",
      },
      {
        question: "What are the benefits of CSR for sponsors?",
        answer:
          "Sponsoring DWC supports:\n\n• Education: Youth development through leadership-building opportunities.\n• Youth Empowerment: Giving voice and platform to young changemakers.\n• Sustainable Communities: Supporting implementable urban solutions.\n\nSponsorship also enhances brand goodwill and visibility in socially impactful initiatives.",
      },
      {
        question:
          "What are the specifics of Discussion with the Changemakers Chapter 02?",
        answer:
          "Chapter 02 focuses on empowering Chattogram's youth and strengthening collaboration with local leadership.\n\nIt builds on the success of the previous program launched in partnership with the City Corporation to tackle major city problems through youth-driven solutions.",
      },
      {
        question: "When and where is Chapter 02 taking place?",
        answer:
          "Chapter 02 is scheduled for July 1–17, 2025.\n\nThe main event will be held on July 17 at Hotel Agrabad in Chattogram.",
      },
      {
        question: "What are the focus and activities of Chapter 02?",
        answer:
          "Key activities include:\n\n• Team Selection\n• Case Study Research\n• Elimination Rounds\n• Final Presentations to a panel of city officials including the Mayor, CDA Chairman, MPs, and Ward Councilors",
      },
      {
        question: "What are the outcomes and prizes for Chapter 02?",
        answer:
          "From around 30 teams, 5 finalists will present their ideas.\n\nTop 3–5 solutions may be selected for real implementation.\n\nThe winning team will receive a prize of BDT 100,000 (dependent on sponsor availability).",
      },
      {
        question: "How does DWC ensure practical and actionable outcomes?",
        answer:
          "DWC ensures implementation by:\n\n• Conducting fieldwork and surveys to validate ideas.\n• Running group rounds and trial implementations.\n• Collaborating with city officials to ensure feasibility.\n\nThis process ensures that solutions are both innovative and grounded in real-world applicability.",
      },
    ],
  },
  {
    section: "Why DWC?",
    items: [
      {
        question: "Why should one choose DWC?",
        answer:
          "Discussion with the Changemakers (DWC) is not just a program—it’s a movement that empowers youth, fosters innovation, and delivers real impact. Here's why it's the right choice:\n\n" +
          "• Empowering the Next Generation: DWC offers youth a powerful platform to voice ideas and solve real-world challenges, fostering leadership and civic responsibility.\n" +
          "• Bridging the Gap: It connects young changemakers directly with city leaders, ensuring their perspectives shape real policy decisions.\n" +
          "• Innovation Through Teamwork: Participants collaborate in diverse teams to tackle complex urban problems, promoting creativity and cooperation.\n" +
          "• From Ideas to Implementation: Winning solutions are more than proposals—city officials help turn them into action.\n" +
          "• Inclusive and Far-Reaching: With students from 30+ universities and strong media exposure, DWC brings together a wide range of voices.\n" +
          "• Focus on Sustainability: Solutions developed focus on long-term, practical change for urban environments.\n" +
          "• Skills That Last a Lifetime: Youth gain experience in research, pitching, leadership, and networking.\n" +
          "• Community-Driven Impact: DWC projects improve life in cities like Chattogram, contributing to sustainable, responsive development.\n\n" +
          "In essence, DWC combines the energy of youth with the expertise of leadership to build a better future. Whether you're a student, sponsor, policymaker, or citizen—DWC is your platform for purposeful change.",
      },
    ],
  },
];

// Logo Data
export const logos = {
  black: logoBlack,
  white: logoWhite,
};
