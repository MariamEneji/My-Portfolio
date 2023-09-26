import React from 'react'
import aboutme from '/public/assets/projects/aboutme.JPG'
import clock from '/public/assets/projects/clock.JPG'
import movieApp from '/public/assets/projects/movie app.PNG'
import Image from '/public/assets/projects/Image.JPG'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
        <h2 className='text-3xl font-bold py-4'>What I've Built</h2>

        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem title='Movie App' backgroundImg={movieApp} projectUrl='https://hng-movie-app-gamma.vercel.app/' />

          <ProjectItem title='Image Search App' backgroundImg={Image} projectUrl='https://hng-image-gallery-plum.vercel.app/home' />

          <ProjectItem title='Clock' backgroundImg={clock} projectUrl='https://clock-fawn-psi.vercel.app/' />

          <ProjectItem title='My Profile' backgroundImg={aboutme} projectUrl='https://techmonstro-assessment.vercel.app/' />
        
        </div>


      </div>

    </div>
  )
}

export default Projects