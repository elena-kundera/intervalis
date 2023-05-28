import "./card.scss";
import React, { useState, forwardRef } from "react";

const Card = forwardRef(function Card(
  props,
  ref,
  clickCounter,
  setclickCounter
) {
  let [check, setcheck] = useState(false);

  const handleCheck = () => {
    setcheck(!check);
    props.setclickCounter(props.clickCounter + 1);
  };

  return (
    <>
      <button className='card__container'>
        <div className='card__wordContainer'>
          <h2 className='card__word'>{props.word}</h2>
        </div>
        <div className='card__transcriptionContainer'>
          <p className='card__transcription'>{props.transcription}</p>
        </div>
        <button
          onClick={handleCheck}
          className={check ? "hide" : "card__checkButton"}
        >
          Показать
        </button>
        <div className={check ? "" : "hide"}>
          <h2 className='translation'>{props.translation}</h2>
        </div>
      </button>
    </>
  );
});

export default Card;
