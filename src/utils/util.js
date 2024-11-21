import participant from "../asset/participant.svg";
import participantLink from "../asset/participant-link.svg";
import volunteer from "../asset/Volunteer.svg";
import volunteerLink from "../asset/volunteer-link.svg";
import partner from "../asset/partner.svg";
import partnerLink from "../asset/partner-link.svg";

import branding from "../asset/branding icon.svg";
import funding from "../asset/accounting icon.svg";
import marketing from "../asset/marketing icon.svg";
import design from "../asset/design icon.svg";
import compliance from "../asset/compliance.svg";
import structure from "../asset/structure-icon.svg";

const websitePlan = [
  {
    title: "Landing Page",
    features: [
      {
        status: true,
        value: "Domain name & hosting",
      },
      {
        status: true,
        value: "Website Security",
      },
      {
        status: true,
        value: "Mobile-friendly Website",
      },
      {
        status: true,
        value: "Search Engine Friendly",
      },
      {
        status: true,
        value: "Integrated Contact form",
      },
      {
        status: true,
        value: "Unlimited Email Addresses",
      },
      {
        status: true,
        value: "Automatic site backup",
      },
      {
        status: true,
        value: "Visibility on Google Map",
      },
      {
        status: true,
        value: "Interactive Google Map",
      },
      {
        status: true,
        value: "Blog",
      },
      {
        status: true,
        value: "Social Media Integration",
      },
      {
        status: false,
        value: "Unlimited Storage",
      },
      {
        status: false,
        value: "Payment Gateway",
      },
    ],
  },
  {
    title: "Web Application",
    features: [
      {
        status: true,
        value: "Domain name & hosting",
      },
      {
        status: true,
        value: "Website Security",
      },
      {
        status: true,
        value: "Mobile-friendly Website",
      },
      {
        status: true,
        value: "Search Engine Friendly",
      },
      {
        status: true,
        value: "Integrated Contact form",
      },
      {
        status: true,
        value: "Unlimited Email Addresses",
      },
      {
        status: true,
        value: "Automatic site backup",
      },
      {
        status: true,
        value: "Visibility on Google Map",
      },
      {
        status: true,
        value: "Interactive Google Map",
      },
      {
        status: true,
        value: "Blog",
      },
      {
        status: true,
        value: "Social Media Integration",
      },
      {
        status: true,
        value: "Unlimited Storage",
      },
      {
        status: true,
        value: "Payment Gateway",
      },
    ],
  },

  {
    title: "Mobile Application",
    features: [
      {
        status: true,
        value: "Domain name & hosting",
      },
      {
        status: true,
        value: "Website Security",
      },
      {
        status: true,
        value: "Mobile-friendly Website",
      },
      {
        status: true,
        value: "Search Engine Friendly",
      },
      {
        status: true,
        value: "Integrated Contact form",
      },
      {
        status: true,
        value: "Unlimited Email Addresses",
      },
      {
        status: true,
        value: "Automatic site backup",
      },
      {
        status: true,
        value: "Visibility on Google Map",
      },
      {
        status: true,
        value: "Interactive Google Map",
      },
      {
        status: false,
        value: "Blog",
      },
      {
        status: true,
        value: "Social Media Integration",
      },
      {
        status: true,
        value: "Unlimited Storage",
      },
      {
        status: true,
        value: "Payment Gateway",
      },
    ],
  },
];

const smallBusiness = [
  "Ideation and BrainStorming",
  "Agile Team Building",
  "MVP Development and Launch",
  "Resources",
  "and Funding support",
];

const growingBusiness = [
  "Product Market Fit",
  "Go to Market Strategy",
  "Growth Hacking",
  "Funding Support",
  "and Networking opportunities",
];

const benefits = [
  {
    img: branding,
    title: "MVP Development",
    content: "Expert guidance from start to finish",
  },
  {
    img: funding,
    title: "Funding Opportunities",
    content: "Access investment capital to fuel your growth",
  },
  {
    img: marketing,
    title: "Customer Acquisition",
    content: "Attract and retain early adopters",
  },
  {
    img: structure,
    title: "Development Team",
    content: "Get an experienced and dedicated development team",
  },
  {
    img: compliance,
    title: "Market Validation",
    content: "Ensure your product meets market demand",
  },
  {
    img: design,
    title: "Networking",
    content: "Connect with like-minded entrepreneus and investors",
  },
];

