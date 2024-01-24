import React, { Component, useEffect } from 'react'
import IntroImg from "../assets/intro-bg.jpg"
import profile from "../assets/profile.png"
import cv from "../assets/resume.pdf"
import { Link } from 'react-router-dom'
import roles from '../data/roles.json'
import { useState } from 'react'


export const HeroImg = () => {
  // const [i, setI] = useState(0);

  // setInterval(() => {
  //   setI(i === roles.length - 1 ? 0 : (i + 1))
  // }, 3000); // 3 seconds delay between each message change



  // useEffect(() => {
  //   setI(0)
  // }, [i])



  return (
    <div className='h-full w-full'>
      <div className="w-full h-[100vh] relative">
        <img src={IntroImg} alt="IntroImg" className="w-full h-full bg-cover bg-center object-cover" />
      </div>
      <div className='w-full h-full absolute top-0 left-0 bg-[#000] opacity-[0.8]'></div>
      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-[50%] left-[50%] text-center">
        <div className=" h-[190px] md:h-[250px] mb-[10px] flex justify-center">
          <img src={profile} alt="profile-cleanBG" className='h-full rounded-[100%] font-extrabold' />
        </div>
        <p className='text-[1.4rem] font-normal'>Hi, I'm Pabitra Kumar Bebartta</p>
        <Role />
        <div>
          <form method="get" action={cv} target='_blank'>
            <button type="submit" className='btn my-[1rem] mx-[0.2rem]' >Download CV</button>
            <Link to="/Contact" className='btn btn-light my-[1rem] mx-[0.2rem]'>Contact</Link>
          </form>

        </div>
      </div>
    </div>
  )
}



class Role extends Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 0,
      offset: 0,
      len: roles.length,
      forwards: true,
      skip_count: 0,
      skip_delay: 15,
      speed: 70,
      part: '',
    }
  }
  timer() {
    this.setState({
      i: this.state.i === roles.length - 1 ? 0 : this.state.i + 1
    })
  }
  componentDidMount() {
    // this.intervalId = setInterval(this.timer.bind(this), 3000);
    setInterval(() => {
      if (this.state.forwards) {
        if (this.state.offset >= roles[this.state.i].name.length) {
          this.setState({
            skip_count: this.state.skip_count + 1
          })
          if (this.state.skip_count === this.state.skip_delay) {
            this.setState({
              forwards: false,
              skip_count: 0
            })
          }
        }
      }
      else {
        if (this.state.offset === 0) {
          this.setState({
            forwards: true,
            i: this.state.i >= this.state.len - 1 ? 0 : this.state.i + 1,
            offset: 0
          })
        }
      }
      this.setState({
        part: roles[this.state.i].name.substring(0, this.state.offset)
      })
      if (this.state.skip_count === 0) {
        if (this.state.forwards) {
          this.setState({
            offset: this.state.offset + 1
          })
        }
        else {
          this.setState({
            offset: this.state.offset - 1
          })
        }
      }
    }, this.state.speed);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    return (
      <h1 className='md:text-[4rem] pt-[0.6rem] pb-[1.5rem] px-0 text-[3rem] font-semibold transition duration-3000'> A {this.state.part}</h1>
    );
  }
}