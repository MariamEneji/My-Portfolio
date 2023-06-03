import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div  className='w-full flex p-2 md:h-screen items-center py-16 '>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-6 '>
        <div className='col-span-2' >
          <h2 className='font-bold text-3xl' >A little about me</h2>
          <p className='py-2 text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae molestiae magnam quo laboriosam rerum harum tempora deserunt commodi magni laudantium recusandae aliquid, eaque perspiciatis repellendus officiis quae tempore, esse facere, voluptates dolorem architecto ipsa?
            </p>
            <p className='py-2 text-gray-400'> Eius dolorum at voluptas dicta doloremque laudantium autem asperiores vero. Eligendi, quidem sint! Beatae quae rem commodi consequuntur! Ratione totam voluptate mollitia consequatur laborum velit, sapiente maxime voluptatum dignissimos recusandae commodi alias tenetur tempora veritatis a iusto!</p>

            <p className='text-blue-500 cursor-pointer py-2 underline'>Check out some of my latest projects</p>
       
        </div>

        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-100'>
          <Image src="/assets/may.jpg" width={200} height={200} className='w-full rounded-xl' />
        </div>
      </div>
    </div>
  )
}

export default About