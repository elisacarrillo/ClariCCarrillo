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
            window.location.href = '/choreography'
            }
  return (
   
   
    <div className='all'>
     <div className='choice1' onClick={navContent}>
        <h1 className='words'>Content Creation</h1>
    </div>
    <div className='choice2' onClick={navChoreo}>
        <h1 className='words'>Choreography</h1>
        </div>
    <div className='choice3' onClick={navAwards}>
        <h1 className='words'>Awards</h1>
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