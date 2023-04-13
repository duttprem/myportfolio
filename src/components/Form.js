import React from 'react'
import "./form.css"
const Form = () => {
  return (
    <div className='form'>
        <form>
            <label>Your Name</label>
            <input type='text'></input>
            <label>Your Email</label>
            <input type='email'></input>
            <label>Your Number</label>
            <input type='text'></input>
            <label>Message</label>
            <textarea rows="6" placeholder='Type Your message here.' />
            <buttom className="btn">Submit</buttom>
        </form>
    </div>
  )
}

export default Form