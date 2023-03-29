import React from 'react'
import { Footer } from '../Components/Footer'
import { HeroImg } from '../Components/HeroImg'
import { Navbar } from '../Components/Navbar'
import { Work } from '../Components/Work'

export const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroImg/>
        <Work />
        <Footer />
    </div>
  )
}
