import {
  Clock,
  Code,
  Database,
  DollarSign,
  Globe,
  Palette,
  Rocket,
  Shield,
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

export const sectionBadge = [
  {
    text: "Fast Delivery",
    icon: Clock,
    iconColor: "text-blue-500",
  },
  {
    text: "Fixed Pricing",
    icon: DollarSign,
    iconColor: "text-emerald-500",
  },
  {
    text: "Quality Assured",
    icon: Shield,
    iconColor: "text-amber-500",
  },
];

export const featurePageItems = [
  {
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications built with React, Next.js, and cutting-edge technologies.",
    offers: [
      "React/Next.js Development",
      "Responsive Design",
      "E-commerce Solutions",
      "Progressive Web Apps",
    ],
    startingAt: "$2,000 - $8,000",
    timeline: "2-6 weeks",
    icon: Globe,
    iconColor: "text-blue-500",
  },
  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications using Flutter and React Native for iOS and Android.",
    offers: [
      "Flutter Development",
      "React Native Apps",
      "Native iOS/Android",
      "App Store Deployment",
    ],
    startingAt: "$3,000 - $12,000",
    timeline: "4-8 weeks",
    icon: Smartphone,
    iconColor: "text-emerald-500",
  },
  {
    title: "Full Stack Development",
    description:
      "Complete backend solutions with APIs, databases, and server infrastructure using Node.js and Go.",
    offers: [
      "RESTful APIs",
      "Database Design",
      "Authentication Systems",
      "Cloud Deployment",
    ],
    startingAt: "$2,500 - $10,000",
    timeline: "3-7 weeks",
    icon: Database,
    iconColor: "text-purple-600",
  },
  {
    title: "UI/UX Design",
    description:
      "User-centered design solutions that create intuitive and engaging digital experiences.",
    offers: [
      "User Research",
      "Wireframing",
      "Prototype Design",
      "Design Systems",
    ],
    startingAt: "$1,000 - $4,000",
    timeline: "1-3 weeks",
    icon: Palette,
    iconColor: "text-pink-600",
  },
  {
    title: "SaaS MVP Building",
    description:
      "Rapid MVP development to validate your startup idea and get to market quickly.",
    offers: [
      "MVP Strategy",
      "Core Feature Development",
      "User Authentication",
      "Payment Integration",
    ],
    startingAt: "$4,000 - $15,000",
    timeline: "4-10 weeks",
    icon: Rocket,
    iconColor: "text-amber-500",
  },
  {
    title: "Custom Software Solutions",
    description:
      "Tailored software solutions for specific business needs and requirements.",
    offers: [
      "Business Analysis",
      "Custom Development",
      "Integration Services",
      "Maintenance Support",
    ],
    startingAt: "$5,000 - $20,000",
    timeline: "6-12 weeks",
    icon: Code,
    iconColor: "text-indigo-600",
  },
];

export const faqs = [
  {
    id: "q1",
    question: "What are your typical project timelines?",
    answer:
      "Project timelines vary based on complexity. Simple websites take 2-4 weeks, mobile apps 4-8 weeks, and complex SaaS platforms 8-16 weeks. We provide detailed timelines during project planning.",
  },
  {
    id: "q2",
    question: "How do you handle pricing and payments?",
    answer:
      "We offer transparent, fixed-price quotes based on project scope. Payment is typically split: 30% upfront, 40% at midpoint, and 30% on completion. We accept bank transfers and PayPal.",
  },
  {
    id: "q3",
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Yes! We offer 3 months of free bug fixes and minor updates. For ongoing maintenance, we provide support packages starting at $500/month including hosting, updates, and technical support.",
  },
  {
    id: "q4",
    question: "Who owns the code and intellectual property?",
    answer:
      "You own 100% of the code, design, and intellectual property. We provide complete source code, documentation, and transfer all assets to you upon project completion.",
  },
  {
    id: "q5",
    question: "How do you ensure code quality and security?",
    answer:
      "We follow industry best practices including code reviews, automated testing, security audits, and use secure coding standards. All projects include security measures and performance optimization.",
  },
  {
    id: "q6",
    question: "Can you work with our existing team or tools?",
    answer:
      "Absolutely! We integrate seamlessly with your existing workflows, tools (Slack, Jira, GitHub), and team members. We adapt to your preferred communication and project management style.",
  },
];
