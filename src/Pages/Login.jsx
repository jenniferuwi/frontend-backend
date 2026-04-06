import React, { useState } from 'react'
import axios from 'axios';

 function Login() {
 
  return (
    <>
    
<form action="">
  <div className='flex justify-center p-15  bg-gray-300 max-h-full'>
<div className=' h-full bg-indigo-400  w-110  gao-20 flex flex-col justify-center items-center rounded-2xl'>
  <h1 className='text-xl 3250 font-bold text-amber-100 p-3'><u>Login here</u></h1>
  
 Email: <input type="email" name="email" placeholder='Enter your email' className=' flex border-2 w-80 h-10 rounded-2xl p-6  font-bold'/><br /><br/>
  Password:<input type="password" name="password" placeholder='Enter your password'className=' flex border-2 w-80 h-10 rounded-2xl p-6  font-bold'/><br /><br/>
 
  <button className='bg-gray-400 text-2xl text-black border hover:bg-violet-500 hover:text-amber-300 h-10 w-80 rounded-2xl'>signup</button>
</div>
    </div>

    </form>
    
</>

  )
}
export default Login;