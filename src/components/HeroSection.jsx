import React from "react";
import { TypeAnimation } from "react-type-animation";
import heroImage from "../assets/heroImage3.jpeg";
import sun from "../assets/sun.svg";
import moon from "../assets/moon.png";
import githublight from "../assets/githublight.svg";
import githubdark from "../assets/githubdark.svg";
import linkedindark from "../assets/linkedindark.svg";
import linkedinlight from "../assets/linkedinlight.svg";
import leetcodelight from "../assets/leetcodelight.svg";
import leetcodedark from "../assets/leetcodedark.svg";
import Resume from "../assets/Vishwa Vegad.pdf";
import { useTheme } from "../common/ThemeContext";

function HeroSection() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githublight : githubdark;
  const linkedinIcon = theme === "light" ? linkedinlight : linkedindark;
  const leetcodeIcon = theme === "light" ? leetcodelight : leetcodedark;

  return (
    <main id="home" className="flex justify-center scroll-mt-15">
      <section className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-1 text-center md:text-left min-h-screen max-w-5xl mx-auto px-4">
        <div className="flex flex-row">
          <span className="flex flex-col justify-center gap-5 md:mr-4">
            <a href="https://github.com/vishwavegad" target="_blank">
              <img className="w-8" src={githubIcon} />
            </a>
            <a href="https://linkedin.com/in/vishwavegad" target="_blank">
              <img className="w-8" src={linkedinIcon} />
            </a>
            <a href="https://leetcode.com/u/vishwaavegad/" target="_blank">
              <img className="w-7" src={leetcodeIcon} />
            </a>
          </span>
          <div className="w-full md:w-1/2 flex justify-center pt-5">
            <img
              className="h-65 w-55 md:h-80 md:w-150 rounded-full ml-6 shadow-[var(--background-color)]"
              src={heroImage}
              alt="Profile Picture of Vishwa Vegad"
            />
          </div>
          <div>
            <img
              className="size-8 md:size-10 hover:cursor-pointer"
              src={themeIcon}
              alt="theme icon"
              onClick={toggleTheme}
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <div>
            <h3 className="text-md text-[var(--text-color)]">HELLO THERE!!</h3>
            <h1 className="text-3xl md:text-4xl font-bold uppercase font-Rubik md">
              I'm Vishwa Vegad
            </h1>
          </div>
          <h2 className="text-l md:text-xl font-bold">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "",
                500,
                "Problem Solver",
                2000,
                "",
                500,
                "MERN Stack Developer",
                2000,
                "",
                500,
              ]}
              wrapper="span"
              speed={50}
              deletionSpeed={40}
              repeat={Infinity}
            />
          </h2>

          {/* <p className='text-sm md:text-md font-medium w-80'>I build things, break things, and then fix them (hopefully before anyone notices), all while confidently saying 'it works on my machine.'<br/><br/>I love solving problems (and occasionally creating them).</p> */}
          <div className="flex flex-row justify-center md:justify-start gap-5 mt-10 md:mt-2">
            <a href={Resume} download>
              <button className="rounded-3xl p-2 w-25 md:w-35 md:text-md hover:cursor-pointer bg-[var(--btn-color)] text-[var(--btn-text-color)] hover:bg-[var(--btn-hover-color)]">
                Resume
              </button>
            </a>
            <a href="#contact">
              <button className="rounded-3xl p-2 w-25 md:w-35 md:text-md hover:cursor-pointer bg-[var(--btn-color)] text-[var(--btn-text-color)] hover:bg-[var(--btn-hover-color)]">
                Contact Me
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HeroSection;
