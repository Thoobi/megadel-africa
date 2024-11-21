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
    numbers: "500+",
    title: "Business Trained",
    content:
      "Over 500 businesses have successfully completed our training program and gained the knowledge and skills to drive their growth.",
  },
  {
    numbers: "3000+",
    title: "Community Members",
    content:
      "Our online community boasts over 3,000 active members who engage in discussions, and collaborate on business opportunities.",
  },
  {
    numbers: "5",
    title: "Citis Impacted",
    content:
      "Our reach extends to 5 cities, enabling entrepreneurs from various regions to benefit from our program.",
  },
  {
    numbers: "100+",
    title: "Volunteer Network",
    content:
      "Our community is powered by a network of over 100 dedicated volunteers who contribute their time and expertise to empower small businesses. ",
  },
  {
    numbers: "10",
    title: "Partnerships",
    content:
      "We have forged partnerships with 10 organizations, including governmental bodies, sponsors, and service providers, to offer additional support and resources to our participants.",
  },
];

export {
  websitePlan,
  smallBusiness,
  growingBusiness,
  benefits,
  training,
  impact,
};
