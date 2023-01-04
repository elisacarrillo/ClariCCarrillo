import React from 'react';
import image2 from './DSC01248.jpeg';
import Button from 'react-bootstrap/Button';
import './Contact.css';
function Contact() {
  return (
    <div className='all'>
   
  <div className='section1'>
      
          <div className='content'>
              
              <h1 className='textMiddle'>Contact Me</h1>
              <p>(646) 334-5344</p>
              <p>clarisa.c.carrillo@gmail.com</p>
              <p>Boston, MA</p>
              <p></p>
              
          </div>
          <img class="imag" src={image2} />
          
  
  </div>
  </div>

  );
}
export default Contact;