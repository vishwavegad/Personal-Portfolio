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
import downloadlight from "../assets/downloadIconlight.png";
import downloaddark from "../assets/downloadIcondark.png";
import contactmelight from "../assets/contactmeIconlight.png";
import contactmedark from "../assets/contactmeIcondark.png";
import { useTheme } from "../common/ThemeContext";

function HeroSection() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githublight : githubdark;
  const linkedinIcon = theme === "light" ? linkedinlight : linkedindark;
  const leetcodeIcon = theme === "light" ? leetcodelight : leetcodedark;
  const downloadIcon = theme === "light" ? downloadlight : downloaddark;
  const contactmeIcon = theme === "light" ? contactmelight : contactmedark;

  return (
    <main id="home" className="flex justify-center scroll-mt-15">
      <section className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-1 text-center md:text-left min-h-screen max-w-5xl mx-auto px-4">
        <div className="flex flex-row">
          <span className="flex flex-col justify-center gap-5 md:mr-4">
            
            
          </span>
          <div className="w-full md:w-1/2 flex justify-center pt-5 relative">
          {/* <div className="p-2 md:p-3 border-4 border-[var(--btn-color)] rounded-full ml-6 shadow-md w-55 h-65"> */}
            <img
              className="h-65 w-55 md:h-80 md:w-150 rounded-full ml-6 border-2 border-[var(--border-color)] p-6"
              src={heroImage}
              alt="Profile Picture of Vishwa Vegad"
            />
            <a href="https://github.com/vishwavegad" target="_blank" className="absolute -top-0 left-30 md:left-34">
              <img className="w-9 md:w-10 bg-[var(--background-color)]" src={githubIcon} />
            </a>
            <a href="https://linkedin.com/in/vishwavegad" target="_blank" className="absolute bottom-14 -right-3 md:-right-2">
              <img className="w-9 md:w-10 bg-[var(--background-color)] rounded-2xl" src={linkedinIcon} />
            </a>
            <a href="https://leetcode.com/u/vishwaavegad/" target="_blank" className="absolute bottom-14 left-4 md:left-5">
              <img className="w-8 md:w-9 bg-[var(--background-color)] rounded-2xl" src={leetcodeIcon} />
            </a>
            {/* </div> */}
          </div>
          <div>
            <img
              className="size-7 md:size-10 hover:cursor-pointer"
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
              <button className="flex gap-2 justify-center rounded-3xl p-2 w-30 font-bold md:w-35 md:text-md hover:cursor-pointer border-2 border-[var(--btn-border-color)] text-[var(--btn-color)]">
                Resume
                <img src={downloadIcon} alt="download icon" className="size-5 mt-1"/>
              </button>
            </a>
            <a href="#contact">
              <button className="flex gap-2 justify-center rounded-3xl p-2 w-35 font-bold md:w-35 md:text-md hover:cursor-pointer border-2 border-[var(--btn-border-color)] text-[var(--btn-color)]">
                Contact Me
                <img src={contactmeIcon} alt="contact me icon" className="size-5 mt-1"/>
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HeroSection;
