import React from 'react'
import Card from '../components/Card'

interface WorkProps {
    navbarOpen: boolean
}

const Work = ({
    navbarOpen
}: WorkProps) => {

    const workList = [
        {
            bg: 'crudGenerator',
            title: 'Node.js/Express CRUD generator',
            demo: 'https://crud-generator.netlify.app',
            code: 'https://github.com/wassimmallehwm/node.js_crud_generator'
        },
        {
            bg: 'nazoutex',
            title: 'Nazoutex',
            demo: 'https://nazoutex.netlify.app/'
        },
        {
            bg: 'personalityTest',
            title: 'Personality test',
            demo: 'https://test-personality.netlify.app',
            code: 'https://github.com/wassimmallehwm/personality-test'
        }
    ]
    return (
        <div id="work" className='w-full min-h-screen flex items-center bg-slate-100 text-primary py-16 lg:py-0'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='mt-20'>
                    <p className='text-4xl font-bold inline border-b-4 border-primary_blur'>
                        Work
                    </p>
                    <p className='py-6'>Check out some of my recent work</p>
                </div>

                {
                    !navbarOpen &&
                    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>

                        <div className={`bg-crudGenerator hidden`}></div>
                        <div className={`bg-nazoutex hidden`}></div>
                        <div className={`bg-personalityTest hidden`}></div>

                        {
                            workList && workList.map(({ bg, title, demo, code }: any) => (
                                <>
                                    <Card key={bg} bg={bg} title={title} demo={demo ? demo : null} code={code ? code : null} />
                                </>
                            ))
                        }

                    </div>
                }
            </div>
        </div>
    )
}

export default Work