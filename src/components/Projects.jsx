import React from "react";
import currencyConverterImage from "../assets/currencyConverter.webp";
import weatherAppImage from "../assets/weatherImage.webp";
import smsImage from "../assets/smsImage.webp";

function Projects() {
  const projects = [
    {
      name: "Society Management",
      image: smsImage,
      link: "",
      codeLink: "",
    },
    {
      name: "Currency Converter",
      image: currencyConverterImage,
      link: "https://currency-converter-pr.netlify.app/",
      codeLink: "",
    },
    {
      name: "Weather Forecast Website",
      image: weatherAppImage,
      link: "https://weatherpr.netlify.app/",
      codeLink: "",
    },
  ];

  return (
    <section id="projects" className="scroll-mt-20">
      <h1 className="font-bold text-3xl md:text-4xl text-center">Projects</h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center mt-10 gap-6">
          {projects.map(({ name, image, link, codeLink }) => (
            <div key={name} className="flex flex-col items-center justify-center">
              <a href={link} target="_blank">
                <img src={image} alt="" className="size-40 rounded-2xl mt-4" />
              </a>
              <h3
                className="mt-2 font-medium"
                style={{ color: "var(--text-color)" }}
              >
                {name}
              </h3>
              <a href={codeLink}>
                <button
                  className="rounded-3xl w-20 p-1 mt-3 mb-10 text-center"
                  style={{
                    backgroundColor: "var(--btn-color)",
                    color: "var(--btn-text-color)",
                  }}
                >
                  Code
                </button>
              </a>
            </div>
          ))}
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
