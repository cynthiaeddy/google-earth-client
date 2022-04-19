import React from 'react'
import './App.css'
import Home from './components/Home'
import Opener from './components/Opener'

import { Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Opener} />
      <Route path="/search" component={Home} />
    </BrowserRouter>
  )
}

export default App
