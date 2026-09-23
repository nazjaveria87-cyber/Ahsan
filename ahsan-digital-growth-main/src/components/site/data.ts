import caseHealthcare from "@/assets/caseHealthcare.png";
import doctorSabaCampaign from "@/assets/doctorSabaCampaign.png";
import caseSearch from "@/assets/case-search.png";
import analysis from "@/assets/analysis.png";
import yoyo from "@/assets/yoyo.png";
import google from "@/assets/google ads.png";
import meta from "@/assets/blueprint.png";
import hubspot from "@/assets/hubspot.png";
import garage from "@/assets/google garage.png";
import dpoxy from "@/assets/dpoxy_logic.png";
import edusity from "@/assets/edusity.png";
import hair_saloon from "@/assets/hair_saloon.png";

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Experience", to: "/experience" },
  { label: "Skills", to: "/skills" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Certifications", to: "/certifications" },
  { label: "Contact", to: "/contact" },
] as const;

export const SERVICES = [
  {
    icon: "Facebook",
    title: "Meta Ads",
    description:
      "Facebook and Instagram campaigns built around structured audience testing and profitable scaling.",
    benefit: "Reach the right buyers and lower your cost per result.",
  },
  {
    icon: "Search",
    title: "Google Ads",
    description:
      "Search, Performance Max and remarketing structures tuned for qualified, high-intent demand.",
    benefit: "Capture people already searching for what you sell.",
  },
  {
    icon: "Music2",
    title: "TikTok Ads",
    description:
      "Creative-first campaigns that turn short-form attention into measurable action.",
    benefit: "Reach new audiences at a lower cost per impression.",
  },
  {
    icon: "Linkedin",
    title: "LinkedIn Ads",
    description: "B2B targeting by role, industry and company size for high-value pipelines.",
    benefit: "Put your offer in front of real decision makers.",
  },
  {
    icon: "Share2",
    title: "Social Media Marketing",
    description: "Content planning and community growth that supports paid performance.",
    benefit: "Build a brand people trust before they buy.",
  },
  {
    icon: "Magnet",
    title: "Lead Generation",
    description: "Offers, funnels and forms designed to bring in leads your sales team can close.",
    benefit: "A predictable flow of enquiries every month.",
  },
  {
    icon: "ShoppingBag",
    title: "E-commerce Marketing",
    description: "Catalogue ads, feed hygiene and retention flows that lift return on ad spend.",
    benefit: "More revenue from the traffic you already pay for.",
  },
  {
    icon: "Target",
    title: "Marketing Strategy",
    description: "Positioning, channel mix and budget roadmaps grounded in your numbers.",
    benefit: "A clear plan instead of scattered tactics.",
    
  },
  {
  icon: "Code2",
  title: "Website Development",
  description:
    "Modern, responsive and scalable websites built with clean code and user-focused design.",
  benefit: "Create a professional online presence that converts visitors into customers.",
},
{
  icon: "Layout",
  title: "Landing Page Development",
  description:
    "High-converting landing pages designed for campaigns, products and business growth.",
  benefit: "Turn traffic into leads with optimized user experiences.",
},
{
  icon: "Monitor",
  title: "Business Website Development",
  description:
    "Custom websites for businesses with modern layouts, fast performance and responsive designs.",
  benefit: "Showcase your brand and services with a professional digital platform.",
},
{
  icon: "Database",
  title: "Web Applications",
  description:
    "Interactive web applications built with modern frontend technologies and scalable architecture.",
  benefit: "Build powerful digital solutions tailored to your business needs.",
},
{
  icon: "Smartphone",
  title: "Responsive Web Design",
  description:
    "Mobile-first websites optimized for all screen sizes and devices.",
  benefit: "Deliver a smooth browsing experience across every device.",
},
] as const;


export const RESPONSIBILITIES = [
  "Campaign planning",
  "Audience targeting",
  "Budget management",
  "Creative testing",
  "Performance analysis",
  "Reporting",
  "Lead generation",
   "Frontend development",
  "Responsive web design",
  "UI implementation",
  "Website optimization",
  "React development",
];

