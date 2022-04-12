import React from 'react'

interface CardProps {
    bg: string
    title: string
    demo?: string
    code?: string
}

const Card = ({
    bg,
    title,
    demo,
    code
}: CardProps) => {
    return (
        <div className={`shadow-lg shadow-primary_shadow group container rounded-md flex justify-center items-center mx-auto bg-${bg} bg-no-repeat bg-cover bg-center h-[280px]
        hover:bg-gradient-to-r hover:from-primary_shadow_light to-primary_shadow `}>
            <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                <span className='text-2xl font-bold text-slate-100 tracking-wider'>
                    {title}
                </span>
                <div className='pt-8 text-center'>
                    {
                        demo &&
                        <a target="_blank" href={demo}>
                            <button className='text-center rounded-md px-4 py-2 m-2 bg-slate-100 font-bold text-lg'>
                                Demo
                            </button>
                        </a>
                    }
                    {
                        code &&
                        <a target="_blank" href={code}>
                            <button className='text-center rounded-md px-4 py-2 m-2 bg-slate-100 font-bold text-lg'>
                                Code
                            </button>
                        </a>
                    }
                </div>
            </div>
        </div>
    )
}

export default Card