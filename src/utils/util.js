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
        status: false,
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
    content: "",
  },
  {
    numbers: "3000+",
    title: "Community Members",
    content: "",
  },
  {
    numbers: "5",
    title: "Citis Impacted",
    content: "",
  },
  {
    numbers: "100+",
    title: "Volunteer Network",
    content: "",
  },
  {
    numbers: "10",
    title: "Partnerships",
    content: "",
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
