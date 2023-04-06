import React from 'react'

export const Form = () => {
  return (
    <div className='form'>
        <form action="" className='flex flex-col px-[1rem] py-[4rem] m-auto max-w-[600px]'>
            <lebel className='text-[#fff]'>Your Name</lebel>
            <input className='mb-[1rem] py-[10px] px-[18px] text-[1.2rem] bg-[rgba(255,255,255,0.1)] border-[rgba(255,255,255,0.1)] text-[#f4f4f4]' type="text"></input>
            <lebel className=' text-[#fff]'>Email</lebel>
            <input className='mb-[1rem] py-[10px] px-[18px] text-[1.2rem] bg-[rgba(255,255,255,0.1)] border-[rgba(255,255,255,0.1)] text-[#f4f4f4]' type="email"></input>
            <lebel className=' text-[#fff]'>Subject</lebel>
            <input className='mb-[1rem] py-[10px] px-[18px] text-[1.2rem] bg-[rgba(255,255,255,0.1)] border-[rgba(255,255,255,0.1)] text-[#f4f4f4]' type="text"></input>
            <lebel className=' text-[#fff]'>Message</lebel>
            <textarea rows="6" placeholder='Type your message here.' className='mb-[1rem] py-[10px] px-[18px] text-[1.2rem] bg-[rgba(255,255,255,0.1)] border-[rgba(255,255,255,0.1)] text-[#f4f4f4]'></textarea>
            <button type="submit" className='btn'>Submit</button>
        </form>
    </div>
  )
}
