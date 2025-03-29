import React from 'react'

function ContactMe() {
  return (
    <section id='contact' className="mt-10 scroll-mt-20" style={{color:'var(--text-color'}}>
      <h1 className='font-bold text-3xl text-center'>Contact Me</h1>
      <form action="">
        <div className="flex flex-col justify-center items-center">
          <input type="text" placeholder="Name" required className="border rounded-2xl p-2 w-70 m-4"/>
          <input type="text" placeholder="Email" required className="border rounded-2xl p-2 w-70 m-4"/>
          <textarea name="message" placeholder="Message" className="border rounded-2xl p-2 h-50 w-70 m-4"></textarea>
          <button className='rounded-3xl p-2 w-30 transition duration-300 ease-in-out hover:cursor-pointer hover:scale-107' style={{backgroundColor: 'var(--btn-color)', color:'var(--btn-text-color)'}}>Submit</button>
        </div>
      </form>
    </section>
  )
}

export default ContactMe
