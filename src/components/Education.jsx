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
            year: "2022",
            degree: "Higher Secondary",
            school: "Swastik School of Science",
            type: "Percentage",
            score: "71.07"
        },
        {
            year: "2020",
            degree: "Secondary School",
            school: "Sadhu Vaswani School for Girls",
            type: "Percentage",
            score: "80.33"
        },
    ]

  return (
    <section id='education' className='scroll-mt-10 mt-20'>
      <h1 className='font-bold text-3xl md:text-4xl text-center'>Education</h1>
      <div className='flex flex-col justify-center mt-10 bg-[var(--card-background-color)] rounded-xl mx-auto shadow-md w-full max-w-md md:max-w-lg lg:max-w-4xl'>
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
        {/* <div className='mb-6'>
            <p className='text-sm'>2022 - Present</p>
            <h3 className='font-medium text-xl text-[var(--text-color)]'>Bachelor of Engineering</h3>
            <p className='text-sm'>Computer | Government Engineering College</p>
            <p className='flex'><p className='font-medium'>CGPA:&nbsp;</p>8.57</p>
        </div>
        <div className='mb-6'>
            <p className='text-sm'>2022</p>
            <h3 className='font-medium text-xl text-[var(--text-color)]'>Higher Secondary</h3>
            <p className='text-sm'>Swastik School of Science</p>
            <p className='flex'><p className='font-medium'>Percentage:&nbsp;</p>71.07</p>
        </div>
        <div className='mb-6'>
            <p className='text-sm'>2020</p>
            <h3 className='font-medium text-xl text-[var(--text-color)]'>Secondary School</h3>
            <p className='text-sm'>Sadhu Vaswani School for Girls</p>
            <p className='flex'><p className='font-medium'>Percentage:&nbsp;</p>80.33</p>
        </div> */}
        </div>
      </div>
    </section>
  )
}

export default Education
