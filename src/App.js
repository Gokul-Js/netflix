import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import "./App.scss"
import Home from "./Components/Home/Home"
import Header from "./Components/Header/Header";
import Tvshows from './Components/Pages/Tvshows';
import Movies from './Components/Layout/Movies';
import Recent from './Components/Pages/Recent';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tvshows" element={<Tvshows />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/recent" element={<Recent />} />
      </Routes>
    </Router>
  )
}

export default App