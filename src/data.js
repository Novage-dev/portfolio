import travel from "./assets/projects/travel.png";
import beauty from "./assets/projects/beauty.png";
import yadaa from "./assets/projects/yadaa.png";
import construction from "./assets/projects/construction.jpg";
import yonas from "./assets/projects/yonas.jpg";
import course from "./assets/projects/course.jpg";

import A from "./assets/certificates/A.jpg";
import N from "./assets/certificates/N.jpg";
import S from "./assets/certificates/S.jpg";
import T from "./assets/certificates/T.jpg";

export const SKILLS_DATA = {
  Frontend: [
    { name: "Angular", icon: "angular", color: "var(--color-red-500)" },
    { name: "Ant Design", icon: "antd", color: "var(--color-blue-400)" },
    {
      name: "Bootstrap 5",
      icon: "bootstrap5",
      color: "var(--color-purple-500)",
    },
    { name: "CSS3", icon: "css3", color: "var(--color-blue-600)" },
    { name: "Dart", icon: "dart", color: "var(--color-blue-400)" },
    { name: "Flutter", icon: "flutter", color: "var(--color-cyan-400)" },
    { name: "HTML5", icon: "html5", color: "var(--color-orange-600)" },
    { name: "jQuery", icon: "jquery", color: "var(--color-blue-300)" },
    { name: "JavaScript", icon: "js", color: "var(--color-yellow-400)" },
    { name: "Material UI", icon: "materialui", color: "var(--color-blue-500)" },
    { name: "Next.js", icon: "nextjs2", color: "var(--color-white)" },
    { name: "React", icon: "react", color: "var(--color-cyan-400)" },
    {
      name: "Tailwind CSS",
      icon: "tailwindcss",
      color: "var(--color-blue-400)",
    },
    { name: "TypeScript", icon: "typescript", color: "var(--color-blue-500)" },
    { name: "Vite", icon: "vitejs", color: "var(--color-yellow-400)" },
  ],
  Backend: [
    { name: "Node.js", icon: "nodejs", color: "var(--color-green-500)" },
    { name: "Express.js", icon: "expressjs", color: "var(--color-gray-400)" },
    { name: "Python", icon: "python", color: "var(--color-yellow-500)" },
    { name: "Rails", icon: "railway", color: "var(--color-red-600)" },
  ],
  Databases: [
    { name: "MongoDB", icon: "mongodb", color: "var(--color-green-600)" },
    { name: "Mongoose", icon: "mongoose", color: "var(--color-red-500)" },
    { name: "PostgreSQL", icon: "postgresql", color: "var(--color-blue-400)" },
    { name: "Firebase", icon: "firebase", color: "var(--color-yellow-600)" },
    { name: "Supabase", icon: "supabase", color: "var(--color-green-400)" },
  ],
  Tools: [
    { name: "Android", icon: "android", color: "var(--color-green-500)" },
    { name: "AWS", icon: "aws", color: "var(--color-orange-400)" },
    { name: "Babel", icon: "babel", color: "var(--color-purple-400)" },
    { name: "Docker", icon: "docker", color: "var(--color-blue-400)" },
    { name: "Git", icon: "git", color: "var(--color-red-600)" },
    { name: "GitHub", icon: "github", color: "var(--color-gray-800)" },
    { name: "Vercel", icon: "vercel", color: "var(--color-black)" },
  ],
};

export const PROJECTS_DATA = [
  {
    id: 1,
    Title: "E-Learning Mobile App",
    Description:
      "A comprehensive mobile application built with React Native for digital course sales and consumption, featuring secure user authentication, payment gateway integration, and offline content access.",
    TechStack: ["React Native", "Node.js", "MongoDB"],
    Img: course,
    Link: "#",
    Github: "#",
    Feautres: [],
  },
  {
    Title: "Global Travel Agency Platform",
    Description:
      "A visually stunning and responsive travel agency website designed to showcase exotic destinations and streamline booking inquiries, optimized for speed and accessibility across all devices.",
    TechStack: ["Next.js", "TypeScript", "Pure CSS"],
    Img: travel,
    Link: "#",
    Github: "#",
    Feautres: [],
  },
  {
    Title: "Luxury Beauty Salon Web Presence",
    Description:
      "A professional and elegant website for a beauty salon, featuring service catalogs, price listings, and a robust appointment scheduling system to manage client bookings and staff availability.",
    TechStack: ["Vue", "Firebase", "Express"],
    Img: beauty,
    Link: "#",
    Github: "#",
    Feautres: [],
  },
  {
    Title: "Construction Firm Corporate Site",
    Description:
      "Developed a strong corporate identity site for a construction company, detailing past projects, safety standards, and team expertise, serving as a key lead generation tool.",
    TechStack: ["Angular", "HTML5", "CSS3"],
    Img: construction,
    Link: "#",
    Github: "#",
    Feautres: [],
  },
  {
    Title: "Modern Restaurant Digital Menu",
    Description:
      "A dynamic, interactive website and digital menu solution for a restaurant, enhancing the customer experience with high-quality imagery and easy navigation, and supporting online orders.",
    TechStack: ["React", "PostgreSQL", "Node.js"],
    Img: yonas,
    Link: "#",
    Github: "#",
    Feautres: [],
  },
  {
    Title: "Course-Giving Platform Web App",
    Description:
      "A full-featured educational platform allowing instructors to upload courses and students to enroll, track progress, and complete assessments. Built for scalability and high concurrency.",
    TechStack: ["Next.js", "TypeScript", "Supabase"],
    Img: yadaa,
    Link: "#",
    Github: "#",
    Feautres: [],
  },
];

export const CERTIFICATES_DATA = [
  {
    id: 1,
    Img: N,
    title: "Hackathon Participation Certificate",
    explanation:
      "Recognizing intensive collaborative development under pressure, demonstrating rapid prototyping and problem-solving skills in a competitive environment.",
  },
  {
    id: 2,
    Img: T,
    title: "Innovation Ambassador of Ethiopia (One of 20 in Ethiopia)",
    explanation:
      "Awarded for exceptional contribution to national innovation initiatives, highlighting leadership, creative thinking, and the ability to drive technological change.",
  },
  {
    id: 3,
    Img: A,
    title: "AI Summer Camp Certificate",
    explanation:
      "Completed specialized training focused on foundational AI and Machine Learning concepts, expanding skill set into advanced computational domains.",
  },
  {
    id: 4,
    Img: S,
    title: "STEM Power Ethiopia Certificate",
    explanation:
      "Achieved through rigorous technical training, validating commitment to excellence in science, technology, engineering, and mathematics principles.",
  },
];

export const CONTACT_INFO = {
  phone: "+251912065665",
  email: "issacharjobz@gmail.com",
  telegram: "@issachar_0",
  resumeLink: "#", // Placeholder
};

export const STATS = {
  projectsCompleted: 14,
  Certificates: 5,
  yearsEX: 4,
};