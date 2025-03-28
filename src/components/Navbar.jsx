import React from 'react'
import { useState } from 'react'
import dropdownIconLight from '../assets/dropdownIconLight.svg'
import dropdownIconDark from '../assets/dropdownIconDark.svg'
import crossIconLight from '../assets/crossIconlight.png'
import crossIconDark from '../assets/crossIcondark.png'
import {useTheme} from '../common/ThemeContext'
// import {Menu} from "antd"


function Navbar() {
    const {theme, toggleTheme} = useTheme();
    const dropdownIcon = theme==='light'?dropdownIconLight:dropdownIconDark;
    const crossIcon = theme==='light'?crossIconLight:crossIconDark;

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'Home'
        },
        {
            id: 2,
            link: 'Projects'
        },
        {
            id: 3,
            link: 'Skills'
        },
        {
            id: 4,
            link: 'Contact Me'
        }
    ]
  return (
    <section className='fixed top-0 left-0 w-full h-12 z-50'>
        <div className='relative w-full flex items-center justify-center px-4 h-full' style={{backgroundColor: 'var(--nav-color)'}}>
            <div onClick={()=>setNav(!nav)} className='absolute left-4 top-4 z-50'>
                {nav?<img src={crossIcon} alt="" className='size-10 hover:cursor-pointer'/>:<img src={dropdownIcon} alt="" className='size-10 hover:cursor-pointer'/>}
            </div>

            <ul className='flex gap-10 hidden md:flex' style={{color:'var(--text-color)'}}>

                {links.map(({id, link})=>(
                    <li className='font-bold p-3 pb-3' key={id}>{link}</li>
                ))}
            </ul>

            {nav && 
                <ul className='flex flex-col justify-between items-center absolute top-0 left-0 w-full h-screen py-10 z-40 space-y-6 text-white' style={{backgroundColor:'var(--dropdown-color)'}}>
                {links.map(({id, link})=>(
                    <li className='px-4 cursor-pointer py-2 text-xl' key={id}>{link}</li>
                ))}
            </ul>}
            
        </div>
    </section>
  )
}

export default Navbar
