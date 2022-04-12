import React from 'react'

const About = () => {
  return (
    <div id="about" className='w-full h-screen bg-slate-100 text-primary'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[900px] w-full px-4 grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-primary_blur'>
              About
            </p>
          </div>
        </div>


        <div className='max-w-[900px] w-full px-4 grid sm:grid-cols-2 gap-8'>

          <div className='sm:text-right text-4xl font-bold pb-8 pl-4'>
            <p className=''>
              Hi, I'm Wassim, Nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p className='text-justify'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe animi, officia dolorem quae labore quam incidunt assumenda necessitatibus tenetur mollitia ex nesciunt fuga, maiores consectetur eligendi quas sapiente repudiandae temporibus.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About