import {
  Code,
  Database,
  Globe,
  Linkedin,
  Palette,
  Rocket,
  Smartphone,
} from "lucide-react";

export const navItems = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Services",
    route: "/services",
  },
  {
    label: "Portfolio",
    route: "/portfolio",
  },
  {
    label: "About",
    route: "/about",
  },
  {
    label: "Blog",
    route: "/blog",
  },
  {
    label: "Contact",
    route: "/contact",
  },
];

export const featureSectionItems = [
  {
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications built with React, Next.js, and cutting-edge technologies.",
    icon: Globe,
    iconColor: "text-blue-500",
  },
  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications using Flutter and React Native for iOS and Android.",
    icon: Smartphone,
    iconColor: "text-emerald-500",
  },
  {
    title: "Full Stack Development",
    description:
      "Complete backend solutions with APIs, databases, and server infrastructure using Node.js and Go.",
    icon: Database,
    iconColor: "text-purple-600",
  },
  {
    title: "UI/UX Design",
    description:
      "User-centered design solutions that create intuitive and engaging digital experiences.",
    icon: Palette,
    iconColor: "text-pink-600",
  },
  {
    title: "SaaS MVP Building",
    description:
      "Rapid MVP development to validate your startup idea and get to market quickly.",
    icon: Rocket,
    iconColor: "text-amber-500",
  },
  {
    title: "Custom Software Solutions",
    description:
      "Tailored software solutions for specific business needs and requirements.",
    icon: Code,
    iconColor: "text-indigo-600",
  },
];

export const teamMembers = [
  {
    basicInfo: {
      name: "Ankan",
      designation: "Frontend developer",
      imageUrl: "/placeholder.svg",
    },
    additionalInfo: {
      email: "ankan@gmail.com",
      // socials: [
      //   {
      //     icon: Linkedin,
      //   },
      // ],
      technologies: [
        "/teches/react_js.svg",
        "/teches/next_js.svg",
        "/teches/node_js.svg",
        "/teches/tailwind_css.svg",
        "/teches/golang.svg",
      ],
    },
  },
  {
    basicInfo: {
      name: "Souvik",
      designation: "Frontend developer",
      imageUrl: "/placeholder.svg",
    },
    additionalInfo: {
      email: "ankan@gmail.com",
      // socials: [
      //   {
      //     icon: Linkedin,
      //   },
      // ],
      technologies: [
        "/teches/react_js.svg",
        "/teches/flutter.svg",
        "/teches/node_js.svg",
        "/teches/tailwind_css.svg",
      ],
    },
  },
  {
    basicInfo: {
      name: "Ankush",
      designation: "Frontend developer",
      imageUrl: "/placeholder.svg",
    },
    additionalInfo: {
      email: "ankan@gmail.com",
      // socials: [
      //   {
      //     icon: Linkedin,
      //   },
      // ],
      technologies: [
        "/teches/react_js.svg",
        "/teches/next_js.svg",
        "/teches/node_js.svg",
        "/teches/tailwind_css.svg",
      ],
    },
  },
  {
    basicInfo: {
      name: "Sheet",
      designation: "Frontend developer",
      imageUrl: "/placeholder.svg",
    },
    additionalInfo: {
      email: "ankan@gmail.com",
      // socials: [
      //   {
      //     icon: Linkedin,
      //   },
      // ],
      technologies: [
        "/teches/react_js.svg",
        "/teches/next_js.svg",
        "/teches/node_js.svg",
        "/teches/tailwind_css.svg",
        "/teches/flutter.svg",
      ],
    },
  },
];

export const testimonials = [
  {
    rating: 4,
    quote:
      "CodeCrew Global delivered our MVP in just 6 weeks. Their communication and quality exceeded expectations!",
    name: "Sarah Johnson",
    title: "TechStart Inc., USA",
  },
  {
    rating: 5,
    quote:
      "CodeCrew Global delivered our MVP in just 6 weeks. Their communication and quality exceeded expectations!",
    name: "Sarah Johnson",
    title: "TechStart Inc., USA",
  },
  {
    rating: 4,
    quote:
      "CodeCrew Global delivered our MVP in just 6 weeks. Their communication and quality exceeded expectations!",
    name: "Sarah Johnson",
    title: "TechStart Inc., USA",
  },
  {
    rating: 3,
    quote:
      "CodeCrew Global delivered our MVP in just 6 weeks. Their communication and quality exceeded expectations!",
    name: "Sarah Johnson",
    title: "TechStart Inc., USA",
  },
  {
    rating: 5,
    quote:
      "CodeCrew Global delivered our MVP in just 6 weeks. Their communication and quality exceeded expectations!",
    name: "Sarah Johnson",
    title: "TechStart Inc., USA",
  },
  {
    rating: 4,
    quote:
      "CodeCrew Global delivered our MVP in just 6 weeks. Their communication and quality exceeded expectations!",
    name: "Sarah Johnson",
    title: "TechStart Inc., USA",
  },
];
