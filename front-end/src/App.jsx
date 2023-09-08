import React from 'react'
import Chat from './Components/Chat'
import Login from './Components/Login'
import Landing from './Components/Landing';
import 'tailwindcss/tailwind.css';
import './styles/tailwind.css'
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
        <Route path='' element={<Landing/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Chat' element={<Chat/>}/>

      </Routes>
    </>
  )
}

export default App
