import { useState } from 'react'
import Home from './pages/home/Home'
import { Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact/Contact'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}
export default App