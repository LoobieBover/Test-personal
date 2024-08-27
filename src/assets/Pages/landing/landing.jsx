import React from 'react'
import Rejection from '../rejection/Rejection.jsx';
import Sure from '../Sure/Sure.jsx';
import './landing.css';

const Landing = () => {
  return (
    <div className='main'>
      <img src="./src/assets/Components/Bgimages/landing.jpg" alt="" />
    <h2>Do you accept my propose pookie</h2>
    <video src="./src\assets/Components/Gifs/landing.gif"></video>
    <div className="plate">
      <p>Hey , I have just made this page so that i am afraid to approach you face to face .Just wanted to tell you that I liked you .If you are gonna Reject me it is ok but you are going to be the first and last  girl whom I approach and liked more than any other.I have not taken this much work to make my own portfolio than making this web page just to take your No.About me : I am a  YD Student . Not good physique , Also 1 Year Smaller than you .Kind yet dumb and last but not least I am Ugly ASF.Think Before choosing an option.What Say ?</p>

    </div>
    <button type='button'
            onClick={Rejection}>No</button>
    <img src="./src/assets/Components/Bgimages/Screenshot_2024-08-27_211026-removebg-preview.png" alt="" />
    <button type='button'
            onClick={Sure}>Yes</button>
    </div>
  )
}

export default Landing;