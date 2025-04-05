import { React, useState } from "react";
import currencyConverterImage from "../assets/currencyConverterImage.png";
import weatherAppImage from "../assets/weatherAppImage.png";
import smsImage from "../assets/SMSImage.png";
import externalLinkImage from "../assets/externalLink.svg"

function Projects() {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (name) => {
    setExpanded((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const projects = [
    {
      name: "Society Management",
      text: "Live Demo currently unavailable",
      image: smsImage,
      link: "",
      description:
        "In Progress....A web application designed to streamline residential community management. It offers features like announcements, complaint tracking, maintenance requests, visitor management, and secure authentication. It ensures efficient communication and organization within societies.",
      techstack: "HTML, CSS, JavaScript, Node.js, Express.js and MongoDB",
      codeLink: "https://github.com/vishwavegad/Society-Management",
    },
    {
      name: "Currency Converter",
      text: "Click the image for Live Demo",
      image: currencyConverterImage,
      link: "https://currency-converter-pr.netlify.app/",
      description:
        "A simple currency converter that provides real-time exchange rates. It offers seamless currency conversion between different international currencies.",
      techstack: "HTML, CSS, JavaScript and ExchangeRateAPI",
      codeLink: "https://github.com/vishwavegad/Currency-Converter",
    },
    {
      name: "Weather Forecast Website",
      text: "Click the image for Live Demo",
      image: weatherAppImage,
      link: "https://weatherpr.netlify.app/",
      description:
        "A weather forecasting web application that fetches real-time weather data based on user location or manual search.",
        techstack: "HTML, CSS, JavaScript and WeatherAPI",
      codeLink: "https://github.com/vishwavegad/Weather-Forecast",
    },
  ];

  return (
    <section id="projects" className="scroll-mt-10 sm:scroll-mt-20 mt-20">
      <h1 className="font-bold text-3xl md:text-4xl text-center">Projects</h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 place-items-center mt-10 gap-6 items-start">
          {projects.map(({ name, text, image, link, description, techstack, codeLink }) => {
            const isExpanded = expanded[name];
            const shortText = description.slice(0, 100) + "...";

            return (
              <div
                key={name}
                className="relative flex flex-col items-center justify-center p-8 rounded-xl shadow-md w-full max-w-xs sm:max-w-lg md:max-w-3xl lg:max-w-4xl mx-auto bg-[var(--card-background-color)]"
              >
                <h2 className="font-medium text-md sm:text-lg md:text-xl text-[var(--text-color)]">
                  {name}
                </h2>
                <span className="text-xs mt-2 text-[var(--text-color)]">{text}</span>
                <div className="relative group">
                  <img
                    src={image}
                    alt=""
                    className="w-64 h-auto max-h-48 object-cover rounded-2xl mb-6 mt-2"
                  />
                  {link && (
                    <a href={link} target="_blank" className="absolute inset-0 flex justify-center items-center w-64 h-auto max-h-48 mt-6 mb-6 bg-[var(--projects-hover-background-color)] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                      <img src={externalLinkImage} alt="External Link Icon" className="w-10 h-10" />
                    </a>
                  )}
                
                </div>
                <p
                  className={`text-xs w-70 sm:text-sm sm:w-80 text-center ${
                    isExpanded ? "" : "h-20 overflow-hidden"
                  }`}
                >
                  {isExpanded ? description : shortText}
                </p>
                <button
                  onClick={() => toggleExpand(name)}
                  className="mb-3 text-[var(--projects-read-text-color)] hover:text-blue-700"
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </button>
                <p className="text-xs w-70 sm:text-sm text-center"><b></b>TechStack: {techstack}</p>
                <a href={codeLink} target="_blank">
                  <button className="rounded-3xl w-20 p-1 mt-5 mb-10 text-center bg-[var(--btn-color)] text-[var(--btn-text-color)] hover:bg-[var(--btn-hover-color)]">
                    Code
                  </button>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
