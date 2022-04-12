import React from 'react'

interface SkillItemProps{
    title: string
    image: any
}

const SkillItem = ({
    title,
    image
}: SkillItemProps) => {
    return (
        <div className='py-4 shadow-md shadow-primary_shadow rounded-md hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={image} alt={title} />
            <p className='my-4 font-bold uppercase'>{title}</p>
        </div>
    )
}

export default SkillItem