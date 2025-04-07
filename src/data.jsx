import { WiDayCloudyGusts } from "react-icons/wi";
import { BsShieldLock, BsBarChartLine } from "react-icons/bs";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaCode,
  FaHandshake,
} from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa";
import { IoGitNetworkSharp } from "react-icons/io5";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GrSync } from "react-icons/gr";
import {
  headsetImage,
  pencilImage,
  shieldImage,

  //Portfolio images import
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
  portfolio5,
  portfolio6,

  //Clients images import
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
} from "./assets";
import blog1 from "./assets/blog1.jpg";
import blog2 from "./assets/blog2.jpg";
import blog3 from "./assets/blog3.jpg";

import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";

export const navRoutes = [
  {
    id: "hero",
    name: "Home",
  },
  {
    id: "about",
    name: "About",
  },
  {
    id: "services",
    name: "Services",
  },
  {
    id: "portfolio",
    name: "Portfolio",
  },
  {
    id: "blog",
    name: "Blog",
  },
  {
    id: "contact",
    name: "Contact",
  },
];

export const whyChooseUs = [
  {
    title: "Proven Expertise",
    imageIcon: shieldImage,
    description: `With years of experience across multiple industries, our team
                brings deep knowledge and technical expertise to every project,
                ensuring solutions that are both innovative and reliable.`,
  },
  {
    title: "Customized Solutions",
    imageIcon: pencilImage,
    description: `We understand that every business is unique. Our solutions are
                tailored to fit each client's specific needs, providing maximum
                flexibility and scalability for the future.`,
  },
  {
    title: "Exceptional Support",
    imageIcon: headsetImage,
    description: `Our commitment doesn’t end at project delivery. We provide
                dedicated, ongoing support to ensure your business continues to
                succeed with our solutions.`,
  },
];


export const ourApproaches = [
  {
    title: "Client-Centered Collaboration",
    icon: FaHandshake,
    description: `We prioritize close collaboration, working directly with
                  clients to fully understand their vision and challenges. This
                  partnership ensures each solution is perfectly aligned with
                  their business goals.`,
  },
  {
    title: "Innovation-Driven Solutions",
    icon: HiOutlineLightBulb,
    description: `Innovation is at the heart of everything we do. We apply the
                  latest technologies and creative problem-solving to develop
                  solutions that drive long-term growth and competitiveness.`,
  },
  {
    title: "Agile and Adaptive",
    icon: GrSync,
    description: `Our agile approach keeps us flexible and ready to adapt to
                  changing needs. This method allows us to deliver scalable
                  solutions that grow alongside your business.`,
  },
];

export const services = [
  {
    title: "Cloud Solutions",
    description:
      "Secure and scalable cloud solutions tailored to fit your business needs, enabling seamless data access and collaboration from anywhere.",
    icon: WiDayCloudyGusts,
  },
  {
    title: "Cybersecurity",
    description:
      "Protect your business with robust cybersecurity solutions that safeguard data and prevent unauthorized access, ensuring peace of mind.",
    icon: BsShieldLock,
  },
  {
    title: "Custom Software Development",
    description:
      "Develop custom software solutions that enhance efficiency and align perfectly with your business processes and goals.",
    icon: FaCode,
  },
  {
    title: "IT Consulting",
    description:
      " Leverage our expertise to make strategic IT decisions that drive growth and optimize your technology investments.",
    icon: FaRegLightbulb,
  },
  {
    title: "Data Analytics",
    description:
      "Turn raw data into actionable insights with advanced analytics that inform smarter business decisions.",
    icon: BsBarChartLine,
  },
  {
    title: "Network Infrastructure",
    description:
      "Optimize your business connectivity with reliable, high-speed network infrastructure solutions designed to keep your operations seamless and resilient.",
    icon: IoGitNetworkSharp,
  },
];

export const portfolio = [
  {
    title: "Secure E-Commerce Platform",
    description:
      "Developed a high-performance e-commerce platform with advanced security features, enabling safe and seamless transactions for customers worldwide.",
    image: portfolio1,
  },
  {
    title: "Cloud Migration for a Global Company",
    description:
      "Successfully migrated a global company’s data to a secure, scalable cloud environment, improving access and reducing costs.",
    image: portfolio2,
  },
  {
    title: "Real-Time Data Analytics Dashboard",
    description:
      "Created a real-time analytics dashboard that provides actionable insights, helping businesses make data-driven decisions quickly.",
    image: portfolio3,
  },
  {
    title: "Custom CRM Solution for Client Management",
    description:
      "Designed a custom CRM system to improve client interactions, streamline workflows, and manage leads effectively.",
    image: portfolio4,
  },
  {
    title: "AI-Powered Cybersecurity Monitoring System",
    description:
      "Built an AI-driven security monitoring system that detects and responds to threats in real time, ensuring robust protection for client data.",
    image: portfolio5,
  },
  {
    title: "High-Speed Network Infrastructure for Corporate Office",
    description:
      "Implemented a high-speed network infrastructure to boost productivity and connectivity in a large corporate office.",
    image: portfolio6,
  },
];

