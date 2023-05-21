import './App.css';
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

function App() {


  return (
    <Router>

<header className="header">

<div className="logo_container"><p className='logo'><Link to="/">INTERVALIS</Link></p></div>

<div className='adding_container'>
<div className="sendNewWord_container"> <Link to="/game"><button className='sendNewWord'>Начать игру</button></Link></div> 
<div className="sendNewWord_container"> <Link to="/table"><button className='sendNewWord'>Все слова</button></Link></div> 

</div>

</header>
      
<Routes>
          <Route path="/game" element={<Game />} />
          <Route path="/" element={<Home />} />
          <Route path="/table" element={<AllWords />} />
          <Route path="/comments" element={<Comments />} />
        </Routes>
    </Router>
  );
}

export default App;
