import React, {useEffect, useState} from 'react'
import Image from 'next/image'
// import Link from 'next/link'
import { Link } from 'react-scroll'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub, FaTwitter} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);

    const handleNav  = () => {
        setNav(!nav);
    };
   
useEffect(() => {
const handleShadow = () => {
if (window.scrollY >= 90) {
    console.log('works');
    setShadow(true)
}
else {
    setShadow(false)
}
};

window.addEventListener('scroll', handleShadow)
},[]);

  return (
    <div className={shadow ? 'fixed bg-[#ecf0f3] w-full h-20 shadow-xl z-50 ' : 'fixed bg-[#ecf0f3] w-full h-20 z-50'
   } >
        <div className='flex justify-between items-center w-full h-full px-2 md:px-16 '>
        <Link to="main" spy={true} smooth={true} offset={-100} duration={500}    >
        <Image src="/assets/M.png" alt="/" width={80} height={80} />
        </Link>

            <ul className='hidden md:flex justify-between gap-4  '> 
                <li className='hover:font-bold uppercase text-sm  p-2'>
                    <Link to="main" spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
                </li>

                <li className='hover:font-bold uppercase text-sm p-2'>
                    <Link to="about" spy={true} smooth={true} offset={-100} duration={500}>About</Link>
                </li>

                <li className='hover:font-bold uppercase text-sm p-2'>
                    <Link to="skills" spy={true} smooth={true} offset={-100} duration={500}>Skills</Link>
                </li>

                <li className='hover:font-bold uppercase text-sm p-2'>
                    <Link to="projects" spy={true} smooth={true} offset={-100} duration={500}>Projects</Link>
                </li>

                <li className='hover:font-bold uppercase text-sm p-2'>
                    <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>Contact Me</Link>
                </li>
            </ul>


            {/* Mobile button */}
            <div onClick={handleNav} className='md:hidden'>
                <AiOutlineMenu size={30}  />
            </div>
            </div> 
            
            <div className={nav ? 'fixed left-0 top-0 w-full h-screen bg-black/50 md:hidden' : ''}></div>
            
            <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500 font-semibold': 'hidden'}>
                <div>


                    <div className='flex justify-between items-center w-full'>
                   < Link to="main" spy={true} smooth={true} offset={-100} duration={500} onClick={handleNav}>
                    <Image src="/assets/M.png" alt="/" width={40} height={40} />
                    </Link>
                    <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer'> <AiOutlineClose  /></div>
                    </div>

                    <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%] md:w-[90%] py-4'>Let's make magic together.</p>
                    </div>
                </div>

                <div className=' flex flex-col '>
                <ul> 
                <li className='hover:font-bold uppercase text-sm py-2 '>
                    <Link to="main" spy={true} smooth={true} offset={-100} duration={500} onClick={handleNav}>Home</Link>
                </li>

                <li className='hover:font-bold uppercase text-sm py-2'>
                    <Link to="about" spy={true} smooth={true} offset={-100} duration={500} onClick={handleNav}>About</Link>
                </li>

                <li className='hover:font-bold uppercase text-sm py-2'>
                    <Link to="skills" spy={true} smooth={true} offset={-100} duration={500} onClick={handleNav}>Skills</Link>
                </li>

                <li className='hover:font-bold uppercase text-sm py-2'>
                    <Link to="projects" spy={true} smooth={true} offset={-100} duration={500} onClick={handleNav}>Projects</Link>
                </li>

                <li className='hover:font-bold uppercase text-sm py-2'>
                    <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} onClick={handleNav}>Contact Me</Link>
                </li>
            </ul>

            <div className='pt-20'>
                <p className='uppercase tracking-widest text-[#5651e5]'>Let's Connect</p>
                <div className='flex justify-between items-center w-[75%] my-4'>
                    <div  className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105 duration-300'>
                    <a  href='https://www.linkedin.com/in/mariam-eneji-72339a239/' target='_blank' ><FaLinkedinIn /></a>
                    </div>

                    <div className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105 duration-300'>
                    <a href='https://github.com/MariamEneji' target='_blank'  ><FaGithub /></a>
                    </div>

                    <div  className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105 duration-300'>
                    <a href='https://twitter.com/Mariam_Eneji' target='_blank' > <FaTwitter /></a>
                    </div>

                    <div  className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105 duration-300'>
                    <a href='mailto: enejimariam1997@gmail.com' target='_blank' > <BsFillPersonLinesFill /></a>
                    </div>
                    
                    
                    
                </div>

            </div>
                </div>

            </div>
            
        </div>
  
  )
}

export default Navbar