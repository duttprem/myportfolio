import './footer.css';
import React from 'react'
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{ color : "#fff", marginRight : "2rem"}}/>
                    <div>
                        <p>Mathura City.</p>
                        <p>Uttar Pradesh,India.</p>
                    </div>
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{ color : "#fff", marginRight : "2rem"}}/>
                    +91 8958070079</h4>
                    
                    </div>
                <div className='email'>
                    <h4><FaMailBulk size={20} style={{ color : "#fff", marginRight : "2rem"}}/>
                    premdutt083@gmail.com</h4>
                    
                    </div>

            </div>
            <div className='right'>
                <h4>About Me</h4>
                <p>As the sole front-end developer, I create responsible  design and development of user interfaces using HTML, CSS, and JavaScript,React JS. And collaborate with stakeholders to ensure that the website or application meets their needs and requirements.</p>
                <div className='social'>
                <FaFacebook size={30} style={{ color : "#fff", marginRight : "2rem"}}/>
                <FaInstagram size={30} style={{ color : "#fff", marginRight : "2rem"}}/>
                <FaLinkedin size={30} style={{ color : "#fff", marginRight : "2rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer