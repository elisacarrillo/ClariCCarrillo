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
          
        </div>
        <div class="column">
           
            <img src={image2}/>
            <img src={image3}/>
            <img src={image4}/>
        </div>
        <div class="column">
            
            <img src={image8}/>
            <img src={image9}/>
            <img src={image10}/>
        </div>
        <div class="column">
          
            <img src={image11}/>
            <img src={image12}/>
            <img src={image13}/>
        </div>
    </div>
    
  );
}
export default ContentCreation;