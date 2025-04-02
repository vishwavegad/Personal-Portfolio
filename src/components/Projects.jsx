import {React, useState} from "react";
import currencyConverterImage from "../assets/currencyConverter.webp";
import weatherAppImage from "../assets/weatherImage.webp";
import smsImage from "../assets/smsImage.webp";

function Projects() {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (name)=>{
    setExpanded((prev)=>({
      ...prev,
      [name]: !prev[name],
    }))
  }

  const projects = [
    {
      name: "Society Management",
      image: smsImage,
      link: "",
      description: " A web application designed to streamline residential community management. It offers features like announcements, complaint tracking, maintenance requests, visitor management, and secure authentication. Built with HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB, it ensures efficient communication and organization within societies.",
      codeLink: "https://github.com/vishwavegad/Society-Management",
    },
    {
      name: "Currency Converter",
      image: currencyConverterImage,
      link: "https://currency-converter-pr.netlify.app/",
      description:
        "A simple currency converter that provides real-time exchange rates. Built using HTML, CSS, JavaScript and ExchangeRateAPI, it offers seamless currency conversion between different international currencies.",
      codeLink: "https://github.com/vishwavegad/Currency-Converter",
    },
    {
      name: "Weather Forecast Website",
      image: weatherAppImage,
      link: "https://weatherpr.netlify.app/",
      description:
        "A weather forecasting web application that fetches real-time weather data based on user location or manual search. Built using HTML, CSS, JavaScript and WeatherAPI for accurate weather updates.",
      codeLink: "",
    },
  ];

  return (
    <section id="projects" className="scroll-mt-20">
      <h1 className="font-bold text-3xl md:text-4xl text-center">Projects</h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center mt-10 gap-6 items-start">
          {projects.map(({ name, image, link, description, codeLink }) => {
            const isExpanded = expanded[name]
            const shortText = description.slice(0, 100)+"..."

            return(
            <div key={name} className="flex flex-col items-center justify-center p-8 rounded-xl shadow-md w-full max-w-md md:max-w-lg lg:max-w-4xl mx-auto bg-[var(--card-background-color)]">
              <h2
                className="font-medium text-xl"
                style={{ color: "var(--text-color)" }}
              >
                {name}
              </h2>
              {/* <p className="text-sm">Tap for Live Demo</p> */}
              <a href={link} target="_blank">
                <img src={image} alt="" className="size-40 rounded-2xl mb-6 mt-6" />
              </a>
              <p className={`text-sm w-80 text-center ${isExpanded?"":"h-20 overflow-hidden"}`}>
                {isExpanded?description:shortText}
              </p>
              <button onClick={()=>toggleExpand(name)} className="text-[var(--projects-read-text-color)] hover:text-blue-700">
                {isExpanded?"Read Less":"Read More"}
              </button>
              <a href={codeLink}>
                <button
                  className="rounded-3xl w-20 p-1 mt-5 mb-10 text-center"
                  style={{
                    backgroundColor: "var(--btn-color)",
                    color: "var(--btn-text-color)",
                  }}
                >
                  Code
                </button>
              </a>
            </div>
            )
})}
          {/* <div className='flex flex-col items-center'>
            <a href="https://currency-converter-pr.netlify.app/" target='_blank'><img src={currencyConverterImage} alt="" className='size-40 rounded-2xl mt-4' /></a>
            <h3 className='mt-2 font-medium' style={{color:'var(--text-color)'}}>Currency Converter</h3>
            <a href=""><button className='rounded-3xl w-20 p-1 mt-3 mb-10 text-center' style={{backgroundColor:'var(--btn-color)', color:'var(--btn-text-color)'}}>Code</button></a>
        </div>
        <div className='flex flex-col items-center'>
            <a href="https://weatherpr.netlify.app/" target='_blank'><img src={weatherAppImage} alt="" className='size-40 rounded-2xl mt-4' /></a>
            <h3 className='mt-2 font-medium' style={{color:'var(--text-color)'}}>Weather Forecast Website</h3>
            <a href=""><button className='rounded-3xl w-20 p-1 mt-3 mb-10 text-center' style={{backgroundColor:'var(--btn-color)', color:'var(--btn-text-color)'}}>Code</button></a>
        </div>
        <div className='flex flex-col items-center'>
            <a href="" target='_blank'><img src={smsImage} alt="" className='size-40 rounded-2xl mt-4' /></a>
            <h3 className='mt-2 font-medium' style={{color:'var(--text-color)'}}>Society Management System</h3>
            <a href=""><button className='rounded-3xl w-20 p-1 mt-3 mb-10 text-center' style={{backgroundColor:'var(--btn-color)', color:'var(--btn-text-color)'}}>Code</button></a>
        </div> */}
        </div>
      </div>
    </section>
  );
}

export default Projects;
