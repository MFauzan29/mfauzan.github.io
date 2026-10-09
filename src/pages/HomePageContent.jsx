import projects from "../data/projectsData"; // <--- Import data proyek dari file terpisah
import organizations from "../data/organizationExperience";
import experiences from "../data/experienceData";
import {
  resumeLink,
  focusAreas,
  openToRoles,
  highlights,
  pillars,
  skillGroups,
  certifications,
  achievements,
  education,
} from "../data/profileData";
import FotoProfile from "../assets/foto-fauzan.webp";
import FotoKotak from "../assets/fauzan-kotak.webp";

import Typewriter from "typewriter-effect";
import { useInView } from "react-intersection-observer";
import { Link as ScrollLink } from "react-scroll";
import {
  Download,
  ArrowRight,
  MapPin,
  Award,
  BadgeCheck,
  Briefcase,
  Calendar,
} from "lucide-react";

// Import Swiper React components dan styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import emailjs from "@emailjs/browser";
import { useRef } from "react";

// Kotak angka kunci untuk kartu proyek & organisasi (3 item → 3 kolom, selain itu 2 kolom)
/* eslint-disable react/prop-types */
function StatTiles({ stats }) {
  if (!stats?.length) return null;
  return (
    <dl
      className={`mb-4 grid gap-2 ${
        stats.length === 3 ? "grid-cols-3" : "grid-cols-2"
      }`}
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-xl bg-white dark:bg-slate-900 border border-accent/60 p-3"
        >
          <dd className="text-2xl font-bold text-amber-600 dark:text-accent leading-tight">
            {stat.value}
          </dd>
          <dt className="text-xs text-slate-600 dark:text-slate-400">
            {stat.label}
          </dt>
        </div>
      ))}
    </dl>
  );
}
/* eslint-enable react/prop-types */

