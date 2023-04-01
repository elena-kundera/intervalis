import './App.css';
import words from './words.json';
import Header from './components/header/header';
import Card from './components/cards/card';


function App() {
  return (
    <div className="App">

      <Header/>
      
      {
        words.map((word) =>
        <Card key={word.id} word={word.word} transcription={word.transcription} translation={word.translation}></Card>
        )}
      

      
      
  
    </div>
  );
}

export default App;
