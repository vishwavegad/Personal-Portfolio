import React from 'react'
import Swal from 'sweetalert2'

function ContactMe() {
  const onSubmit = async(event)=>{
    event.preventDefault();
    const form = event.target;

    const formData = new FormData(event.target);
    formData.append("access_key", "7187fbcc-a485-46e3-a448-25a0370aaac3");
    
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if(res.success)
    {
      console.log("Success", res);
      Swal.fire({
        title: "Success",
        text: "Message sent successfully",
        icon: "success"
      })
      form.reset();
    }
  }

  return (
    <section id='contact' className="scroll-mt-10 sm:scroll-mt-20 mt-20" style={{color:'var(--text-color'}}>
      <h1 className='font-bold text-3xl md:text-4xl text-center'>Contact Me</h1>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col justify-center items-center mt-10 bg-[var(--card-background-color)] rounded-xl mx-auto shadow-md w-full max-w-xs sm:max-w-lg md:max-w-3xl lg:max-w-5xl">
          <input type="text" placeholder="Name" name='name' required className="border rounded-2xl p-2 w-50 md:w-100 m-2 mt-10 focus:outline-none"/>
          <input type="text" placeholder="Email" name='email' required className="border rounded-2xl p-2 w-50 md:w-100 focus:outline-none"/>
          <textarea name="message" placeholder="Message" className="border rounded-2xl p-2 h-50 w-50 md:w-100 m-2 focus:outline-none"></textarea>
          <button className='rounded-xl p-2 w-50 md:w-100 mt-2 mb-10 hover:cursor-pointer bg-[var(--btn-color)] text-[var(--btn-text-color)] hover:bg-[var(--btn-hover-color)]'>Send</button>
        </div>
      </form>
    </section>
  )
}

export default ContactMe
