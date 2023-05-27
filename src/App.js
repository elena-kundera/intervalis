import './App.css';
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './header.scss';
import Home from './pages/home';
import AllWords from './pages/allWords';
import Game from './pages/game';
import Comments from './pages/comments';
import { WordContext } from "./components/wordsContext/WordContext";

function App() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //Update the document title using the browser API
    fetch("http://itgirlschool.justmakeit.ru/api/words")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return<p>Error</p>
  }


  return (
    <Router>

<header className="header">
    <div className="logo_container"><p className='logo'><Link to="/">INTERVALIS</Link></p></div>
    <div className='adding_container'>
    <div className="sendNewWord_container"> <Link to="/game"><button className='sendNewWord'>Начать игру</button></Link></div> 
    <div className="sendNewWord_container"> <Link to="/table"><button className='sendNewWord'>Все слова</button></Link></div> 
    </div>
</header>
      
      <WordContext.Provider value={{data}}>
      <Routes>
          <Route path="/game" element={<Game />} />
          <Route path="/" element={<Home />} />
          <Route path="/table" element={<AllWords />} />
          <Route path="/comments" element={<Comments />} />
        </Routes>
        </WordContext.Provider>

    </Router>
      

  );
}

export default App;
