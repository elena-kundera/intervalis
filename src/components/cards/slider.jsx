import React, { useState } from 'react';

function Slider ({children, props}) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
      setCurrentIndex((currentIndex + 1) % props.length);
    };
    const prev = () => {
      setCurrentIndex((currentIndex - 1 + props.length) % props.length);
    }

    return (
<>
<div className='slider-container'>
<div key={props.id} className={
            props[currentIndex].id === props.id ? '' : 'slide'
          }>
{children}
</div>

        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>

        <div>{currentIndex + 1} / {props.length}</div>

</div>
</>
    );

}

export default Slider;