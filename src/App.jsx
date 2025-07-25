import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GalaxyBackground from "./components/GalaxyBackground";
 
import AuthContainer from './components/AuthContainer'
function App() {
  

  return (
    <>
      <GalaxyBackground />
      <AuthContainer/>
    </>
  )
}

export default App
