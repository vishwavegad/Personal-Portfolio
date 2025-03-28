import React from 'react'
import heroImage from '../assets/heroImage.webp'
import sun from '../assets/sun.svg'
import moon from '../assets/moon.png'
import githublight from '../assets/githublight.svg'
import linkedinlight from '../assets/linkedinlight.svg'
import leetcodelight from '../assets/leetcodelight.svg'
import githubdark from '../assets/githubdark.svg'
import linkedindark from '../assets/linkedindark.svg'
import leetcodedark from '../assets/leetcodedark.svg'
// import contactMePage from '../components/ContactMe'
import {useTheme} from '../common/ThemeContext'

function HeroSection() {
    const {theme, toggleTheme} = useTheme();
    const themeIcon = theme==='light'?sun:moon;
    const githubIcon = theme==='light'?githublight:githubdark;
    const linkedinIcon = theme==='light'?linkedinlight:linkedindark;
    const leetcodeIcon = theme==='light'?leetcodelight:leetcodedark;
  return (
    <main className='flex justify-center'>
        <section className='flex flex-col justify-center gap-5 text-center min-h-screen max-w-md'>
            <div className='flex justify-center pt-5'>
                <img className='size-60 rounded-full ml-6' src={heroImage} alt='Profile Picture of Vishwa Vegad' />
                <img className='size-10 hover:cursor-pointer' src={themeIcon} alt='theme icon' onClick={toggleTheme} />
            </div>
            <div className='flex flex-col gap-5'>
                <h1 className='text-3xl font-bold uppercase font-Rubik'>Vishwa Vegad</h1>
                <h2 className='text-xl font-bold'>Full Stack Developer</h2>
                <span className='flex justify-center gap-5'>
                    <a href="https://github.com/vishwavegad" target='_blank'><img className='w-8' src={githubIcon} /></a>
                    <a href="https://linkedin.com/in/vishwavegad" target='_blank'><img className='w-8' src={linkedinIcon} /></a>
                    <a href="https://leetcode.com/u/vishwaavegad/" target='_blank'><img className='w-6 mt-0.5' src={leetcodeIcon} /></a>
                </span>
                <p className='text-sm font-medium'>I build things, break things, and then fix them (hopefully before anyone notices), all while confidently saying 'it works on my machine.'<br/><br/>Hi, I’m Vishwa, a Full Stack Developer who loves solving problems (and occasionally creating them).</p>
                <a href='./ContactMe.jsx' target='_blank'>
                    <button className='rounded-3xl p-2 w-30 transition duration-300 ease-in-out hover:cursor-pointer hover:scale-107' style={{backgroundColor: 'var(--btn-color)', color:'var(--btn-text-color'}}>Contact Me</button>
                    {/* <button>Resume</button> */}
                </a>
            </div>
        </section>
    </main>
  )
}

export default HeroSection
