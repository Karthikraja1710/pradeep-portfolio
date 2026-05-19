import { Github, Linkedin, Mail, Phone, MapPin, Globe, Award, BookOpen, Briefcase, Code, GraduationCap, Laptop, Sparkles, TrendingUp } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Pradeep S",
  role: "AI & Data Science Student",
  email: "pradeepshanmugavel01@gmail.com",
  phone: "+91 8248164459",
  location: "Cuddalore, Tamil Nadu",
  tagline: "Building intelligent systems and high-converting digital experiences.",
  summary: "Motivated B.Tech student specializing in Artificial Intelligence and Data Science with a strong foundation in Python, Machine Learning, and Web Technologies. I bridge the gap between complex algorithms and intuitive user experiences, helping brands grow through data-driven digital marketing and robust e-commerce solutions.",
  socials: [
    { name: "GitHub", icon: Github, url: "https://github.com/pradeep-s" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/pradeep-s" },
    { name: "Email", icon: Mail, url: "mailto:pradeepshanmugavel01@gmail.com" }
  ]
};

export const SKILLS = [
  {
    category: "AI & Data Science",
    icon: Sparkles,
    skills: ["Python", "Machine Learning Concepts", "Data Analysis", "SQL", "OpenCV"]
  },
  {
    category: "Web Development",
    icon: Code,
    skills: ["HTML5", "CSS3", "JavaScript", "WordPress", "E-commerce Development"]
  },
  {
    category: "Digital Marketing",
    icon: TrendingUp,
    skills: ["SEO Optimization", "Meta Ads", "Digital Marketing Strategy", "Analytics"]
  },
  {
    category: "Tools & Others",
    icon: Laptop,
    skills: ["C Programming", "Cloud Computing", "Version Control", "Web Development Tools"]
  }
];

export const PROJECTS = [
  {
    title: "AI Attendance System",
    category: "Artificial Intelligence",
    tech: ["Python", "OpenCV", "Face Recognition"],
    description: "Developed an end-to-end system for tracking attendance using real-time face recognition technology to improve accuracy.",
    features: ["Real-time detection", "Database integration", "User management"],
    image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    tech: ["WordPress", "WooCommerce", "SEO"],
    description: "Designed and launched a fully functional online store with optimized product listings and user-friendly interface.",
    features: ["Product Management", "SEO Optimized", "Responsive Design"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800"
  }
];

export const EXPERIENCE = [
  {
    role: "AI & ML Virtual Intern",
    company: "AICTE & EduSkills (Supported by Google)",
    period: "Oct 2024 - Dec 2024",
    highlights: [
      "Completed 10-week intensive training in Artificial Intelligence.",
      "Gained hands-on experience in Machine Learning model development.",
      "Recognized for excellence in project participation during the internship."
    ],
    icon: Briefcase
  }
];

export const EDUCATION = [
  {
    degree: "B.Tech - Artificial Intelligence & Data Science",
    institution: "Dhanalakshmi Srinivasan Engineering College",
    period: "2022 - Present",
    stats: "7.69 CGPA (Upto 5th Sem)",
    highlights: ["Currently Pursuing - 3rd Year"],
    icon: GraduationCap
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "State Board",
    period: "Passed 2022",
    stats: "80%",
    icon: BookOpen
  }
];

export const CERTIFICATES = [
  { title: "NPTEL – Cloud Computing", issuer: "NPTEL", icon: Award },
  { title: "AI Revolution in Cyber Security Summit", issuer: "2023 Summit", icon: Award },
  { title: "Learnathon 2024 Certificate", issuer: "EduSkills", icon: Award },
  { title: "Project Expo Participation", issuer: "DSEC", icon: Award },
  { title: "Paper Presentation & IPL Auction Event", issuer: "College Event", icon: Award }
];
