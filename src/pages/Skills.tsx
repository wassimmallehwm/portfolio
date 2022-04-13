import React from 'react'

import nodejs from '../assets/skills/node.png'
import reactjs from '../assets/skills/react.png'
import angular from '../assets/skills/angular.png'
import javascript from '../assets/skills/javascript.png'
import typescript from '../assets/skills/typescript.png'
import mongo from '../assets/skills/mongo.png'
import css from '../assets/skills/css.png'
import tailwind from '../assets/skills/tailwind.png'
import SkillItem from '../components/SkillItem'

const Skills = () => {
    return (
        <div id="skills" className='w-full min-h-screen bg-slate-100 text-primary'>
            <div className='max-w-[1000px] mx-auto w-full h-full px-4 flex flex-col justify-center'>
                <div className='mt-20'>
                    <p className='text-4xl font-bold inline border-b-4 border-primary_blur'>
                        Skills
                    </p>
                    <p className='py-4'>
                        These are the technologies I've worked with
                    </p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8'>
                    <SkillItem title="Node.js" image={nodejs}/>
                    <SkillItem title="React" image={reactjs}/>
                    <SkillItem title="angular" image={angular}/>
                    <SkillItem title="Javascript" image={javascript}/>
                    <SkillItem title="typescript" image={typescript}/>
                    <SkillItem title="Mongodb" image={mongo}/>
                    <SkillItem title="css" image={css}/>
                    <SkillItem title="Tailwind" image={tailwind}/>
                </div>
            </div>
        </div>
    )
}

export default Skills