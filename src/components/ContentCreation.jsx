import React from 'react';
import image from './ClariPhoto.jpeg';
import './Home.css';
import { useNavigate } from "react-router-dom";
import { navigate } from '@reach/router';
import './ContentCreation.css';
import image2 from './image (1).png';
import image3 from './img2.jpeg';
import image4 from './ClariPhoto.jpeg';
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
            
            <img src={image2}/>
            <img src={image3}/>
            <img src={image4}/>
          
        </div>
        <div class="column">
           
            <img src={image2}/>
            <img src={image3}/>
            <img src={image4}/>
        </div>
        <div class="column">
            
            <img src={image2}/>
            <img src={image3}/>
            <img src={image4}/>
        </div>
        <div class="column">
          
            <img src={image2}/>
            <img src={image3}/>
            <img src={image4}/>
        </div>
    </div>
    
  );
}
export default ContentCreation;