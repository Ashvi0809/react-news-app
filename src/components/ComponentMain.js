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
import Corona2 from './Corona2'
import Corona3 from './Corona3'
import World2 from './World2'
import World3 from './World3'
import Gujarat2 from './Gujarat2'
import Gujarat3 from './Gujarat3'
import Business2 from './Business2'
import Business3 from './Business3'
import Technology2 from './Technology2'
import Technology3 from './Technology3'
import Button from './Button'



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
          <Route path='/beauty' element={<Other id={"https://timenews.co.in/wp-json/wp/v2/posts?categories=14"}/>}  />
          <Route path='/business/tech' element={<Other id={"https://timenews.co.in/wp-json/wp/v2/posts?categories=285"}/>}  />
          <Route path='/food' element={<Other id={"https://timenews.co.in/wp-json/wp/v2/posts?categories=15"}/>}  />
          <Route path='/entertainment' element={<Other id={"https://timenews.co.in/wp-json/wp/v2/posts?categories=6"}/>}  />
          <Route path='/games' element={<Other id={"https://timenews.co.in/wp-json/wp/v2/posts?categories=907"}/>}  />
          <Route path='/page2' element={<Page2/>} /> 
          <Route path='/page3' element={<Page3/>} /> 
          <Route path='/corona2' element={<Corona2/>} /> 
          <Route path='/corona3' element={<Corona3/>} /> 
          <Route path='/world2' element={<World2/>} /> 
          <Route path='/world3' element={<World3/>} /> 
          <Route path='/gujarat2' element={<Gujarat2/>} /> 
          <Route path='/gujarat3' element={<Gujarat3/>} /> 
          <Route path='/business2' element={<Business2/>} /> 
          <Route path='/business3' element={<Business3/>} /> 
          <Route path='/technology2' element={<Technology2/>} /> 
          <Route path='/technology3' element={<Technology3/>} /> 
          <Route path='/button/:id' element={<Button/>} /> 
        </Routes>
     
        </BrowserRouter>
    </div>
  )
}

export default ComponentMain