import React, { useState } from 'react'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import "./Slider.scss"

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        "https://i.imgur.com/eVnUOrp.jpg",
        "https://i.imgur.com/iambjRc.jpg",
        "https://i.imgur.com/W4HB3yU.jpg",
        "https://i.imgur.com/PJ1U2gq.jpg"
    ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1)
    };
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1)
    };

  return (
      <div className='slider'>
          <div className="container" style ={{transform:`translateX(-${currentSlide * 100}vw)`}}>
              <img src={data[0]} alt="" />
              <img src={data[1]} alt="" />
              <img src={data[2]} alt="" />
              <img src={data[3]} alt="" />
          </div>
          <div className="icons">
              <div className="icon" onClick={prevSlide}>
                  <WestOutlinedIcon />
              </div>
              <div className="icon" onClick={nextSlide}>
                  <EastOutlinedIcon />
              </div>
          </div>
    </div>
  )
}

export default Slider