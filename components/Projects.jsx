import React from 'react'
import todo from '/public/assets/todo.jpg'
import counter from '/public/assets/counter.jpg'
import coffee from '/public/assets/coffee.jpg'
import aboutme from '/public/assets/aboutme.jpg'
import clock from '/public/assets/clock.jpg'
import movieApp from '/public/assets/movie app.jpg'
import Image from '/public/assets/Image.jpg'
import reeves from '/public/assets/reeves.jpg'
import elvis from '/public/assets/elvis.png'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16 '>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
        <h2 className='text-3xl font-bold py-4'>What I've Built</h2>

        <div className='grid md:grid-cols-2 gap-8'>

        <ProjectItem title='Portfolio Website' backgroundImg={elvis} projectUrl='https://elvis-anselm.vercel.app' tech='Next Js' />

        <ProjectItem title='Reeves Shop' backgroundImg={reeves} projectUrl='https://timbu-app.vercel.app' tech='Next Js' />

          <ProjectItem title='Movie App' backgroundImg={movieApp} projectUrl='https://hng-movie-app-gamma.vercel.app/' tech='Vite + React' />

          <ProjectItem title='Image Search App' backgroundImg={Image} projectUrl='https://hng-image-gallery-plum.vercel.app/home' tech='React Js' />

          <ProjectItem title='Clock' backgroundImg={clock} projectUrl='https://clock-fawn-psi.vercel.app/' tech='JavaScript' />

          <ProjectItem title='My Profile' backgroundImg={aboutme} projectUrl='https://techmonstro-assessment.vercel.app/' tech='Next Js' />
        
          <ProjectItem title='To do List' backgroundImg={todo} projectUrl='https://vue-todo-app-pink.vercel.app' tech='Vue Js' />

          <ProjectItem title='Coffee Listing Page' backgroundImg={coffee} projectUrl='https://mays-coffee-listing-page.vercel.app' tech='Next Js' />

          <ProjectItem title='Counter' backgroundImg={counter} projectUrl='https://alt-school-second-semester-exam-counter.vercel.app' tech='React Js' />
        </div>


      </div>

    </div>
  )
}

export default Projects