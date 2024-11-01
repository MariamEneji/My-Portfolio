import Image from 'next/image'
import React from 'react'

const Skills = () => {
  return (
    <div className='lg:h-screen p-2 mx-5 ' id='skills'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center  h-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
            <h2 className='text-4xl font-bold py-4'>What I Can Do</h2>
            {/* grid container */}
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>


                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 '>

                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>

                        <div className='m-auto'>
                            <Image alt='/' src='/assets/skills/html.png' width='64' height='64' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>




                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>

                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>

                        <div className='m-auto'>
                            <Image alt= '/' src='/assets/skills/css.png' width='64' height='64' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>CSS</h3>
                        </div>
                    </div>
                </div>




                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>

                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>

                        <div className='m-auto'>
                            <Image alt= '/' src='/assets/skills/javascript.png' width='64' height='64' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>JAVASCRIPT</h3>
                        </div>
                    </div>
                </div>




                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>

                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>

                        <div className='m-auto'>
                            <Image alt= '/' src='/assets/skills/react.png' width='64' height='64' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>REACT</h3>
                        </div>
                    </div>
                </div>




                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>

                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>

                        <div className='m-auto'>
                            <Image alt= '/' src='/assets/skills/nextjs.png' width='64' height='64' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>NEXT JS</h3>
                        </div>
                    </div>
                </div>




                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>

                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>

                        <div className='m-auto'>
                            <Image alt= '/' src='/assets/skills/tailwind.png' width='64' height='64' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>TAILWIND CSS</h3>
                        </div>
                    </div>
                </div>




                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>

                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>

                        <div className='m-auto'>
                            <Image alt= '/' src='/assets/skills/github1.png' width='64' height='64' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>GITHUB</h3>
                        </div>
                    </div>
                </div>


                                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>

                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>

                        <div className='m-auto'>
                            <Image alt= '/' src='/assets/skills/webflow1.png' width='64' height='64' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>WEBFLOW</h3>
                        </div>
                    </div>
                </div>



            </div>

        </div>

    </div>
  )
}

export default Skills