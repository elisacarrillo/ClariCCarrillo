import React from 'react';
import image2 from './image (1).png';
import Button from 'react-bootstrap/Button';
import './Choreo.css';
import Pdf from './Clarisa_Carrillo_Resume_FINAL.pdf'
import video from './IMG_0826.mov'
import "../../node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';
function Choreo() {
  const gotoResume = () =>{
    window.location.href = Pdf;
  }
  return (
    
  
    <div className='allz'>
        <Player
            playsInline
            poster="/assets/poster.png"
            src={video}
        />
   
   
  
    </div>
  );
}
export default Choreo;