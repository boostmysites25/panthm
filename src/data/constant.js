import { CodeXml, NotebookPen, Rocket } from "lucide-react";
import logo from "../assets/logo/logo.png";

export { logo };

// company
export const companyDetails = {
  name: "PANTHM AI Labs",
  address:
    "Icon Tower Office No. 702 Sr 114/5 ,115/1 ,114/6/3 BANER, Pune MAHARASHTRA-411045",
  phone: "+918380862789",
  email: "abc@example.com",
};

// working process
export const workingProcess = [
  {
    step: 1,
    title: "Strategic Discovery",
    description:
      "We decode your vision through immersive workshops and data-driven analysis. Our architects map out a digital trajectory that aligns perfectly with your enterprise goals and future scalability needs.",
    icon: NotebookPen,
  },
  {
    step: 2,
    title: "Futuristic Engineering",
    description:
      "Our engineers craft pixel-perfect interfaces and robust backends using next-gen technologies. We prioritize performance, security, and an ultra-smooth user experience that feels years ahead of the curve.",
    icon: CodeXml,
  },
  {
    step: 3,
    title: "Launch & Evolution",
    description:
      "We execute a flawless deployment with rigorous automated testing. Post-launch, we provide AI-driven insights and continuous optimization to ensure your digital asset evolves with the market.",
    icon: Rocket,
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "Next-Gen E-Commerce",
    image: require("../assets/images/landingpage/ecommerce.webp"),
    description:
      "Revolutionize retail with AI-powered storefronts. We build immersive shopping experiences that predict user behavior and maximize conversion through intelligent design.",
  },
  {
    id: 2,
    title: "Social Ecosystems",
    image: require("../assets/images/landingpage/socialmedia.webp"),
    description:
      "Architecting digital communities with real-time interaction. Our platforms foster deep engagement through seamless connectivity and dynamic content algorithms.",
  },
  {
    id: 3,
    title: "High-Impact Landing",
    image: require("../assets/images/landingpage/landing.webp"),
    description:
      "Captivate audiences instantly with motion-rich landing pages. We combine psychological triggers with stunning aesthetics to turn visitors into loyal advocates.",
  },
  {
    id: 4,
    title: "Bespoke Digital Solutions",
    image: require("../assets/images/landingpage/customweb.webp"),
    description:
      "Tailored digital architectures for unique business challenges. We blend creativity with logic to deliver custom web solutions that defy convention.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS Excellence",
    image: require("../assets/images/landingpage/ios.webp"),
    description:
      "Native iOS experiences crafted with Swift precision. We leverage the full power of the Apple ecosystem to deliver fluid, intuitive, and powerful applications.",
  },
  {
    id: 2,
    title: "Android Innovation",
    image: require("../assets/images/landingpage/android.webp"),
    description:
      "Scalable Android solutions for the global market. Our apps are engineered for performance across the fragmented device landscape, ensuring consistent quality.",
  },
  {
    id: 3,
    title: "Flutter Cross-Platform",
    image: require("../assets/images/landingpage/flutter.webp"),
    description:
      "One codebase, infinite possibilities. We utilize Flutter to deploy stunning, native-like applications across mobile, web, and desktop with unmatched speed.",
  },
  {
    id: 4,
    title: "Hybrid Agility",
    image: require("../assets/images/landingpage/hybrid.webp"),
    description:
      "Cost-effective versatility without compromise. Our hybrid solutions bridge the gap between web and mobile, offering rapid deployment and easy maintenance.",
  },
];

// testimonials
export const testimonials = [
  {
    name: "Elena R.",
    position: "CTO, Nexus Innovations",
    desc: `PANTHM AI Labs didn't just build a website; they engineered a digital masterpiece. Their approach to UI/UX is visionary. The new platform has elevated our brand perception and streamlined our client acquisition process significantly.`,
    img: require("../assets/images/testimonials/1.jpg"),
  },
  {
    name: "Marcus T.",
    position: "Founder, Quantum FinTech",
    desc: `The technical prowess of the PANTHM team is unmatched. They delivered a complex financial dashboard with zero latency and bank-grade security. Their ability to translate complex data into beautiful visualizations is impressive.`,
    img: require("../assets/images/testimonials/2.jpg"),
  },
  {
    name: "Sophia L.",
    position: "Director, Creative Pulse",
    desc: `Working with PANTHM was a glimpse into the future of collaboration. Their agile workflow and transparent communication made the project seamless. The final product exceeded our wildest expectations in terms of design and functionality.`,
    img: require("../assets/images/testimonials/3.jpg"),
  },
  {
    name: "James D.",
    position: "VP of Operations, LogiChain",
    desc: `We needed a robust solution for our logistics network, and PANTHM delivered. Their blockchain integration expertise helped us achieve transparency we didn't think was possible. A truly top-tier technology partner.`,
    img: require("../assets/images/testimonials/4.jpg"),
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: require("../assets/images/web_projects/1.webp"),
    title: "FE-Finance",
  },
  {
    id: 2,
    img: require("../assets/images/web_projects/2.webp"),
    title: "Ocxee",
  },
  {
    id: 3,
    img: require("../assets/images/web_projects/3.webp"),
    title: "Leaderbridge",
  },
  {
    id: 4,
    img: require("../assets/images/web_projects/4.webp"),
    title: "Gigzio",
  },
  {
    id: 5,
    img: require("../assets/images/web_projects/5.webp"),
    title: "FE Group",
  },
  {
    id: 6,
    img: require("../assets/images/web_projects/6.webp"),
    title: "V Talkz",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require("../assets/images/app_projects/1.webp"),
    title: "PartEx",
  },
  {
    id: 2,
    img: require("../assets/images/app_projects/2.webp"),
    title: "Find A Driver",
  },
  {
    id: 3,
    img: require("../assets/images/app_projects/3.webp"),
    title: "Artisan Express",
  },
  {
    id: 4,
    img: require("../assets/images/app_projects/4.webp"),
    title: "House of Deliverance",
  },
];
