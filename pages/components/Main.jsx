import React from 'react'
import Link from 'next/link'
import {FaLinkedinIn, FaGithub, FaTwitter} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Main = () => {
  return (
    
    <div className='w-full h-screen items-center z-0'>
        <div className='flex justify-center items-center px-4 md:py-4 pt-16 h-full w-full flex-col text-center '>
            <div className=''>
                <p className='uppercase text-gray-600 tracking-wide '>Let's build together</p>
                <h1 className='font-bold text-6xl pt-4'>Hi, I'm <span className='font-bold text-red-600'>Mariam</span></h1>
                <h1 className='font-bold text-4xl'>A Front-End Web Developer</h1>
            </div>
            
                <div className='px-16 py-6'>
                <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam iusto quae autem deleniti qui voluptatibus, molestias incidunt inventore deserunt quod pariatur sit ab doloremque repudiandae suscipit, praesentium non velit corrupti.</p>
                </div>
                
                    
                    
               
                <div className='flex justify-between items-center my-4 w-[50%]'>
                    <div  className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 duration-300'>
                    <Link  href=''><FaLinkedinIn /></Link>
                    </div>

                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 duration-300'>
                    <Link href='' ><FaGithub /></Link>
                    </div>

                    <div  className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 duration-300'>
                    <Link href=''> <FaTwitter /></Link>
                    </div>

                    <div  className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 duration-300'>
                    <Link href=''> <BsFillPersonLinesFill /></Link>
                    </div>
                    

                
            </div>
            </div>
        </div>
    
  )
}

export default Main