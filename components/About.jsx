import React from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll'

const About = () => {
  return (
    <div id='about'  className='w-full flex p-2 md:h-screen items-center py-16 '>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-6 '>
        <div className='col-span-2' >
          <h2 className='font-bold text-3xl' >A little about me</h2>
          <p className='py-2 text-gray-400'> I started my professional journey as a Mathematics teacher. I loved my job and I love kids. But I wanted to do more, affect more people and solve problems bigger than just me and my immediate surroundings.
            </p>
            <p className='py-2 text-gray-400'>I decided to take the journey into Software engineering and I'm loving it. I'm currently enrolled in AltSchool Africa to broaden my horizon. I work hard and smart and I'm an awesome team player. I look forward to working with you.</p>

            <Link to="projects" spy={true} smooth={true} offset={-100} duration={500}>
            <p className='text-blue-500 cursor-pointer py-2 underline'>Check out some of my latest projects</p>
            </Link>
            
       
        </div>

        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-100'>
          <Image alt='/' src="/assets/may.jpg" width={200} height={200} className='w-full rounded-xl' />
        </div>
      </div>
    </div>
  )
}

export default About