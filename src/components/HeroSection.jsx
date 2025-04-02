// import {React, useState, useEffect} from 'react'
import React from 'react'
// import Typical from 'react-typical'
// import TextTransition, {presets} from 'react-text-transition'
import {TypeAnimation} from "react-type-animation"
import heroImage from '../assets/heroImage5.jpeg'
// import heroImagelight from '../assets/HeroImage5.jpeg'
// import heroImagedark from '../assets/HeroImage4.jpeg'
import sun from '../assets/sun.svg'
import moon from '../assets/moon.png'
import githublight from '../assets/githublight.svg'
import linkedinlight from '../assets/linkedinlight.svg'
import leetcodelight from '../assets/leetcodelight.svg'
import githubdark from '../assets/githubdark.svg'
import linkedindark from '../assets/linkedindark.svg'
import leetcodedark from '../assets/leetcodedark.svg'
import Resume from '../assets/Vishwa Vegad.pdf'
// import contactMePage from '../components/ContactMe'
import {useTheme} from '../common/ThemeContext'

function HeroSection() {
    const {theme, toggleTheme} = useTheme();
    const themeIcon = theme==='light'?sun:moon;
    // const heroImage = theme==='light'?heroImagelight:heroImagedark;
    const githubIcon = theme==='light'?githublight:githubdark;
    const linkedinIcon = theme==='light'?linkedinlight:linkedindark;
    const leetcodeIcon = theme==='light'?leetcodelight:leetcodedark;

    // const TEXTS = ["Full Stack Developer", "Backend Developer", "Frontend Developer", "Problem Solver"];
    // const [index, setIndex] = useState(0);

    // useEffect(()=>{
    //     const interval = setInterval(()=>{
    //         setIndex((prevIndex)=>(prevIndex-1)%TEXTS.length);
    //     }, 2000);
    //     return ()=>clearInterval(interval);
    // }, []);


  return (
    <main id='home' className='flex justify-center scroll-mt-20'>
        <section className='flex flex-col md:flex-row items-center justify-center gap-5 md:gap-40 text-center md:text-left min-h-screen max-w-5xl mx-auto px-4'>
            <div className='w-full md:w-1/2 flex justify-center pt-5'>
                {/* <img className='size-50 md:size-70 rounded-full ml-6' src={heroImage} alt='Profile Picture of Vishwa Vegad' /> */}
                <img className='size-60 md:size-100 rounded-full ml-6' src={heroImage} alt='Profile Picture of Vishwa Vegad' />
                <img className='size-8 md:size-10 hover:cursor-pointer' src={themeIcon} alt='theme icon' onClick={toggleTheme} />
            </div>
            <div className='w-full md:w-1/2 flex flex-col gap-5'>
                <h1 className='text-2xl md:text-4xl font-bold uppercase font-Rubik md'>Vishwa Vegad</h1>
                <h2 className='text-l md:text-xl font-bold'>
                    <TypeAnimation
                        sequence={[
                            "Full Stack Developer", 2000, '', 500,
                            "Frontend Developer", 2000, '', 500,
                            "Backend Developer", 2000, '', 500,
                            "Problem Solver", 2000, '', 500,
                        ]}
                        wrapper='span'
                        speed={50}
                        deletionSpeed={40}
                        repeat={Infinity}
                    />
                    {/* <TextTransition springConfig={presets.wobbly}>
                        {TEXTS[index]}
                    </TextTransition> */}
                </h2>
                <span className='flex justify-center md:justify-start gap-5'>
                    <a href="https://github.com/vishwavegad" target='_blank'><img className='w-8' src={githubIcon} /></a>
                    <a href="https://linkedin.com/in/vishwavegad" target='_blank'><img className='w-8' src={linkedinIcon} /></a>
                    {/* <a href="" target='_blank'><img className='w-6 mt-0.5' src={leetcodeIcon} /></a> */}
                </span>
                <p className='text-sm md:text-md font-medium w-80'>I build things, break things, and then fix them (hopefully before anyone notices), all while confidently saying 'it works on my machine.'<br/><br/>Hi, I’m Vishwa, a Full Stack Developer who loves solving problems (and occasionally creating them).</p>
                <a href={Resume} download>
                    <button className='rounded-3xl p-2 w-25 md:w-35 md:text-md hover:cursor-pointer bg-[var(--btn-color)] text-[var(--btn-text-color)] hover:bg-[var(--btn-hover-color)]'>Resume</button>
                    {/* <button>Resume</button> */}
                </a>
            </div>
        </section>
    </main>
  )
}

export default HeroSection
