import React from "react";
import { useState } from "react";
import dropdownIconLight from "../assets/dropdownIconLight.svg";
import dropdownIconDark from "../assets/dropdownIconDark.svg";
import crossIconLight from "../assets/crossIconlight.png";
import crossIconDark from "../assets/crossIcondark.png";
import { useTheme } from "../common/ThemeContext";
// import {Menu} from "antd"

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const dropdownIcon = theme === "light" ? dropdownIconLight : dropdownIconDark;
  const crossIcon = theme === "light" ? crossIconLight : crossIconDark;

  const [nav, setNav] = useState(false);

  const scrollToSection = (id)=>{
    const section = document.getElementById(id);
    if(section){
        section.scrollIntoView({behavior: "smooth"});
    }
    setNav(false);
  }

  const links = [
    {
      id: "home",
      link: "Home",
    },
    {
      id: "projects",
      link: "Projects",
    },
    {
      id: "skills",
      link: "Skills",
    },
    {
      id: "education",
      link: "Education"
    },
    {
      id: "contact",
      link: "Contact Me",
    },
  ];
  return (
    <section className="fixed top-0 left-0 w-full z-50">
      <div
        className="relative w-full flex items-center justify-center px-4 h-full bg-[var(--nav-color)]"
      >
        <div
          onClick={() => setNav(!nav)}
          className="absolute left-4 top-4 z-50 sm-block md:hidden"
        >
          {nav ? (
            <img
              src={crossIcon}
              alt=""
              className="size-10 hover:cursor-pointer"
            />
          ) : (
            <img
              src={dropdownIcon}
              alt=""
              className="size-10 hover:cursor-pointer"
            />
          )}
        </div>

        <ul
          className="gap-10 hidden md:flex text-[var(--text-color)]"
        >
          {links.map(({ id, link, sectionId }) => (
            <li className="font-bold p-3 pb-3 cursor-pointer text-xl hover:text-[var(--nav-hover-text-color)]" key={id} onClick={()=>scrollToSection(id)}>
              {link}
            </li>
          ))}
        </ul>

        {/* mobile view */}
        {nav && (
          <ul
            className="flex flex-col justify-between items-center absolute top-0 left-0 w-50 py-10 z-40 space-y-6 text-white backdrop-blur-md bg-[var(--dropdown-color)]"
            // style={{backgroundColor:"rgba(90,54,32,0.7)"}}
          >
            {links.map(({ id, link }) => (
              <li className="px-4 cursor-pointer py-2 text-xl hover:text-[var(--dropdown-hover-text-color)]" key={id} onClick={()=>scrollToSection(id)}>
                {link}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default Navbar;
