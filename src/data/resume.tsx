import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Arijit Majumdar",
  initials: "AM",
  url: "https://arijit.dev",
  location: "Kolkata, India",
  locationLink: "https://www.google.com/maps/place/Kolkata,+West+Bengal",
  description:
    "Full Stack Developer passionate about building scalable web apps and developer tools. Always learning, always building.",
    summary:
    "I’m a Computer Science undergrad at IIIT Kota and a full stack developer with a focus on modern web technologies. I’ve built real-time chat apps, AI-powered interview platforms, resume analyzers, and payment integrations. I enjoy solving practical problems with elegant code and constantly explore new tools and frameworks through side projects.",  
  avatarUrl: "/me.jpg",
  skills: [
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Prisma",
    "Tailwind CSS",
    "Shadcn UI",
    "Docker",
    "MongoDB",
    "Express.js",
    "Hono",
    "C++",
    "Python"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "arijit@example.com",
    tel: "+91XXXXXXXXXX",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ArijitMajumdardev",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/arijit-majumdar-37949125a/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/ArijitM44015321",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:arijitmajumdardev@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  education: [
    {
      school: "Indian Institute of Information Technology, Kota",
      href: "https://iiitkota.ac.in",
      degree: "B.Tech in Computer Science and Engineering",
      logoUrl: "/iiitkota.svg",
      start: "2022",
      end: "2026",
    }
  ],

  projects: [ {
    title: "HireGen",
    href: "https://hire-gen-xi.vercel.app/",
    dates: "2024 - Present",
    active: true,
    description:
      "HireGen is a voice-agent powered AI mock interview platform . It generates tailored interview questions, evaluates spoken answers in real time, and offers actionable feedback. Also includes resume building and analysis features.",
    technologies: [
      "React",
      "TypeScript",
      "Shadcn UI",
      "Hono",
      "Cloudflare Workers",
      "Gemini API",
      "Prisma",
      "Vapi AI",
      "PostgreSQL",
      "TailwindCSS"
    ],
    links: [
      {
        type: "Website",
        href: "https://hire-gen-xi.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/ArijitMajumdardev/HireGen",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/projects/hiregen.png",
    video: "",
  },
    {
      title: "Autobot",
      href: "https://autobot-sigma.vercel.app/",
      dates: "2024 - Present",
      active: true,
      description:
        "Autobot is a Vibe coding platform that generates complete frontend applications based on user prompts. Features live in-browser code execution with Sandpack, user authentication with Clerk, and seamless project generation flow.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Shadcn UI",
        "Clerk",
        "Convex",
        "Sandpack",
        "Gemini API"
      ],
      links: [
        {
          type: "Website",
          href: "https://autobot-sigma.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ArijitMajumdardev/autobot",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/autobot.png",
      video: "",
    },
    {
      title: "Real-time Chat App",
      href: "https://github.com/ArijitMajumdardev/chat-app",
      dates: "2023",
      active: true,
      description:
  "A real-time chat app built with Socket.io, featuring responsive UI using Shadcn and TailwindCSS. Users can join chat rooms and exchange messages instantly.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Socket.io",
        "Express",
        "Node js",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ArijitMajumdardev/chat-appt",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/chatapp.png",
      video: "",
    }, {
      title: "StarSupport",
      href: "https://github.com/ArijitMajumdardev/starsupportv",
      dates: "2024",
      active: true,
      description:
        "A fun donation platform inspired by Buy Me a Coffee. Integrated Razorpay for payments.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Next Auth",
        "TailwindCSS",
        "Razorpay API",
        "MongoDB",
        "Mongoose",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ArijitMajumdardev/starsupport",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/buymeacoke.png",
      video: "",
    }
  ]
  
  
} as const;
