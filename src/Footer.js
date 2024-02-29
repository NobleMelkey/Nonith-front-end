import React from "react";
import './Footer.css';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <section className="contact" id="contact">
          <div className="contact-text">
            <h2>Contact <span>Me!</span></h2>
            <h4>Have a question, comment, or feedback? </h4>
            <p>We'd love to hear from you! Feel free to reach out to us using the contact information provided. Our team is here to assist you with any inquiries you may have.</p>
            <div className="list">
              <li><a href="tel:8072586621">8072586621</a></li>
              <li><a href="tel:8056544266">8056544266</a></li>
              <li><a href="mailto:noblesam66@gmail.com">noblesam66@gmail.com</a></li>
            </div>
    
            <div className="contact-icons">
              <a href="#"><SocialIcon url="www.facebook.com"  style={{ height: 25, width: 25 }} /></a>
              <a href="#"><SocialIcon url="www.google.com"  style={{ height: 25, width: 25 }}/></a>
              <a href="#"><SocialIcon url="www.X.com" style={{ height: 25, width: 25 }} /></a>
              <a href="#"><SocialIcon url="www.instagram.com"  style={{ height: 25, width: 25 }}/></a>
              <a href="#"><SocialIcon url="https://linkedin.com/in/couetilc"  style={{ height: 25, width: 25 }}/></a>
            </div>
          </div>
          <div className="contact-form">
            <form action="">
              <input type="name" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="tel" placeholder="Your Mobile Number" required />
              <textarea cols="35" rows="10" placeholder="Leave a massage" required></textarea>
              <input type="submit" value="Send Message" className="submit" required />
            </form>
          </div>
          
        </section>
       
      );
    };

export default Footer;
