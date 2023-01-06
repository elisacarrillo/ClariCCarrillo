import React from 'react';
import image2 from './image (1).png';
import image3 from './img2.jpeg';
import image4 from './ClariPhoto.jpeg';

// import Button from 'react-bootstrap/Button';
import video1 from './video1.mp4';

import './MyWork.css';
function MyWork() {
    const navContent = () =>{
        window.location.href = '/contentcreation'
      }

      const navAwards = () =>{
        window.location.href = '/awards'
        }
        const navChoreo = () =>{
            window.location.href = '/choreo'
            }
  return (
   
   <div className='Absolute-Center'>
    <div class='row'>
      <br></br>
      <div class='col-md' onClick={navContent}><h3 className='words'>Content Creation</h3></div><div class='col-md' onClick={navChoreo}>
        <h3 className='words'>Choreography</h3>
      </div>
      <div class='col-md' onClick={navAwards}>
        <h3 className='words'>Awards</h3>
      </div>
      <br></br>
    </div>
   
    </div>
    
    // </div>
    // <div class="row">
    //     <div class="column">
            
    //         <img src={image2}/>
    //         <img src={image3}/>
    //         <img src={image4}/>
    //         <img src="nature.jpg"/>
    //         <img src="mist.jpg"/>
    //         <img src="paris.jpg"/>
    //     </div>
    //     <div class="column">
           
    //         <img src={image2}/>
    //         <img src={image3}/>
    //         <img src={image4}/>
    //     </div>
    //     <div class="column">
            
    //         <img src={image2}/>
    //         <img src={image3}/>
    //         <img src={image4}/>
    //     </div>
    //     <div class="column">
          
    //         <img src={image2}/>
    //         <img src={image3}/>
    //         <img src={image4}/>
    //     </div>
    // </div>
    
  );
}
export default MyWork;