import { useState} from 'react'


import './App.css'
import Home from './Pages/Home/Home'
import SmoothScroll from './SmoothScroll'
import NavBar  from './Components/NavBar/NavBar'


function App() {

  return (
    <>
    <NavBar />
    <SmoothScroll>
    <Home/>
    
    </SmoothScroll>
    
    </>
  )
}

export default App
