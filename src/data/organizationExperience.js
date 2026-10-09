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
      "/assets/bphime1.png",
      "/assets/bphime2.png",
      "/assets/bphime3.png",
      "/assets/bphime4.png",
      "/assets/bphime5.png",
      "/assets/bphime6.png",
      "/assets/bphime7.png",
      "/assets/bphime8.png",
      "/assets/bphime9.png",
      "/assets/bphime10.png",
      "/assets/bphime11.png",
      "/assets/bphime12.png",
      "/assets/bphime13.png",
      "/assets/bphime14.png",
      "/assets/bpime1.png",
      "/assets/bpime2.png",
      "/assets/bpime3.png",
      "/assets/bpime4.png",
      "/assets/bpime5.png",
      "/assets/bpime6.png",
      "/assets/bpime7.png",
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
      "/assets/makro1.gif",
      "/assets/makro2.png",
      "/assets/makro3.png",
      "/assets/makro4.png",
      "/assets/makro5.png",
      "/assets/makro6.png",
    ],
  },
];

export default organizations;
