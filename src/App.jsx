import React, { useState, useEffect } from "react";
import "./App.css";
import { Sun, Moon } from "lucide-react";

// Import komponen dan hooks dari react-router-dom
import { Routes, Route, Link } from "react-router-dom"; // <--- HANYA SATU KALI IMPORT INI

// Import komponen halaman yang telah Anda buat
import HomePageContent from "./pages/HomePageContent"; // <--- Komponen untuk halaman utama

// Import gambar-gambar logo (jika masih di src/assets/)
// Ini hanya untuk header dan footer yang ada di App.jsx
import LogoLinkedin from "./assets/logo-linkedin.png";
import LogoGithub from "./assets/logo-github.png";
import LogoInstagram from "./assets/logo-instagram.png";

// Hapus import yang tidak digunakan lagi (projects, FotoProfile, FotoKotak, Typewriter, useInView, Swiper)
// karena sudah dipindahkan ke HomePageContent.jsx

import { Link as ScrollLink } from "react-scroll";

function App() {
  // Hanya state dan useEffect yang mempengaruhi LAYOUT GLOBAL (misalnya header)
  const [bgOpacity, setBgOpacity] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (typeof scrollPosition === "number") {
        // Validasi untuk menghindari error
        if (scrollPosition > 50) {
          setBgOpacity(0.5);
        } else {
          setBgOpacity(1);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    // Ganti <body> dengan <div> di sini. Kelas-kelas dari <body> dipindahkan ke <div> ini.
    <div className="min-h-screen bg-slate-50 dark:bg-black dark:text-white overflow-x-hidden">
      {/* HEADER ADA DI LUAR <Routes> AGAR SELALU TERLIHAT */}
      <header
        className="fixed top-0 left-0 w-full z-50 text-black opacity-100"
        style={{
          backgroundColor: `rgba(25,35,49, ${bgOpacity})`, // Menggunakan state bgOpacity di sini
        }}
      >
        <section className="mx-auto flex max-w-5xl items-center justify-between p-4 ">
          <h1 className="text-2xl font-medium md:text-3xl">
            <ScrollLink
              to="home"
              smooth={true}
              duration={600}
              offset={-80}
              className="font-bold text-white cursor-pointer"
            >
              <span className="text-yellow-500">about</span>MuhamadFauzan
            </ScrollLink>
          </h1>

          <div className="md:hidden flex items-center space-x-4 h-10">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`w-8 h-8 flex items-center justify-center transition-transform duration-500 ${
                darkMode ? "rotate-180" : "rotate-0"
              }`}
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? (
                <Sun className="w-7 h-7 md:w-20 md:h-20  text-white" />
              ) : (
                <Moon className="w-7 h-7 text-white" />
              )}
            </button>

            {/* Hamburger Menu (Mobile only) */}
            <button
              id="mobile-menu-button"
              className={`text-3xl md:hidden focus:outline-none text-white transition-transform duration-500 flex items-center justify-center ${
                isMenuOpen ? "rotate-90" : "rotate-0"
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              &#9776;
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`w-8 h-8 flex items-center justify-center transition-transform duration-500 ${
                darkMode ? "rotate-180" : "rotate-0"
              }`}
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? (
                <Sun className="w-7 h-7 md:w-20 md:h-20  text-white" />
              ) : (
                <Moon className="w-7 h-7 text-white" />
              )}
            </button>
            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8 text-lg bg-amber-100 px-6 py-3 rounded-full shadow-md whitespace-nowrap transition duration-300">
              <ScrollLink
                to="home"
                smooth={true}
                duration={600}
                offset={-80}
                className="cursor-pointer hover:bg-amber-500 px-3 py-1 rounded-full font-medium"
              >
                Home
              </ScrollLink>
              <ScrollLink
                to="aboutme"
                smooth={true}
                duration={600}
                offset={-80}
                className="cursor-pointer hover:bg-amber-500 px-3 py-1 rounded-full font-medium"
              >
                About Me
              </ScrollLink>
              <ScrollLink
                to="myworks"
                smooth={true}
                duration={600}
                offset={-80}
                className="cursor-pointer hover:bg-amber-500 px-3 py-1 rounded-full font-medium"
              >
                My Works
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={600}
                offset={-80}
                className="cursor-pointer hover:bg-amber-500 px-3 py-1 rounded-full font-medium"
              >
                Contact Me
              </ScrollLink>
            </nav>
          </div>
        </section>

        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          } bg-black/30 backdrop-blur-md`}
        >
          <nav className="flex flex-col px-6 py-4 space-y-2">
            {["home", "aboutme", "myworks", "contact"].map((section, index) => (
              <ScrollLink
                key={index}
                to={section}
                smooth={true}
                duration={600}
                offset={-80}
                onClick={() => setIsMenuOpen(false)} // ⬅️ ini penting!
                className="cursor-pointer px-4 py-2 rounded-full border border-white hover:bg-white/10 transition-colors duration-300 text-white text-center font-medium"
              >
                {section === "home"
                  ? "Home"
                  : section === "aboutme"
                  ? "About Me"
                  : section === "myworks"
                  ? "My Works"
                  : "Contact Me"}
              </ScrollLink>
            ))}
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<HomePageContent />} />
      </Routes>

      {/* FOOTER ADA DI LUAR <Routes> AGAR SELALU TERLIHAT */}
      <footer className="bg-slate-900 dark:bg-black text-white py-12 px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center ">
          {/* Brand/Logo and Email */}
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold font-serif mb-2 ">
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
                <img src={LogoGithub} alt="Github Logo" className="w-6 h-6" />
              </a>

              {/* LinkedIn Icon */}
              <a
                href="https://www.linkedin.com/in/muhamad-fauzan/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-700 dark:bg-slate-800 rounded-lg hover:bg-yellow-500 transition duration-300 transform hover:scale-110"
              >
                <img
                  src={LogoLinkedin}
                  alt="Linkedin Logo"
                  className="w-6 h-6"
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
                  src={LogoInstagram}
                  alt="Instagram Logo"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
