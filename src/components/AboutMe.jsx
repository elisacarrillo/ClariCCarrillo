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

    <div className='section1'>
        
            <div className='content'>
                
                <h1 className='textMiddle'>About Me</h1>
                <p>Clarisa Carrillo is currently a Junior student at Emerson College majoring in Political Communications with a minor in Pre-Law and Dance. She is the President of the Communications, Politics and Law Association and a member of Emerson’s Urban Dance Theater. Additionally, she works in the Emerson Office of Intercultural Affairs and is a research assistant with Emerson College Polling. In her free time she loves to sing, dance, read and discover new places to eat!</p>
                <Button className='buttonz' variant="outline-dark" size='sm' >Click here to learn more</Button>
            </div>
            <img class="imag" src={image2} />
            
    
    </div>
    <div className='helper'></div>
  
    </div>
  );
}
export default About;