import React from "react";
import aboutmeImage from "../assets/aboutmeImage.jpeg";

function AboutMe() {
  return (
    <section id="aboutme" className="scroll-mt-10 sm:scroll-mt-20 mt-20">
      <h1 className="font-bold text-3xl md:text-4xl text-center">About Me</h1>
      <div className="text-sm mt-10 text-center p-5 bg-[var(--card-background-color)] rounded-xl mx-auto shadow-md max-w-xs sm:max-w-lg md:max-w-3xl lg:max-w-5xl flex flex-col md:flex-row-reverse md:gap-10 min-h-[50px]">
        <div className="flex justify-center mt-5 mb-5">
          <img
            src={aboutmeImage}
            alt=""
            className="w-60 h-90 md:w-160 md:h-60 md:mt-12 lg:w-180 lg:h-80 lg:mt-1 lg:mb-1 rounded-2xl"
          />
        </div>
        <div className="mt-5 mb-5 flex flex-col justify-between">
          <div>
            <p>
              I’m <b>Vishwa</b>, a Computer Engineering student who enjoys
              turning complex ideas into functional web apps. I love
              experimenting with clean UI and writing code that’s both readable
              and reusable.
            </p>
            <br />
            <p>
              Lately, I’ve been working with <b>JavaScript</b>, <b>React</b>, <b>Node.js</b>, and <b>MongoDB</b> — building things like a
              society management system and personal portfolio site. I enjoy
              figuring out how to make things work better and faster, especially
              when it helps users have a smoother experience.
            </p>
            <br />
            <p>
              I’m working toward becoming a full-stack developer who focuses not
              just on building applications, but also on understanding the needs
              and experiences of the people using them. I enjoy exploring new
              technologies and continuously improving my approach to writing
              clean, effective code.
            </p>
          </div>
          <div className="mt-2 mb-2 text-md sm:text-lg">
            <p>
              <b>Let’s connect and create something extraordinary!</b>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
