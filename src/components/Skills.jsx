import React, { useEffect, useState } from "react";
import "./Skills.css";
import htmlLogo from "../assets/htmlLogo.svg";
import cssLogo from "../assets/cssLogo.svg";
import tailwindLogo from "../assets/tailwindLogo.svg";
import jsLogo from "../assets/jsLogo.svg";
import reactLogo from "../assets/reactLogo.svg";
import javaLogo from "../assets/javaLogo.svg";
import nodeLogo from "../assets/nodeLogo.svg";
import expressLogoLight from "../assets/expressLogoLight.svg";
import expressLogoDark from "../assets/expressLogoDark.svg";
import sqlLogo from "../assets/sqlLogo.png";
import mongoLogo from "../assets/mongoLogo.png";
import gitLogo from "../assets/gitLogo.svg";
import { useTheme } from "../common/ThemeContext";

const CircularProgress = ({ percentage, skill, icon }) => {
  const radius = 40;
  const strokeWidth = 6;
  const circumference = 2 * Math.PI * radius;
  const progress = (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center m-4">
      <div className="relative">
        <svg width="90" height="90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="var(--bar-color)"
            strokeWidth={strokeWidth}
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="var(--bar-percent-color)"
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-in-out"
          />
        </svg>
        <img
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-8"
          src={icon}
          alt={skill}
        />
      </div>
      <span className="text-md font-medium mt-1">{skill}</span>
    </div>
  );
};

function Skills() {
  const { theme, toggleTheme } = useTheme();
  const expressLogo = theme === "light" ? expressLogoLight : expressLogoDark;
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimation(true), 500);
  }, []);

  const skillsCategories = [
    {
      title: "Frontend Technologies",
      bgColor: "var(--skills-background-color)",
      skills: [
        {
          name: "HTML",
          icon: htmlLogo,
          percentage: 95,
        },
        {
          name: "CSS",
          icon: cssLogo,
          percentage: 90,
        },
        {
          name: "Tailwind CSS",
          icon: tailwindLogo,
          percentage: 85,
        },
        {
          name: "JavaScript",
          icon: jsLogo,
          percentage: 70,
        },
        {
          name: "React",
          icon: reactLogo,
          percentage: 70,
        },
      ],
    },
    {
      title: "Backend Technologies",
      bgColor: "var(--skills-background-color)",
      skills: [
        {
          name: "Java",
          icon: javaLogo,
          percentage: 90,
        },
        {
          name: "Node.js",
          icon: nodeLogo,
          percentage: 90,
        },
        {
          name: "Express.js",
          icon: expressLogo,
          percentage: 95,
        },
      ],
    },
    {
      title: "Database",
      bgColor: "var(--skills-background-color)",
      skills: [
        {
          name: "SQL",
          icon: sqlLogo,
          percentage: 80,
        },
        {
          name: "MongoDB",
          icon: mongoLogo,
          percentage: 85,
        },
      ],
    },
    {
      title: "Other Tools",
      bgColor: "var(--skills-background-color)",
      skills: [
        {
          name: "Git/Github",
          icon: gitLogo,
          percentage: 70,
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="scroll-mt-20 mt-20"
      style={{ color: "var(--text-color" }}
    >
      <h1 className="font-bold text-3xl md:text-4xl text-center">Skills</h1>
      <div className="mt-10 space-y-10">
        {skillsCategories.map(({ title, bgColor, skills }) => (
          <div key={title} className="p-6 rounded-xl shadow-md flex flex-col items-center w-full max-w-xs sm:max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto group" style={{backgroundColor: "var(--card-background-color)", color:"var(--card-text-color)"}}>
            <h2 className="font-medium text-xl text-center mb-4" >{title}</h2>
            <div className={`flex flex-wrap gap-4 w-full justify-center mt-6 ${skills.length>=4?"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4":""}`}>
              {skills.map(({ name, icon, percentage }) => (
                <CircularProgress
                  key={name}
                  skill={name}
                  icon={icon}
                  percentage={percentage}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
