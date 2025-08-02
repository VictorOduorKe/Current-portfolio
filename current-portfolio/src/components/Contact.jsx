import React from 'react'

const Contact = () => {
  return (
    <>
    <section className='contact-container' id='contact'>
        <h1>CONTACT US HERE</h1>
        <div className="contact-form">
            <form action="" id="contact-form">
               <div className="input-field">
                <label htmlFor="username">Full name</label>
                <input type="text" name='username' placeholder='enter full name'/>
               </div>
               <div className="input-field">
                <label htmlFor="phone">Phone No</label>
                <input type="tel" name='phone' placeholder='enter valid phone number'/>
               </div>
               <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" name='email' placeholder='enter email'/>
               </div>
               <div className="input-field">
                <label htmlFor="message">Message</label>
                <textarea name='message' placeholder='type message' id='message'></textarea>
               </div>
               <button type='submit'>Send</button>
            </form>
        </div>
    </section>
    </>
  )
}

export default Contact