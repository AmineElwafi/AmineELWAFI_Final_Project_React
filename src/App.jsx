import { useState } from 'react'
import Home from './pages/home/Home'
import { Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact/Contact'
import ProductPage from './pages/productPage/productPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product/:slug' element={<ProductPage/>}/>
      </Routes>
    </>
  )
}
export default App