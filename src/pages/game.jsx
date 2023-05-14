import React, { useState, useEffect, useRef } from 'react';
import words from '../words.json';
import Card from '../components/game/cards/card';
import Slider from '../components/game/slider';

function Game () {

    const [word, setWord] = useState(words[0]);
    const [index, setIndex] = useState(0);

    const ref = useRef();
    useEffect(() => ref.current.focus(), []);

    return (
        <>
        
        <Slider key={word.id} changeIndex={(index) => {setIndex(index); setWord(words[index]);}}
          sliderLength={words.length}
          currentIndexValue={index}>

              <Card
                key={word.id}
                word={word.word}
                transcription={word.transcription}
                translation={word.translation}
                ref={ref} ></Card>
                
        </Slider>


        
        </>

    )
}

export default Game;