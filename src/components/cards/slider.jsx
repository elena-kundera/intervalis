import React, { useState } from 'react';

function Slider({ children, sliderLength, currentIndexValue, ...props }) {
    const [currentIndex, setCurrentIndex] = useState(currentIndexValue);

    const next = () => {
        const newIndex = (currentIndex + 1) % sliderLength;
        setCurrentIndex(newIndex);
        props.changeIndex(newIndex); // !!!
    };
    const prev = () => {
        const newIndex = (currentIndex - 1 + sliderLength) % sliderLength;
        setCurrentIndex(newIndex);
        props.changeIndex(newIndex);  // !!!
    };

    return (
      <>
        <div className="slider-container">

            {children}

        <div>
            <button onClick={prev}>Prev</button>
            <button onClick={next}>Next</button>
        </div>
            

            <div>
            {currentIndex + 1} / {sliderLength}
            </div>
        </div>
      </>
    );
  }

    export default Slider;
