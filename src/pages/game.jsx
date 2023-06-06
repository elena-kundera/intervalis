import React, { useState } from "react";
import { useContext } from "react";
import Card from "../components/game/cards/card";
import Slider from "../components/game/slider";
import { WordContext } from "../components/wordsContext/WordContext";
import {observer, inject} from "mobx-react";

function Game() {
  const { data } = useContext(WordContext);

  const [word, setWord] = useState(data[0]);
  const [index, setIndex] = useState(0);

  const [clickCounter, setclickCounter] = useState(0);

  return (
    <>
      <Slider
        key={word.id}
        changeIndex={(index) => {
          setIndex(index);
          setWord(data[index]);
        }}
        sliderLength={data.length}
        currentIndexValue={index}
      >
        <Card
          key={word.id}
          word={word.english}
          transcription={word.transcription}
          translation={word.russian}
          clickCounter={clickCounter}
          setclickCounter={setclickCounter}
        ></Card>
      </Slider>
      <h2>Вы посмотрели перевод {clickCounter} раз!</h2>
    </>
  );
}

export default Game;
