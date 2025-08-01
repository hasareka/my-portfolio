import React from "react";
import profilePic from "../assets/profile.jpg";
import Particles from "react-tsparticles";
import { FaArrowDown } from "react-icons/fa";

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Particles background */}
      <Particles
        id="tsparticles"
        options={{
          fullScreen: { enable: false },
          background: { color: "#0f172a" },
          particles: {
            number: { value: 40 },
            size: { value: 3 },
            move: { enable: true, speed: 0.5 },
            opacity: { value: 0.15 },
          },
        }}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 px-6 md:px-16 min-h-screen">
        {/* Text Section */}
        <div data-aos="fade-right" data-aos-duration="1000" className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi, I'm <span className="text-blue-400">Thathsarani Hasareka</span>
          </h1>
          <p className="text-lg text-gray-300 mt-4">
            Final Year IT Undergraduate – University of Moratuwa
          </p>
          <p className="text-md text-gray-400 mt-2">
            Passionate about building software that makes a difference.
          </p>
          <a
            href="#projects"
            className="mt-6 inline-block px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded transition duration-300"
          >
            View My Projects
          </a>
        </div>

        {/* Profile Image */}
        <div data-aos="fade-left" data-aos-duration="1000">
          <img
            src={profilePic}
            alt="Thathsarani"
            className="rounded-full border-2 border-blue-400 w-72 h-72 object-cover shadow-lg"
          />
        </div>
      </div>

      {/* Scroll Down Icon */}
      {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <FaArrowDown className="animate-bounce text-blue-400 text-2xl" />
      </div> */}
    </section>
  );
}

export default Hero;