export const TIMELINE = [
  {
    period: "2023 — Present",
    role: "Remote Marketing Manager",
    org: "Dpoxy Logics",
    description:
      "Manage digital marketing strategies and paid advertising campaigns across Meta, Google, TikTok and LinkedIn.",
    points: [
      "Digital marketing strategy",
      "Paid advertising campaigns",
      "Audience targeting",
      "Campaign optimization",
      "Performance reporting",
    ],
  },
  {
    period: "2022 — 2023",
    role: "Paid Ads Specialist",
    org: "Freelance Clients",
    description:
      "Ran lead generation and e-commerce campaigns for local and international brands, focused on cost per lead and return on ad spend.",
    points: [
      "Lead generation campaigns",
      "Meta Ads management",
      "Google Ads optimization",
      "E-commerce campaigns",
    ],
  },
  {
    period: "2021 — 2022",
    role: "Digital Marketing Experience",
    org: "Early Career",
    description:
      "Built the foundations: social media management, analytics tracking and campaign reporting for small business accounts.",
    points: ["Social media management", "Analytics tracking", "Campaign reporting"],
  },
];

export const EXPERTISE_DASHBOARD = [
  {
    icon: "Target",
    title: "Campaign Strategy",
    items: ["Meta Ads", "Google Ads", "TikTok Ads", "LinkedIn Ads"],
  },
  {
    icon: "Gauge",
    title: "Performance Optimization",
    items: ["Audience Testing", "Creative Testing", "Budget Management", "Analytics"],
  },
  {
    icon: "TrendingUp",
    title: "Growth Marketing",
    items: ["Lead Generation", "Conversion Optimization", "ROI Improvement"],
  },
] as const;

export const SKILL_CATEGORIES = [
  {
    icon: "Megaphone",
    title: "Paid Advertising",
    items: [
      "Meta Ads",
      "Google Ads",
      "TikTok Ads",
      "LinkedIn Ads",
    ],
  },

  {
    icon: "Target",
    title: "Marketing Strategy",
    items: [
      "Campaign Planning",
      "Audience Research",
      "Funnel Strategy",
      "Lead Generation",
    ],
  },

{
  icon: "ShoppingBag",
  title: "Shopify & E-commerce Development",
  items: [
    "Shopify Store Setup",
    "Custom Shopify Development",
    "Product & Collection Management",
    "E-commerce Optimization",
  ],
},

  {
    icon: "Code2",
    title: "Website Development",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Responsive Design",
    ],
  },

  {
    icon: "Layout",
    title: "UI/UX & Design",
    items: [
      "Landing Page Design",
      "Modern UI Design",
      "Figma",
      "User Experience",
    ],
  },

  {
    icon: "Wrench",
    title: "Tools & Platforms",
    items: [
      "Meta Business Suite",
      "Google Ads Manager",
      "Google Analytics",
      "Git & GitHub",
      "Canva",
    ],
  },
] as const;

export const TOOLS = [
  "Meta Business Suite",
  "Google Ads Manager",
  "TikTok Ads Manager",
  "LinkedIn Campaign Manager",
  "Canva",
  "Analytics Tools",
];

