import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Page3 from './Page3'
import Home from './Home'
import Navbar from './Navbar'
import Page2 from './Page2'
import Corona from './Corona'
import World from './World'
import Gujarat from './Gujarat'
import Ahmedabad from './Ahmedabad'
import Technology from './Technology'
import Other from './Other'
import Business from './Business'



const ComponentMain = () => {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} /> 
          <Route path='/corona' element={<Corona/>}/>
          <Route path='/world' element={<World/>}/>
          <Route path='/gujarat' element={<Gujarat/>} /> 
          <Route path='/ahmedabad'element={<Ahmedabad/>} /> 
          <Route path='/business' element={<Business/>} /> 
          <Route path='/technology'element={<Technology/>} /> 
          <Route path='/other' element={<Other/>}  />
          <Route path='/page2' element={<Page2/>} /> 
          <Route path='/page3' element={<Page3/>} /> 
        </Routes>
     
        </BrowserRouter>
    </div>
  )
}

export default ComponentMain