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
const News3 = "/images/News3.png";
const News4 = "/images/News4.jpg";
// Navigation
export const navLinks = [
  { href: "#about", label: "About" },
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
  {
    title: "চট্টগ্রাম নগরের পরিবর্তনে ‘ডিসকাশন উইথ দ্য চেঞ্জ মেকারস’",
    date: "September 16, 2023",
    author: "একুশে পত্রিকা",
    excerpt:
      "সমাজ সেবামূলক সংগঠন ‘থার্ড স্মাইল’ এর উদ্যোগে চট্টগ্রামের সবচেয়ে বড় সামাজিক উন্নয়নমূলক প্রতিযোগিতা",
    image: News3,
    readTime: "2 mins read",
    category: "News",
    link: "https://www.ekusheypatrika.com/archives/199454",
  },
  {
    title: "চট্টগ্রাম সংবাদ",
    date: "September 30, 2023",
    author: "Bijoy TV",
    excerpt:
      "Coverage of Discussion with the Changemakers Chapter 1 on Bijoy TV",
    image: News4,
    readTime: "2 mins views",
    category: "News",
    link: "https://www.youtube.com/live/r8Xl0kubtug",
  },
];

// Opportunity Benefits Section
export const opportunityBenefits = [
  {
    title: "Opportunity to Drive Meaningful Change",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Skill Development and Professional Growth",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
  {
    title: "Networking and Collaboration Opportunities",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
  {
    title: "Recognition and Competitive Advantage",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
  },
  {
    title: "Empowerment and Inspiration",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Professional Event Experience",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Contribution to Sustainable Communities",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

// Ambassador Facilities
export const ambassadorFacilities = [
  {
    title: "Official Certificate of Appreciation",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Best Ambassador Award",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
  },
  {
    title: "Letter of Recommendation (On Request)",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Free Entry + Priority Seating at the Event",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
        />
      </svg>
    ),
  },
  {
    title: "Exclusive Networking Opportunity",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: "Merchandise/Goodie Bag",
    description: "(Event-themed badge, T-shirt, notebook, etc.)",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
    ),
  },
  {
    title: "Featured Recognition on Social Media",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
        />
      </svg>
    ),
  },
  {
    title: "Volunteer/Leadership Experience",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
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
          "Discussion with the Changemakers (DWC) is a platform that creates a bridge between YOUTH and National AUTHORITIES for change. Here, we are building a bridge between the authorities of Bangladesh and youth changemakers, where young people can come up with solutions to significant problems in our country or plan the development of our nation through their innovations.\n\nDWC is a youth-driven initiative that fosters collaboration between young people, city leaders, and the public to address pressing urban challenges. By providing a platform for collaboration with city leaders, DWC not only empowers youth but also ensures that their innovative ideas contribute to a more sustainable and inclusive future. Through its structured approach and strategic partnerships, DWC is helping to shape the next generation of leaders and problem-solvers, making it a vital initiative in the landscape of urban development and youth engagement.",
      },
      {
        question: "What are the objectives of DWC?",
        answer:
          "The primary objectives of DWC are:\n• Connecting young people's innovative ideas with policy leaders and city officials to foster leadership and impact.\n• Creating opportunities for meaningful collaboration between youth and decision-makers.\n• Developing actionable solutions to real-world problems, with a focus on sustainable community development.",
      },
      {
        question: "Who are the partners involved in organizing DWC?",
        answer:
          "DWC is organized in partnership with:\n• Organizing Partner: Third Smile is responsible for overall coordination and management.\n• Event Partner: The Decor, managing event logistics.\n• Digital Partner: Decor's Digital, handling digital promotion and coverage.\n\nThese partners collaborate to ensure the successful execution of DWC events, aligning with the mission to shape a better future through youth engagement.",
      },
    ],
  },
  {
    section: "Event Structure and Participation",
    items: [
      {
        question: "What is the structure and program of DWC events?",
        answer:
          "DWC events are structured in multiple stages to ensure comprehensive problem-solving:\n• Teams identify key issues affecting their city or community.\n• Participants create detailed plans to address these issues.\n• Solutions are tested through fieldwork, surveys, and trial runs to ensure their effectiveness.\n\nThe program includes group rounds, elimination stages, and a final showcase where teams present their solutions to a panel of judges, including city officials. This structured approach ensures that solutions are both innovative and practical.",
      },
      {
        question: "Who is the target audience for DWC?",
        answer:
          "DWC engages a diverse audience, including:\n• Students from over 30 universities forming teams to develop solutions.\n• City leaders include key figures such as the CDA Chairman, City Mayor, Ward Councilors, and Members of Parliament (MPs).\n• Events are designed to reach a broad audience through extensive media exposure, ensuring community-wide impact.",
      },
      {
        question: "How can universities and youth participate in DWC?",
        answer:
          "Universities and youth can participate by:\n• Students from universities register to form teams focused on addressing city issues.\n• Teams conduct research and develop solutions based on real-world challenges.\n• Participants go through elimination rounds, culminating in a final presentation to a panel of judges.\n• Finalists present their projects to city officials for potential implementation.\n\nInterested participants should check the DWC website or contact the organizers for registration details, as specific processes may vary.",
      },
    ],
  },
  {
    section: "Sponsorship and Funding",
    items: [
      {
        question:
          "What are the specifics of Discussion with the Changemakers Chapter?",
        answer:
          "Chapter 02 of DWC focuses on empowering Chattogram's youth and deepening the dialogue between young people and city leaders.\n\nBuilding on the success of the previous year's program, which was launched as \"a bridge between the youth and city rulers\" in collaboration with the City Corporation, Chapter 02 aims to identify and solve major city problems through youth-led projects.",
      },
      {
        question: "How does DWC ensure practical and actionable outcomes?",
        answer:
          "DWC ensures that solutions are practical and actionable through:\n• Fieldwork and Surveys: Teams gather real-world data to inform their solutions.\n• Group Rounds and Trial Implementations: Solutions are tested in practical settings to ensure feasibility.\n• Collaboration with City Officials: Judges and collaborators from city leadership ensure that selected solutions align with implementation possibilities.\n\nThis rigorous process guarantees that youth-developed solutions are both innovative and viable for real-world application.",
      },
    ],
  },
  {
    section: "Why DWC?",
    items: [
      {
        question: "Why should one choose DWC?",
        answer:
          "DWC empowers youth to drive change through a dynamic platform connecting them with city leaders. It fosters innovation, collaboration, and actionable solutions to urban challenges.\n• Enables young people to share ideas, shape policies, and build leadership skills.\n• Facilitates direct dialogue between youth and decision-makers for impactful outcomes.\n• Encourages creative problem-solving through teamwork and competition.\n• Ensures winning solutions are implemented, creating lasting community impact.\n• Engages diverse participants from 30+ universities, amplifying varied perspectives.\n• Focuses on practical, long-term solutions for urban challenges.\n• Enhances research, problem-solving, and networking skills for future leaders.\n• Improves city life through sustainable, youth-driven solutions.",
      },
    ],
  },
];

// Logo Data
export const logos = {
  black: logoBlack,
  white: logoWhite,
};
