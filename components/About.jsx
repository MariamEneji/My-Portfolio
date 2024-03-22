import React from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll'

const About = () => {
  return (
    <div id='about'  className='w-full flex p-2 mx-5 md:h-screen items-center py-16 '>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-6 '>
        <div className='col-span-2' >
          <h2 className='font-bold text-3xl' >Meet Mariam</h2>
          <p className='py-2 text-gray-400'> I'm frontend engineer who recently graduated from Alt School Africa. During my time there, I dove into the exciting world of frontend development, mastering HTML, CSS, JavaScript, React, Vue and other awesome technologies, using them to bring ideas to life on the web.
            </p>
            <p className='py-2 text-gray-400'>What I love most is blending design and code to create websites and applications. As a lifelong learner, I'm eager to explore new frontend frameworks and dive deeper into design principles. Collaboration is key to my process, and I thrive in team environments where we solve challenges together and push boundaries.
            </p>
            <p className='py-2 text-gray-400'>Beyond coding, you'll find me seeking design inspiration, attending tech meetups, or curled up with a good book on design thinking. Let's connect and bring our ideas to life, whether it's building sleek UIs, optimizing websites for performance, or brainstorming the next big thing in tech, I'm ready to dive in and create something amazing together! 
            </p>

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