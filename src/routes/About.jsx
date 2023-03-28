import React from 'react'
import { Footer } from '../Components/Footer'
import { HeroImg2 } from '../Components/HeroImg2'
import { Navbar } from '../Components/Navbar'

export const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="ABOUT." text="I'm a Full-Stack Web Devloper" />
      <Footer/>
    </div>
  )
}
