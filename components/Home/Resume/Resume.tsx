import React from 'react'
import ResumeCard from './ResumeCard'
import { FaCode, FaCodepen } from 'react-icons/fa'
import { BsDatabase } from 'react-icons/bs'
import { FaReact } from 'react-icons/fa'
import { BiBadge } from 'react-icons/bi'

const Resume = () => {
  return (
    <div className="pt-20 pb-16">
      <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10'>
        {/*  work part*/}
        <div>
            <h1 className='text-3xl sm:text-4xl font-bold text-white'>
              My Work <span className='text-cyan-200'>Experience</span>
            </h1>
          <div className='mt-10'>
            <ResumeCard Icon={FaCodepen}  role="Full-Stack Developer"/>
            <ResumeCard Icon={FaReact}  role="Front-end Developer"/>
            <ResumeCard Icon={BsDatabase}  role="Back-end Developer"/>
          </div>
        </div>

        {/* EDUCation part */}
        <div>
          <h1 className='text-3xl sm:text-4xl font-bold text-white'>
            My Education <span className='text-cyan-200'>Experience</span>
          </h1>
          <div className='mt-10'>
            <ResumeCard Icon={BiBadge}  role="Design Institute of Technology date" 
            date="jan 2023 - Dec 2024"
            />
            <ResumeCard Icon={FaReact}  role="Bachelor in Computer Science"
            date="Jan 2019 - dec 2022"
            />
            <ResumeCard Icon={BsDatabase}  role="Certificate in Digital Marketing"
            date="jan 2016 - dec 2019"
            />
          </div>
        </div>

      </div>
    </div>
        
        );
};
        
        
      
  
export default Resume
