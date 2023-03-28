import React from 'react'
import { Footer } from '../Components/Footer'
import { HeroImg2 } from '../Components/HeroImg2'
import { Navbar } from '../Components/Navbar'

export const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="PROJECTS." text="Some of my most recent works"/>
      <Footer/>
    </div>
  )
}
