import React from 'react';
import image from './ClariPhoto.jpeg';
import './Home.css';
import { useNavigate } from "react-router-dom";
import { navigate } from '@reach/router';
import './ContentCreation.css';
import image2 from './images/1.png';
import image3 from './images/2.png';
import image4 from './images/3.png';
import image5 from './images/4.png';
import image6 from './images/chella man 8x10.png';
import image7 from './images/Kombilesa.png';
import image8 from './images/October 15th.png';
import image9 from './images/Vinyl Pop Up .png';
import image10 from './images/5.png';
import image11 from './images/6.png';
import image12 from './images/7.png';
import image13 from './images/8.png';
import image14 from './images/Untitled (1).JPEG'
import image15 from './images/Queervolution.png'
import image16 from './images/Portfolio.png'
import image17 from './images/Portfolio Feedback.png'
import image18 from './images/Portfolio (1)..png'
import video1 from './images/Dr. Reece Reel.mp4'
import video2 from './images/ERG Reel 1 (1)..mp4'
import video3 from './images/Los Angeles.mp4'



function ContentCreation() {
  // let navigate = useNavigate();
  
//   const navContact = () =>{
//     window.location.href = '/contact'
//   }
//   const navWork = () =>{
//     window.location.href = '/mywork'
//   }
  return (
   
    <div class="row">
        <div class="column">
            
            <img src={image5}/>
            <img src={image6}/>
            <img src={image7}/>
            <img src={image14}/>
            <img src={image18}/>
            <img src={image12}/>
          
        </div>
        <div class="column">
           
            <img src={image2}/>
            <img src={image3}/>
            <img src={image4}/>
            <img src={image15}/>
            <video src={video1} controls/>
        </div>
        <div class="column">
            
            <img src={image8}/>
            <img src={image9}/>
            <img src={image10}/>
            <img src={image16}/>
            <video src={video2} controls/>
        </div>
        <div class="column">
          
            <img src={image11}/>
            
            <img src={image13}/>
            <img src={image17}/>
            <video src={video3} controls/>
            
        </div>
       
    </div>
    
  );
}
export default ContentCreation;