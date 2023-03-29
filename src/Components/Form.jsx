import React from 'react'

import "./FormStyles.css"

export const Form = () => {
  return (
    <div className='form'>
        <form action="">
            <lebel>Your Name</lebel>
            <input type="text"></input>
            <lebel>Email</lebel>
            <input type="email"></input>
            <lebel>Subject</lebel>
            <input type="text"></input>
            <lebel>Message</lebel>
            <textarea rows="6" placeholder='Type your message here.'></textarea>
            <button type="submit" className='btn'>Submit</button>
        </form>
    </div>
  )
}
