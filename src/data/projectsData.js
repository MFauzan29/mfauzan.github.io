const projects = [
  {
    id: 1,
    title: "Food Security Classification (2025)",
    category: "Machine Learning",
    description:
      "A data-driven machine learning project designed to classify the level of food security across different regions in Indonesia. This project utilizes the K-Nearest Neighbors (KNN) algorithm to analyze regional indicators and predict vulnerability to food insecurity, helping stakeholders make better policy decisions. The model was trained and evaluated using regional food availability, accessibility, and utilization metrics collected from public datasets.",
    images: [
      "/assets/project1.1.png",
      "/assets/project1.2.png",
      "/assets/project1.3.png",
      "/assets/project1.4.png",
      "/assets/project1.5.png",
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
      "/assets/project2.1.png",
      "/assets/project2.2.png",
      "/assets/project2.3.png",
      "/assets/project2.4.png",
      "/assets/project2.5.png",
      "/assets/project2.6.png",
      "/assets/project2.7.png",
      "/assets/project2.8.png",
      "/assets/project2.9.png",
      "/assets/project2.10.png",
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
      "/assets/project3.1.png",
      "/assets/project3.2.png",
      "/assets/project3.3.png",
      "/assets/project3.4.png",
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
      "/assets/project4.1.png",
      "/assets/project4.2.png",
      "/assets/project4.3.png",
    ],
    link: "https://github.com/MFauzan29/JBus",
    // Tidak ada documentLink jika tidak ada dokumen eksternal
  },
];

export default projects;
