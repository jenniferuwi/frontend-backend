import React from 'react'
import { Link, Routes,Route } from 'react-router-dom'
import Register from './Pages/Register';
import Login from './Pages/Login';
import Home from './Pages/Home';
import axios from 'axios';

function App() {

  return (
   
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path ='/login' element={<Login />}/>
    </Routes> 
    
   
  
  )
}

export default App