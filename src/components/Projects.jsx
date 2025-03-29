import React from 'react'
import currencyConverterImage from '../assets/currencyConverter.webp'
import weatherAppImage from '../assets/weatherImage.webp'
import smsImage from '../assets/smsImage.webp'

function Projects() {
  return (
    <section id='projects' className='scroll-mt-20'>
      <h1 className='font-bold text-3xl text-center'>Projects</h1>
      <div className='flex flex-col items-center mt-10'>
        <div className='flex flex-col items-center'>
            <a href="https://currency-converter-pr.netlify.app/" target='_blank'><img src={currencyConverterImage} alt="" className='size-60 rounded-2xl' /></a>
            <h3 className='mt-2 font-medium' style={{color:'var(--text-color)'}}>Currency Converter</h3>
            <a href=""><button className='rounded-3xl w-20 p-1 mt-3 mb-20 text-center' style={{backgroundColor:'var(--btn-color)', color:'var(--btn-text-color)'}}>Code</button></a>
        </div>
        <div className='flex flex-col items-center'>
            <a href="https://weatherpr.netlify.app/" target='_blank'><img src={weatherAppImage} alt="" className='size-60 rounded-2xl' /></a>
            <h3 className='mt-2 font-medium' style={{color:'var(--text-color)'}}>Weather Forecast Website</h3>
            <a href=""><button className='rounded-3xl w-20 p-1 mt-3 mb-20 text-center' style={{backgroundColor:'var(--btn-color)', color:'var(--btn-text-color)'}}>Code</button></a>
        </div>
        <div className='flex flex-col items-center'>
            <p>In Progress</p>
            <a href="" target='_blank'><img src={smsImage} alt="" className='size-60 rounded-2xl mt-4' /></a>
            <h3 className='mt-2 font-medium' style={{color:'var(--text-color)'}}>Society Management System</h3>
            <a href=""><button className='rounded-3xl w-20 p-1 mt-3 mb-20 text-center' style={{backgroundColor:'var(--btn-color)', color:'var(--btn-text-color)'}}>Code</button></a>
        </div>
      </div>
    </section>
  )
}

export default Projects
