import React, { useState } from 'react';
import './slider.scss';

function Slider({ children, sliderLength, currentIndexValue, ...props }) {
    const [currentIndex, setCurrentIndex] = useState(currentIndexValue);

    const next = () => {
        const newIndex = (currentIndex + 1) % sliderLength;
        setCurrentIndex(newIndex);
        props.changeIndex(newIndex);
    };
    const prev = () => {
        const newIndex = (currentIndex - 1 + sliderLength) % sliderLength;
        setCurrentIndex(newIndex);
        props.changeIndex(newIndex);
    };

    return (
      <>
        <div className="slider-container">

            {children}

        <div className="slider_buttonsContainer">
            <button className='slider_button' onClick={prev}>Назад</button>
            <button className='slider_button' onClick={next}>Дальше</button>
        </div>
            

            <div>
            {currentIndex + 1} / {sliderLength}
            </div>
        </div>
      </>
    );
  }

    export default Slider;
