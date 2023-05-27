import React, { useState, useContext } from "react";
// import words from '../words.json';
// import Header from '../components/header/header';
import Card from "../components/game/cards/card";
import TableHeader from "../components/table/table-header";
import Table from "../components/table/table";
import TableAdd from "../components/table/table-add";
import Slider from "../components/game/slider";
import { WordContext } from "../components/wordsContext/WordContext";

function Home() {
  const { data } = useContext(WordContext);

  const [word, setWord] = useState(data[0]);
  const [index, setIndex] = useState(0);

  return (
    <>
      {/* <Header/> */}

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
          translation={word.english}
        ></Card>
      </Slider>

      <TableHeader />

      <table className='table'>
        {data.map((word) => (
          <Table
            key={word.id}
            word={word.english}
            transcription={word.transcription}
            translation={word.english}
          ></Table>
        ))}
      </table>

      <TableAdd></TableAdd>
    </>
  );
}

export default Home;
