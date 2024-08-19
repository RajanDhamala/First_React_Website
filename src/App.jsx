import React from 'react'
import Navbar from './Componnents/Navbar'
import Home from './Componnents/Home.jsx'
import Footer from './Componnents/Footer.jsx'
import Openings from './Componnents/Openings.jsx'
import Puzzle from './Componnents/Puzzel.jsx'
import Tournaments from './Componnents/Tournaments.jsx'
import About from './Componnents/About.jsx'
import GameUI from './Componnents/GameUi.jsx'

import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <Router>
      <Navbar/>
      <div>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/openings' element={<Openings/>}></Route>
      <Route path='/puzzel' element={<Puzzle/>}></Route>
      <Route path='/tournaments' element={<Tournaments/>}></Route>
      <Route path='/games' element={<GameUI/>}></Route>
    </Routes>
      </div>
    </Router>
    <Footer/>
    </>
  )
}
export default App
