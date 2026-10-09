import {
  ShieldCheck,
  Presentation,
  Network,
  BrainCircuit,
  GraduationCap,
} from "lucide-react";

// Ganti link ini setiap kali ada CV baru
export const resumeLink =
  "https://drive.google.com/file/d/1H2z0Ceer2uA5KpXmTtRf-8r9oXMFOr6M/view?usp=sharing";

// Bidang yang ditampilkan bergantian oleh Typewriter di Hero
export const focusAreas = [
  "Network Engineering",
  "Network Security",
  "Presales & Technical Consulting",
  "Data & AI",
];

// Posisi yang sedang dicari
export const openToRoles = [
  "Consultant (Presales)",
  "Network Engineer",
  "Network Security Engineer",
  "Data & AI",
];

// Angka kunci di Hero
export const highlights = [
  { value: "1 yr", label: "Presales & FAE at Sangfor" },
  { value: "20+", label: "Customer-facing activities" },
  { value: "5M+", label: "Sales records analyzed" },
  { value: "426K+", label: "Network telemetry records modeled" },
];

// Empat kekuatan utama, masing-masing dipetakan ke posisi yang dituju
export const pillars = [
  {
    icon: Network,
    title: "Network Engineering",
    description:
      "Design and run enterprise networks: static and BGP routing, VLAN segmentation, NAT, VPN, and High Availability failover, backed by Cisco CCNA training.",
    fit: "Network Engineer",
  },
  {
    icon: ShieldCheck,
    title: "Network Security",
    description:
      "Deploy and tune security platforms (NGFW, NDR, EDR, IAG), write firewall policy, and troubleshoot real customer incidents. Sangfor SCTA certified.",
    fit: "Network Security Engineer",
  },
  {
    icon: Presentation,
    title: "Presales & Consulting",
    description:
      "Translate customer requirements into solutions, run POCs, and present results and recommendations that clients adopt.",
    fit: "Consultant (Presales)",
  },
  {
    icon: BrainCircuit,
    title: "Data & AI",
    description:
      "Build ML pipelines end to end, from SQL extraction and feature engineering to XGBoost and time-series forecasting, for sales and network data.",
    fit: "Data & AI",
  },
];

export const skillGroups = [
  {
    title: "Networking",
    items: [
      "Static & Dynamic Routing (BGP)",
      "VLAN Segmentation",
      "NAT",
      "VPN (SSL, IPSec)",
      "Firewall Policy",
      "High Availability & Failover",
    ],
  },
  {
    title: "Security Platforms",
    items: [
      "Sangfor NSF (NGFW)",
      "IAG",
      "NDR",
      "EDR",
      "XDR",
      "WAF & Anti-DDoS",
    ],
  },
  {
    title: "Operations & Documentation",
    items: [
      "Appliance Installation",
      "Rack Mounting & Cabling",
      "Console Access & Firmware Upgrade",
      "Ticket-based Troubleshooting",
      "MoP & Test Plans",
      "POC Documentation",
    ],
  },
  {
    title: "Data & Machine Learning",
    items: [
      "Python",
      "Data Preprocessing",
      "Forecasting",
      "Scikit-learn",
      "XGBoost",
      "ARIMA / SARIMA",
    ],
  },
  {
    title: "Business & Productivity Tools",
    items: [
      "Google Sheets & Excel",
      "Presentation Decks (Google Slides / PowerPoint)",
      "Proposal & Report Writing",
      "Budget Tracking",
      "Timeline Planning",
    ],
  },
  {
    title: "Software & Tools",
    items: [
      "JavaScript",
      "SQL",
      "Java",
      "React",
      "Express.js",
      "Linux CLI",
      "Git & GitHub",
    ],
  },
  {
    title: "Professional",
    items: [
      "Technical Presentation",
      "Stakeholder Communication",
      "Team Leadership",
      "Project Management",
      "Public Speaking",
      "Problem Solving",
    ],
  },
];

export const certifications = [
  {
    issuer: "Sangfor",
    items: [
      "SCTA – Internet Access Gateway (2026)",
      "SCTA – Endpoint Secure (2025)",
      "SCTA – Network Secure (2025)",
    ],
  },
  {
    issuer: "Cisco Networking Academy",
    items: [
      "CCNA: Switching, Routing & Wireless Essentials (2024)",
      "Ethical Hacker (2024)",
      "CCNA: Introduction to Networks (2023)",
    ],
  },
  {
    issuer: "IBM / Cognitive Class",
    items: [
      "Python 101 for Data Science (2025)",
      "Machine Learning with Python (2025)",
    ],
  },
];

export const achievements = [
  "POC recommendation adopted by a Sangfor client",
  "Best BPH of IME FTUI 2024",
  "Honorable Mention BPH, Quarter 2/3A (2024)",
  "Best Student Affairs Board, Q1 & Q2/3A (2023)",
];

export const education = {
  icon: GraduationCap,
  school: "Universitas Indonesia",
  faculty: "Faculty of Engineering · Department of Electrical Engineering",
  degree: "Bachelor of Engineering (S.T.) in Computer Engineering",
  period: "2022 – 2026",
  gpa: "3.58 / 4.00",
  thesis:
    "Machine-Learning-Based Throughput Forecasting for Wi-Fi Load Balancing Optimization",
  courses: [
    "Computer Networks",
    "Database Systems",
    "Object-Oriented Programming",
    "Cyber-Physical Systems",
    "Real-Time Systems & IoT",
    "Statistics",
  ],
};