const training = [
  {
    img: participant,
    title: "Register as a participant",
    link: "apply",
    linkImage: participantLink,
    bgColor: "#FFF0E5",
  },
  {
    img: volunteer,
    title: "Be a volunteer",
    link: "volunteer",
    linkImage: volunteerLink,
    bgColor: "#E5F5EE",
  },
  {
    img: partner,
    title: "Support as a Partner",
    link: "partner",
    linkImage: partnerLink,
    bgColor: "#F1E8FC",
  },
];

const impact = [
  {
    numbers: "200+",
    title: "Business Trained",
    content:
      "Over 200 businesses have successfully completed our training program and gained the knowledge and skills to drive their growth.",
  },
  {
    numbers: "300+",
    title: "Community Members",
    content:
      "Our online community boasts over 300 active members who engage in discussions, and collaborate on business opportunities.",
  },
  {
    numbers: "5+",
    title: "Cities Impacted",
    content:
      "Our reach extends to 5 cities, enabling entrepreneurs from various regions to benefit from our program.",
  },
  {
    numbers: "50+",
    title: "Volunteer Network",
    content:
      "Our community is powered by a network of over 50 dedicated volunteers who contribute their time and expertise to empower small businesses. ",
  },
  {
    numbers: "4",
    title: "Partnerships",
    content:
      "We have forged partnerships with 4 organizations, including governmental bodies, sponsors, and service providers, to offer additional support and resources to our participants.",
  },
];

const faqs = [
  {
    title: "What is Megadel Africa?",
    content:
      "Megadel Africa is a platform dedicated to empowering African entrepreneurs by providing comprehensive support for MVP development, market validation, funding, and more.",
  },
  {
    title: "How does Megadel Africa help entrepreneurs?",
    content: `We offer a range of services, including:
    <ul>
      <li>MVP development</li>
      <li>Market validation</li>
      <li>Investor matching</li>
    </ul>
  `,
  },
  {
    title: "What is an MVP?",
    content:
      "An MVP (Minimum Viable Product) is a simplified version of a product that allows you to test your idea and gather feedback from potential customers before investing heavily in development.",
  },
  {
    title: "How long does MVP development process take?",
    content:
      "The timeline for MVP development varies depending on the complexity of your project. However, we strive to deliver high-quality MVPs in a timely manner.",
  },
  {
    title: "What is the cost of MVP development?",
    content:
      "Our pricing is tailored to each individual project. Please contact us for a personalized quote.",
  },
  {
    title: "Can I provide my own design for the MVP?",
    content:
      "Yes, you can provide your own design or collaborate with our designers to create a unique look and feel.",
  },
  {
    title: "How do you validate a business idea?",
    content:
      "We use a combination of market research, customer surveys, and competitive analysis to validate your business idea.",
  },
  {
    title: "What kind of market research do you conduct?",
    content:
      "We conduct various types of market research, including industry analysis, target market segmentation, and competitor analysis.",
  },
  {
    title: "How can Megadel Africa help me secure funding?",
    content:
      "We can connect you with potential investors and provide guidance on preparing your pitch deck and financial projections.",
  },
  {
    title: "What types of fund are available throught Megadel Africa",
    content:
      "We can help you explore various funding options, such as angel investments, venture capital, and grants.",
  },
  {
    title: "Who are the mentors at Megadel Africa?",
    content:
      "Our mentors are experienced entrepreneurs and industry experts who can provide valuable guidance and support.",
  },
  {
    title: "How can I benefit from membership?",
    content:
      "Mentorship can help you overcome challenges, make informed decisions, and accelerate your business growth.",
  },
  {
    title: "How can I connect with other entrepreneur through Megadel Africa",
    content:
      "We offer networking opportunities, such as events, online communities, and mentorship programs.",
  },
];

export {
  websitePlan,
  smallBusiness,
  growingBusiness,
  benefits,
  training,
  impact,
  faqs,
};
