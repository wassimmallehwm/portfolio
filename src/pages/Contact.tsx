import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className='w-full min-h-screen bg-slate-100 text-primary flex justify-center items-center px-4 py-20'>
        <form method='POST' action='https://getform.io/f/1b021e68-09a4-47b9-bf07-7657a14c9ba7' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-primary_blur'>
                    Contact
                </p>
                <p className='py-4'>Contact me via the form below</p>
            </div>
            <input className='m-3 px-4 py-2 rounded-md border-2 border-primary_shadow_light focus:border-primary_blur focus:outline-none' type="text" placeholder='Name' name="name"/>
            <input className='m-3 px-4 py-2 rounded-md border-2 border-primary_shadow_light focus:border-primary_blur focus:outline-none' type="email" placeholder='Email' name="email"/>
            <textarea className='m-3 px-4 py-2 rounded-md border-2 border-primary_shadow_light focus:border-primary_blur focus:outline-none' name="message" rows={5} placeholder='Message'></textarea>
            <button type='submit' className='rounded-md font-bold text-primary hover:text-slate-100 border-2 border-primary hover:bg-primary px-4 py-2 mx-auto my-2 flex items-center duration-500'>
                Let's Collaborate
            </button>
        </form>
    </div>
  )
}

export default Contact