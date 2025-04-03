import React from "react";
import aboutmeImage from "../assets/aboutmeImage.jpeg";

function AboutMe() {
  return (
    <section id="aboutme" className="scroll-mt-20 mt-20">
      <h1 className="font-bold text-3xl md:text-4xl text-center">About Me</h1>
      <div className="text-sm mt-10 text-center p-5 bg-[var(--card-background-color)] rounded-xl mx-auto shadow-md max-w-xs sm:max-w-lg md:max-w-3xl lg:max-w-5xl flex flex-col md:flex-row-reverse md:gap-10">
        <div className="flex justify-center mt-5 mb-5">
          <img src={aboutmeImage} alt="" className="w-60 h-70 md:w-200 md:h-80 rounded-2xl"/>
        </div>
        <div className="mt-5 mb-5">
          <p>
            I’m <b>Vishwa</b>, a Computer Engineering student with a passion for
            building impactful and efficient software solutions. I thrive on
            problem-solving and enjoy crafting seamless, user-friendly web
            applications.
          </p>
          <br />
          <p>
            Currently, I’m working with <b>JavaScript</b>, <b>Node.js</b>, and{" "}
            <b>MongoDB</b>, developing projects that solve real-world
            challenges. I’m always eager to expand my knowledge, refine my
            skills, and stay up-to-date with the latest in technology.
          </p>
          <br />
          <p>
            My goal is to become a proficient full-stack developer, contributing
            to innovative solutions and collaborating with like-minded
            professionals. I believe in continuous learning, creativity, and the
            power of technology to drive meaningful change.
          </p>
          <br />
          <p>
            <b>Let’s connect and create something extraordinary!</b>
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
