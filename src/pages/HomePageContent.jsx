// src/pages/HomePageContent.jsx

import React, { useState, useEffect } from "react";
import projects from "../data/projectsData"; // <--- Import data proyek dari file terpisah

// Import gambar-gambar utama (yang ada di src/assets/)
import FotoProfile from "../assets/FotoFauzan.JPG";
import FotoKotak from "../assets/FauzanKotak.JPG";

import Typewriter from "typewriter-effect";
import { useInView } from "react-intersection-observer";

// Import Swiper React components dan styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Link dari react-router-dom untuk tombol "See Documents"
import { Link } from "react-router-dom";

function HomePageContent() {
  // Pindahkan SEMUA state hooks dan useEffect yang terkait dengan visibility/opacity/skills di sini
  const [showProgramming, setShowProgramming] = useState(false);
  const [showIBM, setShowIBM] = useState(false);
  const [showCISCO, setShowCisco] = useState(false);
  const [showWeb, setShowWeb] = useState(false);
  const [showNetworking, setShowNetworking] = useState(false);
  const [showML, setShowML] = useState(false);
  const [showTools, setShowTools] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <main className="w-full min-h-screen pt-15">
      {" "}
      {/* pt-15 untuk spasi dari header fixed */}
      {/* Section Home */}
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
            A passionate 3rd-year Computer Engineering student diving deep into
            the world of Information Technology. Curious, driven, and always
            eager to learn, I love exploring new technologies, solving
            real-world problems, and bringing innovative ideas to life.
          </p>
          <div className="justify-center flex gap-10">
            <button
              className="rounded-full bg-black dark:bg-white text-white dark:text-black mt-6 flex items-center gap-2 px-6 py-3 hover:bg-yellow-500 transition duration-300 font-bold hover:scale-110 "
              onClick={() => window.open("https://github.com/MFauzan29")}
            >
              View Github &#10142;
            </button>
            <button
              className="rounded-full bg-transparent border border-white text-white mt-6 flex items-center gap-2 px-6 py-3 hover:bg-white  hover:text-black transition duration-300 font-bold hover:scale-110 "
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
      <hr className="mt-10 mx-auto w-1/3  bg-black dark:bg-white " />
      {/* Section About Me (Perbaikan: Ganti <heading> dengan <div>, hapus <p> di sekitar <ul>) */}
      <section id="aboutme" className="p-6 my-12">
        <div className="text-center">
          {" "}
          {/* Ganti <heading> dengan <div> ini */}
          <h2 className="text-4xl font-bold sm:text-5xl mb-2 text-slate-900 dark:text-white font-serif">
            Introduction
          </h2>
          <h2 className="text-lg font-bold sm:text-3xl mb-6 text-slate-900 dark:text-white font-serif">
            About Me
          </h2>
        </div>
        <img
          src={FotoKotak}
          className="mx-auto mb-3 w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4 h-auto max-w-xs rounded-2xl shadow-lg transform transition duration-300 ease-in-out hover:translate-y-2"
        />
        <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row flex-wrap justify-center items-stretch gap-6">
          <li className="w-full sm:w-[320px] flex flex-col justify-center items-center border border-solid border-slate-900 dark:border-gray-100 bg-transparent py-6 px-4 rounded-3xl shadow-xl transform transition duration-300 hover:scale-105">
            <h3 className="text-xl text-center text-slate-900 dark:text-white mb-4">
              💻 <div className="font-semibold">Technical Skills</div>
            </h3>
            <ul className="text-left text-slate-700 dark:text-slate-300 space-y-4">
              <li className="border border-solid rounded-4xl py-4 px-6 hover:bg-yellow-300 hover:text-black">
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
              📂 <div className="font-semibold">Certifications & Courses</div>
            </h3>
            <ul className="text-left text-slate-700 dark:text-slate-300 space-y-4">
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
                      CCNA: Switching, Routing, and Wireless Essentials (2024)
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
            <ul className="list-disc list-inside ml-4 text-slate-700 dark:text-slate-300">
              <li>Best BPH IME FTUI 2024</li>
              <li>Best Student Affairs Board (IME FTUI 2023) Q1 & Q2/3A</li>
              <li>Honorable Mention BPH (Q2/3A)</li>
              <li>Project Officer of MAKRO 2022 (400+ participants)</li>
            </ul>
          </li>
        </ul>
      </section>
      <hr className="mt-10 mx-auto w-1/3 bg-black dark:bg-white " />
      {/* Section My Works */}
      <section id="myworks" className="p-6 my-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold sm:text-5xl mb-2 text-slate-900 dark:text-white font-serif">
            My Latest Work
          </h2>
          <p className="text-lg mb-12 text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            There are many variations of project that I deliver successfully,
            here are some examples.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg shadow-xl transform transition duration-300 hover:scale-105 flex flex-col overflow-hidden"
            >
              <div
                className="relative rounded-md mb-4 flex-shrink-0"
                style={{ height: "250px" }}
              >
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={0}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  className="w-full h-full rounded-md"
                >
                  {project.images?.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={image}
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
              <div className="mt-auto flex flex-wrap gap-2 justify-start">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full hover:bg-yellow-500 hover:text-black transition duration-300 font-medium"
                >
                  See Detail →
                </a>

                {project.documentId && (
                  <Link // Menggunakan Link dari react-router-dom
                    to={`/reports/${project.documentId}`}
                    className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition duration-300 font-medium"
                  >
                    See Documents
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      <hr className="mt-10 mx-auto w-1/3 bg-black dark:bg-white " />
      {/* Section Contact */}
      <section id="contact" className="p-6 my-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold sm:text-5xl mb-2 text-slate-900 dark:text-white font-serif">
            Contact Me
          </h2>
          <p className="text-lg mb-12 text-slate-700 dark:text-slate-300">
            Feel free to contact me for further discussion
          </p>
        </div>

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
    </main>
  );
}

export default HomePageContent;
