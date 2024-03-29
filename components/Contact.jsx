import Image from 'next/image'
// import Link from 'next/link'
import { Link } from 'react-scroll'
import {FaLinkedinIn, FaGithub, FaTwitter} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
            <h2 className='text-3xl font-bold py-4'>Get in Touch</h2>

            <div className='grid lg:grid-cols-5 gap-4'>

                {/* left */}
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                        <div>
                            <Image  className='rounded-xl w-full hover:scale-105 ease-in duration-300' src="/assets/M.png" width='1240' height='1240'
                            alt="/" />
                        </div>

                        <div>
                            <h2 className='py-4 font-bold text-3xl'>
                                Mariam Eneji
                            </h2>
                            <p className='text-lg'>Front-End Developer</p>
                            <p className='py-4'>I am available for freelance and fulltime positions. Contact me and let's talk.</p>
                        </div>

                        <div>
                        <p className='uppercase pt-4'>Connect with me</p>
                          
                <div className='flex justify-between items-center py-4 w-full'>
                    <div  className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 duration-300'>
                    <a  href='https://www.linkedin.com/in/mariam-eneji-72339a239/' target='_blank'><FaLinkedinIn /></a>
                    </div>

                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 duration-300'>
                    <a href='https://github.com/MariamEneji' target='_blank' ><FaGithub /></a>
                    </div>

                    <div  className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 duration-300'>
                    <a href='https://twitter.com/MariamEneji' target='_blank'> <FaTwitter /></a>
                    </div>

                    <div  className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 duration-300'>
                    <a href='mailto: enejimariam1997@gmail.com' target='_blank'> <BsFillPersonLinesFill /></a>
                    </div>
                    

                
            </div>
                    </div>

                    </div>

                   
                </div>

                {/* right */}

                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>
                        <form>
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Name</label>
                                    <input type="text" className='border-2 rounded-lg p-3 flex border-gray-300' />

                                </div>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Phone number</label>
                                    <input type="text" className='border-2 rounded-lg p-3 flex border-gray-300' />

                                </div>

                            </div>

                        <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2'>Email</label>

                        <input type='email' className='border-2 rounded-lg p-3 flex border-gray-300' />
                        </div>

                        <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2'>subject</label>

                        <input type='text' className='border-2 rounded-lg p-3 flex border-gray-300' />
                        </div>

                        <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2'>message</label>

                        <textarea className='border-2 rounded-lg p-3 border-gray-300' rows="10"></textarea>
                        </div>

                        <button className='w-full p-4 texr-gray-100 mt-4'>Send Message</button>

                        </form>

                    </div>

                </div>

            </div>


            <div className='flex justify-center py-12' >
            <Link to="main" spy={true} smooth={true} offset={50} duration={500}>
    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 duration-300'>
        <HiOutlineChevronDoubleUp size={30} className='m-auto text-[#5651e5]' />
    </div>
</Link>
            </div>

        </div>

    </div>
  )
}

export default Contact