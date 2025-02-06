import React, { useState, useEffect } from "react";
import "./App.css";
import FotoProfile from "./assets/FotoFauzan.JPG";
import FotoKotak from "./assets/FauzanKotak.JPG";
import Typewriter from "typewriter-effect";
import { useInView } from "react-intersection-observer";

function App() {
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
                      "https://drive.google.com/file/d/1db9rNHC2UJP-FGSM0vDNCkRBqlT767P4/view?usp=sharing"
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
            <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
              <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-transparent py-6 px-2 rounded-3xl shadow-xl transform transition duration-300 hover:scale-105">
                <h3 className="text-xl  text-center text-slate-900 dark:text-white mb-4">
                  &#128435; <div className="font-semibold">Skills</div>
                </h3>
                <ul className="text-center text-slate-700 dark:text-slate-300">
                  <li>ReactJS</li>
                  <li>NodeJS</li>
                  <li>JavaScript</li>
                  <li>TailwindCSS</li>
                </ul>
              </li>
              <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-transparent py-6 px-2 rounded-3xl shadow-xl transform transition duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold text-center text-slate-900 dark:text-white mb-4">
                  Education
                </h3>
                <p className="text-center text-slate-700 dark:text-slate-300">
                  Undergraduate student of Computer Engineering at Universitas
                  Indonesia
                </p>
              </li>
              <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-transparent py-6 px-2 rounded-3xl shadow-xl transform transition duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold text-center text-slate-900 dark:text-white mb-4">
                  Projects
                </h3>
                <ul className="text-center text-slate-700 dark:text-slate-300">
                  <li>UI Help (Campus Disaster Reporting App)</li>
                  <li>Home Security System</li>
                </ul>
              </li>
              <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-transparent py-6 px-2 rounded-3xl shadow-xl transform transition duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold text-center text-slate-900 dark:text-white mb-4">
                  Experience
                </h3>
                <p className="text-center text-slate-700 dark:text-slate-300">
                  Internship at XYZ Company
                </p>
              </li>
            </ul>
          </section>

          <hr className="mt-10 mx-auto w-1/3  bg-black dark:bg-white " />

          <section id="myworks" className="p-6 my-12">
            <heading>
              <h2 className="text-4xl font-bold text-center sm:text-5xl mb-2 text-slate-900 dark:text-white font-serif">
                My Works
              </h2>
            </heading>
          </section>

          <hr className="mt-10 mx-auto w-1/3  bg-black dark:bg-white " />

          <section id="contact" className="p-6 my-12">
            <heading>
              <h2 className="text-4xl font-bold text-center sm:text-5xl mb-2 text-slate-900 dark:text-white font-serif">
                Contact
              </h2>
            </heading>
          </section>
        </main>
      </body>
    </>
  );
}

export default App;
