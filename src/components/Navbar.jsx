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
  const dropdownRef = useRef(null);
  const crossIconRef = useRef(null);

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
    let timeoutId;
    const handleClickOutside = (event)=>{
      if(dropdownRef.current && !dropdownRef.current.contains(event.target) && crossIconRef.current && !crossIconRef.current.contains(event.target))
      {
        setNav(false);
      }
    }
    if(nav)
    {
      timeoutId = setTimeout(()=>{
        document.addEventListener("mousedown", handleClickOutside);
      }, 100)
    }
    return()=>{
      clearTimeout(timeoutId);
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [nav]);

  return (
    <section className="fixed top-0 left-0 w-full z-50">
      <div
        className="relative w-full flex items-center justify-center px-4 h-full bg-[var(--nav-color)]"
      >
        <div
          // onClick={(e) => {
          //   e.stopPropagation();
          //   setNav(!nav)}
          // }
          className="absolute left-4 top-4 z-50 md:hidden"
        >
          {nav ? (
            <img
              ref={crossIconRef}
              src={crossIcon}
              alt=""
              className="size-9 hover:cursor-pointer"
              onClick={(e)=>{
                e.stopPropagation();
                setNav(false);
              }}
            />
          ) : (
            <img
              src={dropdownIcon}
              alt=""
              className="size-9 hover:cursor-pointer"
              onClick={(e)=>{
                e.stopPropagation();
                setNav(true);
              }}
            />
          )}
        </div>

          {/* Desktop View */}
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
            ref={dropdownRef}
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
