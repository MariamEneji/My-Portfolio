import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div>
      <div>
        <div className='w' >
          <h1 className='font-bold text-4xl' >A little about me</h1>
        </div>

        <div>
          <Image src="/assets/about.jpg" width={200} height={200} />
        </div>
      </div>
    </div>
  )
}

export default About