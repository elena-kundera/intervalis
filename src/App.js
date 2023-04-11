import './App.css';
import React, { useState } from 'react';
import words from './words.json';
import Header from './components/header/header';
import Card from './components/cards/card';
import TableHeader from './components/table/table-header';
import Table from './components/table/table';
import TableAdd from './components/table/table-add';
import Slider from './components/cards/slider';




function App() {

  const [word, setWord] = useState(words[0]);
  const [index, setIndex] = useState(0);


  return (
    <div className="App">

      <Header/>

      <Slider key={word.id} changeIndex={(index) => {setIndex(index); setWord(words[index]);}}
        sliderLength={words.length}
        currentIndexValue={index}
      >

        <Card
          key={word.id}
          word={word.word}
          transcription={word.transcription}
          translation={word.translation}
        ></Card>

      </Slider>


      <TableHeader/>
      {
        words.map((word) =>
        <Table key={word.id} word={word.word} transcription={word.transcription} translation={word.translation}></Table>
        )}

        <TableAdd></TableAdd>
      
      
  
    </div>
  );
}

export default App;
