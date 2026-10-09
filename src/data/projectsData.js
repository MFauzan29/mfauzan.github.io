import { Wifi, Drone } from "lucide-react";

// Proyek tanpa foto (images kosong) akan menampilkan ikon "icon" sebagai pengganti
const projects = [
  {
    id: 6,
    title: "ML-Based Wi-Fi Load Balancing Optimization (2026)",
    category: "Undergraduate Thesis · Machine Learning · Networking",
    role: "Sole researcher",
    description:
      "An end-to-end pipeline that forecasts access point throughput 5 minutes ahead on a campus Wi-Fi network (8 Aruba APs, 2.4 & 5 GHz), combining network telemetry with class-schedule context. After comparing Persistence, ARIMA/SARIMA, Random Forest, and XGBoost, I designed a band-specific hybrid model (Persistence for 2.4 GHz, XGBoost for 5 GHz) and turned its predictions into client steering, band steering, and transmit-power recommendations, validated with a discrete-event simulation.",
    // Angka kunci, tampil sebagai kotak statistik di kartu
    stats: [
      { value: "426K+", label: "Telemetry records" },
      { value: "−12%", label: "RMSE (3.110 → 2.722 Mbps)" },
      { value: "0.628", label: "R², up from 0.515" },
      { value: "~30%", label: "Less AP load imbalance" },
    ],
    highlights: [
      "49 engineered features from telemetry and class schedules",
      "Steering recommendations validated by discrete-event simulation",
    ],
    tech: ["Python", "XGBoost", "Random Forest", "ARIMA/SARIMA", "SimPy", "InfluxDB", "Aruba WLAN"],
    icon: Wifi,
    images: [],
  },
  {
    id: 5,
    title: "Autonomous Drone Delivery for MBG (2026)",
    category: "Capstone Project · IoT · Networking · Fullstack",
    role: "Backend & networking engineer (team of 5)",
    description:
      "An autonomous quadcopter and web-based Ground Control Station to deliver free nutritious meals (Makan Bergizi Gratis) to schools in hard-to-reach areas. I built the FastAPI backend and networking layer: a MAVLink-to-JSON bridge, real-time WebSocket telemetry, mission-upload and flight-mode APIs, and a Tailscale VPN over 4G LTE linking the GCS to the drone's Raspberry Pi and Pixhawk flight controller.",
    stats: [
      { value: "30/30", label: "Remote commands succeeded" },
      { value: "178 ms", label: "Avg. round-trip time over 4G" },
      { value: "5 Hz", label: "Real-time telemetry stream" },
      { value: "0", label: "Timeouts or lost commands" },
    ],
    highlights: [
      "Autonomous waypoint flight and Return-to-Launch validated in field tests",
    ],
    tech: ["FastAPI", "pymavlink", "WebSocket", "Tailscale VPN", "4G LTE", "Next.js", "Leaflet", "Pixhawk", "ArduPilot"],
    icon: Drone,
    images: [],
  },
  {
    id: 1,
    title: "Food Security Classification (2025)",
    category: "Machine Learning",
    description:
      "A data-driven machine learning project designed to classify the level of food security across different regions in Indonesia. This project utilizes the K-Nearest Neighbors (KNN) algorithm to analyze regional indicators and predict vulnerability to food insecurity, helping stakeholders make better policy decisions. The model was trained and evaluated using regional food availability, accessibility, and utilization metrics collected from public datasets.",
    images: [
      "/assets/project1.1.webp",
      "/assets/project1.2.webp",
      "/assets/project1.3.webp",
      "/assets/project1.4.webp",
      "/assets/project1.5.webp",
    ],
    link: "https://colab.research.google.com/drive/1BgAtXTwSc6JwFh4vnxGX0Ta_0_xb2Vqa?usp=sharing",
  },
  {
    id: 2,
    title: "UIHelp (2024)",
    category: "Fullstack Web App",
    description:
      "A real-time disaster reporting web application developed for Universitas Indonesia. UIHelp connects campus residents with security (PLK) to report incidents such as accidents, wild animals, fallen trees, fires, and floods. The app integrates Google Maps for geolocation, social media for wider broadcasting, and Firebase for real-time data handling. Built with ReactJS and ExpressJS, it emphasizes fast reporting and responsive coordination during emergencies.",
    images: [
      "/assets/project2.1.webp",
      "/assets/project2.2.webp",
      "/assets/project2.3.webp",
      "/assets/project2.4.webp",
      "/assets/project2.5.webp",
      "/assets/project2.6.webp",
      "/assets/project2.7.webp",
      "/assets/project2.8.webp",
      "/assets/project2.9.webp",
      "/assets/project2.10.webp",
    ],
    link: "https://github.com/MFauzan29/UIHelp",
    documentLink:
      "https://drive.google.com/file/d/1kz9mGLLtgQiUv-VXS_aeaRHQoeNvzxHA/view?usp=sharing",
  },
  {
    id: 3,
    title: "Retroactive-SBD (2024)",
    category: "Database Project",
    description:
      "An academic project focusing on designing and implementing a relational database for an online platform that sells retro music items like vinyl, cassettes, and vintage players. Built as part of the Database Systems course, the project includes Entity Relationship Diagram (ERD), normalization, stored procedures, and query optimization. The system is intended to simulate a real-world e-commerce database environment.",
    images: [
      "/assets/project3.1.webp",
      "/assets/project3.2.webp",
      "/assets/project3.3.webp",
      "/assets/project3.4.webp",
    ],
    link: "https://github.com/SistemBasisData2024/Retroactive-SBD",
  },
  {
    id: 4,
    title: "JBus (2023)",
    category: "Fullstack Mobile App",
    description:
      "A comprehensive mobile ticket booking application for intercity buses developed using Java and Android Studio. JBus features user authentication, seat selection, real-time bus tracking, and ticket generation. It incorporates SQLite for local data storage and adheres to MVC design patterns. This project demonstrates end-to-end mobile development skills from frontend UI to backend data management.",
    images: [
      "/assets/project4.1.webp",
      "/assets/project4.2.webp",
      "/assets/project4.3.webp",
    ],
    link: "https://github.com/MFauzan29/JBus",
    // Tidak ada documentLink jika tidak ada dokumen eksternal
  },
];

export default projects;
