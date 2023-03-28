import React from 'react'
import { Footer } from '../Components/Footer'
import { HeroImg } from '../Components/HeroImg'
import { Navbar } from '../Components/Navbar'

export const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroImg/>
        <Footer />
    </div>
  )
}
