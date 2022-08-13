
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import {BrowserRouter as Router,Routes,Route,Navigate, Link} from 'react-router-dom'
import Index_main from './Components/Index_main';
import About_main from './Components/About_main';
import Roadmap_main from './Components/Roadmap_main';
import Collection_main from './Components/Collection_main';
import Mint_main from './Components/Mint_main';
import Benefits_main from './Components/Benefits_main';
import Privacy from './Components/Privacy/Privacy';
import Terms from './Components/Terms/Terms';
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
        <Route exact path="/" element={<Index_main/>}/>
          <Route exact path="/About_main" element={<About_main/>}/>
          <Route exact path="/Benefits_main" element={<Benefits_main/>}/>
          <Route exact path="/Collection_main" element={<Collection_main/>}/>
          <Route exact path="/Roadmap_main" element={<Roadmap_main/>}/>
          <Route exact path="/Mint_main" element={<Mint_main/>}/>
          <Route exact path="/Privacy" element={<Privacy/>}/>
          <Route exact path="/Terms" element={<Terms/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
