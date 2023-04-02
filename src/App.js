import './App.css';
import words from './words.json';
import Header from './components/header/header';
import Card from './components/cards/card';
import TableHeader from './components/table/table-header';
import Table from './components/table/table';


function App() {
  return (
    <div className="App">

      <Header/>
      
      {
        words.map((word) =>
        <Card key={word.id} word={word.word} transcription={word.transcription} translation={word.translation}></Card>
        )}
      <TableHeader/>
      {
        words.map((word) =>
        <Table key={word.id} word={word.word} transcription={word.transcription} translation={word.translation}></Table>
        )}
      
      
  
    </div>
  );
}

export default App;
