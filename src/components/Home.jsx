import React from 'react';
import image from './ClariPhoto.jpeg';
import './Home.css';
import { useNavigate } from "react-router-dom";
import { navigate } from '@reach/router';
function Home() {
  // let navigate = useNavigate();
  const navAbout = () =>{
    window.location.href = '/about'
  }
  const navContact = () =>{
    window.location.href = '/contact'
  }
  const navWork = () =>{
    window.location.href = '/mywork'
  }
  return (
    
  
    <div className='all'>
      {/* <h1>Home</h1> */}
    <div class='zcontainer'>
      {/* <div class='helper-poo'> </div> */}
    <div className='sectionrk1'>
        <img class="imag2" src={image} />
            <div className='contentz'>
                <h1>Clarisa Carrillo</h1>
                <p>  Emerson College '24</p>
                <p>  Polling Center Research Assistant</p>
                <p>  Intercultural Student Affairs Student Worker</p>
                <p>  Social Media and Programming Intern</p>
            </div>        
    </div>

    <br></br>
    {/* <div class = 'container'> */}
    <div class='row'>
    <div class="col-sm" onClick={navAbout}>
        <h3>About Me</h3>
        <p>More about my background, including my education history</p>
    </div>
    <div class="col-sm" onClick={navContact}>
        <h3>Contact Me</h3>
        <p>Click here for my email, number, and socials</p>
    </div>
    <div class="col-sm" onClick={navWork}>
        <h3>My Work</h3>
        <p>A comprehensive portfolio including content creation, choreography, and papers</p>
    </div>
    </div>
    {/* </div> */}
    </div>
    
    
    {/* <div className='helper-poo'></div> */}
    </div>
  );
}
export default Home;