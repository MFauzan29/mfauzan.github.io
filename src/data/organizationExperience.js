import { Users } from "lucide-react";

// roles: urut dari jabatan terbaru, supaya progres/promosi terlihat
// skills: skill yang paling khas dari pengalaman ini (skill umum cukup di section Skills)
// images kosong + icon → kartu menampilkan ikon pengganti
const organizations = [
  {
    id: 4,
    title: "MADK DTE FTUI 2025",
    roles: [{ title: "Project Officer", period: "2025" }],
    description:
      "Led the department's new-student adaptation program for the 2025 intake, from program concept and timeline to execution, coordinating a core committee and working with the department and faculty as key stakeholders.",
    // Angka kunci, tampil sebagai kotak statistik di kartu
    stats: [
      { value: "270+", label: "New students onboarded" },
      { value: "120+", label: "Core committee members led" },
    ],
    achievements: [
      "🤝 Coordinated with department and faculty stakeholders",
    ],
    skills: [
      "Program Design",
      "Stakeholder Management",
      "Large-team Leadership",
      "Timeline & Budget Planning",
      "Public Speaking",
    ],
    icon: Users,
    images: [],
  },
  {
    id: 1,
    title: "Ikatan Mahasiswa Elektro (IME) FTUI",
    roles: [
      { title: "Vice Head of Student Affairs (BPH)", period: "Jan 2024 – Dec 2024" },
      { title: "Staff of Student Affairs", period: "Feb 2023 – Dec 2023" },
    ],
    description:
      "Grew from staff to Vice Head of Student Affairs within a year. As staff I ran student-development initiatives; as Vice Head I oversaw the division's strategy, led an advanced development program, and supervised the team that delivered it.",
    stats: [
      { value: "300+", label: "Students in development program" },
      { value: "250+", label: "New students oriented (SC)" },
      { value: "16", label: "Staff & board members supervised" },
      { value: "3", label: "Board awards in 2 years" },
    ],
    achievements: [
      "🏆 Awarded Best BPH of IME FTUI 2024",
      "🏅 Honorable Mention BPH, Quarter 2/3A (2024)",
      "🎖️ Best Student Affairs Board, Q1 & Q2/3A (2023)",
      "🏢 Ran company visits, soft-skill webinars, and alumni sharing sessions",
    ],
    skills: [
      "People Development",
      "Mentoring & Supervision",
      "Program Evaluation",
      "Cross-batch Communication",
    ],
    images: [
      "/assets/bphime1.webp",
      "/assets/bphime2.webp",
      "/assets/bphime3.webp",
      "/assets/bphime4.webp",
      "/assets/bphime5.webp",
      "/assets/bphime6.webp",
      "/assets/bphime7.webp",
      "/assets/bphime8.webp",
      "/assets/bphime9.webp",
      "/assets/bphime10.webp",
      "/assets/bphime11.webp",
      "/assets/bphime12.webp",
      "/assets/bphime13.webp",
      "/assets/bphime14.webp",
      "/assets/bpime1.webp",
      "/assets/bpime2.webp",
      "/assets/bpime3.webp",
      "/assets/bpime4.webp",
      "/assets/bpime5.webp",
      "/assets/bpime6.webp",
      "/assets/bpime7.webp",
    ],
  },
  {
    id: 2,
    title: "Malam Keakraban Elektro (MAKRO) 2022",
    roles: [{ title: "Project Officer", period: "Mar 2023 – Jul 2023" }],
    description:
      "Spearheaded the department's flagship bonding event: designed the grand concept, secured funding, and oversaw execution to strengthen relationships between student batches.",
    stats: [
      { value: "400+", label: "Event participants" },
      { value: "270+", label: "Committee members" },
      { value: "11", label: "Divisions coordinated" },
    ],
    achievements: [
      "💡 Designed the grand plan and secured event funding",
    ],
    skills: [
      "Fundraising & Sponsorship",
      "Budget Management",
      "Multi-committee Coordination",
      "Event Execution",
    ],
    images: [
      "/assets/makro1.webp",
      "/assets/makro2.webp",
      "/assets/makro3.webp",
      "/assets/makro4.webp",
      "/assets/makro5.webp",
      "/assets/makro6.webp",
    ],
  },
];

export default organizations;
