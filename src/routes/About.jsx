import React from 'react'
import { AboutContact } from '../Components/AboutContact'
import { Footer } from '../Components/Footer'
import { HeroImg2 } from '../Components/HeroImg2'
import { Navbar } from '../Components/Navbar'

export const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT." text="I'm a Tech. Enthusiast who not only uses technology but also loves to explore it." />
      <AboutContact />
      <Footer />
    </div>
  )
}
