import React, {useState, useRef, useEffect} from "react";
import dropdownIconLight from "../assets/dropdownIconLight.svg";
import dropdownIconDark from "../assets/dropdownIconDark.svg";
import crossIconLight from "../assets/crossIconLight.png";
import crossIconDark from "../assets/crossIconDark.png";
import { useTheme } from "../common/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const dropdownIcon = theme === "light" ? dropdownIconLight : dropdownIconDark;
  const crossIcon = theme === "light" ? crossIconLight : crossIconDark;

  const [nav, setNav] = useState(false);
  const mobileMenuRef = useRef(null);

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
      id:"aboutme",
      link: "About Me"
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

  useEffect(()=>{
    const handleClickOutside = (event)=>{
      if(mobileMenuRef.current && !mobileMenuRef.current.contains(event.target))
      {
        setNav(false);
      }
    }
    if(nav)
    {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return()=>{
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [nav]);

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
            ref={mobileMenuRef}
            className="flex flex-col justify-between items-center absolute top-0 left-0 w-70 py-10 z-40 space-y-2 text-white backdrop-blur-md bg-[var(--dropdown-color)]"
          >
            {links.map(({ id, link }) => (
              <li className="px-4 cursor-pointer py-4 text-xl hover:text-[var(--dropdown-hover-text-color)]" key={id} onClick={()=>scrollToSection(id)}>
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
