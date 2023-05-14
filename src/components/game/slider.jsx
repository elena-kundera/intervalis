import React, { useState, useEffect, useRef } from 'react';
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

    // const ref = useRef();
    // useEffect(() => ref.current.focus(), []);

    
    // const [total, setTotal] = useState(0);
    // const handleChange = () => {
    //   const newTotal = (total + 1);
    //   setTotal(newTotal);
    // };

    return (
      <>
        <div className="slider-container">

            {children} 
{/* не понимаю как сделать задание, если детей я передаю вот так, куда пропсы прописывать?  */}

        <div className="slider_buttonsContainer">
            <button className='slider_button' onClick={prev} >Назад</button>
            <button className='slider_button' onClick={next} >Дальше</button>
        </div>
            

            <div>
            {currentIndex + 1} / {sliderLength}
            </div>
        </div>

        {/* <div><p>Вы выучили {} слов!</p></div> */}
      </>
    );
  }

    export default Slider;
