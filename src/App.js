import './App.css';
//import React, { useState } from 'react';
import words from './words.json';
import Header from './components/header/header';
import Card from './components/cards/card';
import TableHeader from './components/table/table-header';
import Table from './components/table/table';
import TableAdd from './components/table/table-add';
import Slider from './components/cards/slider';




function App() {

  // const [currentIndex, setCurrentIndex] = useState(0);

  // const next = () => {
  //   setCurrentIndex((currentIndex + 1) % words.length);
  // };
  // const prev = () => {
  //   setCurrentIndex((currentIndex - 1 + words.length) % words.length);
  // }


  return (
    <div className="App">

      <Header/>



      {/* <div className='slider-container'> */}

        {words.map((word) => (<Slider key={word.id}>

          <Card key={word.id} word={word.word} transcription={word.transcription} translation={word.translation}></Card>

        </Slider>
          // {words.map((word) => <div key={word.id} className={
          //   words[currentIndex].id === word.id ? '' : 'slide'
          // }>

          // <Card key={word.id} word={word.word} transcription={word.transcription} translation={word.translation}></Card>

          // </div>
        ))}

        {/* <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>

        <div>{currentIndex + 1} / {words.length}</div> */}

      {/* </div> */}
      
      

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
