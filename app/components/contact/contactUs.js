import React from 'react'
import Button from '../common/Button'
import "./styles.css"
const contactUs = () => {
  return (
    <>
      <section className="contact-us" style={{backgroundImage : "url(./back-3.jpg)"}}>
        <h2>Contact Us</h2>
        <form className="contact-form">
          <label htmlFor="name"></label>
          <input type="text" id="name" name="name" placeholder="Your Name" required></input>
          <label htmlFor="email"></label>
          <input type="email" id="email" name="email" placeholder="Your Email" required></input>

          <label htmlFor="message"></label>
          <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
          <Button text={"Send Message"}/>
          {/* <button type="submit" className="submit-button">Send Message</button> */}
        </form>
        <br/><br/>
        <hr />
        <div className="office-location">
          <h3>Our Location</h3>
          <iframe className='map-placeholder'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509504!2d-122.42144638468174!3d37.77492917975979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c2e6ba7a9%3A0xa11e1218c9cba524!2s123%20Market%20St%2C%20San%20Francisco%2C%20CA%2094105%2C%20USA!5e0!3m2!1sen!2sus!4v1678235678901!5m2!1sen!2sus"
            width="600"
            height="400"
            style={{ border: "0",opacity:"0.8" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <hr />
    </>
  )
}

export default contactUs