export const PROJECTS = [
{
  name: "Dr. Saba Patient Acquisition Campaign",

  industry: "Home services",

  image: doctorSabaCampaign,

  goal:
    "Increase patient inquiries and build a consistent flow of qualified healthcare leads through Meta advertising campaigns.",

  strategy:
    "Created a two-stage Meta Ads funnel combining prospecting and retargeting. The scaling campaign focused on reaching new potential patients, while retargeting campaigns re-engaged warm audiences who had previously interacted with the brand.",

  platforms:
    [
      "Meta Ads",
      "Facebook Ads",
      "Instagram Ads"
    ],

  creative:
    "Used healthcare-focused creatives and conversion-driven messaging designed to build trust, highlight expertise, and encourage patients to take action.",

  results:
    [
      {
        label: "Total Impressions",
        value: "194K+"
      },
      {
        label: "Total Reach",
        value: "102K+"
      },
      {
        label: "Campaign Spend",
        value: "Rs 25K+"
      }
    ],

  learnings:
    "Combining broad audience scaling with retargeting helped maintain campaign efficiency by reaching new users while reconnecting with high-intent audiences.",

  summary:
    "A structured Meta Ads funnel helped Dr. Saba strengthen online visibility, expand patient reach, and create a scalable foundation for continuous healthcare lead generation."
},
{
  name: "Dr. Saba Healthcare Engagement Campaign",

  industry: "Healthcare Home services",

  image: caseHealthcare,

  goal:
    "Increase brand awareness and audience engagement for a healthcare professional by reaching potential patients and building stronger online visibility.",

  strategy:
    "Created a Meta engagement campaign focused on reaching a relevant healthcare audience. The campaign was structured to improve visibility, encourage interactions, and build trust around Dr. Saba's online presence.",

  platforms:
    [
      "Meta Ads",
      "Facebook Ads",
      "Instagram Ads"
    ],

  creative:
    "Used healthcare-focused creatives and engaging messaging designed to capture attention, educate the audience, and encourage profile interactions.",

  results:
    [
      {
        label: "Impressions",
        value: "10.6K+"
      },
      {
        label: "Audience Reach",
        value: "9K+"
      },
      {
        label: "Ad Spend",
        value: "Rs 1.7K+"
      }
    ],

  learnings:
    "Engagement-focused campaigns help strengthen audience connection and provide valuable insights into which content resonates with potential patients.",

  summary:
    "A targeted Meta Ads engagement campaign helped Dr. Saba expand digital visibility, reach a wider healthcare audience, and create a stronger foundation for future patient acquisition campaigns."
},
{
  name: "Healthcare Lead Generation Campaign",

  industry: "Healthcare",

  image: caseSearch,

  goal:
    "Generate qualified patient inquiries and build a consistent lead pipeline through Facebook advertising.",

  strategy:
    "Optimized the lead generation campaign with targeted audience segmentation, conversion-focused creatives and simplified Facebook instant forms to capture high-intent prospects.",

  platforms: ["Meta Ads"],

  creative:
    "Trust-focused healthcare creatives combined with clear messaging and instant lead forms designed to reduce friction and increase inquiries.",

  results: [
    { label: "Leads Generated", value: "302" },
    { label: "Cost per Lead", value: "$3.45" },
    { label: "Ad Spend", value: "$1,041" },
  ],

  learnings:
    "Campaign performance improved when audience targeting, creative messaging and lead form experience were aligned around user intent.",

  summary:
    "A focused Meta lead generation strategy helped the healthcare brand generate 302 patient inquiries while maintaining an efficient cost per lead."
},
{
  name: "Healthcare Audience Engagement Campaign",

  industry: "Healthcare",

  image: analysis,

  goal:
    "Increase brand engagement and build awareness among relevant healthcare audiences through targeted Meta advertising.",

  strategy:
    "Launched an engagement-focused Meta Ads campaign using audience segmentation, age and gender analysis, and optimized delivery to reach the most responsive audience groups.",

  platforms: ["Meta Ads"],

  creative:
    "Used healthcare-focused visual creatives with trust-building messaging designed to encourage interactions and improve audience engagement.",

  results: [
    { label: "Total Engagement Audience", value: "640" },
    { label: "Male Audience", value: "57%" },
    { label: "Female Audience", value: "42%" },
  ],

  learnings:
    "Audience insights showed stronger engagement from the 25–34 and 18–24 age groups, helping refine future targeting and creative decisions.",

  summary:
    "A targeted Meta engagement strategy helped the healthcare brand understand audience behavior, improve campaign reach and optimize future advertising performance."
},
{
  name: "Multi-Channel Lead Generation Campaign",

  industry: "Digital Marketing",

  image: yoyo,

  goal:
    "Generate qualified leads and increase customer inquiries through optimized paid advertising campaigns across multiple platforms.",

  strategy:
    "Built a structured advertising approach combining performance tracking, audience targeting and campaign optimization. Improved results through creative testing, audience refinement and continuous budget allocation based on campaign performance.",

  platforms: ["Meta Ads", "Google Ads"],

  creative:
    "Performance-focused ad creatives with clear messaging, conversion-driven layouts and campaign variations designed to improve engagement and generate quality inquiries.",

  results: [
    { label: "Conversions", value: "969" },
    { label: "CTR", value: "10.17%" },
    { label: "Avg. CPC", value: "$5.63" },
  ],

  learnings:
    "Campaign insights showed that consistent creative testing, audience optimization and performance monitoring helped improve engagement and conversion efficiency.",

  summary:
    "A data-driven paid advertising strategy helped improve campaign visibility, generate strong engagement and drive measurable conversions through optimized Meta and Google Ads campaigns."
},
{
  name: "Hair Studio Website",

  industry: "Beauty & Salon",

  image: hair_saloon,

  goal:
    "Create a modern and elegant online presence for a hair salon to showcase services, build customer trust and make appointment booking easier.",

  strategy:
    "Designed a responsive salon website with a premium visual layout, clear service sections, customer testimonials and an easy-to-use appointment call-to-action.",

  platforms: [
    "HTML",
    "CSS",
    "JavaScript"
  ],

  creative:
    "Created a luxury-inspired interface with a teal and white color palette, hero banner, service showcase cards, testimonial section and mobile-friendly navigation.",

  results: [
    {
      label: "Responsive Design",
      value: "100%"
    },
    {
      label: "Website Sections",
      value: "7+"
    },
    {
      label: "Frontend Stack",
      value: "HTML"
    },
  ],

  learnings:
    "A clean visual hierarchy, strong branding elements and simple user navigation help create a better experience for service-based businesses.",

  summary:
    "A complete salon website solution built with HTML, CSS and JavaScript that highlights services, improves online presence and provides customers with an engaging browsing experience.",
},
{
  name: "Edusity Education Platform",

  industry: "Education",

  image: edusity,

  goal:
    "Build a modern and responsive education website that helps institutions showcase programs, campus facilities and connect with students through an engaging digital experience.",

  strategy:
    "Developed a React-based frontend application with reusable components, structured sections and responsive layouts to create a smooth browsing experience across devices.",

  platforms: [
    "React",
    "JavaScript",
    "CSS3"
  ],

  creative:
    "Designed a clean university-style interface featuring hero section, programs showcase, about section, campus gallery, student testimonials and contact functionality with modern UI elements.",

  results: [
    {
      label: "Responsive Design",
      value: "100%"
    },
    {
      label: "UI Sections",
      value: "6+"
    },
    {
      label: "Frontend Framework",
      value: "React"
    },
  ],

  learnings:
    "Improved skills in React component architecture, responsive design patterns and creating user-friendly interfaces for education-focused platforms.",

  summary:
    "A complete React-based education website designed to provide universities and institutes with a professional online presence through modern UI, organized content sections and responsive user experience.",
},
{
  name: "D-Poxy Logics Agency Website",

  industry: "Software & Technology",

  image: dpoxy,

  goal:
    "Create a professional digital presence for a software agency to showcase services, technologies, projects and help businesses understand available technology solutions.",

  strategy:
    "Designed and developed a modern agency website with structured sections, service highlights, technology showcase, company information and a clear contact experience for potential clients.",

  platforms: [
    "React",
    "JavaScript",
    "CSS3"
  ],

  creative:
    "Built a clean technology-focused interface with blue and white branding, interactive service cards, technology stack display, project sections, company overview and responsive layouts.",

  results: [
    {
      label: "Responsive Design",
      value: "100%"
    },
    {
      label: "Website Sections",
      value: "8+"
    },
    {
      label: "Technology Stack",
      value: "Modern"
    },
  ],

  learnings:
    "Enhanced skills in creating business-focused websites with reusable components, responsive layouts and user-friendly navigation for technology companies.",

  summary:
    "A complete software agency website developed to establish a strong online presence, highlight technical expertise and create a professional platform for client engagement.",
}
];

export const CERTIFICATIONS = [
  {
    img: google,
    title: "Google Ads Certification",
    org: "Google",
    year: "2024",
    verifyUrl: "#",
  },
  {
    img:meta,
    title: "Meta Blueprint Certification",
    org: "Meta",
    year: "2024",
    verifyUrl: "#",
  },
  {
    img:hubspot,
    title: "HubSpot Digital Marketing",
    org: "HubSpot Academy",
    year: "2023",
    verifyUrl: "#",
  },
  {
    img:garage,
    title: "Google Digital Garage",
    org: "Google",
    year: "2023",
    verifyUrl: "#",
  },
];

export const SOCIALS = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-ahsan-69a85325b/", icon: "Linkedin" },
  { name: "Facebook", href: "https://www.facebook.com/share/1DS4CHLPn2/?mibextid=wwXIfr", icon: "Facebook" },
  { name: "Instagram", href: "https://www.instagram.com/ahsanmarektingpro?stkn=bzBuemd2dWpnY3l2&utm_source=qr", icon: "Instagram" },
  { name: "Twitter/X", href: "https://x.com/ahsann751?s=11", icon: "Twitter" },
   {
  name: "Pinterest",
  href: "https://pin.it/26AVeG7Qu",
  icon: "Pinterest"
}
] as const;

export const CONTACT = {
  email: "a751ahsan@gmail.com",
  phone: "+92 324 6858170",
  whatsapp: "https://wa.me/923246858170",

  linkedin: "https://www.linkedin.com/in/muhammad-ahsan-69a85325b/",
  facebook: "https://www.facebook.com/share/1DS4CHLPn2/?mibextid=wwXIfr",
  instagram: "https://www.instagram.com/ahsanmarektingpro?stkn=bzBuemd2dWpnY3l2&utm_source=qr",
  twitter: "https://x.com/ahsann751?s=11",
  pinterest: "https://pin.it/26AVeG7Qu",
};
