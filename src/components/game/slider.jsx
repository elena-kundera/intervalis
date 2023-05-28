import React, { useState } from "react";
import "./slider.scss";

function Slider({ children, sliderLength, currentIndexValue, ...props }) {
  // const ref = useRef();
  const [currentIndex, setCurrentIndex] = useState(currentIndexValue);

  const next = () => {
    // ref.current.focus();
    const newIndex = (currentIndex + 1) % sliderLength;
    setCurrentIndex(newIndex);
    props.changeIndex(newIndex);
  };
  const prev = () => {
    // ref.current.focus();
    const newIndex = (currentIndex - 1 + sliderLength) % sliderLength;
    setCurrentIndex(newIndex);
    props.changeIndex(newIndex);
  };

  // const [total, setTotal] = useState(0);
  // const handleChange = () => {
  //   const newTotal = (total + 1);
  //   setTotal(newTotal);
  // };

  return (
    <>
      <div className='slider-container'>
        {children}
        {/* не понимаю как сделать задание, если детей 
я передаю вот так; куда 
рефы и всё остальное
 прописывать?  */}

        <div className='slider_buttonsContainer'>
          <button className='slider_button' onClick={prev}>
            Назад
          </button>
          <button className='slider_button' onClick={next}>
            Дальше
          </button>
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