function HomePageContent() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_webportofauzan",
        "template_gvdkpnq",
        form.current,
        "gbVtiwZmEZKW9dHTP"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          console.log(result.text);
        },
        (error) => {
          alert("Failed to send message, please try again.");
          console.log(error.text);
        }
      );
  };
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <main className="w-full min-h-screen pt-15 bg-background dark:bg-black text-foreground dark:text-white overflow-x-hidden">
      {/* Section Hero */}
      <section
        id="home"
        className="flex flex-col justify-center items-center text-center px-6 pt-10 pb-6"
      >
        <article className="max-w-3xl flex flex-col items-center">
          <img
            src={FotoProfile}
            ref={ref}
            alt="Muhamad Fauzan"
            className={`rounded-full w-36 h-36 object-cover mt-5 mb-5 ring-4 ring-accent shadow-lg transition-opacity duration-1000 ${
              inView ? "opacity-100" : "opacity-0"
            }`}
          />

          <p className="inline-flex items-center gap-2 rounded-full border border-foreground/15 dark:border-white/20 bg-white/60 dark:bg-white/5 px-4 py-1.5 text-sm font-medium">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Computer Engineering Graduate · Universitas Indonesia
          </p>

          <h1 className="mt-5 text-4xl sm:text-6xl font-bold tracking-tight">
            Hi! I’m{" "}
            <span className="bg-accent text-foreground px-2 rounded-lg">
              Muhamad Fauzan
            </span>
          </h1>

          <div className="mt-4 text-xl sm:text-2xl font-semibold text-foreground/70 dark:text-slate-300 flex flex-wrap justify-center gap-x-2">
            <span>Focused on</span>
            <span className="text-amber-600 dark:text-accent">
              <Typewriter
                options={{
                  strings: focusAreas,
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  deleteSpeed: 30,
                }}
              />
            </span>
          </div>

          <p className="max-w-2xl mt-6 text-lg sm:text-xl leading-relaxed text-foreground/80 dark:text-slate-300">
            I bring a year of hands-on experience as a Presales & Field
            Application Engineer at Sangfor Technologies, plus a background in
            data analytics and machine learning. I connect technology with
            business needs: deploying enterprise security solutions, turning
            test results into recommendations clients adopt, and leading teams
            to deliver.
          </p>

          <div className="mt-6 flex flex-col items-center gap-3">
            <span className="text-sm font-semibold uppercase tracking-wider text-foreground/60 dark:text-slate-400">
              Open to opportunities as
            </span>
            <ul className="flex flex-wrap justify-center gap-2">
              {openToRoles.map((role) => (
                <li
                  key={role}
                  className="rounded-full bg-muted dark:bg-slate-800 border border-accent px-4 py-1.5 text-sm font-medium"
                >
                  {role}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-foreground dark:bg-white text-white dark:text-black flex items-center gap-2 px-6 py-3 font-bold transition duration-300 hover:bg-accent hover:text-foreground hover:scale-105"
            >
              <Download className="w-5 h-5" /> View Resume
            </a>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={600}
              offset={-80}
              className="cursor-pointer rounded-full border-2 border-foreground dark:border-white flex items-center gap-2 px-6 py-3 font-bold transition duration-300 hover:bg-foreground hover:text-white dark:hover:bg-white dark:hover:text-black hover:scale-105"
            >
              Let’s Talk <ArrowRight className="w-5 h-5" />
            </ScrollLink>
          </div>

          <div className="mt-4 flex items-center gap-4 text-sm font-medium text-foreground/70 dark:text-slate-400">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" /> Greater Jakarta
            </span>
            <span>·</span>
            <a
              href="https://www.linkedin.com/in/muhamad-fauzan/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-600 dark:hover:text-accent hover:underline"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/MFauzan29"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-600 dark:hover:text-accent hover:underline"
            >
              GitHub ↗
            </a>
          </div>
        </article>

        <dl className="mt-12 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl bg-white dark:bg-slate-900 border border-foreground/10 dark:border-white/10 p-5 shadow-sm"
            >
              <dt className="sr-only">{item.label}</dt>
              <dd className="text-3xl sm:text-4xl font-bold text-amber-600 dark:text-accent">
                {item.value}
              </dd>
              <dd className="mt-1 text-sm text-foreground/70 dark:text-slate-400">
                {item.label}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <hr className="mt-10 mx-auto w-1/3 border-foreground/20 dark:border-white/20" />

      {/* Section About Me */}
      <section id="aboutme" className="px-6 my-16">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-600 dark:text-accent">
            Introduction
          </p>
          <h2 className="text-4xl font-bold sm:text-5xl mt-2 font-serif">
            About Me
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-[2fr_3fr] gap-10 items-center">
          <img
            src={FotoKotak}
            alt="Muhamad Fauzan"
            loading="lazy"
            className="mx-auto w-2/3 md:w-full max-w-xs rounded-2xl shadow-lg ring-4 ring-accent/60 transition duration-300 hover:-translate-y-1"
          />
          <div className="space-y-4 text-lg leading-relaxed text-foreground/80 dark:text-slate-300">
            <p>
              I’m a Computer Engineering graduate from{" "}
              <strong className="text-foreground dark:text-white">
                Universitas Indonesia
              </strong>{" "}
              (GPA 3.58/4.00) who enjoys working where technology, business,
              and people meet.
            </p>
            <p>
              At{" "}
              <strong className="text-foreground dark:text-white">
                Sangfor Technologies
              </strong>{" "}
              I worked as a Field Application Engineer and then Presales
              Engineer. I installed and configured NGFW, NDR, EDR, and IAG
              appliances, built a 4-appliance High Availability deployment with
              BGP, resolved 30+ support tickets, and led a POC whose
              recommendation the client adopted. Before that, at{" "}
              <strong className="text-foreground dark:text-white">
                Kimia Farma
              </strong>
              , I analyzed 5M+ sales records and built forecasting models with up
              to 80% accuracy. My thesis applied machine learning to forecast
              Wi-Fi throughput from 426K+ network telemetry records.
            </p>
            <p>
              Beyond technical work, I’ve led a 120+ member committee for 270+
              new students and student development programs for 300+, which
              taught me to plan, communicate, and deliver under pressure. I’m
              looking to grow as a presales consultant, network or network
              security engineer, or in data and AI.
            </p>
          </div>
        </div>

        {/* What I bring */}
        <div className="max-w-6xl mx-auto mt-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center font-serif mb-8">
            What I Bring
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map(({ icon: Icon, title, description, fit }) => (
              <div
                key={title}
                className="flex flex-col rounded-2xl bg-white dark:bg-slate-900 border border-foreground/10 dark:border-white/10 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="w-12 h-12 rounded-xl bg-accent text-foreground flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </span>
                <h4 className="mt-4 text-lg font-bold">{title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70 dark:text-slate-400 flex-grow">
                  {description}
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-amber-600 dark:text-accent">
                  → {fit}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="max-w-6xl mx-auto mt-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center font-serif mb-8">
            Education
          </h3>
          <div className="rounded-2xl bg-white dark:bg-slate-900 border border-foreground/10 dark:border-white/10 p-6 shadow-sm flex flex-col sm:flex-row gap-6">
            <span className="w-14 h-14 shrink-0 rounded-xl bg-accent text-foreground flex items-center justify-center">
              <education.icon className="w-7 h-7" />
            </span>
            <div className="flex-grow">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <div>
                  <h4 className="text-xl font-bold">{education.school}</h4>
                  <p className="font-semibold text-amber-600 dark:text-accent">
                    {education.degree}
                  </p>
                  <p className="text-sm text-foreground/60 dark:text-slate-400">
                    {education.faculty}
                  </p>
                </div>
                <div className="sm:text-right text-sm shrink-0">
                  <p className="text-foreground/70 dark:text-slate-400">
                    {education.period}
                  </p>
                  <p className="font-bold text-lg">GPA {education.gpa}</p>
                </div>
              </div>
              <p className="mt-4 text-sm">
                <span className="font-semibold">Thesis: </span>
                <span className="italic text-foreground/80 dark:text-slate-300">
                  {education.thesis}
                </span>
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-foreground/60 dark:text-slate-400 mb-1.5">
                Relevant coursework
              </p>
              <ul className="flex flex-wrap gap-1.5">
                {education.courses.map((course) => (
                  <li
                    key={course}
                    className="rounded-full bg-muted dark:bg-slate-800 border border-foreground/10 dark:border-white/10 px-2.5 py-0.5 text-xs"
                  >
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="max-w-6xl mx-auto mt-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center font-serif mb-8">
            Skills
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl bg-white dark:bg-slate-900 border border-foreground/10 dark:border-white/10 p-6 shadow-sm"
              >
                <h4 className="font-bold mb-3">{group.title}</h4>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-muted dark:bg-slate-800 border border-foreground/10 dark:border-white/10 px-3 py-1 text-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Achievements */}
        <div className="max-w-6xl mx-auto mt-6 grid lg:grid-cols-[3fr_2fr] gap-6">
          <div className="rounded-2xl bg-white dark:bg-slate-900 border border-foreground/10 dark:border-white/10 p-6 shadow-sm">
            <h4 className="flex items-center gap-2 font-bold mb-4">
              <BadgeCheck className="w-5 h-5 text-amber-600 dark:text-accent" />
              Certifications
            </h4>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
              {certifications.map((group) => (
                <div key={group.issuer}>
                  <p className="text-sm font-semibold text-foreground/60 dark:text-slate-400 mb-1">
                    {group.issuer}
                  </p>
                  <ul className="space-y-1 text-sm">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-white dark:bg-slate-900 border border-foreground/10 dark:border-white/10 p-6 shadow-sm">
            <h4 className="flex items-center gap-2 font-bold mb-4">
              <Award className="w-5 h-5 text-amber-600 dark:text-accent" />
              Achievements
            </h4>
            <ul className="space-y-2 text-sm">
              {achievements.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-amber-600 dark:text-accent">★</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <hr className="mt-10 mx-auto w-1/3 border-foreground/20 dark:border-white/20" />
      {/* Section Work Experience */}
      <section id="experience" className="px-6 my-16">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-600 dark:text-accent">
            Career
          </p>
          <h2 className="text-4xl font-bold sm:text-5xl mt-2 font-serif">
            Work Experience
          </h2>
        </div>

        <ol className="max-w-4xl mx-auto relative border-l-2 border-accent/60 ml-3 sm:mx-auto">
          {experiences.map((exp) => (
            <li key={exp.id} className="relative pl-8 pb-12 last:pb-0">
              <span className="absolute -left-[13px] top-1 w-6 h-6 rounded-full bg-accent text-foreground flex items-center justify-center ring-4 ring-background dark:ring-black">
                <Briefcase className="w-3.5 h-3.5" />
              </span>
              <div className="rounded-2xl bg-white dark:bg-slate-900 border border-foreground/10 dark:border-white/10 p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold">{exp.roles[0]}</h3>
                    {exp.roles.length > 1 && (
                      <p className="text-sm text-foreground/60 dark:text-slate-400">
                        Previously: {exp.roles.slice(1).join(", ")}
                      </p>
                    )}
                    <p className="mt-1 font-semibold text-amber-600 dark:text-accent">
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-sm text-foreground/70 dark:text-slate-400 sm:text-right shrink-0">
                    <p className="flex items-center gap-1 sm:justify-end">
                      <Calendar className="w-4 h-4" /> {exp.period}
                    </p>
                    <p className="flex items-center gap-1 sm:justify-end">
                      <MapPin className="w-4 h-4" /> {exp.location}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-foreground/80 dark:text-slate-300 leading-relaxed">
                  {exp.summary}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-foreground/90 dark:text-slate-200">
                  {exp.achievements.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-amber-600 dark:text-accent">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {exp.tech.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-muted dark:bg-slate-800 border border-foreground/10 dark:border-white/10 px-2.5 py-0.5 text-xs"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <hr className="mt-10 mx-auto w-1/3 bg-black dark:bg-white " />
      {/* Section My Works */}
      <section id="myworks" className="p-6 my-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold sm:text-5xl mb-2 text-slate-900 dark:text-white font-serif">
            My Latest Work
          </h2>
          <p className="text-lg mb-12 text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            Selected projects across networking, machine learning, and
            software engineering, from my thesis to team-built systems.
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
                {!project.images?.length && project.icon ? (
                  <div className="w-full h-full rounded-md bg-gradient-to-br from-muted to-accent dark:from-slate-700 dark:to-slate-900 flex flex-col items-center justify-center gap-3 text-foreground dark:text-accent">
                    <project.icon className="w-20 h-20" strokeWidth={1.5} />
                    <span className="text-sm font-semibold uppercase tracking-widest opacity-70">
                      {project.category.split(" · ")[0]}
                    </span>
                  </div>
                ) : (
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
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover rounded-md"
                      />
                    </SwiperSlide>
                  )) || null}
                </Swiper>
                )}
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-yellow-500 font-semibold mb-1">
                  {project.category}
                </p>
                {project.role && (
                  <p className="text-sm italic text-slate-600 dark:text-slate-400 mb-3">
                    Role: {project.role}
                  </p>
                )}
                <p className="text-slate-700 dark:text-slate-300 text-md mb-4">
                  {project.description}
                </p>
                <StatTiles stats={project.stats} />
                {project.highlights && (
                  <ul className="mb-4 space-y-1 text-sm text-slate-800 dark:text-slate-200">
                    {project.highlights.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-amber-600 dark:text-accent">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {project.tech && (
                  <ul className="mb-4 flex flex-wrap gap-1.5">
                    {project.tech.map((item) => (
                      <li
                        key={item}
                        className="rounded-full bg-white dark:bg-slate-700 border border-foreground/10 dark:border-white/10 px-2.5 py-0.5 text-xs"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="mt-auto flex flex-wrap gap-2 justify-start">
                {project.detailLink && (
                  <a
                    href={project.detailLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full hover:bg-yellow-500 hover:text-black transition duration-300 font-medium"
                  >
                    See Detail →
                  </a>
                )}

                {project.link && ( // Assuming 'link' is for GitHub or a live demo
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-full transition duration-300 font-medium"
                  >
                    See Code / Demo
                  </a>
                )}

                {project.documentLink && ( // This will now correctly check for the dedicated document link
                  <a
                    href={project.documentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition duration-300 font-medium"
                  >
                    See Documents
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      <hr className="mt-10 mx-auto w-1/3 bg-black dark:bg-white " />
      <section id="organization" className="p-6 my-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold sm:text-5xl mb-2 text-slate-900 dark:text-white font-serif">
            Organization Experience
          </h2>
          <p className="text-lg mb-12 text-slate-700 dark:text-slate-300">
            I have actively participated in various student organizations and
            held leadership roles throughout my academic journey. These
            experiences have sharpened my skills in project management,
            teamwork, public speaking, and event coordination.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {organizations.map((org) => (
            <div
              key={org.id}
              className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg shadow-xl transform transition duration-300 hover:scale-105 flex flex-col overflow-hidden"
            >
              <div
                className="relative rounded-md mb-4 flex-shrink-0"
                style={{ height: "250px" }}
              >
                {!org.images?.length && org.icon ? (
                  <div className="w-full h-full rounded-md bg-gradient-to-br from-muted to-accent dark:from-slate-700 dark:to-slate-900 flex flex-col items-center justify-center gap-3 text-foreground dark:text-accent">
                    <org.icon className="w-20 h-20" strokeWidth={1.5} />
                    <span className="text-sm font-semibold uppercase tracking-widest opacity-70">
                      {org.roles[0].title}
                    </span>
                  </div>
                ) : (
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={0}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  className="w-full h-full rounded-md"
                >
                  {org.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={image}
                        alt={`${org.title} - Slide ${index + 1}`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover rounded-md"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                )}
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {org.title}
                </h3>
                {/* Jabatan: lebih dari satu = progres/promosi */}
                <ol
                  className={`mb-3 space-y-1 ${
                    org.roles.length > 1
                      ? "border-l-2 border-accent pl-3"
                      : ""
                  }`}
                >
                  {org.roles.map((role, idx) => (
                    <li key={role.title} className="text-sm">
                      <span
                        className={`font-semibold ${
                          idx === 0
                            ? "text-amber-600 dark:text-accent"
                            : "text-slate-600 dark:text-slate-400"
                        }`}
                      >
                        {role.title}
                      </span>
                      <span className="text-slate-500 dark:text-slate-400">
                        {" "}
                        · {role.period}
                      </span>
                    </li>
                  ))}
                </ol>
                <p className="text-slate-700 dark:text-slate-300 text-md mb-4">
                  {org.description}
                </p>
                <StatTiles stats={org.stats} />
                <ul className="space-y-1 text-slate-700 dark:text-slate-300 text-sm mb-4">
                  {org.achievements.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                {org.skills && (
                  <>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1.5">
                      Skills gained
                    </p>
                    <ul className="flex flex-wrap gap-1.5">
                      {org.skills.map((skill) => (
                        <li
                          key={skill}
                          className="rounded-full bg-white dark:bg-slate-700 border border-foreground/10 dark:border-white/10 px-2.5 py-0.5 text-xs"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      <hr className="mt-10 mx-auto w-1/3 bg-black dark:bg-white " />
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

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
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
                  name="name"
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
                  name="email"
                  id="email"
                  className="shadow-sm appearance-none border border-slate-300 dark:border-slate-600 rounded w-full py-3 px-4 text-slate-900 dark:text-white leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent dark:bg-slate-800"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="title"
                className="block text-slate-700 dark:text-slate-300 text-sm font-semibold mb-2"
              >
                Title
              </label>
              <textarea
                type="text"
                name="title" // untuk {{title}} di subject
                id="title"
                className="shadow-sm appearance-none border border-slate-300 dark:border-slate-600 rounded w-full py-3 px-4 text-slate-900 dark:text-white leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent dark:bg-slate-800"
                placeholder="Enter your Title"
              ></textarea>
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
                name="message"
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
