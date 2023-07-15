import React from 'react'
import "./Contact.css"
import PizzaLeft from "../../assets/pizzaLeft.jpg"

const Contact = () => {
    return (
        <div className='contact'>
            <div className="leftSide" style={{ backgroundImage: `url(${PizzaLeft})` }}>

            </div>
            <div className="rightSide">
                <h1>Contact Us</h1>

                <form id="contact-form" method='POST'>
                    <label htmlFor="name">Full Name</label>
                    <input type="text" name="name" placeholder='Enter Full Name: ' />

                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder='Enter Email: ' />

                    <label htmlFor="message">Message</label>
                    <textarea rows={6} name="message" required />

                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact