import React from 'react'

import workImg from '../assets/workImg.jpeg'
import realEstate from '../assets/realestate.jpg'
import Card from './Card'

const Work = () => {
    return (
        <div id="work" className='w-full md:h-screen bg-slate-100 text-primary'>
            <div className='max-w-[900px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-primary_blur'>
                        Work
                    </p>
                    <p className='py-6'>Check out some of my recent work</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    <Card bg="workImg" title="React application" demo="test" code="test" />
                    <Card bg="realEstate" title="React application" demo="test" code="test" />
                    <Card bg="realEstate" title="React application" demo="test" code="test" />

                </div>
            </div>
        </div>
    )
}

export default Work