export const contactInfo = [
  {
    title: "Email Us",
    description: "Fast and Reliable Support",
    value: "mradinuba@gmail.com",
    icon: MdOutlineAlternateEmail,
  },
  {
    title: "Our Address",
    description: "Come visit us in our office",
    value: "First Avenue, Gwarinpa, Abuja Nigeria",
    icon: FaLocationCrosshairs,
  },
  {
    title: "Phone number",
    description: "Give Us a call",
    value: "+234 814 912 1918",
    icon: FiPhoneCall,
  },
];

export const socialHandles = [
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://www.facebook.com",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://www.linkedin.com",
  },
  {
    name: "Youtube",
    icon: FaYoutube,
    link: "https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
  },
];

export const blogPost = [
  {
    title:
      "Transforming Healthcare with AI: How Datawave is Empowering Better Patient Outcomes",
    content:
      "This blog post explores Datawave’s impact on healthcare through AI-powered solutions, such as predictive analytics and machine learning tools that help medical professionals make data-driven decisions and optimize patient care.",
    image: blog1,
  },
  {
    title:
      "Protecting Businesses from Cyber Threats: Datawave’s Approach to Modern Cybersecurity",
    content:
      "Discuss Datawave’s cybersecurity solutions, highlighting advanced threat detection, machine learning in threat analysis, and proactive defense strategies that businesses can adopt to secure their data in an increasingly digital landscape.",
    image: blog2,
  },
  {
    title:
      "Building Smart Cities with IoT: Datawave’s Vision for Sustainable Urban Development",
    content:
      "This blog post dives into how Datawave is leveraging IoT to enable smart city infrastructure. Discuss IoT’s role in making cities more efficient, sustainable, and data-centric, with examples of how Datawave’s solutions have been implemented in urban development projects.",
    image: blog3,
  },
];

export const clientsReviews = [
  {
    content:
      "Datawave transformed our outdated systems into a seamless, secure infrastructure. Their team is exceptionally skilled and always available to assist.",
    name: "Sophia Roberts",
    jobTitle: "IT Manager, TechNova",
    rating: 4,
    image: client1,
  },
  {
    content:
      "Partnering with Datawave has been a game-changer for our digital operations. Their innovative approach helped us scale effortlessly.",
    name: "Rajesh Patel",
    jobTitle: "CEO, Alpha Logistics",
    rating: 4,
    image: client2,
  },
  {
    content:
      "Datawave’s cloud solutions have boosted our productivity significantly. I can’t recommend their services enough!",
    name: "Emily Nguyen",
    jobTitle: "Operations Manager, Zenith Retail",
    rating: 3,
    image: client3,
  },
  {
    content:
      "Our cybersecurity has never been stronger. Datawave identified vulnerabilities we didn’t know existed and resolved them efficiently.",
    name: "James O’Connor",
    jobTitle: "CTO, Shield Financial Group",
    rating: 5,
    image: client4,
  },
  {
    content:
      "The team at Datawave delivered ahead of schedule and exceeded expectations. Their professionalism and expertise are unmatched.",
    name: "Fatima Yusuf",
    jobTitle: "Project Lead, GreenTech Solutions",
    rating: 4,
    image: client5,
  },
  {
    content:
      "Datawave provided scalable solutions that have supported our rapid growth. Their ongoing support ensures we’re always ahead.",
    name: "Liam Carter",
    jobTitle: "Founder, BrightSpark Media",
    rating: 4,
    image: client6,
  },
];

export const footer = [
  {
    title: "Go to",
    subRoutes: [
      {
        title: "About Us",
        id: "about",
      },
      {
        title: "Services",
        id: "services",
      },
      {
        title: "Testimonials",
        id: "testimonials",
      },
      {
        title: "Portfolio",
        id: "portfolio",
      },
    ],
  },
  {
    title: "Services",
    subRoutes: [
      {
        title: "Cloud Solutions",
        id: "",
      },
      {
        title: "Cybersecurity",
        id: "",
      },
      {
        title: "Software Development",
        id: "",
      },
      {
        title: "IT Consulting",
        id: "",
      },
    ],
  },
];
