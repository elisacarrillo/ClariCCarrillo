import React from 'react';
import image2 from './image (1).png';
import Button from 'react-bootstrap/Button';
import './AboutMe.css';
import Pdf from './Clarisa_Carrillo_Resume_FINAL.pdf'
function About() {
  const gotoResume = () =>{
    window.location.href = Pdf;
  }
  return (
    
  
    <div className='all'>
 
    <div className='container'>
    <div className='sectionrk2'>
        
            <div className='content'>
                
                <h1 className='textMiddle'>About Me</h1>
                <p>Clarisa Carrillo is currently a Junior student at Emerson College majoring in Political Communications with a minor in Pre-Law and Dance. She is the President of the Communications, Politics and Law Association and a member of Emerson’s Urban Dance Theater. Additionally, she works in the Emerson Office of Intercultural Affairs and is a research assistant with Emerson College Polling. In her free time she loves to sing, dance, read and discover new places to eat!</p>
                <a className='buttonz' variant="outline-dark" size='sm' onClick={gotoResume} href={Pdf} target="_blank" 
                    rel="noreferrer">Click here to learn more</a>
            </div>
            <img class="imag" src={image2} />
            
    
    </div>
    </div>
    <div className='helper'></div>
  
    </div>
  );
}
export default About;