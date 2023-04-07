import './card.scss';
import React, { useState } from 'react';

export default function Card(props) {

    let [check, setcheck] = useState(false);
    const handleCheck = () => {
        setcheck(!check);
    }


    return (
        <>
        <button className="card__container">
            <div className="card__wordContainer"><h2 className='card__word'>{props.word}</h2></div>
            <div className="card__transcriptionContainer"><p className='card__transcription'>{props.transcription}</p></div>
            <button onClick={handleCheck} className={check ? "hide" : "card__checkButton"}>Показать</button>
            <div className={check ? "" : "hide"}><h2 className='translation'>{props.translation}</h2></div>
        </button>

        </>
    );


}


export function Slider(props) {


    const [currentCard, setCurrentCard] = useState(props.id) || 0;

    const prev = () =>
        setCurrentCard((currentCard) => (currentCard === 0 ? props.length -1 : currentCard - 1));

    const next = () => 
        setCurrentCard((currentCard) => (currentCard === props.length - 1 ? 0 : currentCard + 1));


    return (
        <div >
 
        <div className="cards__container">{props}</div>
        <div className="cards__buttonsContainer">
            <button onClick={prev}>Назад</button>
            <button onClick={next}>Вперед</button>
        </div>
        <div>{currentCard} / {props.length}</div>
        </div>
    )

}

