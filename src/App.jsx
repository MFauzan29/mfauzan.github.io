import React, { useState, useEffect } from "react";
import "./App.css";
import FotoProfile from "./assets/FotoFauzan.JPG";
import FotoKotak from "./assets/FauzanKotak.JPG";
import LogoLinkedin from "./assets/logo-linkedin.png";
import LogoGithub from "./assets/logo-github.png";
import LogoInstagram from "./assets/logo-instagram.png";
import Typewriter from "typewriter-effect";
import { useInView } from "react-intersection-observer";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required Swiper modules
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Menambahkan Autoplay

function App() {
  // State untuk skills
  const [showProgramming, setShowProgramming] = useState(false);
  const [showIBM, setShowIBM] = useState(false);
  const [showCISCO, setShowCisco] = useState(false);
  const [showWeb, setShowWeb] = useState(false);
  const [showNetworking, setShowNetworking] = useState(false);
  const [showML, setShowML] = useState(false);
  const [showTools, setShowTools] = useState(false);

  // State untuk menyimpan nilai opacity background
  const [bgOpacity, setBgOpacity] = useState(1);

  // Hook untuk mendeteksi scroll dan mengubah opacity background
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setBgOpacity(0.5); // Opacity 50% untuk background
      } else {
        setBgOpacity(1); // Opacity 100% saat scroll ke atas
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up listener
    };
  }, []);

  // State untuk menyimpan apakah gambar sudah muncul
  const [isImageVisible, setIsImageVisible] = useState(false);

  // Hook untuk mengubah state isImageVisible saat komponen dimuat
  useEffect(() => {
    setIsImageVisible(true); // Mengatur gambar agar tampil dengan fade-in
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: true, // Efek terjadi hanya sekali
    threshold: 0.5, // Efek akan mulai ketika gambar 50% terlihat
  });

  const projects = [
    {
      id: 1,
      title: "Food Security Classification (2025)",
      category: "Machine Learning",
      description:
        "A data-driven machine learning project designed to classify the level of food security across different regions in Indonesia. This project utilizes the K-Nearest Neighbors (KNN) algorithm to analyze regional indicators and predict vulnerability to food insecurity, helping stakeholders make better policy decisions. The model was trained and evaluated using regional food availability, accessibility, and utilization metrics collected from public datasets.",
      images: [
        // Sekarang ini adalah ARRAY of images
        // "./assets/screenshot1.png", // Gambar pertama
        // "./assets/screenshot2.png", // Gambar kedua
        // "./assets/screenshot3.png", // dan seterusnya
        FotoProfile,
        FotoProfile,
        FotoProfile,
      ],
      link: "#",
    },
    {
      id: 2,
      title: "UIHelp (2024)",
      category: "Fullstack Web App",
      description:
        "A real-time disaster reporting web application developed for Universitas Indonesia. UIHelp connects campus residents with security (PLK) to report incidents such as accidents, wild animals, fallen trees, fires, and floods. The app integrates Google Maps for geolocation, social media for wider broadcasting, and Firebase for real-time data handling. Built with ReactJS and ExpressJS, it emphasizes fast reporting and responsive coordination during emergencies.",
      images: [
        // Sekarang ini adalah ARRAY of images
        "/assets/screenshot1.png", // Gambar pertama
        "/assets/screenshot2.png", // Gambar kedua
        "/assets/screenshot3.png", // dan seterusnya
      ],
      link: "#",
    },
    {
      id: 3,
      title: "Retroactive-SBD (2024)",
      category: "Database Project",
      description:
        "An academic project focusing on designing and implementing a relational database for an online platform that sells retro music items like vinyl, cassettes, and vintage players. Built as part of the Database Systems course, the project includes Entity Relationship Diagram (ERD), normalization, stored procedures, and query optimization. The system is intended to simulate a real-world e-commerce database environment.",
      images: [
        // Sekarang ini adalah ARRAY of images
        "./assets/screenshot1.png", // Gambar pertama
        "./assets/screenshot2.png", // Gambar kedua
        "./assets/screenshot3.png", // dan seterusnya
      ],
      link: "#",
    },
    {
      id: 4,
      title: "JBus (2023)",
      category: "Fullstack Mobile App",
      description:
        "A comprehensive mobile ticket booking application for intercity buses developed using Java and Android Studio. JBus features user authentication, seat selection, real-time bus tracking, and ticket generation. It incorporates SQLite for local data storage and adheres to MVC design patterns. This project demonstrates end-to-end mobile development skills from frontend UI to backend data management.",
      images: [
        // Sekarang ini adalah ARRAY of images
        "./assets/screenshot1.png", // Gambar pertama
        "./assets/screenshot2.png", // Gambar kedua
        "./assets/screenshot3.png", // dan seterusnya
      ],
      link: "#",
    },
  ];

  return (
    <>
      <body className="min-h-screen bg-slate-50 dark:bg-black dark:text-white overflow-x-hidden">
        <header
          className="fixed top-0 left-0 w-full z-50 text-black"
          style={{
            backgroundColor: `rgba(25,35,49, ${bgOpacity})`, // Menggunakan state bgOpacity di sini
          }}
        >
          <section className="mx-auto flex max-w-4xl items-center justify-between p-4 ">
            <h1 className="text-3xl font-medium">
              <a
                href="#title"
                className="font-bold text-white 
              "
              >
                🚀Muhamad Fauzan
              </a>
            </h1>
            <div>
              <button
                id="mobile-menu-button"
                className="text-3xl md:hidden focus:outline-none text-white"
              >
                &#9776;
              </button>
              <nav
                className="hidden md:flex space-x-8 text-lg bg-amber-100 px-6 py-3 rounded-full shadow-md whitespace-nowrap"
                aria-label="main"
              >
                <a
                  href="#home"
                  className="link hover:opacity-90 font-medium hover:bg-amber-500 hover:rounded-full"
                >
                  Home
                </a>
                {/* ubah top jadi lebih bagus kalo di hover */}
                <a href="#aboutme" className="hover:opacity-90 font-medium">
                  About Me
                </a>
                <a href="#myworks" className="hover:opacity-90 font-medium">
                  My Works
                </a>
                <a href="#contact" className="hover:opacity-90 font-medium">
                  Contact Me
                </a>
              </nav>
            </div>
          </section>
        </header>
        <main className="w-full min-h-screen mt-15">
          <section
            id="home"
            className="max-w-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-yellow-100 to-white dark:from-gray-800 dark:to-black p-6"
          >
            <article>
              <img
                src={FotoProfile}
                ref={ref}
                alt="Foto Muhamad Fauzan"
                className={`rounded-full w-40 h-40 object-cover mx-auto mt-5 mb-3 transition-opacity duration-1000 ${
                  inView ? "opacity-100" : "opacity-0"
                }`}
              ></img>
              <h2 className="max-w-xl text-4xl font-bold text-left sm:text-5xl sm:text-center text-slate-900 dark:text-white ">
                Hi! I'm
                <span className="text-yellow-500">
                  {" "}
                  <Typewriter
                    options={{
                      strings: ["Muhamad Fauzan"],
                      autoStart: true,
                      loop: true,
                      delay: 275,
                      deleteSpeed: 50,
                    }}
                  />
                </span>
              </h2>
              <p className="max-w-xl text-2xl mt-4 text-left sm:text-center text-slate-700 dark:text-slate-400">
                A passionate 3rd-year Computer Engineering student diving deep
                into the world of Information Technology. Curious, driven, and
                always eager to learn, I love exploring new technologies,
                solving real-world problems, and bringing innovative ideas to
                life.
              </p>
              <div className="justify-center flex gap-10">
                <button
                  className="rounded-full bg-black dark:bg-white text-white dark:text-black mt-6 flex items-center gap-2 px-6 py-3 hover:bg-yellow-500 transition duration-300 font-bold hover:scale-110 "
                  onClick={() => window.open("https://github.com/MFauzan29")}
                >
                  View Github &#10142;
                </button>
                <button
                  className="rounded-full bg-transparent border border-white text-white mt-6 flex items-center gap-2 px-6 py-3 hover:bg-white  hover:text-black transition duration-300 font-bold hover:scale-110 "
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1H2z0Ceer2uA5KpXmTtRf-8r9oXMFOr6M/view?usp=sharing"
                    )
                  }
                >
                  View Resume &#11123;
                </button>
              </div>
            </article>
          </section>

          <hr className="mt-10 mx-auto w-1/3  bg-black dark:bg-white " />

          <section id="aboutme" className="p-6 my-12">
            <heading>
              <h2 className="text-4xl font-bold text-center sm:text-5xl mb-2 text-slate-900 dark:text-white font-serif">
                Introduction
              </h2>
              <h2 className="text-lg font-bold text-center sm:text-3xl mb-6 text-slate-900 dark:text-white font-serif">
                About Me
              </h2>
            </heading>
            <img
              src={FotoKotak}
              className="mx-auto mb-3 w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4 h-auto max-w-xs rounded-2xl shadow-lg transform transition duration-300 ease-in-out  hover:translate-y-2"
            />
            <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row flex-wrap justify-center items-stretch gap-6">
              <li className="w-full sm:w-[320px] flex flex-col justify-center items-center border border-solid border-slate-900 dark:border-gray-100 bg-transparent py-6 px-4 rounded-3xl shadow-xl transform transition duration-300 hover:scale-105">
                <h3 className="text-xl text-center text-slate-900 dark:text-white mb-4">
                  💻 <div className="font-semibold">Technical Skills</div>
                </h3>
                <ul className="text-left text-slate-700 dark:text-slate-300 space-y-4">
                  {/* Programming */}
                  <li className="border border-solid rounded-4xl  py-4 px-6 hover:bg-yellow-300 hover:text-black">
                    <span
                      onClick={() => setShowProgramming(!showProgramming)}
                      className="font-bold cursor-pointer hover:underline block text-center sm:text-center"
                    >
                      {showProgramming ? "▼" : ""} Programming Languages
                    </span>
                    {showProgramming && (
                      <ul className="list-disc list-inside ml-4">
                        <li>Python</li>
                        <li>Java</li>
                        <li>JavaScript</li>
                        <li>C</li>
                        <li>SQL</li>
                      </ul>
                    )}
                  </li>

                  {/* Web Dev */}
                  <li className="border border-solid rounded-4xl py-4 px-6 hover:bg-yellow-300 hover:text-black">
                    <span
                      onClick={() => setShowWeb(!showWeb)}
                      className="font-bold cursor-pointer hover:underline block text-center sm:text-center"
                    >
                      {showWeb ? "▼" : ""} Web Development
                    </span>
                    {showWeb && (
                      <ul className="list-disc list-inside ml-4">
                        <li>React JS</li>
                        <li>Tailwind CSS</li>
                        <li>Express.js</li>
                      </ul>
                    )}
                  </li>

                  {/* Networking */}

                  <li className="border border-solid rounded-4xl py-4 px-6 hover:bg-yellow-300 hover:text-black">
                    <span
                      onClick={() => setShowNetworking(!showNetworking)}
                      className="font-bold cursor-pointer hover:underline block text-center sm:text-center"
                    >
                      {showNetworking ? "▼" : ""} Networking & Security
                    </span>
                    {showNetworking && (
                      <ul className="list-disc list-inside ml-4">
                        <li>
                          Cisco CCNA (Intro, Switching & Routing, Enterprise
                          Networking)
                        </li>
                        <li>Cisco Ethical Hacker</li>
                        <li>Network Configuration</li>
                        <li>Linux Server Administration</li>
                      </ul>
                    )}
                  </li>

                  {/* Machine Learning */}

                  <li className="border border-solid rounded-4xl py-4 px-6 hover:bg-yellow-300 hover:text-black">
                    <span
                      onClick={() => setShowML(!showML)}
                      className="font-bold cursor-pointer hover:underline block text-center sm:text-center"
                    >
                      {showML ? "▼" : ""} Data Science & Machine Learning
                    </span>
                    {showML && (
                      <ul className="list-disc list-inside ml-4">
                        <li>Data Preprocessing</li>
                        <li>Feature Selection</li>
                        <li>Model Training & Evaluation</li>
                        <li>Google Colab</li>
                        <li>Scikit-Learn</li>
                        <li>KNN</li>
                        <li>Classification</li>
                      </ul>
                    )}
                  </li>

                  {/* Tools */}

                  <li className="border border-solid rounded-4xl py-4 px-6 hover:bg-yellow-300 hover:text-black">
                    <span
                      onClick={() => setShowTools(!showTools)}
                      className="font-bold cursor-pointer hover:underline block text-center sm:text-center"
                    >
                      {showProgramming ? "▼" : ""} Tools & Frameworks
                    </span>
                    {showTools && (
                      <ul className="list-disc list-inside ml-4">
                        <li>GitHub</li>
                        <li>Google Cloud</li>
                        <li>Firebase</li>
                        <li>Node.js</li>
                        <li>PyTorch </li>
                      </ul>
                    )}
                  </li>
                </ul>
              </li>
              <li className="w-full sm:w-[320px] flex flex-col justify-center items-center border border-solid border-slate-900 dark:border-gray-100 bg-transparent py-6 px-4 rounded-3xl shadow-xl transform transition duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold text-center text-slate-900 dark:text-white mb-4">
                  Soft Skills 🧠
                </h3>
                <ul className="list-disc list-inside ml-4 text-slate-700 dark:text-slate-300">
                  <li>Leadership & Team Management</li>
                  <li>Communication & Public Speaking</li>
                  <li>Critical Thinking & Problem Solving</li>
                  <li>Project Management & Event Planning</li>
                  <li>Time Management & Adaptability</li>
                </ul>
              </li>

              <li className="w-full sm:w-[320px] flex flex-col justify-center items-center border border-solid border-slate-900 dark:border-gray-100 bg-transparent py-6 px-4 rounded-3xl shadow-xl transform transition duration-300 hover:scale-105">
                <h3 className="text-xl text-center text-slate-900 dark:text-white mb-4">
                  📂{" "}
                  <div className="font-semibold">Certifications & Courses</div>
                </h3>
                <ul className="text-left text-slate-700 dark:text-slate-300 space-y-4">
                  {/* IBM */}
                  <li className="border border-solid rounded-4xl py-4 px-6 hover:bg-yellow-300 hover:text-black">
                    <span
                      onClick={() => setShowIBM(!showIBM)}
                      className="font-bold cursor-pointer hover:underline block text-center sm:text-center"
                    >
                      {showIBM ? "▼" : ""} IBM / Cognitive Class
                    </span>
                    {showIBM && (
                      <ul className="list-disc list-inside ml-4">
                        <li>Python 101 for Data Science (2025)</li>
                        <li>Machine Learning with Python (2025)</li>
                      </ul>
                    )}
                  </li>

                  {/* Cisco */}
                  <li className="border border-solid rounded-4xl py-4 px-6 hover:bg-yellow-300 hover:text-black">
                    <span
                      onClick={() => setShowCisco(!showCISCO)}
                      className="font-bold cursor-pointer hover:underline block text-center sm:text-center"
                    >
                      {showCISCO ? "▼" : ""}Cisco Networking Academy
                    </span>
                    {showCISCO && (
                      <ul className="list-disc list-inside ml-4">
                        <li>CCNA: Introduction to Networks (2023)</li>
                        <li>
                          CCNA: Enterprise Networking, Security, and Automation
                          (2023)
                        </li>
                        <li>
                          CCNA: Switching, Routing, and Wireless Essentials
                          (2024)
                        </li>
                        <li>Ethical Hacker (2024)</li>
                      </ul>
                    )}
                  </li>
                </ul>
              </li>

              <li className="w-full sm:w-[320px] flex flex-col justify-center items-center border border-solid border-slate-900 dark:border-gray-100 bg-transparent py-6 px-4 rounded-3xl shadow-xl transform transition duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold text-center text-slate-900 dark:text-white mb-4">
                  🌟 Achievements & Recognition
                </h3>
                <p className=" text-slate-700 dark:text-slate-300">
                  <ul className="list-disc list-inside ml-4">
                    <li>Best BPH IME FTUI 2024</li>
                    <li>
                      Best Student Affairs Board (IME FTUI 2023) Q1 & Q2/3A
                    </li>
                    <li>Honorable Mention BPH (Q2/3A)</li>
                    <li>Project Officer of MAKRO 2022 (400+ participants)</li>
                  </ul>
                </p>
              </li>
            </ul>
          </section>

          <hr className="mt-10 mx-auto w-1/3 bg-black dark:bg-white " />

          <section id="myworks" className="p-6 my-12">
            <heading>
              <h2 className="text-4xl font-bold text-center sm:text-5xl mb-2 text-slate-900 dark:text-white font-serif">
                My Latest Work
              </h2>
              <p className="text-lg text-center mb-12 text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
                There are many variations of project that I deliver
                successfully, here are some examples.
              </p>
            </heading>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg shadow-xl transform transition duration-300 hover:scale-105 flex flex-col overflow-hidden"
                >
                  <div
                    className="relative overflow-hidden rounded-md mb-4 flex-shrink-0"
                    style={{ height: "250px" }}
                  >
                    <Swiper
                      modules={[Navigation, Pagination, Autoplay]} // Aktifkan module yang dibutuhkan
                      spaceBetween={0} // Jarak antar slide
                      slidesPerView={1} // Tampilkan 1 slide per view
                      navigation // Aktifkan tombol navigasi (panah kiri/kanan)
                      pagination={{ clickable: true }} // Aktifkan pagination (dot)
                      autoplay={{
                        delay: 3500, // Durasi antar slide otomatis (3.5 detik)
                        disableOnInteraction: false, // Jangan berhenti autoplay saat interaksi user
                      }}
                      loop={true} // Membuat slide berulang
                      className="w-full h-full rounded-md" // Styling untuk Swiper container
                    >
                      {/* Loop melalui array gambar di dalam objek proyek */}
                      {project.images?.map((image, index) => (
                        <SwiperSlide key={index}>
                          <img
                            src={image} // Gunakan path gambar dari array images
                            alt={`${project.title} - Slide ${index + 1}`}
                            className="w-full h-full object-cover rounded-md"
                          />
                        </SwiperSlide>
                      )) || null}
                    </Swiper>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-yellow-500 font-semibold mb-3">
                      {project.category}
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 text-md mb-4">
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-auto">
                    {" "}
                    {/* Untuk menjaga tombol di bagian bawah */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full hover:bg-yellow-500 hover:text-black transition duration-300 font-medium"
                    >
                      See Detail →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <hr className="mt-10 mx-auto w-1/3  bg-black dark:bg-white " />
          <section id="contact" className="p-6 my-12">
            <heading>
              <h2 className="text-4xl font-bold text-center sm:text-5xl mb-2 text-slate-900 dark:text-white font-serif">
                Contact Me
              </h2>
              <p className="text-lg text-center mb-12 text-slate-700 dark:text-slate-300">
                Feel free to contact me for further discussion
              </p>
            </heading>

            <div className="max-w-4xl mx-auto bg-slate-100 dark:bg-slate-900 p-8 rounded-lg shadow-xl border border-solid border-slate-300 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Want to discuss? Just submit here.
              </h3>
              <p className="text-md text-slate-700 dark:text-slate-300 mb-6">
                I will get back to you ASAP via email.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-slate-700 dark:text-slate-300 text-sm font-semibold mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="shadow-sm appearance-none border border-slate-300 dark:border-slate-600 rounded w-full py-3 px-4 text-slate-900 dark:text-white leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent dark:bg-slate-800"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-slate-700 dark:text-slate-300 text-sm font-semibold mb-2"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="shadow-sm appearance-none border border-slate-300 dark:border-slate-600 rounded w-full py-3 px-4 text-slate-900 dark:text-white leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent dark:bg-slate-800"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-slate-700 dark:text-slate-300 text-sm font-semibold mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="shadow-sm appearance-none border border-slate-300 dark:border-slate-600 rounded w-full py-3 px-4 text-slate-900 dark:text-white leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent dark:bg-slate-800"
                    placeholder="Enter your Message"
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </section>

          <footer className="bg-slate-900 dark:bg-black text-white py-12 px-6">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
              {/* Brand/Logo and Email */}
              <div className="text-center mb-6">
                <h2 className="text-4xl font-bold font-serif mb-2">
                  <span className="text-yellow-500">about</span>Muhamad Fauzan
                </h2>
                <p className="text-md text-slate-400 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75a2.25 2.25 0 012.25-2.25h15a2.25 2.25 0 012.25 2.25z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 6.75L12 9.75l-4.5-3"
                    />
                  </svg>
                  <a
                    href="mailto:mfauzan2905@gmail.com"
                    className="hover:underline"
                  >
                    mfauzan2905@gmail.com
                  </a>
                </p>
              </div>

              {/* Horizontal Line */}
              <hr className="w-2/3 border-t border-slate-700 dark:border-slate-300 my-8" />

              {/* Copyright and Social Media Icons */}
              <div className="w-full flex flex-col sm:flex-row justify-between items-center text-sm text-slate-400">
                <p className="mb-4 sm:mb-0">
                  © 2025 Muhamad Fauzan. All rights reserved.
                </p>
                <div className="flex space-x-4">
                  {/* GitHub Icon */}
                  <a
                    href="https://github.com/MFauzan29"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-700 dark:bg-slate-800 rounded-lg hover:bg-yellow-500 transition duration-300 transform hover:scale-110"
                  >
                    <img
                      src={LogoGithub} // Menggunakan gambar yang diimpor
                      alt="Github Logo"
                      className="w-6 h-6" // Tailwind classes untuk ukuran
                    />
                  </a>

                  {/* LinkedIn Icon */}
                  <a
                    href="https://www.linkedin.com/in/muhamad-fauzan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-700 dark:bg-slate-800 rounded-lg hover:bg-yellow-500 transition duration-300 transform hover:scale-110"
                  >
                    <img
                      src={LogoLinkedin} // Menggunakan gambar yang diimpor
                      alt="Linkedin Logo"
                      className="w-6 h-6" // Tailwind classes untuk ukuran
                    />
                  </a>

                  {/* Instagram Icon */}
                  <a
                    href="https://www.instagram.com/muhamad.fauzan._/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-700 dark:bg-slate-800 rounded-lg hover:bg-yellow-500 transition duration-300 transform hover:scale-110"
                  >
                    <img
                      src={LogoInstagram} // Menggunakan gambar yang diimpor
                      alt="Instagram Logo"
                      className="w-6 h-6" // Tailwind classes untuk ukuran
                    />
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </main>
      </body>
    </>
  );
}

export default App;
