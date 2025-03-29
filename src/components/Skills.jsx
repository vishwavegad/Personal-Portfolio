import React, { useEffect, useState } from "react";
import "./Skills.css";
import htmlLogo from "../assets/htmlLogo.svg";
import cssLogo from "../assets/cssLogo.svg";
import jsLogo from "../assets/jsLogo.svg";
import tailwindLogo from "../assets/tailwindLogo.svg";
import javaLogo from "../assets/javaLogo.svg";
import nodeLogo from "../assets/nodeLogo.svg";
import expressLogoLight from "../assets/expressLogoLight.svg";
import expressLogoDark from "../assets/expressLogoDark.svg";
import sqlLogo from "../assets/sqlLogo.png";
import mongoLogo from "../assets/mongoLogo.png";
import gitLogo from "../assets/gitLogo.svg";
import {useTheme} from '../common/ThemeContext'

function Skills() {
  const {theme, toggleTheme} = useTheme();
  const expressLogo = theme==='light'?expressLogoLight:expressLogoDark;
  const [animation, setAnimation] = useState(false);
  useEffect(() => {
    setTimeout(() => setAnimation(true), 500);
  }, []);
  return (
    <section id="skills" className="scroll-mt-20" style={{ color: "var(--text-color" }}>
      <h1 className="font-bold text-3xl text-center">Skills</h1>
      <div className="flex flex-col justify-center items-center mt-10 gap-6">
        <div>
          <h2 className="font-bold underline underline-offset-5">Frontend Technologies</h2>
          <div className="mt-4">
            <ul>
              <li>
                <div className="flex">
                  <img className="size-6 mr-2" src={htmlLogo} alt="" />
                  <span>HTML</span>
                </div>
                <div
                  className={`bar html ${animation ? "animation" : ""}`}
                ></div>
              </li>
              <li>
              <div className="flex">
                  <img className="size-6 mr-2 mt-1" src={cssLogo} alt="" />
                  <span className="mt-1">CSS</span>
                </div>
                <div
                  className={`bar css ${animation ? "animation" : ""}`}
                ></div>
              </li>
              <li>
              <div className="flex">
                  <img className="size-5 mr-2 mt-1.5" src={tailwindLogo} alt="" />
                  <span className="mt-1">Tailwind CSS</span>
                </div>
                <div
                  className={`bar tailwind ${animation ? "animation" : ""}`}
                ></div>
              </li>
              <li>
              <div className="flex">
                  <img className="size-5 mr-2 mt-1.5" src={jsLogo} alt="" />
                  <span className="mt-1">JavaScript</span>
                </div>
                <div
                  className={`bar javascript ${animation ? "animation" : ""}`}
                ></div>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="font-bold underline underline-offset-5">Backend Technologies</h2>
          <div className="mt-4">
            <ul>
              <li>
              <div className="flex">
                  <img className="size-6 mr-2" src={javaLogo} alt="" />
                  <span>Java</span>
                </div>
                <div
                  className={`bar java ${animation ? "animation" : ""}`}
                ></div>
              </li>
              <li>
              <div className="flex">
                  <img className="size-5 mr-2 mt-1.5" src={nodeLogo} alt="" />
                  <span className="mt-1">Node Js</span>
                </div>
                <div
                  className={`bar node ${animation ? "animation" : ""}`}
                ></div>
              </li>
              <li>
              <div className="flex">
                  <img className="size-5 mr-2 mt-1.5" src={expressLogo} alt="" />
                  <span className="mt-1">Express Js</span>
                </div>
                <div
                  className={`bar express ${animation ? "animation" : ""}`}
                ></div>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="font-bold underline underline-offset-5">Database</h2>
          <div className="mt-4">
            <ul>
              <li>
              <div className="flex">
                  <img className="size-5 mr-2" src={sqlLogo} alt="" />
                  <span>SQL</span>
                </div>
                <div
                  className={`bar mysql ${animation ? "animation" : ""}`}
                ></div>
              </li>
              <li>
              <div className="flex">
                  <img className="size-5 mr-2 mt-1.5" src={mongoLogo} alt="" />
                  <span className="mt-1">MongoDB</span>
                </div>
                <div
                  className={`bar mongodb ${animation ? "animation" : ""}`}
                ></div>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="font-bold underline underline-offset-5">Version Control</h2>
          <div className="mt-4">
            <ul>
              <li>
              <div className="flex">
                  <img className="size-6 mr-2" src={gitLogo} alt="" />
                  <span>Git/Github</span>
                </div>
                <div
                  className={`bar git ${animation ? "animation" : ""}`}
                ></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
