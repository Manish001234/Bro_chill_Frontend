import React from 'react'
import Home from '../Home'
import Navbar from '../Navbar'

import { Route, Routes } from 'react-router'
import Addreciepe from '../Addreciepe'
const Allrouts = () => {
  return (
    <div>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/add" element={<Addreciepe/>}/>
     </Routes>
    </div>
  )
}

export default Allrouts