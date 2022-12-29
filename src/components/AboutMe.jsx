import React from 'react';
import image2 from './image (1).png';
import Button from 'react-bootstrap/Button';
import './AboutMe.css';
function About() {
  return (
    
  
    <div className='all'>
      {/* <h1>Home</h1> */}

      <div className='helper1'>
      </div>

    <div className='sectionz1'>
        
            <div className='text'>
                
                <h1 className='textMiddle'>About Me</h1>
                <p>Where where you born? Where did u go to hs? Where do u go to college? What are ur current positions? What kind of job are u loooking for?</p>
                <Button className='buttonz' variant="outline-dark" size='sm' >Click here to learn more</Button>
            </div>
            <img class="imag" src={image2} />
            
    
    </div>
    <div className='helper'></div>
  
    </div>
  );
}
export default About;