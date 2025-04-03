import React from 'react'

function Education() {
    const EducationData = [
        {
            year: "2022 - Present",
            degree: "Bachelor of Engineering",
            school: "Computer | Government Engineering College",
            type: "CGPA",
            score: "8.57"
        },
        {
            year: "2021 - 2022",
            degree: "Higher Secondary",
            school: "Swastik School of Science",
            type: "Percentage",
            score: "71.07"
        },
        {
            year: "2019 - 2020",
            degree: "Secondary School",
            school: "Sadhu Vaswani School for Girls",
            type: "Percentage",
            score: "80.33"
        },
    ]

  return (
    <section id='education' className="scroll-mt-10 sm:scroll-mt-20 mt-20">
      <h1 className='font-bold text-3xl md:text-4xl text-center'>Education</h1>
      <div className='flex flex-col justify-center mt-10 bg-[var(--card-background-color)] rounded-xl mx-auto shadow-md text-xs sm:text-sm w-full max-w-xs sm:max-w-lg md:max-w-3xl lg:max-w-5xl'>
        <div className='ml-6 mt-10 mb-6 relative border-l-3 border-[var(--text-color)] pl-6'>
            {EducationData.map(({year, degree, school, type, score})=>(
                <div key={year} className='relative mb-6'>
                    <div className='absolute -left-8 top-1 size-3 bg-[var(--education-bullet-color)] rounded-full'></div>
                    <p className='text-sm'>{year}</p>
                    <h3 className='font-medium text-xl text-[var(--text-color)]'>{degree}</h3>
                    <p className='text-sm'>{school}</p>
                    <p className='flex'><p className='font-medium'>{type}:&nbsp;</p>{score}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Education
